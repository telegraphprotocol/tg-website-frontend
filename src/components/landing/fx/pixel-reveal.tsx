"use client";

import { CSSProperties, useEffect, useRef } from "react";
import { useInView } from "./use-in-view";

type Effect =
  | "pixel"
  | "scanline"
  | "glitch"
  | "mosaic"
  | "diagonal"
  | "code"
  | "halftone"
  | "chargrid"
  | "iris";

type Props = {
  effect?: Effect;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  threshold?: number;
  /** Delay (ms) before the effect starts after entering view */
  delay?: number;
};

/**
 * Renders a positioned div whose surface (children + background-image set via style) is
 * progressively revealed by an overlay canvas effect once it scrolls into view.
 */
export function PixelReveal({
  effect = "pixel",
  duration = 1400,
  className = "",
  style,
  children,
  threshold = 0.2,
  delay = 60,
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>(threshold);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const playedRef = useRef(false);

  useEffect(() => {
    if (!inView || playedRef.current) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      playedRef.current = true;
      return;
    }
    const host = ref.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;
    playedRef.current = true;

    const w = Math.max(1, Math.round(host.clientWidth));
    const h = Math.max(1, Math.round(host.clientHeight));
    canvas.width = w;
    canvas.height = h;
    canvas.style.opacity = "1";

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const start = performance.now() + delay;

    const fxState: Record<string, unknown> = {};

    const fx = makeEffect(effect, w, h);
    fx.init(ctx, w, h, fxState);

    const step = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start) / duration));
      fx.draw(ctx, w, h, t, fxState);
      if (t < 1) raf = requestAnimationFrame(step);
      else {
        canvas.style.transition = "opacity 600ms ease";
        canvas.style.opacity = "0";
        timer = setTimeout(() => {
          if (canvas) canvas.style.display = "none";
        }, 700);
      }
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      if (timer) clearTimeout(timer);
    };
  }, [inView, effect, duration, delay, ref]);

  const hasPositioning = /\b(absolute|fixed|sticky|relative)\b/.test(className);
  const positionClass = hasPositioning ? "" : "relative";
  return (
    <div ref={ref} className={`${positionClass} overflow-hidden ${className}`} style={style}>
      {children}
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[3] h-full w-full"
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
}

type FxImpl = {
  init: (ctx: CanvasRenderingContext2D, w: number, h: number, state: Record<string, unknown>) => void;
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number, t: number, state: Record<string, unknown>) => void;
};

function makeEffect(name: Effect, _w: number, _h: number): FxImpl {
  switch (name) {
    case "scanline":
      return scanlineFx();
    case "glitch":
      return glitchFx();
    case "mosaic":
      return mosaicFx();
    case "diagonal":
      return diagonalFx();
    case "code":
      return codeRainFx();
    case "halftone":
      return halftoneFx();
    case "chargrid":
      return charGridFx();
    case "iris":
      return irisFx();
    case "pixel":
    default:
      return pixelFx();
  }
}

/* ---------- Pixel dissolve ---------- */
function pixelFx(): FxImpl {
  return {
    init(ctx, w, h, state) {
      const cell = 6;
      const cols = Math.ceil(w / cell);
      const rows = Math.ceil(h / cell);
      const order: number[] = [];
      for (let i = 0; i < cols * rows; i++) order.push(i);
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
      state.cell = cell;
      state.cols = cols;
      state.rows = rows;
      state.order = order;
      state.lastIdx = 0;
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);
    },
    draw(ctx, _w, _h, t, state) {
      const order = state.order as number[];
      const cell = state.cell as number;
      const cols = state.cols as number;
      const cleared = Math.floor(order.length * t);
      const last = (state.lastIdx as number) || 0;
      for (let k = last; k < cleared; k++) {
        const idx = order[k];
        const x = (idx % cols) * cell;
        const y = ((idx / cols) | 0) * cell;
        ctx.clearRect(x, y, cell, cell);
      }
      state.lastIdx = cleared;
    },
  };
}

/* ---------- Scanline ---------- */
function scanlineFx(): FxImpl {
  return {
    init(ctx, w, h) {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);
    },
    draw(ctx, w, h, t) {
      ctx.clearRect(0, 0, w, h);
      const y = Math.floor(h * t);
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, y, w, h - y);
      const grad = ctx.createLinearGradient(0, y - 24, 0, y + 4);
      grad.addColorStop(0, "rgba(180,220,255,0)");
      grad.addColorStop(0.7, "rgba(220,240,255,0.18)");
      grad.addColorStop(1, "rgba(255,255,255,0.55)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, y - 24, w, 28);
    },
  };
}

/* ---------- Glitch ---------- */
function glitchFx(): FxImpl {
  return {
    init() {},
    draw(ctx, w, h, t) {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = `rgba(0,0,0,${1 - t})`;
      ctx.fillRect(0, 0, w, h);
      const slices = Math.floor(18 * (1 - t));
      for (let i = 0; i < slices; i++) {
        const sy = Math.floor(Math.random() * h);
        const sh = 2 + Math.floor(Math.random() * 18);
        const off = (Math.random() - 0.5) * 60 * (1 - t);
        ctx.fillStyle = `rgba(0,0,0,${0.7 * (1 - t)})`;
        ctx.fillRect(0, sy, w, sh);
        ctx.fillStyle = `rgba(255,40,40,${0.18 * (1 - t)})`;
        ctx.fillRect(off, sy, w, 1);
        ctx.fillStyle = `rgba(40,180,255,${0.18 * (1 - t)})`;
        ctx.fillRect(-off, sy + sh - 1, w, 1);
      }
    },
  };
}

/* ---------- Mosaic shrink ---------- */
function mosaicFx(): FxImpl {
  return {
    init() {},
    draw(ctx, w, h, t) {
      ctx.clearRect(0, 0, w, h);
      const maxTile = 80;
      const minTile = 4;
      const tile = Math.max(minTile, Math.floor(maxTile - (maxTile - minTile) * t));
      const alpha = 1 - t;
      for (let y = 0; y < h; y += tile) {
        for (let x = 0; x < w; x += tile) {
          const v = 8 + ((Math.random() * 30) | 0);
          ctx.fillStyle = `rgba(${v},${v},${v},${alpha})`;
          ctx.fillRect(x, y, tile, tile);
        }
      }
    },
  };
}

/* ---------- Diagonal sweep ---------- */
function diagonalFx(): FxImpl {
  return {
    init(ctx, w, h) {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);
    },
    draw(ctx, w, h, t) {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#000000";
      const k = (w + h) * t;
      ctx.beginPath();
      ctx.moveTo(w, 0);
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.lineTo(Math.max(0, k - h), h);
      ctx.lineTo(Math.min(w, k), 0);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = `rgba(255,255,255,${0.6 * (1 - t)})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(Math.min(w, k), 0);
      ctx.lineTo(Math.max(0, k - h), h);
      ctx.stroke();
    },
  };
}

/* ---------- Halftone (engraving / print plate) ---------- */
function halftoneFx(): FxImpl {
  // Bayer 8x8 ordered dither matrix (classic). Values 0..63 → threshold/64.
  const bayer = [
    [0, 32, 8, 40, 2, 34, 10, 42],
    [48, 16, 56, 24, 50, 18, 58, 26],
    [12, 44, 4, 36, 14, 46, 6, 38],
    [60, 28, 52, 20, 62, 30, 54, 22],
    [3, 35, 11, 43, 1, 33, 9, 41],
    [51, 19, 59, 27, 49, 17, 57, 25],
    [15, 47, 7, 39, 13, 45, 5, 37],
    [63, 31, 55, 23, 61, 29, 53, 21],
  ];
  return {
    init() {},
    draw(ctx, w, h, t) {
      ctx.clearRect(0, 0, w, h);
      // Cell shrinks from 14 → 4 across the animation; opacity fades out.
      const cell = Math.max(4, Math.round(14 - 10 * t));
      // dotR is the radius of the dot inside the cell. Falls with t.
      const fillRatio = 1 - t; // 1 at start → 0 at end
      ctx.fillStyle = "#000000";
      for (let y = 0; y < h; y += cell) {
        for (let x = 0; x < w; x += cell) {
          const bx = ((x / cell) | 0) % 8;
          const by = ((y / cell) | 0) % 8;
          const threshold = (bayer[by][bx] + 1) / 65; // 0..1
          if (threshold < fillRatio) {
            // draw a centered dot covering the cell proportionally
            const dotR = (cell / 2) * Math.min(1, fillRatio + 0.15);
            ctx.beginPath();
            ctx.arc(x + cell / 2, y + cell / 2, dotR, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    },
  };
}

/* ---------- Char grid (decompress) ---------- */
function charGridFx(): FxImpl {
  const glyphs = "0123456789ABCDEF";
  return {
    init(ctx, w, h, state) {
      const cell = 16;
      const cols = Math.ceil(w / cell);
      const rows = Math.ceil(h / cell);
      const total = cols * rows;
      // Each cell has a settle threshold in [0,1) and a one-shot final glyph
      const settle = new Float32Array(total);
      for (let i = 0; i < total; i++) settle[i] = Math.random();
      state.cell = cell;
      state.cols = cols;
      state.rows = rows;
      state.settle = settle;
      state.glyphCache = new Uint8Array(total);
    },
    draw(ctx, w, h, t, state) {
      const cell = state.cell as number;
      const cols = state.cols as number;
      const rows = state.rows as number;
      const settle = state.settle as Float32Array;
      const cache = state.glyphCache as Uint8Array;
      ctx.clearRect(0, 0, w, h);
      ctx.font = `${Math.floor(cell * 0.78)}px ui-monospace, Menlo, monospace`;
      ctx.textBaseline = "top";

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const s = settle[i];
          const x = c * cell;
          const y = r * cell;
          if (t > s) {
            // settled → cell is fully clear (reveals image behind)
            continue;
          }
          // Black cell + glyph
          ctx.fillStyle = "#000000";
          ctx.fillRect(x, y, cell, cell);
          // randomize glyph rapidly while unsettled
          const local = (t - Math.max(0, s - 0.18)) / 0.18; // proximity to settling
          const isLeading = local > 0;
          if (Math.random() < 0.45) cache[i] = (Math.random() * 16) | 0;
          ctx.fillStyle = isLeading ? "#dcdcdc" : "#5a5a5a";
          ctx.fillText(glyphs[cache[i]], x + cell * 0.18, y + cell * 0.12);
        }
      }
    },
  };
}

/* ---------- Iris (cinematic shutter open) ---------- */
function irisFx(): FxImpl {
  return {
    init() {},
    draw(ctx, w, h, t) {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const maxR = Math.hypot(w, h) / 2;
      // Inner clear radius grows with eased t
      const eased = 1 - Math.pow(1 - t, 2);
      const r = eased * maxR * 1.05;
      // Outer ring slight glow
      ctx.fillStyle = "#000000";
      // Use even-odd fill: full rect minus circle
      ctx.beginPath();
      ctx.rect(0, 0, w, h);
      ctx.arc(cx, cy, r, 0, Math.PI * 2, true);
      ctx.fill("evenodd");
      // Bright leading edge ring
      const ringAlpha = 0.55 * (1 - t);
      if (ringAlpha > 0.01 && r > 2) {
        ctx.strokeStyle = `rgba(255,255,255,${ringAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }
    },
  };
}

/* ---------- Matrix-style code rain ---------- */
function codeRainFx(): FxImpl {
  const chars = "01ABCDEF<>{};/$#%∑";
  return {
    init(ctx, w, h, state) {
      const fontSize = 14;
      const cols = Math.ceil(w / fontSize);
      const drops = new Float32Array(cols);
      for (let i = 0; i < cols; i++) drops[i] = Math.random() * h;
      state.fontSize = fontSize;
      state.cols = cols;
      state.drops = drops;
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);
    },
    draw(ctx, w, h, t, state) {
      const fontSize = state.fontSize as number;
      const drops = state.drops as Float32Array;
      // dim underlying frame, gradually let through
      ctx.fillStyle = `rgba(0,0,0,${0.18 + 0.5 * (1 - t)})`;
      ctx.fillRect(0, 0, w, h);

      ctx.font = `${fontSize}px ui-monospace, Menlo, monospace`;
      ctx.textBaseline = "top";
      const alpha = 1 - t;
      for (let i = 0; i < drops.length; i++) {
        const ch = chars[(Math.random() * chars.length) | 0];
        const x = i * fontSize;
        const y = drops[i];
        ctx.fillStyle = `rgba(180,255,200,${0.85 * alpha})`;
        ctx.fillText(ch, x, y);
        // bright leading char
        ctx.fillStyle = `rgba(255,255,255,${0.95 * alpha})`;
        ctx.fillText(chars[(Math.random() * chars.length) | 0], x, y - fontSize);
        drops[i] += fontSize * (0.5 + Math.random() * 1.2);
        if (drops[i] > h && Math.random() > 0.965) drops[i] = 0;
      }
    },
  };
}

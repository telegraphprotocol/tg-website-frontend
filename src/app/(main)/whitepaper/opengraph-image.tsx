import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Social card for /whitepaper (Open Graph and X). Rendered once at build time.
export const alt = "Telegraph whitepaper: Intelligence competes. So does the way it is measured.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [font, art, logo] = await Promise.all([
    readFile(join(process.cwd(), "src/app/(main)/whitepaper/RobotoMono-Regular.ttf")),
    readFile(join(process.cwd(), "public/telegraph-social-card.jpg"), "base64"),
    readFile(join(process.cwd(), "public/t-logo.png"), "base64"),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#000", color: "#e9e9e9", fontFamily: "Roboto Mono" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/jpeg;base64,${art}`}
          width={1128}
          height={630}
          style={{ position: "absolute", top: 0, left: 380 }}
          alt=""
        />
        <div style={{ position: "absolute", top: 0, left: 0, width: 900, height: 630, display: "flex", background: "linear-gradient(90deg, #000 55%, rgba(0,0,0,0))" }} />

        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: 700, height: "100%", padding: "64px 0 60px 72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`data:image/png;base64,${logo}`} width={30} height={30} alt="" />
            <span style={{ fontSize: 26 }}>Telegraph</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 18, letterSpacing: 6, color: "#8a8a8a" }}>WHITEPAPER · V2.0</span>
            <span style={{ marginTop: 24, fontSize: 56, lineHeight: 1.15, color: "#f2f2f2" }}>
              Intelligence competes. So does the way it is measured.
            </span>
          </div>

          <span style={{ fontSize: 20, color: "#8a8a8a" }}>telegraphprotocol.com/whitepaper</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Roboto Mono", data: font, weight: 400, style: "normal" }] },
  );
}

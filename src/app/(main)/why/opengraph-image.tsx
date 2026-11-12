import { ImageResponse } from "next/og";

export const alt = "When Intelligence Becomes Abundant, Quality Becomes Scarce";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const box = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 64,
  border: "1px solid #3a3a3a",
  background: "#0a0a0a",
  color: "#b5b5b5",
  fontSize: 24,
} as const;

const label = {
  display: "flex",
  fontSize: 22,
  letterSpacing: 4,
  textTransform: "uppercase",
  color: "#e9e9e9",
} as const;

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
      <div style={label}>{title}</div>
      {items.map((i) => (
        <div key={i} style={box}>
          {i}
        </div>
      ))}
    </div>
  );
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000",
          color: "#e9e9e9",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#6b6b6b" }}>
            TELEGRAPH PROTOCOL
          </div>
          <div style={{ display: "flex", fontSize: 54, lineHeight: 1.1 }}>
            When Intelligence Becomes Abundant, Quality Becomes Scarce
          </div>
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          <Column title="Intelligence competes" items={["Provider A", "Provider B"]} />
          <Column title="Measurement competes" items={["Evaluator X", "Evaluator Y"]} />
        </div>
      </div>
    ),
    size,
  );
}

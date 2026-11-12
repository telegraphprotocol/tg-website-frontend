import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Too much intelligence creates a new problem. When intelligence becomes abundant, quality becomes scarce.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const png = await readFile(join(process.cwd(), "public/why/causal-diagram.png"));
  const src = `data:image/png;base64,${png.toString("base64")}`;

  // The diagram is 16:9; fit it inside the 1.91:1 card so nothing is cropped.
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f6f6f4",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" height={630} style={{ height: 630 }} />
      </div>
    ),
    size,
  );
}

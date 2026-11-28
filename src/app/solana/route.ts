import { readFile } from "node:fs/promises"
import path from "node:path"

export const dynamic = "force-dynamic"

export async function GET() {
  const file = await readFile(path.join(process.cwd(), "src/content/solana/Telegraph_x_Solana.pdf"))
  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Telegraph_x_Solana.pdf"',
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  })
}

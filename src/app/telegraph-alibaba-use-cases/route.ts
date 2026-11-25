import { readFile } from "fs/promises"
import path from "path"
import { NextResponse } from "next/server"

export async function GET() {
  const filePath = path.join(process.cwd(), "src/content/alibaba-usecase/Telegraph-alibaba-use-cases.pdf")
  const file = await readFile(filePath)

  return new NextResponse(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Telegraph-alibaba-use-cases.pdf"',
    },
  })
}

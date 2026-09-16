import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { compileMDX } from "next-mdx-remote/rsc"

const CONTENT_DIR = path.join(process.cwd(), "src/content/updates")

export type PostFrontmatter = {
  title: string
  date: string
  excerpt: string
  cover?: string
  published?: boolean
}

export type PostMeta = PostFrontmatter & { slug: string }

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const files = fs.readdirSync(CONTENT_DIR).filter((file) => file.endsWith(".mdx"))

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "")
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8")
    const { data } = matter(raw)
    return { ...(data as PostFrontmatter), slug }
  })

  return posts
    .filter((post) => post.published !== false)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf-8")
  const { content, frontmatter } = await compileMDX<PostFrontmatter>({
    source: raw,
    options: { parseFrontmatter: true },
  })

  return { content, frontmatter }
}

import { notFound } from "next/navigation"
import { format } from "date-fns"
import { getPostBySlug } from "@/lib/updates-content"

export default async function UpdatePostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  return (
    <article className="mx-auto max-w-2xl px-4 py-16">
      <div className="text-sm text-muted-foreground">
        {format(new Date(post.frontmatter.date), "MMMM d, yyyy")}
      </div>
      <h1 className="text-3xl font-semibold mt-1">{post.frontmatter.title}</h1>
      <div className="mt-8 space-y-4 leading-relaxed [&_h2]:text-xl [&_h2]:font-medium [&_h2]:mt-8 [&_a]:underline [&_img]:rounded-lg">
        {post.content}
      </div>
    </article>
  )
}

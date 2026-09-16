import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { format } from "date-fns"
import { getAllPosts, type PostMeta } from "@/lib/updates-content"

function UpdateCard({ post, index }: { post: PostMeta; index: number }) {
  return (
    <Link
      href={`/updates/${post.slug}`}
      className="group relative grid grid-cols-1 border border-[var(--tg-line)] bg-[var(--tg-bg)] no-underline transition-colors duration-200 hover:border-[var(--tg-line-strong)] md:grid-cols-[minmax(0,38%)_1fr]"
    >
      <span className="tg-corner tg-corner-tl" aria-hidden />
      <span className="tg-corner tg-corner-tr" aria-hidden />
      <span className="tg-corner tg-corner-bl" aria-hidden />
      <span className="tg-corner tg-corner-br" aria-hidden />

      {post.cover && (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--tg-line-soft)] bg-[#0c0c0c] md:aspect-auto md:border-b-0 md:border-r">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(min-width: 768px) 38vw, 100vw"
            className="object-cover opacity-90 transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"
          />
        </div>
      )}

      <div className="flex flex-col p-6 md:p-8">
        <header className="mb-4 flex items-center gap-3">
          <span className="text-[11px] tracking-[0.22em] text-[var(--tg-fg-faint)]">
            UPDATE / {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-[var(--tg-line-soft)]" />
          <time
            dateTime={post.date}
            className="text-[10px] uppercase tracking-[0.18em] text-[var(--tg-fg-faint)]"
          >
            {format(new Date(post.date), "MMM d, yyyy")}
          </time>
        </header>

        <h2 className="m-0 mb-3 text-pretty text-[19px] font-medium leading-[1.35] tracking-[0.005em] text-[var(--tg-fg)] transition-colors duration-200 group-hover:text-white md:text-[21px]">
          {post.title}
        </h2>
        <p className="m-0 mb-6 text-pretty text-[13.5px] leading-[1.8] text-[var(--tg-fg-dim)]">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-[var(--tg-fg-dim)] transition-colors duration-200 group-hover:text-[var(--tg-fg)]">
          Read update
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </div>
      </div>
    </Link>
  )
}

export default function UpdatesIndexPage() {
  const posts = getAllPosts()

  return (
    <section className="px-6 py-20 sm:px-8 md:py-[110px]">
      <div className="mx-auto max-w-[880px]">
        <h1 className="m-0 mb-12 text-[clamp(22px,2.2vw,30px)] font-normal tracking-[0.005em] text-[var(--tg-fg)] md:mb-16">
          Updates from Telegraph
        </h1>

        <div className="grid grid-cols-1 gap-5 md:gap-6">
          {posts.map((post, index) => (
            <UpdateCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-[13.5px] text-[var(--tg-fg-dim)]">No updates yet.</p>
        )}
      </div>
    </section>
  )
}

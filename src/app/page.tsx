import Link from "next/link"

const posts = [
  {
    href: "/code-in-the-box",
    title: "Nobody Cares About the Code in the Box",
    blurb:
      "A look at AI, The Prestige, and why developer value is moving from writing every line toward defining intent, validating outcomes, and designing the trick.",
    meta: "2026 / AI / Architecture",
  },
  {
    href: "/winutils",
    title: "WinUtils: shell-powered CLI tools for Windows 95",
    blurb:
      "Looking back at a set of file utilities I built in 1996-1997 on top of SHFileOperation, plus the icons, help files, and shareware uploads that came with shipping software back then.",
    meta: "1996-1997 / Windows 95 / C++",
  },
]

export default function Home() {
  return (
    <main className="relative">
      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-20 sm:px-8 lg:px-12">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-title text-2xl text-paper">Latest writing</h2>
          <span className="text-xs uppercase tracking-[0.25em] text-paper/50">
            {posts.length} {posts.length === 1 ? "post" : "posts"}
          </span>
        </div>

        <ul className="grid gap-4">
          {posts.map((post) => (
            <li key={post.href}>
              <Link
                href={post.href}
                className="group block rounded-2xl border border-paper/10 bg-paper/4 p-6 transition hover:border-lime/40 hover:bg-paper/6"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-paper/50">
                  {post.meta}
                </p>
                <h3 className="mt-3 font-title text-2xl text-paper transition group-hover:text-lime sm:text-3xl">
                  {post.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-paper/75">
                  {post.blurb}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-paper/70 transition group-hover:text-lime">
                  Read post
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

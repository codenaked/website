import Image from "next/image"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-lime/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-paper/10 blur-3xl" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-16 text-center sm:px-8 lg:px-12">
        <p className="tracking-[0.35em] text-xs uppercase text-paper/60">Code Naked</p>

        <Image
          src="/codenaked-mascot.png"
          alt="Code Naked mascot"
          width={420}
          height={420}
          priority
          className="mx-auto mt-8 w-60 drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)] sm:w-[300px] lg:w-[360px]"
        />

        <h1 className="mt-8 font-title text-5xl leading-tight sm:text-6xl lg:text-7xl">
          Coming Soon
        </h1>
      </section>
    </main>
  )
}

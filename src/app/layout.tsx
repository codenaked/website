import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Code Naked",
  description:
    "Code Naked: practical writing, tools, and experiments for builders who value clean craft over noise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${geistSans.variable} ${geistMono.variable} relative flex min-h-screen flex-col overflow-x-hidden bg-ink text-paper antialiased`}
      >
        <div className="pointer-events-none fixed -left-32 top-10 -z-10 h-72 w-72 rounded-full bg-lime/20 blur-3xl" />
        <div className="pointer-events-none fixed bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-paper/10 blur-3xl" />
        <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/codenaked-mascot.png"
              alt="Code Naked mascot"
              width={48}
              height={48}
              priority
              className="h-10 w-10 drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)]"
            />
            <span className="font-title text-xl tracking-wide">Code Naked</span>
          </Link>
          <nav className="flex items-center gap-5 text-sm text-paper/70 sm:gap-6">
            <Link href="/" className="transition hover:text-paper">
              Writing
            </Link>
            <a
              href="https://github.com/codenaked"
              className="transition hover:text-lime"
            >
              GitHub
            </a>
          </nav>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="relative mx-auto w-full max-w-6xl px-6 pb-10 pt-16 text-sm text-paper/50 sm:px-8 lg:px-12">
          © {new Date().getFullYear()} Code Naked
        </footer>
      </body>
    </html>
  );
}

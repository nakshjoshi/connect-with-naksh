import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/site/Nav";
import SiteFooter from "@/components/site/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nakshatra Joshi — Software Engineer (Backend & AI)",
  description:
    "Nakshatra Joshi (NakshJoshi) — software engineer building production backends and LLM pipelines with TypeScript, Python, Fastify, Next.js, PostgreSQL, Redis, Docker and AWS.",
  keywords: [
    "Nakshatra Joshi",
    "NakshJoshi",
    "software engineer",
    "backend engineer",
    "TypeScript",
    "Python",
    "Fastify",
    "Next.js",
    "PostgreSQL",
    "RAG",
    "MCP",
    "AWS",
  ],
  openGraph: {
    title: "Nakshatra Joshi — Software Engineer (Backend & AI)",
    description:
      "Production backends and LLM pipelines: TypeScript, Python, Fastify, Next.js, PostgreSQL, Redis, Docker, AWS.",
    url: "https://nakshjoshi.in",
    siteName: "nakshjoshi.in",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-canvas">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <Analytics />
        <SpeedInsights />

        {/* Skip link — first tab stop on every page */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]
                     focus:bg-accent focus:px-4 focus:py-2 focus:font-jet focus:text-sm focus:text-canvas"
        >
          Skip to content
        </a>

        <Nav />

        <main id="main" className="pt-16">
          {children}
        </main>

        <SiteFooter />

      </body>
    </html>
  );
}

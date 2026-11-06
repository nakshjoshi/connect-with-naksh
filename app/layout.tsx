import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SocialBar from "@/components/Socials";
import Footer from "@/components/Footer";

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
    <html lang="en" className="bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Analytics/>
        <SpeedInsights/>

        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>

        {/* Fixed Social Bar - Hidden on mobile */}
        <div className="hidden lg:block">
          <SocialBar />
        </div>

        {/* Main Content Area - Responsive margin */}
        <div className="lg:ml-16 pt-16 lg:pt-20"> {/* responsive margins for mobile/desktop */}
          {children}
        </div>

        {/* Footer - Responsive margin */}
        <div className="lg:ml-16">
          <Footer />
        </div>
      </body>
    </html>
  );
}


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
  title: "Connect With NakshJoshi",
  description: "Nakshatra Joshi's Developer Portfolio",
  icons: {
    icon: '/logo.svg',
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

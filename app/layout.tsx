import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { PenTool } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lorenzo Okol | Portfolio",
  description:
    "Portfolio of Lorenzo Okol, an Information Technology student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-[#151b1f] text-white">
        <nav className="bg-[#1f262b] shadow-md">
          <div className="flex items-center justify-between px-8 md:px-16 py-6">
            <Link
              href="/"
              className="flex items-center gap-1 text-xl font-bold tracking-wide hover:text-[#92a7b5] transition-colors duration-300"
            >
              PORTFOLIO
              <PenTool
                size={20}
                className="-rotate-90 -ml-1 mt-1 scale-x-[-1]"
              />
            </Link>

            <div className="flex gap-10 text-sm font-semibold tracking-wide">
              <Link
                href="/projects"
                className="hover:text-[#92a7b5] transition-colors duration-300"
              >
                PROJECTS
              </Link>

              <Link
                href="/practicum"
                className="hover:text-[#92a7b5] transition-colors duration-300"
              >
                PRACTICUM
              </Link>

              <Link
                href="/contact"
                className="hover:text-[#92a7b5] transition-colors duration-300"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
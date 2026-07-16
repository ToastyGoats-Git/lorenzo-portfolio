"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import {
  PenTool,
  Menu,
  X,
  FolderGit2,
  Briefcase,
  Award,
  Mail,
} from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Lorenzo Okol | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Lorenzo Okol, an Information Technology student."
        />
      </head>

      <body className="min-h-screen flex flex-col font-sans bg-[#151b1f] text-white">
        <nav className="bg-[#1f262b] shadow-md relative">
          <div className="flex items-center justify-between px-6 sm:px-8 md:px-16 py-6">
            <Link
              href="/"
              className="flex items-center gap-1 text-xl font-bold tracking-wide hover:text-[#92a7b5] transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              PORTFOLIO
              <PenTool
                size={20}
                className="-rotate-90 -ml-1 mt-1 scale-x-[-1]"
              />
            </Link>

            <div className="hidden md:flex gap-10 text-sm font-semibold tracking-wide">
              <Link
                href="/projects"
                className="flex items-center gap-2 hover:text-[#92a7b5] transition-colors duration-300"
              >
                <FolderGit2 size={16} />
                PROJECTS
              </Link>

              <Link
                href="/practicum"
                className="flex items-center gap-2 hover:text-[#92a7b5] transition-colors duration-300"
              >
                <Briefcase size={16} />
                PRACTICUM
              </Link>

              <Link
                href="/credentials"
                className="flex items-center gap-2 hover:text-[#92a7b5] transition-colors duration-300"
              >
                <Award size={16} />
                CREDENTIALS
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 hover:text-[#92a7b5] transition-colors duration-300"
              >
                <Mail size={16} />
                CONTACT
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden flex flex-col items-center gap-6 pb-6 text-sm font-semibold tracking-wide bg-[#1f262b]">
              <Link
                href="/projects"
                className="flex items-center gap-2 hover:text-[#92a7b5] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                <FolderGit2 size={16} />
                PROJECTS
              </Link>

              <Link
                href="/practicum"
                className="flex items-center gap-2 hover:text-[#92a7b5] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                <Briefcase size={16} />
                PRACTICUM
              </Link>

              <Link
                href="/credentials"
                className="flex items-center gap-2 hover:text-[#92a7b5] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                <Award size={16} />
                CREDENTIALS
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 hover:text-[#92a7b5] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                <Mail size={16} />
                CONTACT
              </Link>
            </div>
          )}
        </nav>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
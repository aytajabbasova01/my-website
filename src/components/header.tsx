"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "about", href: "#about" },
  { name: "results", href: "#results" },
  { name: "connect", href: "#connect" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed z-50 w-full px-2">
      <div
        className={cn(
          "mx-auto mt-2 max-w-6xl rounded-2xl border px-6 transition-all duration-300 lg:px-12",
          scrolled
            ? "max-w-4xl border-white/10 bg-black/60 backdrop-blur-xl lg:px-5"
            : "border-transparent"
        )}
      >
        <div className="relative flex items-center justify-between py-3 lg:py-4">
          <Link href="/" className="text-lg font-[family-name:var(--font-unbounded)] tracking-tight">
            aytaj abbasova
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:block absolute inset-0 m-auto w-fit h-fit">
            <ul className="flex gap-8 text-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <Link
            href="https://www.linkedin.com/in/aytac-abbasova-552128180/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20"
          >
            <LinkedInIcon className="size-4" />
            linkedin
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 -m-2 p-2 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-white transition-all duration-200",
                  menuOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-white transition-all duration-200",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-white transition-all duration-200",
                  menuOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-zinc-300 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://www.linkedin.com/in/aytac-abbasova-552128180/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-lg transition-colors hover:bg-white/20"
            >
              <LinkedInIcon className="size-5" />
              linkedin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

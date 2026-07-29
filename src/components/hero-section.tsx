"use client";

import Image from "next/image";
import Link from "next/link";
import { TextEffect } from "@/components/motion/text-effect";
import { AnimatedGroup } from "@/components/motion/animated-group";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Radial gradient background effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 isolate opacity-65"
      >
        <div className="absolute left-0 top-0 h-[80rem] w-[35rem] -translate-y-[22rem] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="absolute left-0 top-0 h-[80rem] w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="absolute left-0 top-0 h-[80rem] w-60 -translate-y-[22rem] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <div className="relative pt-32 md:pt-44">
        <div className="mx-auto max-w-4xl px-6 text-center">
          {/* Top label */}
          <AnimatedGroup>
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-400">
              public policy researcher & economic analyst
            </span>
          </AnimatedGroup>

          {/* Main heading */}
          <TextEffect
            as="h1"
            delay={0.2}
            className="mx-auto mt-8 max-w-3xl text-balance text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
          >
            researching AI, spatial economics, and innovation policy. from Baku to Tokyo.
          </TextEffect>

          {/* Subheading */}
          <TextEffect
            as="p"
            delay={0.6}
            per="line"
            className="mx-auto mt-6 max-w-2xl text-balance text-lg text-zinc-400 md:text-xl"
          >
            master's student at university of tsukuba, japan. formerly a performance improvement consultant at EY and a strategy analyst at a national innovation center in azerbaijan.
          </TextEffect>

          {/* CTAs */}
          <AnimatedGroup
            variants={{
              container: {
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 1 },
                },
              },
              item: {
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", bounce: 0.3, duration: 1.5 },
                },
              },
            }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="https://www.linkedin.com/in/aytac-abbasova-552128180/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              connect on linkedin
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </AnimatedGroup>
        </div>

        {/* Hero photos */}
        <AnimatedGroup
          variants={{
            container: {
              hidden: {},
              visible: {
                transition: { delayChildren: 1.2, staggerChildren: 0.12 },
              },
            },
            item: {
              hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { type: "spring", bounce: 0.2, duration: 2 },
              },
            },
          }}
          className="mt-16 px-4 sm:px-6"
        >
          <div className="mx-auto flex max-w-4xl gap-3 sm:gap-4">
            {[
              { src: "/photo-1.jpg", alt: "Aytaj Abbasova in astronaut suit" },
              { src: "/photo-2.jpg", alt: "Aytaj Abbasova at Disney" },
              { src: "/photo-3.jpg", alt: "Aytaj Abbasova aquarium selfie" },
              { src: "/photo-4.jpg", alt: "Aytaj Abbasova in Susukino, Sapporo at night" },
              { src: "/photo-5.jpg", alt: "Aytaj Abbasova snowboarding" },
            ].map((photo) => (
              <div
                key={photo.src}
                className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/40"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={640}
                  height={800}
                  className="h-full w-full object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              </div>
            ))}
          </div>
        </AnimatedGroup>

        {/* Bottom fade */}
        <div className="pointer-events-none relative -mt-32 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const socials = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/aytaj-abbasova",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "email",
    href: "mailto:aytajabbasova@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908z" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function ConnectSection() {
  return (
    <section id="connect" className="py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm uppercase tracking-widest text-zinc-500"
        >
          connect
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-xl text-zinc-300 md:text-2xl"
        >
          i&apos;m always open to conversations about AI policy, economic research, or collaboration. reach out.
        </motion.p>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-400 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              {social.icon}
              {social.name}
            </Link>
          ))}
        </motion.div>

        {/* Sign-off */}
        <motion.p
          variants={fadeUp}
          className="mt-16 text-lg text-zinc-500"
        >
          cheers, aytaj
        </motion.p>
      </motion.div>

      {/* Footer */}
      <div className="mt-16 border-t border-white/5 pt-8 text-center text-sm text-zinc-600">
        &copy; 2026 aytaj abbasova
      </div>
    </section>
  );
}

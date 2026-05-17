"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const LINKEDIN_URL = "https://www.linkedin.com/in/aytaj-abbasova";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function VideoSection() {
  return (
    <section id="research" className="py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="mx-auto max-w-4xl px-6"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm uppercase tracking-widest text-zinc-500"
        >
          research
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-xl text-zinc-300 md:text-2xl"
        >
          i write and think about how AI and spatial dynamics reshape innovation ecosystems — and what that means for policy. follow along on{" "}
          <Link
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            linkedin
          </Link>
          .
        </motion.p>

        {/* Research focus cards */}
        <motion.div variants={fadeUp} className="mt-10">
          <Link
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-10 shadow-2xl shadow-black/40 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { label: "AI governance", desc: "policy frameworks for responsible AI deployment across economies" },
                { label: "spatial economics", desc: "how geography and technology interact to shape innovation clusters" },
                { label: "innovation policy", desc: "designing systems that translate research into economic growth" },
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <p className="font-medium text-white">{item.label}</p>
                  <p className="text-sm leading-relaxed text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-zinc-400 transition-colors group-hover:text-white">
              <span>view on linkedin</span>
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </Link>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-center text-zinc-500"
        >
          interested in AI policy, economic geography, or innovation ecosystems? let&apos;s talk.
        </motion.p>
      </motion.div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="mx-auto max-w-3xl px-6"
      >
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest text-zinc-500">
          what i do
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          i&apos;m a master&apos;s student at the{" "}
          <Link
            href="https://www.tsukuba.ac.jp/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
          >
            university of tsukuba
          </Link>
          , japan. my research sits at the intersection of AI governance, spatial economics, and innovation policy — how technology shapes where and how economies grow.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          before academia, i was a performance improvement consultant at{" "}
          <span className="text-white">EY</span>
          , working across organizational strategy and operational efficiency.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          before that, i was a strategy analyst at a national innovation center in azerbaijan — helping shape policy at the frontier of technology and economic development.
        </motion.p>
      </motion.div>
    </section>
  );
}

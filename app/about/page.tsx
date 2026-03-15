"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { fadeUp, stagger, fadeIn } from "@/lib/motion";
import Footer from "@/components/Footer";

const timeline = [
  {
    year: "2025",
    title: "Full Stack & ML",
    desc: "Building production e-commerce systems with Next.js + Fastify + Supabase. Actively learning machine learning with PyTorch.",
  },
  {
    year: "2024",
    title: "Quant Developer",
    desc: "Developed an algorithmic trading system using Backtrader, MACD & Bollinger Band strategies, with parallel optimization and live paper trading via Dhan SDK.",
  },
  {
    year: "2023",
    title: "Started Full Stack",
    desc: "Dived deep into React and Node.js ecosystem, building full-stack apps and learning TypeScript, databases, and deployment pipelines.",
  },
  {
    year: "2022",
    title: "First Lines of Code",
    desc: "Began the journey with Python and JavaScript. Built small scripts, automation tools, and fell in love with problem-solving through code.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-24 max-w-5xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-20">
            <p className="text-xs text-cyan-400 font-medium tracking-widest uppercase mb-4">
              About
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-800 text-white leading-tight mb-6">
              The person behind
              <br />
              <span className="text-gray-500">the keyboard.</span>
            </h1>
          </motion.div>

          {/* Main content */}
          <div className="grid md:grid-cols-[1fr_340px] gap-16 mb-24">
            {/* Bio */}
            <motion.div variants={fadeUp} className="space-y-5">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hey — I'm{" "}
                <span className="text-white font-medium">Vishal</span>, a full-stack developer
                with ~2 years of experience turning ideas into clean, fast web products. I
                work across the entire stack — from pixel-precise React interfaces to
                battle-tested Fastify backends.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My day usually involves building features, untangling database performance issues,
                or obsessing over animation curves. On the side, I've been building an algorithmic
                trading system with Python — a deep dive into quant finance, parallel computing,
                and statistical analysis.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Right now I'm actively pursuing machine learning as my next frontier, with an eye
                on using ML to enhance both web products and trading systems.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I'm not coding, I'm lifting weights, running, or exploring new tools on
                my Fedora Linux setup. I believe great software is equal parts craft and
                engineering — the details matter.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-cyan-400 text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-cyan-300 transition-colors"
                >
                  Get in touch <ArrowRight size={14} />
                </Link>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 border border-white/10 px-5 py-2.5 rounded-full hover:border-white/20 hover:text-white transition-colors"
                >
                  <Download size={14} /> Resume
                </a>
              </div>
            </motion.div>

            {/* Right side card */}
            <motion.div variants={fadeIn} className="space-y-4">
              {/* Quick facts */}
              <div className="bg-[#0c0c14] border border-white/6 rounded-xl p-6 space-y-4">
                <h3 className="text-xs font-medium text-gray-600 uppercase tracking-widest">
                  Quick facts
                </h3>
                {[
                  { label: "Based in", value: "India 🇮🇳" },
                  { label: "Experience", value: "~2 years" },
                  { label: "Focus", value: "Full Stack + ML" },
                  { label: "OS", value: "Fedora 43 Linux" },
                  { label: "Status", value: "Open to work ✓" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">{label}</span>
                    <span className="text-xs text-gray-300 font-medium">{value}</span>
                  </div>
                ))}
              </div>

              {/* Currently */}
              <div className="bg-[#0c0c14] border border-white/6 rounded-xl p-6">
                <h3 className="text-xs font-medium text-gray-600 uppercase tracking-widest mb-4">
                  Currently
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Building e-commerce platform",
                    "Learning PyTorch & ML",
                    "Refining algo trading system",
                    "Looking for full-stack roles",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span className="text-xs text-gray-400 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2
              variants={fadeUp}
              className="font-display text-2xl md:text-3xl font-700 text-white mb-10"
            >
              Journey
            </motion.h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[84px] top-0 bottom-0 w-px bg-white/6 hidden sm:block" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    variants={fadeUp}
                    custom={i}
                    className="sm:grid sm:grid-cols-[100px_1fr] gap-8 items-start"
                  >
                    <div className="sm:text-right mb-2 sm:mb-0">
                      <span className="text-xs font-medium text-cyan-400 bg-cyan-400/8 border border-cyan-400/15 px-2.5 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <div className="relative sm:pl-8">
                      {/* dot */}
                      <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full border-2 border-cyan-400/40 bg-[#050508] hidden sm:block" />
                      <h3 className="font-display text-base font-700 text-white mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}

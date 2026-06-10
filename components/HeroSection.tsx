"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { fadeUp, stagger } from "@/lib/motion";
import { useEffect, useState } from "react";

const TITLES = ["Data Scientist", "Data Analyst", "Full Stack Dev"];

function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseMs = 1800,
) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing",
  );

  useEffect(() => {
    const current = words[wordIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          typingSpeed,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("pausing"), pauseMs);
        return () => clearTimeout(t);
      }
    }

    if (phase === "pausing") {
      setPhase("deleting");
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          deletingSpeed,
        );
        return () => clearTimeout(t);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

export default function HeroSection() {
  const typedTitle = useTypewriter(TITLES);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-500/4 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-800 leading-[0.95] tracking-tight text-white mb-6"
          >
            {/* Typewriter line — fixed height so layout doesn't shift */}
            <span className="block min-h-[1.1em]">
              <span className="text-cyan-400 glow-text">{typedTitle}</span>
              {/* blinking cursor */}
              <span className="inline-block w-[3px] ml-1 align-middle bg-cyan-400 animate-[blink_1s_step-end_infinite] h-[0.85em] rounded-sm" />
            </span>
            <span className="text-gray-500">& Builder.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
          >
            I craft clean, performant web applications — from elegant React
            interfaces to battle-tested backend systems. Currently exploring the
            intersection of{" "}
            <span className="text-gray-200">full-stack development</span> and{" "}
            <span className="text-gray-200">algorithmic trading</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 bg-cyan-400 text-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition-colors duration-200"
            >
              View my work
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 border border-white/10 px-6 py-3 rounded-full hover:border-white/20 hover:text-white transition-colors duration-200"
            >
              Get in touch
            </Link>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp} className="flex items-center gap-1">
            <span className="text-xs text-gray-600 mr-3">Find me on</span>
            {[
              {
                icon: Github,
                href: "https://github.com/vishalkirtaniya",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/vishalkirtaniya",
                label: "LinkedIn",
              },
              {
                icon: Twitter,
                href: "https://x.com/Vishaladitya001",
                label: "Twitter",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/8 text-gray-500 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 right-6 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-widest text-gray-600 uppercase rotate-90 mb-2">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-10 bg-gradient-to-b from-cyan-400/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

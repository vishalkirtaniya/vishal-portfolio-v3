"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { fadeUp, stagger, fadeIn } from "@/lib/motion";
import Certifications from "@/components/Certificates";
import Footer from "@/components/Footer";

const timeline = [
  {
    year: "Now",
    title: "Building a Data Science Career",
    desc: "Applying Python, SQL and machine learning to real datasets, publishing projects as proof of work, and looking for a data scientist or analyst role where engineering rigor and analytical thinking both count.",
  },
  {
    year: "June 2026",
    title: "The Ultimate Job Ready Data Science Course",
    org: "Code with Harry",
    desc: "Comprehensive data science training covering Python, pandas, NumPy, data visualization, machine learning, and end-to-end project workflows.",
  },
  {
    year: "May 2026",
    title: "CS50's Introduction to Databases with SQL",
    org: "Harvard / edX",
    desc: "Rigorous introduction to database design, relational modeling, and SQL — covering queries, schemas, indexes, and transactions via Harvard's CS50 curriculum.",
  },
  {
    year: "April 2026",
    title: "CS50's Introduction to Programming with Python",
    org: "Harvard / edX",
    desc: "Harvard's CS50P — functions, file I/O, OOP, libraries, and unit testing through Python, grounded in CS fundamentals.",
  },
  {
    year: "2024",
    title: "First Tech Job — Totality Corp",
    desc: "Joined a tech startup in Gurgaon, India as a full-stack developer. Spent 1.5 years shipping real products, working in a fast-paced team, and growing from a self-taught coder into a professional engineer.",
  },
  {
    year: "2023",
    title: "Self-Taught Developer",
    desc: "Taught myself to code from scratch. Built projects, broke things, fixed them, and learned more from mistakes than any course could teach. Fell in love with the craft of building software.",
  },
  {
    year: "2022",
    title: "NEET Aspirant → Pivot to Code",
    desc: "Spent three years preparing for NEET, cracked it — but walking away from an MBBS seat was the best decision I ever made. Chose to follow curiosity over convention and turned to programming.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-24 max-w-5xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          {/* ── Header ── */}
          <motion.div variants={fadeUp} className="mb-20">
            <p className="text-xs text-cyan-400 font-medium tracking-widest uppercase mb-4">
              About
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-800 text-white leading-tight mb-6">
              The analyst behind
              <br />
              <span className="text-gray-500">the numbers.</span>
            </h1>
          </motion.div>

          {/* ── Bio + sidebar ── */}
          <div className="grid md:grid-cols-[1fr_340px] gap-16 mb-24">
            <motion.div variants={fadeUp} className="space-y-5">
                            <p className="text-gray-300 text-lg leading-relaxed">
                Hey — I'm <span className="text-white font-medium">Vishal</span>
                , a data scientist and analyst who turns messy data into clear
                decisions. I work in <span className="text-white">Python</span>{" "}
                and <span className="text-white">SQL</span>, and I care as much
                about the question being asked as the model answering it.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My recent work includes analysing 120K+ e-commerce transactions
                to find a retention gap hiding in the revenue numbers, building
                a Streamlit dashboard for stakeholders, and backtesting
                trading strategies with parallelised parameter search ranked by
                Sharpe ratio and drawdown.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Before pivoting to data, I spent about two years as a full-stack
                developer shipping production software. That means I write
                maintainable code, design sensible schemas, and can take an
                analysis from a notebook to something deployed and usable.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I'm now going deeper into machine learning — scikit-learn,
                PyTorch and model evaluation. Outside work I lift, run, and
                tinker with my Fedora Linux setup.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-cyan-400 text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-cyan-300 transition-colors"
                >
                  Get in touch <ArrowRight size={14} />
                </Link>
                <a
                  href="https://drive.google.com/file/d/1ull5g95PUof-yuD9jFgYI2--ECjOMrxw/view?usp=sharing"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 border border-white/10 px-5 py-2.5 rounded-full hover:border-white/20 hover:text-white transition-colors"
                >
                  <Download size={14} /> Resume
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-4">
              <div className="bg-[#0c0c14] border border-white/6 rounded-xl p-6 space-y-4">
                <h3 className="text-xs font-medium text-gray-600 uppercase tracking-widest">
                  Quick facts
                </h3>
                {[
                  { label: "Based in", value: "India 🇮🇳" },
                  { label: "Experience", value: "~2 years engineering" },
                  { label: "Focus", value: "Data Science + ML" },
                  { label: "OS", value: "Linux" },
                  { label: "Status", value: "Open to work ✓" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-xs text-gray-600">{label}</span>
                    <span className="text-xs text-gray-300 font-medium">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-[#0c0c14] border border-white/6 rounded-xl p-6">
                <h3 className="text-xs font-medium text-gray-600 uppercase tracking-widest mb-4">
                  Currently
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Deepening ML: scikit-learn & PyTorch",
                    "Adding new data projects to this site",
                    "Refining quantitative backtesting system",
                    "Looking for data scientist / analyst roles",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span className="text-xs text-gray-400 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* ── Certifications ── */}
          <Certifications />

          {/* ── Timeline ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-2xl md:text-3xl font-700 text-white mb-10"
            >
              Journey
            </motion.h2>
            <div className="relative">
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
                      <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full border-2 border-cyan-400/40 bg-[#050508] hidden sm:block" />
                      <h3 className="font-display text-base font-700 text-white mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
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

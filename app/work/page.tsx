"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { fadeUp, stagger, scaleIn } from "@/lib/motion";
import Footer from "@/components/Footer";

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 pb-24 max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-16 max-w-2xl">
            <p className="text-xs text-cyan-400 font-medium tracking-widest uppercase mb-4">
              Portfolio
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-800 text-white leading-tight mb-4">
              All Projects
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              A collection of things I've built — production apps, side experiments, and everything in between.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <motion.article
                key={project.slug}
                variants={scaleIn}
                custom={i}
                className="group bg-[#0c0c14] border border-white/6 rounded-2xl overflow-hidden hover:border-white/12 transition-all duration-300"
              >
                {/* Top accent */}
                <div
                  className="h-px opacity-50"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                  }}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(400px circle at 50% 0%, ${project.color}06, transparent)`,
                  }}
                />

                <div className="relative p-7 md:p-8">
                  {/* Year + role */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-medium text-gray-600 tracking-widest uppercase">
                      {project.year}
                    </span>
                    <span className="text-[10px] font-medium text-gray-600">
                      {project.role}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-gray-500 bg-white/4 border border-white/5 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-display text-xl md:text-2xl font-700 text-white mb-2 group-hover:text-cyan-50 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-3">{project.tagline}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                    >
                      Case study
                      <ArrowRight
                        size={12}
                        className="group-hover/link:translate-x-0.5 transition-transform"
                      />
                    </Link>
                    <div className="flex items-center gap-3">
                      {project.githubBackend && (
                        <a
                          href={project.githubBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-300 transition-colors"
                          aria-label="GitHub"
                        >
                          <Github size={15} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-300 transition-colors"
                          aria-label="Live"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}

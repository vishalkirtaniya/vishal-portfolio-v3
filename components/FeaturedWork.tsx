"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { fadeUp, stagger, scaleIn } from "@/lib/motion";

export default function FeaturedWork() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-24 md:py-32 max-w-6xl mx-auto px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Section header */}
        <motion.div variants={fadeUp} className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs text-cyan-400 font-medium tracking-widest uppercase mb-3">
              Selected Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-700 text-white">
              Things I've built
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors group"
          >
            All projects
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              variants={scaleIn}
              custom={i}
              className="group relative bg-[#0c0c14] border border-white/6 rounded-2xl overflow-hidden hover:border-white/12 transition-all duration-300"
            >
              {/* Color accent bar */}
              <div
                className="absolute top-0 inset-x-0 h-px opacity-60"
                style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(400px circle at 50% 0%, ${project.color}08, transparent)` }}
              />

              <div className="relative p-7 md:p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-gray-500 bg-white/4 border border-white/6 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl md:text-2xl font-700 text-white mb-2 group-hover:text-cyan-50 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{project.tagline}</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  >
                    Case study
                    <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
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
                        aria-label="Live site"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile "all projects" */}
        <motion.div variants={fadeUp} className="mt-8 md:hidden text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
          >
            View all projects <ArrowRight size={14} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

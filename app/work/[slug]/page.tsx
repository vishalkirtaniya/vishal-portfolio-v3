"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/data";
import { fadeUp, stagger, fadeIn } from "@/lib/motion";
import Footer from "@/components/Footer";
import { use } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function WorkDetailPage({ params }: Props) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <article className="pt-32 pb-16 max-w-4xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          {/* Back */}
          <motion.div variants={fadeUp} className="mb-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-200 transition-colors group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              Back to work
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div variants={fadeUp} className="mb-12">
            {/* Accent line */}
            <div
              className="w-12 h-px mb-6"
              style={{ background: project.color }}
            />

            <div className="flex flex-wrap items-center gap-3 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium text-gray-500 bg-white/4 border border-white/6 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-800 text-white leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Meta */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 bg-[#0c0c14] border border-white/6 rounded-xl mb-8">
              <div>
                <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1">Year</p>
                <p className="text-sm text-gray-200 font-medium">{project.year}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1">Role</p>
                <p className="text-sm text-gray-200 font-medium">{project.role}</p>
              </div>
              <div className="flex items-end gap-1 col-span-2 sm:col-span-1 w-[300px]">
                {project.githubFrontend && (
                  <a
                    href={project.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-white/8 px-3 py-1.5 rounded-full transition-colors"
                  >
                    <Github size={12} /> Front
                  </a>
                )}
                {project.githubBackend && (
                  <a
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-white/8 px-3 py-1.5 rounded-full transition-colors"
                  >
                    <Github size={12} /> Back
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 rounded-full transition-colors"
                  >
                    <ExternalLink size={12} /> Live site
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Placeholder image area */}
          <motion.div variants={fadeIn} className="mb-16">
            <div
              className="w-full h-64 md:h-80 rounded-2xl border border-white/6 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, #0c0c14 0%, ${project.color}10 100%)`,
              }}
            >
              <span className="font-display text-6xl md:text-8xl font-800 opacity-10 text-white">
                {project.title.charAt(0)}
              </span>
            </div>
          </motion.div>

          {/* Case study body */}
          <div className="space-y-12">
            <motion.div variants={fadeUp}>
              <h2 className="font-display text-xl md:text-2xl font-700 text-white mb-4 flex items-center gap-3">
                <span
                  className="w-6 h-px"
                  style={{ background: project.color }}
                />
                The Challenge
              </h2>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                {project.details.challenge}
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="font-display text-xl md:text-2xl font-700 text-white mb-4 flex items-center gap-3">
                <span
                  className="w-6 h-px"
                  style={{ background: project.color }}
                />
                The Solution
              </h2>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                {project.details.solution}
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="font-display text-xl md:text-2xl font-700 text-white mb-6 flex items-center gap-3">
                <span
                  className="w-6 h-px"
                  style={{ background: project.color }}
                />
                Key Outcomes
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.details.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-3 bg-[#0c0c14] border border-white/6 rounded-xl p-4"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: project.color }}
                    />
                    <span className="text-sm text-gray-300 leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* More projects */}
        {others.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24 pt-12 border-t border-white/5"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-8">
              More Projects
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="group bg-[#0c0c14] border border-white/6 rounded-xl p-6 hover:border-white/12 transition-all duration-300"
                >
                  <div
                    className="w-8 h-px mb-4 transition-all duration-300 group-hover:w-12"
                    style={{ background: p.color }}
                  />
                  <h3 className="font-display text-lg font-700 text-white mb-1 group-hover:text-cyan-50 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-500">{p.tagline}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </article>
      <Footer />
    </>
  );
}

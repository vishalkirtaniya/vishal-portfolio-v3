"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";

export default function SkillsSection() {
  return (
    <section className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-xs text-cyan-400 font-medium tracking-widest uppercase mb-3">
              Capabilities
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-700 text-white">
              Stack & Skills
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                variants={fadeUp}
                custom={i}
                className="bg-[#0c0c14] border border-white/6 rounded-xl p-6 hover:border-white/10 transition-colors duration-300"
              >
                <h3 className="text-xs font-medium text-cyan-400 tracking-widest uppercase mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-gray-400 bg-white/4 border border-white/6 px-2.5 py-1 rounded-md hover:text-gray-200 hover:border-white/10 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

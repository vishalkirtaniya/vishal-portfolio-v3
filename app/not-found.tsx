"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-display text-[8rem] md:text-[12rem] font-800 leading-none text-white/5 select-none">
          404
        </p>
        <h1 className="font-display text-2xl md:text-3xl font-700 text-white mt-4 mb-3">
          Page not found
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Looks like this page wandered off.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          Back home
        </Link>
      </motion.div>
    </div>
  );
}

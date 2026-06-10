"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, ExternalLink, ShieldCheck } from "lucide-react";
import { fadeUp, stagger } from "@/lib/motion";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Cert {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  credentialId: string;
  verifyUrl?: string;
  /** Path relative to /public, e.g. "/certs/cs50sql.png" */
  image: string;
  tags: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const certifications: Cert[] = [
  {
    id: "cert-4",
    title: "The Ultimate Job Ready Data Science Course",
    issuer: "Code with Harry",
    issued: "June 2026",
    credentialId: "CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-PGIYU2G3",
    verifyUrl:
      "https://drive.google.com/file/d/1E17Fkc5kDir2Ll4sXcuKYi-fbHY75rT4/view?usp=sharing",
    image: "/certs/data_science.png",
    tags: [
      "Python",
      "Pandas",
      "Numpy",
      "Jupyter",
      "Google Collab",
      "Model training",
      "deep learning",
    ],
  },
  {
    id: "cert-1",
    title: "CS50's Introduction to Databases with SQL",
    issuer: "Harvard University",
    issued: "May 2026",
    credentialId: "6d653a8a-604a-46bc-901b-79e9f9b6a523",
    verifyUrl:
      "https://cs50.harvard.edu/certificates/6d653a8a-604a-46bc-901b-79e9f9b6a523",
    image: "/certs/cs50sql.png",
    tags: ["SQL", "MySQL", "Databases"],
  },
  {
    id: "cert-2",
    title: "CS50's Introduction to Programming with Python",
    issuer: "Harvard University",
    issued: "Apr 2026",
    credentialId: "c7d850f7-b850-41ae-abac-0dbd1f9b7c5f",
    verifyUrl:
      "https://cs50.harvard.edu/certificates/c7d850f7-b850-41ae-abac-0dbd1f9b7c5f",
    image: "/certs/cs50p.png",
    tags: ["Python", "OOP"],
  },
  {
    id: "cert-3",
    title: "Legacy JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    issued: "Dec 2023",
    credentialId: "fcc1bf2e905-6203-4567-a690-e851e6ea1c46-ljaads",
    verifyUrl:
      "https://freecodecamp.org/certification/fcc1bf2e905-6203-4567-a690-e851e6ea1c46/javascript-algorithms-and-data-structures",
    image: "/certs/javascript_freecodecamp.png",
    tags: ["JavaScript", "Algorithms", "Data Structures"],
  },
];

// ─── Modal ────────────────────────────────────────────────────────────────────

export function CertModal({
  cert,
  onClose,
}: {
  cert: Cert;
  onClose: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      >
        <div
          className="pointer-events-auto w-full max-w-[680px] bg-[#0a0a12] border border-white/8 rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image area */}
          <div className="relative w-full aspect-[16/10.5] bg-[#06060e] border-b border-white/6 flex items-center justify-center overflow-hidden">
            {!imgError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                className="w-full h-full object-contain p-6"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex flex-col items-center gap-3 text-center px-8">
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/8 border border-cyan-400/15 flex items-center justify-center">
                  <Award size={24} className="text-cyan-400" />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Place your certificate image at
                  <br />
                  <code className="text-gray-500 font-mono">{cert.image}</code>
                </p>
              </div>
            )}

            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={15} />
            </button>
          </div>

          {/* Details */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h3 className="font-display text-base font-700 text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{cert.issuer}</p>
              </div>
              <span className="text-[10px] font-medium text-cyan-400 bg-cyan-400/8 border border-cyan-400/15 px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                {cert.issued}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-5 bg-white/[0.03] border border-white/6 rounded-lg px-3.5 py-2.5">
              <ShieldCheck
                size={13}
                className="text-cyan-400/60 flex-shrink-0"
              />
              <span className="text-[10px] text-gray-600 uppercase tracking-widest flex-shrink-0">
                ID
              </span>
              <span className="text-xs font-mono text-gray-300 truncate">
                {cert.credentialId}
              </span>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-gray-600 border border-white/6 bg-white/[0.03] px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0"
                >
                  <ExternalLink size={11} />
                  Verify
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

export function CertCard({
  cert,
  onClick,
}: {
  cert: Cert;
  onClick: () => void;
}) {
  return (
    <motion.button
      variants={fadeUp}
      onClick={onClick}
      className="group relative w-full text-left bg-[#0c0c14] border border-white/6 rounded-xl p-5
                 hover:border-cyan-400/20 hover:bg-[#0d0d17]
                 transition-all duration-200
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/20 transition-all duration-300 rounded-t-xl" />

      <div className="flex items-start justify-between mb-4">
        <div className="w-8 h-8 rounded-lg bg-cyan-400/8 border border-cyan-400/15 flex items-center justify-center">
          <Award size={15} className="text-cyan-400" />
        </div>
        <span className="text-[10px] text-gray-700 font-medium">
          {cert.issued}
        </span>
      </div>

      <h3 className="font-display text-sm font-700 text-white leading-snug mb-1 group-hover:text-cyan-50 transition-colors">
        {cert.title}
      </h3>
      <p className="text-[11px] text-gray-600 mb-4">{cert.issuer}</p>

      <div className="flex items-center gap-1.5 mb-4">
        <ShieldCheck size={10} className="text-cyan-400/40" />
        <span className="text-[10px] font-mono text-gray-700 truncate">
          {cert.credentialId}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {cert.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] text-gray-700 border border-white/5 px-1.5 py-0.5 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-[10px] text-gray-800 mt-4 group-hover:text-gray-600 transition-colors">
        View certificate →
      </p>
    </motion.button>
  );
}

// ─── Section (default export — use this anywhere) ─────────────────────────────

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<Cert | null>(null);

  return (
    <>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-24"
      >
        <motion.div variants={fadeUp} className="mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-700 text-white">
            Certifications
          </h2>
          <p className="text-sm text-gray-600 mt-1.5">
            Click any card to view the full certificate.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <CertCard
              key={cert.id}
              cert={cert}
              onClick={() => setActiveCert(cert)}
            />
          ))}
        </div>
      </motion.div>

      {activeCert && (
        <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, Github, Phone, CheckCircle } from "lucide-react";
import { fadeUp, stagger } from "@/lib/motion";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#0c0c14] border border-white/8 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-200";

  return (
    <>
      <section className="pt-32 pb-24 max-w-5xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-16 max-w-2xl">
            <p className="text-xs text-cyan-400 font-medium tracking-widest uppercase mb-4">
              Contact
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-800 text-white leading-tight mb-4">
              Let's build
              <br />
              <span className="text-gray-500">something together.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Open for full-time roles, freelance projects, and interesting
              collaborations. Drop me a message — I typically respond within 24
              hours.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-[1fr_300px] gap-12">
            {/* Form */}
            <motion.div variants={fadeUp}>
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center bg-[#0c0c14] border border-white/6 rounded-2xl"
                >
                  <CheckCircle className="text-cyan-400 mb-4" size={40} />
                  <h2 className="font-display text-2xl font-700 text-white mb-2">
                    Message sent!
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <>
                  {status === "error" && (
                    <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      Something went wrong. Please try again or email me
                      directly.
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-500 mb-2 tracking-wide">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-2 tracking-wide">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-2 tracking-wide">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, opportunity, or just say hi..."
                        rows={6}
                        className={`${inputClass} resize-none`}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center gap-2 bg-cyan-400 text-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send message <Send size={14} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Right side */}
            <motion.div variants={fadeUp} className="space-y-6">
              {/* Direct email */}
              <div className="bg-[#0c0c14] border border-white/6 rounded-xl p-5">
                <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">
                  Direct email
                </p>
                <a
                  href="mailto:vishalkirtaniyaofficial@gmail.com"
                  className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail size={14} />
                  vishalkirtaniyaofficial@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-[#0c0c14] border border-white/6 rounded-xl p-5">
                <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">
                  Phone
                </p>
                <a
                  href="tel:+918839054275"
                  className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone size={14} />
                  +91 88390 54275
                </a>
              </div>

              {/* Social links */}
              <div className="bg-[#0c0c14] border border-white/6 rounded-xl p-5">
                <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">
                  Find me on
                </p>
                <div className="space-y-3">
                  {[
                    {
                      icon: Github,
                      label: "GitHub",
                      handle: "vishalkirtaniya",
                      href: "https://github.com/vishalkirtaniya",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      handle: "vishalkirtaniya",
                      href: "https://linkedin.com/in/vishalkirtaniya",
                    },
                  ].map(({ icon: Icon, label, handle, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/4 border border-white/6 text-gray-500 group-hover:text-gray-200 group-hover:border-white/12 transition-all">
                        <Icon size={14} />
                      </span>
                      <div>
                        <p className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                          {label}
                        </p>
                        <p className="text-[10px] text-gray-600">{handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-cyan-400/5 border border-cyan-400/15 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-medium text-cyan-400">
                    Available for work
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Open to full-time roles, contract work, and interesting side
                  projects.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}

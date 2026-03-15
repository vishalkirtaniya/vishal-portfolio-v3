"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050508]/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display text-2xl font-700 tracking-tight">
            <span className="text-white">v</span>
            <span className="text-cyan-400">.</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-sm font-medium transition-colors duration-200 relative group ${
                      active ? "text-cyan-400" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-cyan-400 transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="text-xs font-medium px-4 py-2 rounded-full border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-200"
            >
              Hire me
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#0c0c14]/95 backdrop-blur-xl border-b border-white/5 md:hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block py-2 text-base font-medium transition-colors ${
                        active ? "text-cyan-400" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/contact"
                  className="inline-block mt-2 text-sm font-medium px-4 py-2 rounded-full border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-colors"
                >
                  Hire me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

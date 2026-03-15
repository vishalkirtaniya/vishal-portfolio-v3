"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-600">
          © {year} Vishal — designed & built with{" "}
          <span className="text-cyan-400/70">Next.js</span>
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/vishalkirtaniya", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/vishalkirtaniya/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:vishalkirtaniyaofficial@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-600 hover:text-gray-300 transition-colors"
            >
              <Icon size={15} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

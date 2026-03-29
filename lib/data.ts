export const projects = [
  {
    slug: "resume-autobot",
    title: "Resume Autobot",
    tagline: "AI-powered resume tailoring & PDF generation",
    description:
      "A Python CLI tool that parses job descriptions with spaCy NLP and auto-tailors a base resume, generating a polished PDF with ReportLab.",
    tags: ["Python", "spaCy", "ReportLab", "NLP", "uv"],
    year: "2026",
    role: "Developer",
    live: "https://resume.vishalkirtaniya.in/",
    githubFrontend: "https://github.com/vishalkirtaniya/custom-resume-frontend",
    githubBackend: "https://github.com/vishalkirtaniya/custom-resume-backend",
    featured: true,
    color: "#fb923c",
    details: {
      challenge:
        "Resolving Python version compatibility between spaCy, pydantic v1, and modern uv tooling on Fedora 43.",
      solution:
        "Pinned a compatible Python environment using uv's virtual environments and resolved pydantic v1/v2 conflicts by isolating the spaCy pipeline.",
      outcomes: [
        "Generates tailored PDF in < 2s",
        "CLI interface with argparse",
        "Markdown-to-PDF pipeline with table support",
        "Page-break logic for long resumes",
      ],
    },
  },
  {
    slug: "cipher-chat",
    title: "CipherChat",
    tagline: "End-to-end encrypted messaging app with zero server storage",
    description:
      "A full-stack secure messaging application built from scratch using React Native (Expo) and a minimal Node.js WebSocket server. Messages are encrypted on-device using X25519 + XSalsa20 and never stored or readable on the server, ensuring true end-to-end privacy.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "WebSocket",
      "SQLite",
      "Cryptography",
      "Docker",
    ],
    year: "2026",
    role: "App Developer",
    live: "https://drive.google.com/file/d/1Rjmf2XIdt95SjxWswdvXqZL8CxVUTxWP/view?usp=drive_link",
    githubFrontend: "https://github.com/vishalkirtaniya/cipher-chat-app",
    githubBackend: "https://github.com/vishalkirtaniya/cipher-chat-backend",
    featured: true,
    color: "#60a5fa",
    details: {
      challenge:
        "Designing a messaging system where the server never has access to plaintext messages required building encryption, key exchange, and message delivery logic entirely on the client while keeping real-time communication reliable.",
      solution:
        "Implemented end-to-end encryption using X25519 key exchange and XSalsa20-Poly1305 via tweetnacl. Built a lightweight WebSocket signaling server that only routes ciphertext and maintains in-memory state for connections and offline queues, with no database or message storage.",
      outcomes: [
        "True end-to-end encryption with zero plaintext exposure on server",
        "Real-time messaging with delivery receipts and typing indicators",
        "Offline message queuing with automatic delivery on reconnect",
        "Secure local storage using SQLite with encrypted payloads",
        "Minimal backend (~200 lines) with no database and reduced attack surface",
      ],
    },
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    tagline: "Full-stack shopping experience with real-time inventory",
    description:
      "A production-grade e-commerce platform built with Next.js, Fastify, and Supabase. Features real-time cart sync, Razorpay payment gateway, optimistic UI updates, and a robust admin dashboard.",
    tags: ["Next.js", "Fastify", "TypeScript", "Supabase", "Redis", "Razorpay"],
    year: "2025",
    role: "Full Stack Developer",
    live: "https://example.com",
    githubFrontend: "https://github.com/vishalkirtaniya/e-commerce-frontend",
    githubBackend: "https://github.com/vishalkirtaniya/e-commerce-backend",
    featured: true,
    color: "#22d3ee",
    details: {
      challenge:
        "Building a resilient checkout flow that handles partial failures gracefully—payment success but order creation failure—required careful state management and idempotent API design.",
      solution:
        "Implemented a saga-like pattern using Redis for distributed transaction state, with background jobs to reconcile inconsistencies. Used Promise.allSettled for parallel data fetching with per-section error states on the frontend.",
      outcomes: [
        "Sub-200ms API response times via Fastify",
        "99.9% payment success rate with retry logic",
        "Fully typed end-to-end with TypeScript",
        "RLS policies for row-level Supabase security",
      ],
    },
  },
  {
    slug: "algo-trading",
    title: "Algorithmic Trading System",
    tagline: "Backtest, optimize and paper-trade MACD strategies",
    description:
      "A Backtrader-based system for backtesting MACD and Bollinger Band strategies with parameter optimization via permutations, ranked by Sharpe ratio, max drawdown, win rate, and IRR.",
    tags: ["Python", "Backtrader", "Dhan SDK", "SQLAlchemy", "PostgreSQL"],
    year: "2025",
    role: "Quant Developer",
    live: "https://example.com",
    githubFrontend: "https://github.com/your-username/technical-analysis-frontend",
    githubBackend: "https://github.com/vishalkirtaniya/technical-analysis",
    featured: true,
    color: "#a78bfa",
    details: {
      challenge:
        "Parameter space for strategy optimization is exponentially large. Brute-force evaluation across all combinations was too slow for iterative development.",
      solution:
        "Parallelized parameter evaluation using ProcessPoolExecutor across CPU cores. Results are ranked by composite score and persisted for paper trading.",
      outcomes: [
        "10x faster optimization vs. single-threaded",
        "Live paper trading via Dhan SDK",
        "Exchange-accurate commission & tax models",
        "Automated best-parameter promotion to live",
      ],
    },
  },
  {
    slug: "portfolio-site",
    title: "Developer Portfolio",
    tagline: "Minimal, animated personal portfolio in Next.js",
    description:
      "Built with Next.js 15, Tailwind CSS v4, and Framer Motion. Smooth scroll animations, a custom hero section, and fully responsive dark-mode design.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    year: "2026",
    role: "Designer & Developer",
    live: "https://vishalkirtaniya.in",
    githubFrontend: "https://github.com/vishalkirtaniya/vishal-portfolio-v3",
    githubBackend: "",
    featured: false,
    color: "#34d399",
    details: {
      challenge:
        "Creating subtle, purposeful animations without sacrificing performance or accessibility.",
      solution:
        "Used Framer Motion's layout animations and viewport-triggered variants for scroll-based reveals with prefers-reduced-motion support.",
      outcomes: [
        "100 Lighthouse performance score",
        "Fully accessible with ARIA landmarks",
        "< 3s load on 3G with Next.js image optimization",
        "Zero layout shift (CLS = 0)",
      ],
    },
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    category: "Backend",
    items: ["Fastify", "Node.js", "Python", "REST APIs", "WebSockets", "Java"],
  },
  {
    category: "Database & Infra",
    items: ["Supabase", "PostgreSQL", "Redis", "SQLAlchemy", "MySQL"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub Actions", "Docker", "Linux", "uv"],
  },
  {
    category: "Quantitative",
    items: ["Backtrader", "Dhan SDK", "Numpy"],
  },
  {
    category: "Learning",
    items: ["Machine Learning", "PyTorch", "Scikit-learn", "Data Science"],
  },
];
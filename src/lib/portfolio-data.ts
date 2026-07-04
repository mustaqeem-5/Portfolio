import {
  Code2, Braces, FileCode2, Atom, Triangle, Wind, GitBranch, Database,
  Palette, Zap,
} from "lucide-react";

export const profile = {
  name: "Muhammad Mustaqeem",
  title: "Frontend / Full Stack Developer",
  tagline:
    "I build fast, accessible, and beautifully crafted web experiences with React, Next.js, and TypeScript.",
  email: "mustaqeem.dev@gmail.com",
  whatsapp: "+923000000000", // E.164, no +/spaces in wa.me link
  github: "https://github.com/mustaqeem",
  linkedin: "https://linkedin.com/in/mustaqeem",
  location: "Pakistan",
  cvUrl: "/cv.pdf",
};

export const typingWords = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
];

export const skills = [
  { name: "HTML5", level: 95, icon: FileCode2, color: "#E34F26" },
  { name: "CSS3", level: 92, icon: Palette, color: "#1572B6" },
  { name: "JavaScript", level: 90, icon: Braces, color: "#F7DF1E" },
  { name: "TypeScript", level: 85, icon: Code2, color: "#3178C6" },
  { name: "React", level: 92, icon: Atom, color: "#61DAFB" },
  { name: "Next.js", level: 88, icon: Triangle, color: "#ffffff" },
  { name: "Tailwind CSS", level: 94, icon: Wind, color: "#38BDF8" },
  { name: "Git & GitHub", level: 87, icon: GitBranch, color: "#F05032" },
  { name: "Node.js", level: 78, icon: Zap, color: "#84CC16" },
  { name: "Databases", level: 75, icon: Database, color: "#A78BFA" },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  category: "Frontend" | "Full Stack";
  live: string;
  github: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "nova-dashboard",
    title: "Nova Analytics Dashboard",
    description: "Realtime analytics dashboard with charts, filters, and dark mode.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    category: "Full Stack",
    live: "#",
    github: "#",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    slug: "shopwave",
    title: "ShopWave E‑Commerce",
    description: "Headless e‑commerce storefront with cart, auth, and Stripe checkout.",
    stack: ["Next.js", "Stripe", "Tailwind"],
    category: "Full Stack",
    live: "#",
    github: "#",
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
  },
  {
    slug: "lumen-landing",
    title: "Lumen SaaS Landing",
    description: "High‑conversion SaaS landing page with smooth Framer Motion sections.",
    stack: ["React", "Framer Motion", "Tailwind"],
    category: "Frontend",
    live: "#",
    github: "#",
    gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
  },
  {
    slug: "devnotes",
    title: "DevNotes",
    description: "Markdown note app with tags, search, and offline sync.",
    stack: ["React", "TypeScript", "IndexedDB"],
    category: "Frontend",
    live: "#",
    github: "#",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    slug: "taskforge",
    title: "TaskForge",
    description: "Collaborative kanban with realtime updates and role‑based access.",
    stack: ["Next.js", "Postgres", "WebSockets"],
    category: "Full Stack",
    live: "#",
    github: "#",
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
  {
    slug: "portfolio-v3",
    title: "Portfolio v3",
    description: "This very portfolio — minimal, animated, and SEO optimized.",
    stack: ["React", "Tailwind", "Framer Motion"],
    category: "Frontend",
    live: "#",
    github: "#",
    gradient: "from-violet-500 via-indigo-500 to-blue-500",
  },
];

export const timeline = [
  { year: "2026", title: "Freelance Full Stack Developer", desc: "Shipping production apps for clients worldwide." },
  { year: "2024", title: "Mastered Next.js & TypeScript", desc: "Deep dive into App Router, SSR, and type safety." },
  { year: "2023", title: "React & Tailwind", desc: "Built dozens of UIs and component libraries." },
  { year: "2022", title: "Started Web Development", desc: "HTML, CSS, JavaScript fundamentals." },
];

export const goals = [
  "Become a recognized IT professional",
  "Launch my own product studio",
  "Empower and support my family through my craft",
];

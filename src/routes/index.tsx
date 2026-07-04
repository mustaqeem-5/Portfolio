import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { profile, typingWords, projects, skills } from "@/lib/portfolio-data";
import { Typing } from "@/components/Typing";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Mustaqeem — Frontend / Full Stack Developer" },
      { name: "description", content: "I build fast, accessible, and modern web apps with React, Next.js, TypeScript and Tailwind CSS." },
      { property: "og:title", content: "Muhammad Mustaqeem — Frontend / Full Stack Developer" },
      { property: "og:description", content: "Portfolio, projects and contact for Muhammad Mustaqeem." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
<section className="mx-auto max-w-7xl px-6 pt-20">
  <div className="grid items-center gap-16 lg:grid-cols-2">

    {/* LEFT */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-muted-foreground">
        <Sparkles className="h-4 w-4 text-gradient" />
        Available for Freelance & Full-Time
      </span>

      <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-7xl">
        Hi, I'm
        <br />
        <span className="text-gradient">
          {profile.name}
        </span>
      </h1>

      <p className="mt-5 text-2xl font-medium text-muted-foreground">
        {profile.title}
      </p>

      <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
        {profile.tagline}
      </p>

      <p className="mt-8 font-mono text-lg">
        I work with{" "}
        <Typing words={typingWords} />
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-white font-semibold"
        >
          View Projects
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          to="/contact"
          className="rounded-xl border border-border px-6 py-3 font-semibold hover:bg-secondary"
        >
          Contact Me
        </Link>

        <a
          href={profile.cvUrl}
          download
          className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold hover:bg-secondary"
        >
          <Download className="h-4 w-4" />
          Download CV
        </a>

      </div>

      <div className="mt-10 flex gap-5">

        <a
          href="https://github.com/mustaqeem-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-7 w-7 hover:text-blue-500 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/muhammad-mustaqeem-a28272337/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-7 w-7 hover:text-blue-500 transition" />
        </a>

        <a
          href="mailto:muhammadmustaqeem.mps@gmail.com"
        >
          <Mail className="h-7 w-7 hover:text-blue-500 transition" />
        </a>

      </div>

    </motion.div>

    {/* RIGHT */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >

      <div className="relative">

        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-3xl opacity-30"></div>

        <div className="relative h-[420px] w-[420px] overflow-hidden rounded-full border-4 border-cyan-500 shadow-2xl">

          {/* Vite */}
          <img
            src="/profile.jpeg"
            alt="Muhammad Mustaqeem"
            className="h-full w-full object-cover"
          />

        </div>

      </div>

    </motion.div>

  </div>
</section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Featured work</p>
            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">Selected projects</h2>
          </div>
          <Link to="/projects" className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline-flex items-center gap-1">
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
        </div>
      </section>

      {/* SKILLS PREVIEW */}
      <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Toolbox</p>
          <h2 className="mt-1 text-2xl font-bold sm:text-3xl">Skills I use daily</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.slice(0, 6).map((s, i) => (
            <SkillCard key={s.name} {...s} index={i} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/skills" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            See all skills <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group glass flex flex-col overflow-hidden rounded-2xl transition hover:ring-glow"
    >
      <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 grid place-items-center text-2xl font-bold text-white/90 font-display drop-shadow">
          {project.title}
        </div>
        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-lg font-semibold">{project.title}</h3>
          <span className="shrink-0 rounded-full border border-border bg-secondary/40 px-2 py-0.5 text-xs text-muted-foreground">
            {project.category}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-2 pt-3">
          <a href={project.live} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-brand px-3 py-1.5 text-sm font-medium text-primary-foreground transition hover:opacity-90">
            <ExternalLink className="h-3.5 w-3.5" /> Live
          </a>
          <a href={project.github} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium transition hover:bg-secondary">
            <Github className="h-3.5 w-3.5" /> Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

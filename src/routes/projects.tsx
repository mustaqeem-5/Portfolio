import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, SectionHeader } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/portfolio-data";

const filters = ["All", "Frontend", "Full Stack"] as const;
type Filter = (typeof filters)[number];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Muhammad Mustaqeem" },
      { name: "description", content: "Selected frontend and full stack projects by Muhammad Mustaqeem." },
      { property: "og:title", content: "Projects — Muhammad Mustaqeem" },
      { property: "og:description", content: "Real apps, dashboards, and websites I've shipped." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<Filter>("All");
  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <PageShell>
      <SectionHeader
        eyebrow="Projects"
        title="Things I've built"
        subtitle="A selection of recent work. Each project links to a live demo and source code."
      />

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              active === f
                ? "border-transparent bg-gradient-brand text-primary-foreground"
                : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
      </div>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeader } from "@/components/PageShell";
import { SkillCard } from "@/components/SkillCard";
import { skills } from "@/lib/portfolio-data";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Muhammad Mustaqeem" },
      { name: "description", content: "Technologies and tools Muhammad Mustaqeem works with: React, Next.js, TypeScript, Tailwind CSS, Git, and more." },
      { property: "og:title", content: "Skills — Muhammad Mustaqeem" },
      { property: "og:description", content: "Frontend & full stack toolbox." },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Toolbox"
        title="Skills & technologies"
        subtitle="A snapshot of the tools I use to design, build, and ship modern web applications."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => <SkillCard key={s.name} {...s} index={i} />)}
      </div>
    </PageShell>
  );
}

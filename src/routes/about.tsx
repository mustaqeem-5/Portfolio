import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { PageShell, SectionHeader } from "@/components/PageShell";
import { SkillCard } from "@/components/SkillCard";
import { goals, profile, skills, timeline } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Muhammad Mustaqeem" },
      { name: "description", content: "Learn about Muhammad Mustaqeem — frontend & full stack developer, his goals, skills, and learning journey." },
      { property: "og:title", content: "About — Muhammad Mustaqeem" },
      { property: "og:description", content: "Bio, goals and journey of Muhammad Mustaqeem." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <SectionHeader eyebrow="About me" title="The story behind the code" />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <article className="glass rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Hello, I'm {profile.name}</h2>
          <p className="mt-3 text-muted-foreground">
            I'm a self‑driven frontend and full stack developer based in {profile.location}.
            I love crafting clean interfaces, robust components, and end‑to‑end web experiences
            that feel fast and effortless to use.
          </p>
          <p className="mt-3 text-muted-foreground">
            My focus is on the modern JavaScript ecosystem — React, Next.js, TypeScript and
            Tailwind CSS — and I'm constantly leveling up by shipping real projects, reading
            source code, and contributing to the developer community.
          </p>
          <p className="mt-3 text-muted-foreground">
            When I'm not coding, you'll find me studying product design, sketching UI ideas,
            and exploring how great software can make people's lives a little better.
          </p>
        </article>

        <aside className="glass rounded-2xl p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-gradient" />
            <h2 className="text-xl font-semibold">My goals</h2>
          </div>
          <ul className="space-y-3">
            {goals.map((g, i) => (
              <motion.li
                key={g}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-brand text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <span>{g}</span>
              </motion.li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Skills */}
      <section className="mt-16">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">What I work with</p>
          <h2 className="mt-1 text-2xl font-bold sm:text-3xl">Core skills</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.slice(0, 6).map((s, i) => <SkillCard key={s.name} {...s} index={i} />)}
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-16">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Journey</p>
          <h2 className="mt-1 text-2xl font-bold sm:text-3xl">My learning timeline</h2>
        </div>
        <ol className="relative ml-3 border-l border-border pl-6">
          {timeline.map((t, i) => (
            <motion.li
              key={t.year}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="mb-8 last:mb-0"
            >
              <span className="absolute -left-[9px] grid h-4 w-4 place-items-center rounded-full bg-gradient-brand ring-4 ring-background" />
              <div className="glass rounded-xl p-4">
                <div className="text-xs font-mono text-muted-foreground">{t.year}</div>
                <div className="mt-1 font-semibold">{t.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}

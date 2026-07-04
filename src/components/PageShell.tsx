import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-16"
    >
      {children}
    </motion.main>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && (
        <span className="inline-block rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </span>
      )}
      <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
        <span className="text-gradient">{title}</span>
      </h1>
      {subtitle && <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

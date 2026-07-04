import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function SkillCard({
  name, level, icon: Icon, color, index = 0,
}: { name: string; level: number; icon: LucideIcon; color: string; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="glass rounded-2xl p-5 transition hover:ring-glow"
    >
      <div className="flex items-center gap-3">
        <div
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
          style={{ background: `${color}1f`, color }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="truncate font-semibold">{name}</h3>
            <span className="text-xs text-muted-foreground">{level}%</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 + index * 0.04 }}
              className="h-full bg-gradient-brand"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

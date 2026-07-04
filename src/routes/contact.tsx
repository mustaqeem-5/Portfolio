import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { PageShell, SectionHeader } from "@/components/PageShell";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Muhammad Mustaqeem" },
      { name: "description", content: "Get in touch with Muhammad Mustaqeem via email, WhatsApp, GitHub, or LinkedIn." },
      { property: "og:title", content: "Contact — Muhammad Mustaqeem" },
      { property: "og:description", content: "Let's build something together." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const waNumber = "923458338904";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hi Mustaqeem, I'd like to work with you.")}`;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=muhammadmustaqeem.mps@gmail.com&su=${subject}&body=${body}`,
    "_blank"
    );
    setSent(true);
  }

  return (
    <PageShell>
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something"
        subtitle="Have a project, role, or idea in mind? Drop me a message — I usually reply within a day."
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass rounded-2xl p-6 sm:p-8"
        >
          <div className="grid gap-4">
            <Field label="Your name">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input"
                placeholder="Muhammad Mustaqeem"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input"
                placeholder="muhammadmustaqeem.mps@gmail.com"
              />
            </Field>
            <Field label="Message">
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input resize-none"
                placeholder="Tell me a bit about your project…"
              />
            </Field>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              <Send className="h-4 w-4" /> Send message
            </button>
            {sent && (
              <p className="text-sm text-muted-foreground">
                Opening your email client… if nothing happens, write me at{" "}
                <a className="underline" href="mailto:muhammadmustaqeem.mps@gmail.com">muhammadmustaqeem.mps@gmail.com</a>.
              </p>
            )}
          </div>
        </motion.form>

        <aside className="flex flex-col gap-4">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="glass group flex items-center gap-4 rounded-2xl p-5 transition hover:ring-glow"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-400">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <div className="font-semibold">WhatsApp</div>
              <div className="truncate text-sm text-muted-foreground">Chat with me directly</div>
            </div>
          </a>

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass group flex items-center gap-4 rounded-2xl p-5 transition hover:ring-glow"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-500/15 text-blue-400">
              <Mail className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <div className="font-semibold">Email</div>
              <div className="truncate text-sm text-muted-foreground">muhammadmustaqeem.mps@gmail.com</div>
            </div>
          </a>

          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://github.com/mustaqeem-5"
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-3 rounded-2xl p-4 transition hover:ring-glow"
            >
              <Github className="h-5 w-5" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-mustaqeem-a28272337/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-3 rounded-2xl p-4 transition hover:ring-glow"
            >
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">LinkedIn</span>
</a>
          </div>
        </aside>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          background: color-mix(in oklch, var(--secondary) 60%, transparent);
          border: 1px solid var(--color-border);
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus {
          border-color: color-mix(in oklch, var(--brand) 60%, transparent);
          box-shadow: 0 0 0 3px color-mix(in oklch, var(--brand) 25%, transparent);
        }
        .input::placeholder { color: var(--color-muted-foreground); }
      `}</style>
    </PageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

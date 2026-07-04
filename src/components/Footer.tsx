import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-6xl px-4 pb-10 sm:px-6">
      <div className="glass flex flex-col items-center justify-between gap-4 rounded-2xl p-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Muhammad Mustaqeem. Crafted with care.
        </p>

        <div className="flex items-center gap-2">
          {/* GitHub */}
          <a
            href="https://github.com/mustaqeem-5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-mustaqeem-a28272337/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          {/* Email */}
          <a
            href="mailto:muhammadmustaqeem@example.com"
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
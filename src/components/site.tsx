import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const LINKEDIN = "https://www.linkedin.com/in/miguel-angel-torres-montoya-economics/";
export const EMAIL = "m.torresmontoya22@gmail.com";
export const GITHUB = "https://github.com/Miguet2209";
const BASE = import.meta.env.BASE_URL;
export const asset = (path: string) => `${BASE}${path.replace(/^\//, "")}`;
export const CV_URL = asset("profile/cv.pdf");

function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "dark" | "light" | null) ?? "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("light", saved === "light");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    localStorage.setItem("theme", next);
  };
  const Icon = theme === "dark" ? Moon : Sun;
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/60 transition"
    >
      <Icon className="size-4" />
      <span className="hidden sm:inline">{theme === "dark" ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const internal = [
    { label: "About", to: "/" },
    { label: "Research", to: "/research" },
    { label: "Academic Experience", to: "/academic-experience" },
  ] as const;
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="group font-serif text-base tracking-tight whitespace-nowrap flex items-center gap-2">
          <span className="inline-block size-2 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)] group-hover:scale-110 transition-transform" />
          Miguel Á. <span className="text-primary">Torres Montoya</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {internal.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-3 py-2 rounded-md transition-colors ${
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
              >
                {l.label}
                <span
                  className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px origin-left bg-gradient-to-r from-primary via-gold to-transparent transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-primary/40 text-foreground text-xs font-mono uppercase tracking-wider hover:bg-primary/10 hover:border-primary transition-colors"
          >
            CV ↗
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8 px-6 mt-12">
      <div className="max-w-5xl mx-auto text-center text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} Miguel Ángel Torres Montoya · Universidad Icesi · Cali, Colombia.
      </div>
    </footer>
  );
}

export function SectionBlock({
  id, title, eyebrow, children, bordered = true,
}: { id?: string; title: string; eyebrow?: string; children: React.ReactNode; bordered?: boolean }) {
  return (
    <section id={id} className={`py-14 px-6 scroll-mt-20 ${bordered ? "border-t border-border/50" : ""}`}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center gap-3">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
            {eyebrow ?? `§ ${title}`}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-primary/50 via-border to-transparent" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl text-primary lowercase mb-7">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

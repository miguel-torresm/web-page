import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const LINKEDIN = "https://www.linkedin.com/in/miguel-angel-torres-montoya-economics/";
export const EMAIL = "miguet2209@gmail.com";
export const GITHUB = "https://github.com/Miguet2209";
export const CV_URL = "/cv.pdf";

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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <Link to="/" className="font-serif text-base tracking-tight whitespace-nowrap">
          Miguel Á. <span className="text-primary">Torres Montoya</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {internal.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`transition-colors ${active ? "text-foreground" : "hover:text-foreground"}`}
              >
                {l.label}
              </Link>
            );
          })}
          <a href={CV_URL} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            CV
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
  id, title, children, bordered = true,
}: { id?: string; title: string; children: React.ReactNode; bordered?: boolean }) {
  return (
    <section id={id} className={`py-12 px-6 scroll-mt-20 ${bordered ? "border-t border-border/50" : ""}`}>
      <div className="max-w-5xl mx-auto">
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

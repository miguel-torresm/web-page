import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const LINKEDIN = "https://www.linkedin.com/in/miguel-angel-torres-montoya-economics/";
export const EMAIL = "m.torresmontoya22@gmail.com";
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
    { label: "Experience", to: "/academic-experience" },
  ] as const;
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <Link to="/" className="font-serif text-base tracking-tight whitespace-nowrap">
          Miguel Á. <span className="text-primary">Torres Montoya</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {internal.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-2 transition-colors ${
                  active
                    ? "text-foreground underline underline-offset-8 decoration-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
          >
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
      <div className="max-w-3xl mx-auto text-center text-xs text-muted-foreground ">
        © {new Date().getFullYear()} Miguel Ángel Torres Montoya · Universidad Icesi · Cali, Colombia.
      </div>
    </footer>
  );
}

export function SectionBlock({
  id, title, children, bordered = true,
}: { id?: string; title: string; eyebrow?: string; children: React.ReactNode; bordered?: boolean }) {
  return (
    <section id={id} className={`py-10 px-6 scroll-mt-20 ${bordered ? "border-t border-border/50" : ""}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl text-foreground mb-5 capitalize">{title}</h2>
        {children}
      </div>
    </section>
  );
}

type EntryLink = { href: string; label: string };

/** One plain line of a CV-style list: title, optional subtitle/detail, date on the right. */
export function Entry({
  title, subtitle, detail, term, links,
}: { title: string; subtitle?: string; detail?: string; term?: string; links?: EntryLink[] }) {
  return (
    <li className="py-3 grid sm:grid-cols-[1fr_auto] gap-1 sm:gap-8">
      <div>
        <div className="text-foreground">{title}</div>
        {subtitle && <div className="text-sm text-muted-foreground">{subtitle}</div>}
        {detail && <p className="text-sm text-foreground/80 mt-1 leading-relaxed">{detail}</p>}
        {links && links.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-x-4 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-primary hover:underline">{l.label}</a>
            ))}
          </div>
        )}
      </div>
      {term && <div className="text-sm text-muted-foreground sm:text-right whitespace-nowrap">{term}</div>}
    </li>
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

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import portrait from "@/assets/miguel-portrait.png";
import {
  Mail, Github, Linkedin, FileText, Sun, Moon, ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Miguel Ángel Torres Montoya — Economics" },
      { name: "description", content: "Undergraduate researcher in economics at Universidad Icesi (CIENFI). Urban and crime economics, applied econometrics, spatial analysis and machine learning." },
      { property: "og:title", content: "Miguel Ángel Torres Montoya — Economics" },
      { property: "og:description", content: "Undergraduate researcher in economics. Urban and crime economics, applied econometrics, spatial analysis." },
    ],
  }),
  component: Landing,
});

const LINKEDIN = "https://www.linkedin.com/in/miguel-angel-torres-montoya-economics/";
const EMAIL = "miguet2209@gmail.com";
const GITHUB = "https://github.com/Miguet2209";
const CV_URL = "/cv.pdf";

function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <About />
        <News />
        <Research />
        <Teaching />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

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

function Nav() {
  const links = [
    ["About", "#about"],
    ["News", "#news"],
    ["Research", "#research"],
    ["Teaching", "#teaching"],
    ["CV", CV_URL],
  ] as const;
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#about" className="font-serif text-base tracking-tight">
          Miguel Á. <span className="text-primary">Torres Montoya</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="hover:text-foreground transition-colors" target={h.startsWith("/") ? "_blank" : undefined} rel={h.startsWith("/") ? "noreferrer" : undefined}>
              {l}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="pt-16 pb-14 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-2">
          Miguel Ángel <span className="text-primary">Torres Montoya</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          <a href="https://www.icesi.edu.co/departamentos/economia/" target="_blank" rel="noreferrer" className="text-primary hover:underline">Department of Economics</a>,{" "}
          <a href="https://www.icesi.edu.co" target="_blank" rel="noreferrer" className="text-primary hover:underline">Universidad Icesi</a>.
        </p>

        <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <div className="space-y-5 text-[1.02rem] leading-[1.75] text-foreground/85">
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
              <a href={`mailto:${EMAIL}`} aria-label="Email" className="hover:text-primary transition"><Mail className="size-5" /></a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition"><Linkedin className="size-5" /></a>
              <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary transition"><Github className="size-5" /></a>
              <a href={CV_URL} target="_blank" rel="noreferrer" aria-label="CV" className="hover:text-primary transition inline-flex items-center gap-1.5 text-sm">
                <FileText className="size-5" /> <span className="underline-offset-4 hover:underline">CV</span>
              </a>
            </div>

            <p>
              I am an undergraduate Research Assistant at the{" "}
              <a href="https://www.icesi.edu.co/centros-academicos/cienfi" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                Center for Research in Economics and Finance (CIENFI)
              </a>{" "}
              and a senior economics student at Universidad Icesi, working under the supervision
              of Eduard F. Martínez-González. My research lies at the intersection of urban
              economics, the economics of crime, and applied econometrics, with an emphasis on
              spatial methods and the use of satellite imagery and high-frequency administrative
              data to study Latin American cities.
            </p>
            <p>
              My current work develops machine-learning and remote-sensing pipelines to
              disaggregate economic activity at fine spatial resolutions, predict urbanization
              dynamics, and document inequities in the Colombian criminal justice system.
              I have collaborated with the Secretaría Distrital de Desarrollo Económico de
              Bogotá and the Alcaldía de Cali, producing evidence intended for both academic
              audiences and public-policy decision making.
            </p>
            <p>
              I am interested in pursuing graduate studies in economics. You can find a recent
              copy of my CV{" "}
              <a href={CV_URL} target="_blank" rel="noreferrer" className="text-primary hover:underline">here</a>.
            </p>
          </div>

          <aside className="md:w-64 mx-auto md:mx-0">
            <div className="rounded-full overflow-hidden ring-1 ring-border w-44 h-44 md:w-56 md:h-56 mx-auto">
              <img src={portrait} alt="Miguel Ángel Torres Montoya" className="w-full h-full object-cover object-center" />
            </div>
            <div className="mt-5 font-mono text-xs leading-relaxed text-muted-foreground whitespace-pre-line text-center md:text-left">
              {`B.A. in Economics (in progress)
Department of Economics
Universidad Icesi
Cl. 18 #122-135, Pance
Cali, Colombia`}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function News() {
  const items = [
    {
      date: "2025",
      body: (
        <>
          Our work with CIENFI and the <em>Secretaría de Desarrollo Económico de Bogotá</em>{" "}
          on the spatial disaggregation of Bogotá's GDP using nighttime lights (Suomi-NPP, NOAA-20)
          and TransMilenio mobility data was featured in <em>El Tiempo</em>.
        </>
      ),
    },
    {
      date: "2025",
      body: (
        <>
          Awarded <strong>third place</strong> in the Undergraduate Presentation Competition on the
          Economics of Crime, Universidad Icesi.
        </>
      ),
    },
    {
      date: "2025",
      body: (
        <>
          Started as Teaching Monitor for <em>Introduction to Business Analytics</em> at Datacienfi,
          curating an open data repository for undergraduate coursework.
        </>
      ),
    },
    {
      date: "2024",
      body: (
        <>
          Awarded <strong>second place</strong> in the <em>Who Wants to Be a Millionaire? — Economics
          Edition</em>, Universidad Icesi.
        </>
      ),
    },
    {
      date: "2023",
      body: (
        <>
          Awarded <strong>first place</strong> in the Undergraduate Economic Debate Competition,
          Universidad Icesi.
        </>
      ),
    },
  ];
  return (
    <SectionBlock id="news" title="news">
      <ul className="divide-y divide-border/70">
        {items.map((it, i) => (
          <li key={i} className="py-4 grid grid-cols-[7rem_1fr] md:grid-cols-[9rem_1fr] gap-4 md:gap-8 items-baseline">
            <span className="font-mono text-xs md:text-sm text-muted-foreground">{it.date}</span>
            <p className="text-foreground/90 leading-relaxed">{it.body}</p>
          </li>
        ))}
      </ul>
    </SectionBlock>
  );
}

function Research() {
  const interests = [
    "Urban Economics",
    "Economics of Crime",
    "Applied Econometrics",
    "Spatial Econometrics",
    "Development Economics",
    "Machine Learning for Economic Measurement",
    "Remote Sensing",
  ];
  const projects = [
    {
      title: "Spatial Disaggregation of GDP and Informality in Bogotá",
      authors: "with E. F. Martínez-González (CIENFI) · in progress.",
      body: "Spatially disaggregates Bogotá's GDP using nighttime lights, DANE 2018 census data, and TransMilenio mobility data, and maps informality at fine resolution via XGBoost and neural-network classifiers.",
    },
    {
      title: "Gender Disparities in the Colombian Criminal Justice System",
      authors: "Undergraduate thesis · supervised by E. F. Martínez-González and Daniel Mejía-Londoño.",
      body: "Examines gender differences in criminal sentencing within Colombia's accusatory system, exploiting a natural experiment to identify disparities net of case characteristics and defendant histories.",
    },
    {
      title: "Strategic Default in Credit Unions",
      authors: "with E. F. Martínez-González · in progress.",
      body: "Econometric analysis of strategic default behavior in Colombian credit unions, examining borrower incentives when multiple lending institutions are simultaneously available.",
    },
    {
      title: "Sentencing Process Analysis in the Colombian Accusatory System",
      authors: "with E. F. Martínez-González and Daniel Mejía-Londoño · in progress.",
      body: "Examines the full criminal-justice pipeline from criminal notice to final ruling, identifying procedural bottlenecks and sentencing disparities along the process.",
    },
    {
      title: "Construction of Economic Centres in Cali",
      authors: "with Cámara de Comercio de Cali and Invest Pacific · in progress.",
      body: "Delineates Cali's economic subcenters by sector using georeferenced firm-level data and a spatial activity index.",
    },
    {
      title: "Urbanization Prediction Model for Colombia, 2013–2025",
      authors: "CIENFI · in progress.",
      body: "Integrates Landsat 8 spectral indices (NDBI, NDVI, NDWI) with DANE 2018 census blocks and benchmarks k-NN and XGBoost classifiers to predict urban extent across Colombia.",
    },
  ];
  return (
    <SectionBlock id="research" title="research">
      <div className="mb-10">
        <h3 className="font-serif text-lg mb-3">Interests</h3>
        <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-[0.95rem] text-muted-foreground">
          {interests.map((t, i) => (
            <span key={t}>
              <span className="text-foreground/85">{t}</span>
              {i < interests.length - 1 && <span className="text-border mx-1.5">·</span>}
            </span>
          ))}
        </div>
      </div>

      <h3 className="font-serif text-lg mb-4">Working papers and projects in progress</h3>
      <ol className="space-y-7 list-decimal list-outside pl-5 marker:text-muted-foreground marker:font-mono marker:text-sm">
        {projects.map((p) => (
          <li key={p.title} className="pl-1">
            <div className="font-serif text-[1.1rem] leading-snug text-foreground">{p.title}</div>
            <div className="text-sm text-muted-foreground italic mb-2">{p.authors}</div>
            <p className="text-foreground/85 leading-relaxed">{p.body}</p>
          </li>
        ))}
      </ol>
    </SectionBlock>
  );
}

function Teaching() {
  const courses = [
    {
      role: "Teaching Monitor",
      course: "Introduction to Business Analytics",
      org: "Datacienfi · Universidad Icesi",
      term: "2025 — present",
    },
    {
      role: "Research Assistant",
      course: "Urban and Crime Economics",
      org: "CIENFI · Universidad Icesi",
      term: "2025 — present",
    },
    {
      role: "Research Collaborator",
      course: "Spatial GDP estimation project",
      org: "Secretaría Distrital de Desarrollo Económico de Bogotá",
      term: "2025",
    },
    {
      role: "Research Collaborator",
      course: "Property registry revaluation analysis",
      org: "Alcaldía de Cali",
      term: "2025",
    },
  ];
  return (
    <SectionBlock id="teaching" title="teaching & academic service">
      <ul className="divide-y divide-border/70">
        {courses.map((c) => (
          <li key={c.role + c.course} className="py-4 grid md:grid-cols-[1fr_auto] gap-1 md:gap-8">
            <div>
              <div className="font-serif text-[1.05rem] text-foreground">{c.course}</div>
              <div className="text-sm text-muted-foreground">{c.role} · {c.org}</div>
            </div>
            <div className="font-mono text-xs text-muted-foreground md:text-right md:pt-1.5">{c.term}</div>
          </li>
        ))}
      </ul>
    </SectionBlock>
  );
}

function Tools() {
  const groups = [
    { label: "Programming", items: ["R (advanced)", "Python (intermediate)"] },
    { label: "Geospatial", items: ["Google Earth Engine (rgee)", "QGIS"] },
    { label: "Methods", items: ["XGBoost", "k-NN", "Neural networks", "Spatial econometrics", "Remote sensing", "Statistical modeling", "Data visualization"] },
    { label: "Other tools", items: ["LaTeX", "Git", "Excel (advanced)", "PowerPoint", "Canva"] },
    { label: "Languages", items: ["Spanish (native)", "English — Professional Working Proficiency (C1)"] },
  ];
  return (
    <SectionBlock id="skills" title="technical skills">
      <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
        {groups.map((g) => (
          <div key={g.label} className="grid grid-cols-[7rem_1fr] gap-4 items-baseline">
            <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{g.label}</dt>
            <dd className="text-foreground/85 leading-relaxed">{g.items.join(", ")}.</dd>
          </div>
        ))}
      </dl>
    </SectionBlock>
  );
}

function Contact() {
  return (
    <SectionBlock id="contact" title="contact">
      <p className="text-foreground/85 leading-relaxed mb-5 max-w-2xl">
        I welcome correspondence from researchers, faculty and graduate programs interested in
        urban economics, the economics of crime, or applied spatial methods in Latin America.
      </p>
      <ul className="space-y-2 text-foreground/90">
        <li className="flex items-center gap-3">
          <Mail className="size-4 text-muted-foreground" />
          <a href={`mailto:${EMAIL}`} className="hover:text-primary hover:underline">{EMAIL}</a>
        </li>
        <li className="flex items-center gap-3">
          <Linkedin className="size-4 text-muted-foreground" />
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline inline-flex items-center gap-1">
            linkedin.com/in/miguel-angel-torres-montoya-economics <ExternalLink className="size-3" />
          </a>
        </li>
        <li className="flex items-center gap-3">
          <Github className="size-4 text-muted-foreground" />
          <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline inline-flex items-center gap-1">
            github.com/Miguet2209 <ExternalLink className="size-3" />
          </a>
        </li>
        <li className="flex items-center gap-3">
          <FileText className="size-4 text-muted-foreground" />
          <a href={CV_URL} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline">
            Curriculum Vitae (PDF)
          </a>
        </li>
      </ul>
    </SectionBlock>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-8 px-6 mt-12">
      <div className="max-w-5xl mx-auto text-center text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} Miguel Ángel Torres Montoya · Universidad Icesi · Cali, Colombia.
      </div>
    </footer>
  );
}

function SectionBlock({
  id, title, children,
}: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-12 px-6 scroll-mt-20 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-primary lowercase mb-7">{title}</h2>
        {children}
      </div>
    </section>
  );
}

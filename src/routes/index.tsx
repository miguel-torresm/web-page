import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import portrait from "@/assets/miguel-portrait.png";
import {
  ArrowRight, Linkedin, Mail, Github, MapPin, GraduationCap, Trophy,
  LineChart, Map, Brain, Database, FileCode2, Languages, Building2,
  Sparkles, BookOpen, ChevronRight, Sun, Moon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Miguel Ángel Torres Montoya — Economics Researcher" },
      { name: "description", content: "Undergraduate economics researcher. Crime economics, urban economics, applied econometrics, spatial analysis and machine learning. CIENFI, Universidad Icesi." },
      { property: "og:title", content: "Miguel Ángel Torres Montoya — Economics Researcher" },
      { property: "og:description", content: "Crime economics · Urban economics · Applied econometrics · Spatial analysis." },
    ],
  }),
  component: Landing,
});

const LINKEDIN = "https://www.linkedin.com/in/miguel-angel-torres-montoya-economics/";
const EMAIL = "miguet2209@gmail.com";
const GITHUB = "https://github.com/Miguet2209";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Landing() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Value />
      <Expertise />
      <Experience />
      <Tools />
      <Approach />
      <Signature />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    ["About", "#about"], ["Expertise", "#expertise"],
    ["Experience", "#experience"], ["Research", "#research"], ["Contact", "#contact"],
  ] as const;
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-lg tracking-tight">
          Miguel <span className="text-gradient-gold">Torres</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <a href={LINKEDIN} target="_blank" rel="noreferrer"
           className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition shadow-gold">
          <Linkedin className="size-4" /> Connect
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-paper opacity-40 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative">
        <div className="lg:col-span-7 reveal">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-6">
            <span className="size-1.5 rounded-full bg-primary" />
            Economics Research · Cali, Colombia
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
            Turning <span className="text-gradient-gold italic">spatial data</span> into
            evidence on cities, crime and inequality.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Undergraduate researcher at CIENFI, Universidad Icesi. I build econometric and
            machine-learning pipelines that disaggregate economic activity, predict urban
            growth, and surface inequities in Latin American institutions.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <a href={LINKEDIN} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-gold">
              <Linkedin className="size-4" /> Connect on LinkedIn
            </a>
            <a href="#experience"
               className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/60 hover:bg-card transition">
              View Experience <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Crime Economics", "Urban Economics", "Applied Econometrics", "Remote Sensing"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-primary" />{t}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 reveal">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent blur-2xl" />
            <div className="relative rounded-3xl bg-card border border-border p-6 shadow-elegant">
              <div className="aspect-square rounded-2xl overflow-hidden ring-1 ring-primary/30 mb-5">
                <img src={portrait} alt="Miguel Ángel Torres Montoya"
                     className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1">
                <div className="font-serif text-xl">Miguel Ángel Torres Montoya</div>
                <div className="text-sm text-primary">Research Assistant · CIENFI</div>
                <div className="text-xs text-muted-foreground pt-3 flex items-center gap-1.5">
                  <MapPin className="size-3" /> Cali · Available for remote collaboration
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A researcher trained in evidence, not opinions.">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-5 text-lg leading-relaxed text-muted-foreground reveal">
          <p>
            I'm an economics undergraduate at <span className="text-foreground">Universidad Icesi</span> and
            research assistant at the Center for Research in Economics and Finance (CIENFI),
            where I work alongside Eduard F. Martínez-González on urban and crime economics
            for Colombian cities.
          </p>
          <p>
            My work sits at the intersection of <span className="text-foreground">applied
            econometrics, spatial analysis and machine learning</span> — combining satellite
            imagery, census microdata and high-frequency mobility records to answer questions
            that traditional aggregates can't.
          </p>
          <p>
            I collaborate with public institutions such as the <span className="text-foreground">Secretaría
            de Desarrollo Económico de Bogotá</span> and the <span className="text-foreground">Alcaldía
            de Cali</span>, translating technical models into policy-ready evidence for Latin
            American governments and academic audiences.
          </p>
        </div>
        <div className="space-y-4 reveal">
          {[
            { icon: GraduationCap, label: "B.A. Economics", sub: "Universidad Icesi · Expected 2027" },
            { icon: Building2, label: "CIENFI", sub: "Research Assistant, 2025–" },
            { icon: Languages, label: "Spanish · English (C1)", sub: "Native · Professional working" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition">
              <Icon className="size-5 text-primary mb-3" />
              <div className="font-medium">{label}</div>
              <div className="text-sm text-muted-foreground">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Value() {
  const items = [
    {
      icon: Map,
      title: "Spatial disaggregation at scale",
      body: "I downscale national-level indicators to the neighborhood using nighttime lights, mobility records and census blocks — making local economic activity visible.",
    },
    {
      icon: Brain,
      title: "ML for economic measurement",
      body: "XGBoost, k-NN and neural networks deployed to classify urban extent, predict informality and turn raw satellite signals into interpretable indicators.",
    },
    {
      icon: LineChart,
      title: "High-frequency indicators",
      body: "Composite economic activity indices built from non-experimental data sources to track regional cycles in near real time.",
    },
    {
      icon: BookOpen,
      title: "Policy-relevant evidence",
      body: "Research designed to be read by city governments and academic peers alike — featured in El Tiempo and used by Bogotá and Cali authorities.",
    },
  ];
  return (
    <Section id="value" eyebrow="How I create value" title="Four ways my research compounds.">
      <div className="grid sm:grid-cols-2 gap-5">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="reveal group rounded-2xl border border-border bg-card p-7 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 shadow-elegant">
            <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition">
              <Icon className="size-5" />
            </div>
            <h3 className="font-serif text-2xl mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Expertise() {
  const groups = [
    { label: "Research areas", tags: ["Crime Economics", "Urban Economics", "Applied Econometrics", "Spatial Econometrics", "Development Economics"] },
    { label: "Methods", tags: ["Machine Learning", "XGBoost", "k-NN", "Neural Networks", "Remote Sensing", "Statistical Modeling", "Causal Inference"] },
    { label: "Programming", tags: ["R (Advanced)", "Python", "LaTeX", "Git"] },
    { label: "Geospatial", tags: ["Google Earth Engine", "rgee", "QGIS", "Landsat 8", "Suomi-NPP / NOAA-20"] },
  ];
  return (
    <Section id="expertise" eyebrow="Core expertise" title="The toolkit behind the research.">
      <div className="space-y-8">
        {groups.map((g) => (
          <div key={g.label} className="reveal">
            <div className="text-sm uppercase tracking-[0.18em] text-primary mb-4">{g.label}</div>
            <div className="flex flex-wrap gap-2">
              {g.tags.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-card border border-border text-sm hover:border-primary/60 hover:text-primary transition">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  const roles = [
    {
      role: "Research Assistant",
      org: "CIENFI · Universidad Icesi",
      place: "Cali, Colombia",
      period: "2025 — Present",
      focus: "Urban and crime economics, machine learning for economic measurement, satellite-based indicators of development.",
      highlight: "Co-author of GDP spatial disaggregation for Bogotá — findings featured in El Tiempo, Feb. 2025.",
    },
    {
      role: "Teaching Monitor — Intro to Business Analytics",
      org: "Datacienfi · Universidad Icesi",
      place: "Cali, Colombia",
      period: "2025 — Present",
      focus: "Curating an open data repository and supporting analytics coursework for undergraduates.",
      highlight: "Designed reproducible R workflows used across business analytics sections.",
    },
    {
      role: "Research collaborator — Bogotá",
      org: "Secretaría de Desarrollo Económico",
      place: "Bogotá, Colombia",
      period: "2025",
      focus: "Built spatial GDP estimates from nighttime lights (Suomi-NPP, NOAA-20) and TransMilenio mobility data.",
      highlight: "Mapped informality at the neighborhood level using XGBoost and neural networks.",
    },
    {
      role: "Research collaborator — Cali",
      org: "Alcaldía de Cali",
      place: "Cali, Colombia",
      period: "2025",
      focus: "Descriptive analysis of Cali's property registry revaluation (reavalúo catastral).",
      highlight: "Synthesized property owner claims into actionable input for municipal review.",
    },
    {
      role: "Undergraduate Thesis (in progress)",
      org: "Supervised by Eduard F. Martínez-González",
      place: "Universidad Icesi",
      period: "2025 — 2027",
      focus: "Gender disparities in criminal specialization and sentencing severity in Colombia's accusatory system.",
      highlight: "Quantitative analysis of judicial microdata across criminal categories.",
    },
  ];
  const honors = [
    { place: "1st", text: "Undergraduate Economic Debate Competition, Universidad Icesi", year: "2023" },
    { place: "2nd", text: "Who Wants to Be a Millionaire? — Economics Edition, Universidad Icesi", year: "2024" },
    { place: "3rd", text: "Undergraduate Paper Competition on the Economics of Crime", year: "2025" },
  ];
  return (
    <Section id="experience" eyebrow="Experience highlights" title="Selected research, teaching and collaborations.">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
          <div className="space-y-8">
            {roles.map((r) => (
              <div key={r.role + r.period} className="reveal relative pl-10">
                <div className="absolute left-0 top-2 size-6 rounded-full border border-primary/40 bg-background flex items-center justify-center">
                  <span className="size-2 rounded-full bg-primary" />
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition shadow-elegant">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-serif text-xl">{r.role}</h3>
                    <span className="text-xs uppercase tracking-wider text-primary">{r.period}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">
                    {r.org} · {r.place}
                  </div>
                  <p className="text-muted-foreground mb-3 leading-relaxed">{r.focus}</p>
                  <div className="flex items-start gap-2 text-sm text-foreground/90 border-l-2 border-primary/60 pl-3">
                    <Sparkles className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>{r.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="reveal">
          <div className="rounded-2xl border border-border bg-card p-6 sticky top-24">
            <div className="flex items-center gap-2 text-primary mb-5">
              <Trophy className="size-5" />
              <h3 className="font-serif text-xl text-foreground">Awards & Honors</h3>
            </div>
            <ul className="space-y-5">
              {honors.map((h) => (
                <li key={h.text} className="flex gap-3">
                  <span className="font-serif text-2xl text-gradient-gold leading-none w-10 shrink-0">{h.place}</span>
                  <div>
                    <div className="text-sm leading-snug">{h.text}</div>
                    <div className="text-xs text-muted-foreground mt-1">{h.year}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Tools() {
  const tools = [
    "R", "Python", "Google Earth Engine", "rgee", "QGIS", "LaTeX",
    "Git / GitHub", "XGBoost", "Excel", "PowerPoint", "Canva", "Landsat", "DANE Census",
  ];
  return (
    <Section id="tools" eyebrow="Tools & platforms" title="What I reach for daily.">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 reveal">
        {tools.map((t) => (
          <div key={t} className="rounded-xl border border-border bg-card px-4 py-4 text-center text-sm hover:border-primary/50 hover:text-primary transition">
            {t}
          </div>
        ))}
      </div>
      <p className="reveal text-center mt-10 font-serif text-xl md:text-2xl text-muted-foreground italic max-w-2xl mx-auto">
        "Software extracts the data. Economic theory turns it into <span className="text-gradient-gold not-italic">evidence.</span>"
      </p>
    </Section>
  );
}

function Approach() {
  const items = [
    {
      icon: Database,
      title: "Spatial GDP & Informality",
      body: "Disaggregating Bogotá's GDP using Suomi-NPP / NOAA-20 nighttime lights and TransMilenio mobility flows.",
    },
    {
      icon: FileCode2,
      title: "Urbanization Prediction",
      body: "Classifying urban extent across Colombia (2013–2025) with Landsat 8 NDBI/NDVI/NDWI and ensemble models.",
    },
    {
      icon: Brain,
      title: "Crime & Gender",
      body: "Quantifying gender differences in criminal specialization and sentencing within Colombia's accusatory system.",
    },
  ];
  return (
    <Section id="research" eyebrow="Research in progress" title="What I'm working on right now.">
      <div className="grid md:grid-cols-3 gap-5">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="reveal rounded-2xl border border-border bg-card p-7 hover:border-primary/50 transition group">
            <Icon className="size-6 text-primary mb-4" />
            <h3 className="font-serif text-xl mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
            <div className="mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition">
              In development <ChevronRight className="size-3" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Signature() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto rounded-3xl bg-signature border border-primary/20 p-10 md:p-16 text-center shadow-elegant reveal">
        <div className="text-xs uppercase tracking-[0.25em] text-primary mb-6">Working philosophy</div>
        <p className="font-serif text-3xl md:text-5xl leading-tight">
          "Cities and institutions leave traces in data.
          <br className="hidden md:block" />
          My job is to <span className="text-gradient-gold italic">read them carefully</span>—
          and turn them into evidence that holds."
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Let's connect" title="Open to research collaborations and remote work.">
      <div className="max-w-2xl mx-auto text-center reveal">
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          I welcome conversations with researchers, policy teams and academic programs across
          Latin America and beyond — whether for collaborations, data partnerships, graduate
          opportunities, or applied research projects.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={LINKEDIN} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 shadow-gold transition">
            <Linkedin className="size-4" /> Connect on LinkedIn
          </a>
          <a href={`mailto:${EMAIL}`}
             className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/60 hover:bg-card transition">
            <Mail className="size-4" /> {EMAIL}
          </a>
          <a href={GITHUB} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/60 hover:bg-card transition">
            <Github className="size-4" /> GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Miguel Ángel Torres Montoya</div>
        <div>Cali, Colombia · Available for remote research collaboration</div>
      </div>
    </footer>
  );
}

function Section({
  id, eyebrow, title, children,
}: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-3xl reveal">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">{eyebrow}</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

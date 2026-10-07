import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, asset } from "@/components/site";


const CERTIFICATE_IEM01X = "https://courses.edx.org/certificates/394dc8c9c5b1481bb28bcd3eb8a6a856";
const SLIDES_CAUSAL_INFERENCE = asset("articles/workshop_inferencia_causal.pptx");

export const Route = createFileRoute("/academic-experience")({
  head: () => ({
    meta: [
      { title: "Academic Experience — Miguel Ángel Torres Montoya" },
      { name: "description", content: "Teaching, research assistantships, technical skills, and academic collaborations." },
      { property: "og:title", content: "Academic Experience — Miguel Ángel Torres Montoya" },
      { property: "og:description", content: "Teaching, research assistantships, and technical skills." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AcademicExperiencePage,
});

function AcademicExperiencePage() {
  const research = [
    { role: "Research Assistant", org: "Center for Research in Economics and Finance (CIENFI), Universidad Icesi", supervisor: "Eduard F. Martínez-González", term: "2025 — present", detail: "Research on criminal sentencing and education policy using econometric and causal inference methods. Additional projects include quarterly monitoring of economic activity in Bogotá and descriptive analysis of property owner claims following Cali's cadastral reassessment." },
    { role: "Contributing Researcher — Research Seedbed", org: "Finance & Investment Club (FIC), Universidad Icesi", supervisor: null, term: "2026 — present", detail: "Contributing researcher in the club's newly founded research division. Designed and delivered a workshop on causal inference methods for undergraduate researchers.", link: { href: SLIDES_CAUSAL_INFERENCE, label: "Workshop slides ↗" } },
  ];
  const teaching = [
    { course: "Introduction to Business Analytics", org: "Universidad Icesi", term: "2025" },
    { course: "Microeconomic Theory III", org: "Universidad Icesi", term: "2026 — present" },
    { course: "International Economics", org: "Universidad Icesi", term: "2026 — present" },
    { course: "Macroeconomic Theory I", org: "Universidad Icesi", term: "2026 — present" },
    { course: "Big Data and Machine Learning", org: "Universidad Icesi · Graduate elective, M.A. in Economics", term: "2026" },
  ];

  const awards = [
    { title: "1st Place, Undergraduate Presentation Competition on Behavioral Economics", org: "Universidad Icesi", year: "2026", slides: asset("articles/ponencia_comportamiento.pdf") },
    { title: "3rd Place, Undergraduate Presentation Competition on the Economics of Crime", org: "Universidad Icesi", year: "2025", slides: asset("articles/ponencia_crimen.pdf") },
    { title: "1st Place, Undergraduate Economic Debate Competition", org: "Universidad Icesi", year: "2023" },
  ];
  const training = [
    { course: "IEM01x: Evaluating Impact in Low- and Middle-Income Countries", org: "World Bank Group · via edX", detail: null, term: "2026", link: { href: CERTIFICATE_IEM01X, label: "Certificate ↗" } },
  ];

  const groups = [
    { label: "Programming", items: ["R (advanced)", "Python (intermediate)"] },
    { label: "Econometrics & methods", items: ["Causal inference (RCT, DiD, RDD, IV)", "Applied econometrics", "Statistical modeling", "Data visualization"] },
    { label: "Other tools", items: ["LaTeX", "Git", "Excel (advanced)", "PowerPoint", "Canva"] },
    { label: "Languages", items: ["Spanish (native)", "English — Professional Working Proficiency (C1)"] },
  ];
  return (
    <PageShell>
      <SectionBlock title="research experience" bordered={false}>
        <ul className="divide-y divide-border/60">
          {research.map((r) => (
            <li key={r.role + r.org} className="group py-5 grid md:grid-cols-[1fr_auto] gap-1 md:gap-8 transition-colors hover:bg-muted/20 -mx-4 px-4 rounded-md">
              <div className="relative">
                <span className="hidden md:block absolute -left-4 top-1.5 h-5 w-0.5 bg-primary/0 group-hover:bg-primary transition-colors" />
                <div className="font-serif text-[1.05rem] text-foreground">{r.org}</div>
                <div className="text-sm text-muted-foreground">
                  {r.role}
                  {r.supervisor ? ` · supervisor: ${r.supervisor}` : ""}
                </div>
                {r.detail && <div className="text-sm text-foreground/80 mt-1">{r.detail}</div>}
                {"link" in r && r.link && (
                  <a
                    href={r.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary hover:underline"
                  >
                    {r.link.label}
                  </a>
                )}
              </div>
              <div className="font-mono text-xs text-muted-foreground md:text-right md:pt-1.5">{r.term}</div>
            </li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock title="research reports">
        <article className="border-l border-border/60 pl-4">
          <h3 className="font-serif text-lg text-foreground">Quarterly Monitoring of Economic Activity in Bogotá with Satellite and Mobility Data</h3>
          <p className="mt-1 text-sm text-muted-foreground">With Eduard F. Martínez-González · February 2026</p>
          <p className="mt-2 text-sm text-foreground/85">Cuadernos de Desarrollo Económico No. 83, Secretaría de Desarrollo Económico, Alcaldía Mayor de Bogotá.</p>
          <p className="mt-2 text-sm text-foreground/85">Quarterly GDP estimation at the 450 m grid level using VIIRS night lights, TransMilenio mobility, and census data, with a feedforward neural network evaluated across approximately 16,000 model configurations using rolling-origin validation.</p>
          <a href="https://observatorio.desarrolloeconomico.gov.co/wp-content/uploads/2026/02/cuaderno-83-ModePredigPIB.pdf" target="_blank" rel="noreferrer" className="mt-3 inline-flex font-mono text-xs text-primary hover:underline">Report ↗</a>
        </article>
      </SectionBlock>

      <SectionBlock title="teaching experience">
        <ul className="divide-y divide-border/60">
          {teaching.map((t) => (
            <li key={t.course} className="group py-5 grid md:grid-cols-[1fr_auto] gap-1 md:gap-8 transition-colors hover:bg-muted/20 -mx-4 px-4 rounded-md">
              <div className="relative">
                <span className="hidden md:block absolute -left-4 top-1.5 h-5 w-0.5 bg-primary/0 group-hover:bg-primary transition-colors" />
                <div className="font-serif text-[1.05rem] text-foreground">{t.course}</div>
                <div className="text-sm text-muted-foreground">Teaching Monitor · {t.org}</div>
              </div>
              <div className="font-mono text-xs text-muted-foreground md:text-right md:pt-1.5">{t.term}</div>
            </li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock title="awards and honors">
        <ul className="divide-y divide-border/60">
          {awards.map((a) => (
            <li key={a.title} className="group py-5 grid md:grid-cols-[1fr_auto] gap-1 md:gap-8 transition-colors hover:bg-muted/20 -mx-4 px-4 rounded-md">
              <div className="relative">
                <span className="hidden md:block absolute -left-4 top-1.5 h-5 w-0.5 bg-primary/0 group-hover:bg-primary transition-colors" />
                <div className="font-serif text-[1.05rem] text-foreground">{a.title}</div>
                <div className="text-sm text-muted-foreground">{a.org}</div>
                {a.slides && <a href={a.slides} target="_blank" rel="noreferrer" className="mt-2 inline-flex font-mono text-xs text-primary hover:underline">Presentation slides ↗</a>}
              </div>
              <div className="font-mono text-xs text-muted-foreground md:text-right md:pt-1.5">{a.year}</div>
            </li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock title="additional training">
        <ul className="divide-y divide-border/60">
          {training.map((t) => (
            <li key={t.course} className="group py-5 grid md:grid-cols-[1fr_auto] gap-1 md:gap-8 transition-colors hover:bg-muted/20 -mx-4 px-4 rounded-md">
              <div className="relative">
                <span className="hidden md:block absolute -left-4 top-1.5 h-5 w-0.5 bg-primary/0 group-hover:bg-primary transition-colors" />
                <div className="font-serif text-[1.05rem] text-foreground">{t.course}</div>
                <div className="text-sm text-muted-foreground">{t.org}</div>
                {t.detail && <div className="text-sm text-foreground/80 mt-1">{t.detail}</div>}
                {t.link && (
                  <a
                    href={t.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary hover:underline"
                  >
                    {t.link.label}
                  </a>
                )}
              </div>

              <div className="font-mono text-xs text-muted-foreground md:text-right md:pt-1.5">{t.term}</div>
            </li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock title="technical skills">
        <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-7">
          {groups.map((g) => (
            <div key={g.label} className="border-l border-border/60 pl-4 hover:border-primary/60 transition-colors">
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground mb-1.5">{g.label}</dt>
              <dd className="text-foreground/85 leading-relaxed">{g.items.join(", ")}.</dd>
            </div>
          ))}
        </dl>
      </SectionBlock>
    </PageShell>
  );
}

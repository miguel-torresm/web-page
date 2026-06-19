import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock } from "@/components/site";

export const Route = createFileRoute("/academic-experience")({
  head: () => ({
    meta: [
      { title: "Academic Experience — Miguel Ángel Torres Montoya" },
      { name: "description", content: "Teaching, research assistantships, technical skills, and academic collaborations." },
      { property: "og:title", content: "Academic Experience — Miguel Ángel Torres Montoya" },
      { property: "og:description", content: "Teaching, research assistantships, and technical skills." },
    ],
  }),
  component: AcademicExperiencePage,
});

function AcademicExperiencePage() {
  const research = [
    { role: "Research Assistant", org: "Center for Research in Economics and Finance (CIENFI), Universidad Icesi", supervisor: "Eduard F. Martínez-González", term: "2025 — present", detail: "Projects: Spatial Disaggregation of GDP for Bogotá (with the Secretaría de Desarrollo Económico de Bogotá), Property Registry Revaluation Analysis for Cali (with the Alcaldía de Cali), and Datacienfi (open data repository for Business Analytics courses)." },
    { role: "Research Assistant", org: "Center for Economic Development Studies (CEDE), Universidad de los Andes", supervisor: "Daniel Mejía-Londoño", term: "2026 — present", detail: "" },
  ];
  const teaching = [
    { course: "Introduction to Business Analytics", org: "Universidad Icesi", term: "2025 — present" },
    { course: "Microeconomic Theory III", org: "Universidad Icesi", term: "2026 — present" },
    { course: "International Economics", org: "Universidad Icesi", term: "2026 — present" },
  ];
  const awards = [
    { title: "3rd Place, Undergraduate Presentation Competition on the Economics of Crime", org: "Universidad Icesi", year: "2025" },
    { title: "2nd Place, \"Who Wants to Be a Millionaire?\" — Economics Edition", org: "Universidad Icesi", year: "2024" },
    { title: "1st Place, Undergraduate Economic Debate Competition", org: "Universidad Icesi", year: "2023" },
  ];
  const training = [
    { course: "Evaluating Impact in Low- and Middle-Income Countries", org: "World Bank Group · via edX", detail: "In progress.", term: "2026" },
  ];
  const groups = [
    { label: "Programming", items: ["R (advanced)", "Python (intermediate)"] },
    { label: "Geospatial", items: ["Google Earth Engine (rgee)", "QGIS"] },
    { label: "Methods", items: ["Machine learning (XGBoost, k-NN, neural networks)", "Spatial econometrics", "Remote sensing", "Statistical modeling", "Data visualization"] },
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
                <div className="text-sm text-muted-foreground">{r.role} · supervisor: {r.supervisor}</div>
                {r.detail && <div className="text-sm text-foreground/80 mt-1">{r.detail}</div>}
              </div>
              <div className="font-mono text-xs text-muted-foreground md:text-right md:pt-1.5">{r.term}</div>
            </li>
          ))}
        </ul>
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

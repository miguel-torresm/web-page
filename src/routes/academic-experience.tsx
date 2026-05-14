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
  const courses = [
    { role: "Teaching Monitor", course: "Introduction to Business Analytics", org: "Datacienfi · Universidad Icesi", term: "2025 — present" },
    { role: "Research Assistant", course: "Urban and Crime Economics", org: "CIENFI · Universidad Icesi", term: "2025 — present" },
    { role: "Research Collaborator", course: "Spatial GDP estimation project", org: "Secretaría Distrital de Desarrollo Económico de Bogotá", term: "2025" },
    { role: "Research Collaborator", course: "Property registry revaluation analysis", org: "Alcaldía de Cali", term: "2025" },
  ];
  const groups = [
    { label: "Programming", items: ["R (advanced)", "Python (intermediate)"] },
    { label: "Geospatial", items: ["Google Earth Engine (rgee)", "QGIS"] },
    { label: "Methods", items: ["XGBoost", "k-NN", "Neural networks", "Spatial econometrics", "Remote sensing", "Statistical modeling", "Data visualization"] },
    { label: "Other tools", items: ["LaTeX", "Git", "Excel (advanced)", "PowerPoint", "Canva"] },
    { label: "Languages", items: ["Spanish (native)", "English — Professional Working Proficiency (C1)"] },
  ];
  return (
    <PageShell>
      <SectionBlock title="academic experience" bordered={false}>
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

      <SectionBlock title="technical skills">
        <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {groups.map((g) => (
            <div key={g.label} className="grid grid-cols-[7rem_1fr] gap-4 items-baseline">
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{g.label}</dt>
              <dd className="text-foreground/85 leading-relaxed">{g.items.join(", ")}.</dd>
            </div>
          ))}
        </dl>
      </SectionBlock>
    </PageShell>
  );
}

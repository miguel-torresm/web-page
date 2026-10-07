import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, Entry, asset } from "@/components/site";


const SLIDES_CAUSAL_INFERENCE = asset("articles/workshop_causal_inference.pdf");

export const Route = createFileRoute("/academic-experience")({
  head: () => ({
    meta: [
      { title: "Academic Experience — Miguel Ángel Torres Montoya" },
      { name: "description", content: "Research and teaching positions." },
      { property: "og:title", content: "Academic Experience — Miguel Ángel Torres Montoya" },
      { property: "og:description", content: "Research and teaching positions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AcademicExperiencePage,
});

function AcademicExperiencePage() {
  const research = [
    { org: "Center for Research in Economics and Finance (CIENFI), Universidad Icesi", role: "Research Assistant", supervisor: "Eduard F. Martínez-González", term: "2025 — present", detail: "Research on criminal sentencing and education policy using econometric and causal inference methods. Additional projects include quarterly monitoring of economic activity in Bogotá and descriptive analysis of property owner claims following Cali's cadastral reassessment." },
    { org: "Finance & Investment Club (FIC), Universidad Icesi", role: "Contributing Researcher, Research Seedbed", supervisor: null, term: "2026 — present", detail: "Contributing researcher in the club's newly founded research division. Designed and delivered a workshop on causal inference methods for undergraduate researchers.", links: [{ href: SLIDES_CAUSAL_INFERENCE, label: "Workshop slides" }] },
  ];
  const teaching = [
    { course: "Introduction to Business Analytics", term: "2025" },
    { course: "Microeconomic Theory III", term: "2026 — present" },
    { course: "International Economics", term: "2026 — present" },
    { course: "Macroeconomic Theory I", term: "2026 — present" },
    { course: "Big Data and Machine Learning", term: "2026", note: "Graduate elective, M.A. in Economics" },
  ];
  return (
    <PageShell>
      <SectionBlock title="research experience" bordered={false}>
        <ul className="divide-y divide-border/60">
          {research.map((r) => (
            <Entry
              key={r.org}
              title={r.org}
              subtitle={`${r.role}${r.supervisor ? ` · supervisor: ${r.supervisor}` : ""}`}
              detail={r.detail}
              term={r.term}
              links={r.links}
            />
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock title="teaching experience">
        <ul className="divide-y divide-border/60">
          {teaching.map((t) => (
            <Entry
              key={t.course}
              title={t.course}
              subtitle={`Teaching Monitor · Universidad Icesi${t.note ? ` · ${t.note}` : ""}`}
              term={t.term}
            />
          ))}
        </ul>
      </SectionBlock>
    </PageShell>
  );
}

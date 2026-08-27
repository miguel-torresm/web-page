import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock } from "@/components/site";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Miguel Ángel Torres Montoya" },
      { name: "description", content: "Working papers and projects in progress on theoretical models, applied econometrics, causal inference, and the economics of crime." },
      { property: "og:title", content: "Research — Miguel Ángel Torres Montoya" },
      { property: "og:description", content: "Working papers and projects on theoretical models, applied econometrics, causal inference, and the economics of crime." },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  const interests = [
    "Theoretical Models",
    "Applied Econometrics",
    "Causal Inference",
    "Crime Economics",
    "Education Economics",
  ];
  const projects = [
    { title: "Gender Disparities in the Colombian Criminal Justice System", authors: "Undergraduate thesis · supervised by Eduard F. Martínez-González and Daniel Mejía-Londoño.", body: "Examines gender differences in criminal sentencing within Colombia's accusatory system, exploiting a natural experiment and applying causal inference methods." },
    { title: "Sentencing Process Analysis in the Colombian Accusatory System", authors: "with Eduard F. Martínez-González and Daniel Mejía-Londoño.", body: "Examines the full criminal-justice pipeline from criminal notice to final court ruling, identifying procedural bottlenecks and sentencing disparities using econometric tools." },
    { title: "State Capacity and Education Policy Implementation in Colombia", authors: "Finance and Investment Club (FIC) — Economic Research.", body: "Examines whether local institutional capacity determines the effect of the full-school-day reform on the public–private achievement gap." },
  ];
  return (
    <PageShell>
      <SectionBlock title="research" bordered={false}>
        <div className="mb-12">
          <h3 className="font-serif text-lg mb-4">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full border border-border/70 bg-muted/30 text-xs font-mono tracking-wide text-foreground/80 hover:border-primary/50 hover:text-foreground transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <h3 className="font-serif text-lg mb-5">Working papers and projects in progress</h3>
        <ol className="space-y-5">
          {projects.map((p, i) => (
            <li
              key={p.title}
              className="group relative grid grid-cols-[2.25rem_1fr] gap-4 p-4 -mx-4 rounded-lg border border-transparent hover:border-border/60 hover:bg-muted/20 transition-colors"
            >
              <span className="font-mono text-xs text-muted-foreground pt-1 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="border-l border-border/60 group-hover:border-primary/60 transition-colors pl-4">
                <div className="font-serif text-[1.1rem] leading-snug text-foreground">{p.title}</div>
                <div className="text-sm text-muted-foreground italic mb-2">{p.authors}</div>
                <p className="text-foreground/85 leading-relaxed">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </SectionBlock>
    </PageShell>
  );
}

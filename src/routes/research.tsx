import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock } from "@/components/site";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Miguel Ángel Torres Montoya" },
      { name: "description", content: "Working papers and projects in progress on urban economics, the economics of crime, applied econometrics, and remote sensing." },
      { property: "og:title", content: "Research — Miguel Ángel Torres Montoya" },
      { property: "og:description", content: "Working papers and projects on urban and crime economics, applied econometrics, and remote sensing." },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
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
    { title: "Spatial Disaggregation of GDP and Informality in Bogotá", authors: "with E. F. Martínez-González (CIENFI) · in progress.", body: "Spatially disaggregates Bogotá's GDP using nighttime lights, DANE 2018 census data, and TransMilenio mobility data, and maps informality at fine resolution via XGBoost and neural-network classifiers." },
    { title: "Gender Disparities in the Colombian Criminal Justice System", authors: "Undergraduate thesis · supervised by E. F. Martínez-González and Daniel Mejía-Londoño.", body: "Examines gender differences in criminal sentencing within Colombia's accusatory system, exploiting a natural experiment to identify disparities net of case characteristics and defendant histories." },
    { title: "Strategic Default in Credit Unions", authors: "with E. F. Martínez-González · in progress.", body: "Econometric analysis of strategic default behavior in Colombian credit unions, examining borrower incentives when multiple lending institutions are simultaneously available." },
    { title: "Sentencing Process Analysis in the Colombian Accusatory System", authors: "with E. F. Martínez-González and Daniel Mejía-Londoño · in progress.", body: "Examines the full criminal-justice pipeline from criminal notice to final ruling, identifying procedural bottlenecks and sentencing disparities along the process." },
    { title: "Construction of Economic Centres in Cali", authors: "with Cámara de Comercio de Cali and Invest Pacific · in progress.", body: "Delineates Cali's economic subcenters by sector using georeferenced firm-level data and a spatial activity index." },
    { title: "Urbanization Prediction Model for Colombia, 2013–2025", authors: "CIENFI · in progress.", body: "Integrates Landsat 8 spectral indices (NDBI, NDVI, NDWI) with DANE 2018 census blocks and benchmarks k-NN and XGBoost classifiers to predict urban extent across Colombia." },
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

import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock } from "@/components/site";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Miguel Ángel Torres Montoya" },
      { name: "description", content: "Published work and working papers on theoretical models, applied econometrics, causal inference, and the economics of crime." },
      { property: "og:title", content: "Research — Miguel Ángel Torres Montoya" },
      { property: "og:description", content: "Working papers and projects on theoretical models, applied econometrics, causal inference, and the economics of crime." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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
    { title: "Judges or the System? Causal Evidence on Gender Disparities in Criminal Sentencing in Colombia", authors: "Undergraduate thesis · with Eduard F. Martínez and Daniel Mejía.", body: "Causally identifies the effect of judge sex on sentence length using institutional random assignment (SARJ) across 24 Colombian judicial districts." },
    { title: "Sentencing Process Analysis in the Colombian Accusatory System", authors: "with Eduard F. Martínez-González and Daniel Mejía-Londoño.", body: "Examines the full criminal-justice pipeline from criminal notice to final court ruling, identifying procedural bottlenecks and sentencing disparities using econometric tools." },
    { title: "State Capacity and Education Policy Implementation in Colombia", authors: "Research in progress.", body: "Uses a staggered difference-in-differences design to examine whether local institutional capacity shapes the effect of the full-school-day reform on dropout." },
    { title: "Illicit Drugs in Colombia: The Limits of Eradication and the Tasks Ahead", authors: "with Juan David Gelvez (GIGA) and Eduard F. Martínez.", body: "Examines the cocaine value chain from coca leaf to the European retail market, showing why eradication targets the lowest-value, most easily replaceable link." },
  ];
  const published = [
    {
      title: "Quarterly Monitoring of Economic Activity in Bogotá with Satellite and Mobility Data",
      authors: "With Eduard F. Martínez-González. Cuadernos de Desarrollo Económico No. 83, Secretaría de Desarrollo Económico, Alcaldía Mayor de Bogotá. February 2026.",
      body: "Quarterly GDP estimation at the 450 m grid level using VIIRS night lights, TransMilenio mobility, and census data, with a feedforward neural network evaluated across approximately 16,000 model configurations using rolling-origin validation.",
      link: { href: "https://observatorio.desarrolloeconomico.gov.co/wp-content/uploads/2026/02/cuaderno-83-ModePredigPIB.pdf", label: "Report" },
    },
  ];
  return (
    <PageShell>
      <SectionBlock title="research" bordered={false}>
        <p className="text-foreground/85 leading-relaxed">
          <span className="text-muted-foreground">Interests: </span>
          {interests.join(", ")}.
        </p>
      </SectionBlock>

      <SectionBlock title="published work">
        <ul className="space-y-6">
          {published.map((p) => (
            <li key={p.title}>
              <div className="font-serif text-[1.1rem] leading-snug text-foreground">{p.title}</div>
              <div className="text-sm text-muted-foreground mb-1">{p.authors}</div>
              <p className="text-foreground/85 leading-relaxed">{p.body}</p>
              <a href={p.link.href} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm text-primary hover:underline">{p.link.label}</a>
            </li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock title="working papers">
        <ul className="space-y-6">
          {projects.map((p) => (
            <li key={p.title}>
              <div className="font-serif text-[1.1rem] leading-snug text-foreground">{p.title}</div>
              <div className="text-sm text-muted-foreground mb-1">{p.authors}</div>
              <p className="text-foreground/85 leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ul>
      </SectionBlock>
    </PageShell>
  );
}

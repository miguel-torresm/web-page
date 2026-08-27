import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock } from "@/components/site";
import certificateAsset from "@/assets/iem01x-certificate.png.asset.json";


const CERTIFICATE_IEM01X = "https://courses.edx.org/certificates/394dc8c9c5b1481bb28bcd3eb8a6a856";
const SLIDES_CAUSAL_INFERENCE =
  "https://www.dropbox.com/scl/fi/tsqbz0wtf5tor7yje0sew/workshop_inferencia_causal.pptx?rlkey=9saxxf2nwz9dezci5yp9b13e0&st=ym4azy6v&dl=0";

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
    { role: "Research Assistant", org: "Center for Research in Economics and Finance (CIENFI), Universidad Icesi", supervisor: "Eduard F. Martínez-González", term: "2025 — present", detail: "Projects: Spatial Disaggregation of GDP for Bogotá — nighttime lights (Suomi-NPP, NOAA-20), TransMilenio mobility data and the DANE 2018 census, with the Secretaría de Desarrollo Económico de Bogotá; findings featured in El Tiempo, 2025. Property Registry Revaluation Analysis for Cali — descriptive analysis of the reavalúo catastral and property owner claims, with the Alcaldía de Cali." },
    { role: "Research Leader — Economic Research", org: "Finance & Investment Club (FIC), Universidad Icesi", supervisor: null, term: "2026 — present", detail: "Causal Inference Workshop — Instructor. Designed and delivered a workshop on causal inference, covering core methods and applied examples.", link: { href: SLIDES_CAUSAL_INFERENCE, label: "Workshop slides ↗" } },
  ];
  const teaching = [
    { course: "Introduction to Business Analytics", org: "Universidad Icesi", term: "2025 — present" },
    { course: "Microeconomic Theory III", org: "Universidad Icesi", term: "2026 — present" },
    { course: "International Economics", org: "Universidad Icesi", term: "2026 — present" },
    { course: "Macroeconomic Theory I", org: "Universidad Icesi", term: "2026 — present" },
    { course: "Big Data and Machine Learning", org: "Universidad Icesi", term: "2026 — present" },
  ];

  const awards = [
    { title: "3rd Place, Undergraduate Presentation Competition on the Economics of Crime", org: "Universidad Icesi", year: "2025" },
    { title: "1st Place, Undergraduate Economic Debate Competition", org: "Universidad Icesi", year: "2023" },
  ];
  const training = [
    { course: "IEM01x: Evaluating Impact in Low- and Middle-Income Countries", org: "World Bank Group · via edX", detail: null, term: "2026", link: { href: CERTIFICATE_IEM01X, label: "Certificate ↗" } },
  ];

  const groups = [
    { label: "Programming", items: ["R (advanced)", "Python (intermediate)"] },
    { label: "Geospatial", items: ["Google Earth Engine (rgee)", "QGIS"] },
    { label: "Methods", items: ["Machine learning (XGBoost, k-NN, neural networks)", "Causal inference (RCT, DiD, RDD)", "Spatial econometrics", "Remote sensing", "Statistical modeling", "Data visualization"] },
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
                {t.link && (
                  <a
                    href={t.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 block max-w-lg overflow-hidden rounded-md border border-border/70 bg-card shadow-sm transition-all hover:border-primary/60 hover:shadow-md"
                  >
                    <img
                      src={certificateAsset.url}
                      alt="edX verified certificate for IEM01x: Evaluating Impact in Low- and Middle-Income Countries, issued to Miguel Ángel Torres Montoya by the World Bank Group"
                      loading="lazy"
                      className="w-full"
                    />
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

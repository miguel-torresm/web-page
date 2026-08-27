import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/miguel-portrait.png";
import { Mail, Github, Linkedin, FileText, ExternalLink } from "lucide-react";
import { PageShell, SectionBlock, EMAIL, LINKEDIN, GITHUB, CV_URL } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Miguel Ángel Torres Montoya — Economics" },
      { name: "description", content: "Undergraduate researcher in economics at Universidad Icesi (CIENFI). Research interests: theoretical models, applied econometrics, causal inference, and the economics of crime." },
      { property: "og:title", content: "Miguel Ángel Torres Montoya — Economics" },
      { property: "og:description", content: "Undergraduate researcher in economics. Theoretical models, applied econometrics, causal inference, and the economics of crime." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <About />
      <Education />
      <Contact />
    </PageShell>
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
          <a href="https://www.icesi.edu.co/facultad-negocios-economia/" target="_blank" rel="noreferrer" className="text-primary hover:underline">Faculty of Business and Economics</a>,{" "}
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
              of Eduard F. Martínez-González. My research centers on the construction and
              estimation of theoretical models, applied econometrics, and causal inference,
              with a particular interest in the economics of crime and education policy in
              Latin America.
            </p>
            <p>
              I work with administrative data and econometric methods to test micro-founded
              hypotheses about criminal justice outcomes and education policy. My current
              projects include the analysis of sentencing disparities in Colombia's accusatory
              system and the evaluation of state-capacity constraints on education policy
              implementation.
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

function Education() {
  const items = [
    {
      school: "Universidad Icesi",
      degree: "B.A. in Economics · GPA 4.5/5.0",
      detail: "Graduate-level coursework: Quantitative and Computational Methods (4.8), Advanced Macroeconomics (4.8), Advanced Microeconomics (in progress), Game Theory and Asymmetric Information (in progress), Advanced Econometrics (in progress).",
      term: "Expected 2027",
    },
    {
      school: "Universidad del Rosario, Bogotá",
      degree: "Bogotá Summer School in Economics",
      detail: "Real Analysis, Bogotá Summer School in Economics (4.7/5.0).",
      term: "2026",
    },
    {
      school: "Berchmans School, Cali",
      degree: "High School Diploma (Bachiller)",
      detail: "",
      term: "2022",
    },
  ];
  return (
    <SectionBlock id="education" title="education">
      <ul className="divide-y divide-border/60">
        {items.map((it) => (
          <li key={it.school} className="group py-5 grid md:grid-cols-[1fr_auto] gap-1 md:gap-8 transition-colors hover:bg-muted/20 -mx-4 px-4 rounded-md">
            <div className="relative">
              <span className="hidden md:block absolute -left-4 top-1.5 h-5 w-0.5 bg-primary/0 group-hover:bg-primary transition-colors" />
              <div className="font-serif text-[1.05rem] text-foreground">{it.school}</div>
              <div className="text-sm text-muted-foreground">{it.degree}</div>
              {it.detail && <div className="text-sm text-foreground/80 mt-1">{it.detail}</div>}
            </div>
            <div className="font-mono text-xs text-muted-foreground md:text-right md:pt-1.5">{it.term}</div>
          </li>
        ))}
      </ul>
    </SectionBlock>
  );
}


function Contact() {
  return (
    <SectionBlock id="contact" title="contact">
      <p className="text-foreground/85 leading-relaxed mb-5 max-w-2xl">
        I welcome correspondence from researchers, faculty and graduate programs interested in
        theoretical and empirical microeconomics, applied econometrics, causal inference, or
        the economics of crime in Latin America.
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

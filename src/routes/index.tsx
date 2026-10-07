import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, FileText, ExternalLink } from "lucide-react";
import { PageShell, SectionBlock, Entry, asset, EMAIL, LINKEDIN, CV_URL } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Miguel Ángel Torres Montoya — Economics" },
      { name: "description", content: "Undergraduate researcher in economics at Universidad Icesi (CIENFI). Research interests: theoretical models, applied econometrics, causal inference, and the economics of crime." },
      { property: "og:title", content: "Miguel Ángel Torres Montoya — Economics" },
      { property: "og:description", content: "Undergraduate researcher in economics. Theoretical models, applied econometrics, causal inference, and the economics of crime." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <About />
      <Education />
      <Honors />
      <Contact />
    </PageShell>
  );
}

function About() {
  return (
    <section id="about" className="pt-16 pb-14 px-6 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-4xl leading-tight mb-2">
          Miguel Ángel <span className="text-primary">Torres Montoya</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          <a href="https://www.icesi.edu.co/facultad-negocios-economia/" target="_blank" rel="noreferrer" className="text-primary hover:underline">Faculty of Business and Economics</a>,{" "}
          <a href="https://www.icesi.edu.co" target="_blank" rel="noreferrer" className="text-primary hover:underline">Universidad Icesi</a>.
        </p>

        <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <div className="space-y-5 text-[1.02rem] leading-[1.75] text-foreground/85">
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
              <a href={`mailto:${EMAIL}`} aria-label="Email" className="hover:text-primary transition"><Mail className="size-5" /></a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition"><Linkedin className="size-5" /></a>
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
               projects identify the effect of judge sex on criminal sentencing through
               institutional random assignment, examine state capacity and the effects of
               full-school-day education reform on dropout, and study the cocaine value chain
               and the limits of eradication policy.
            </p>
            <p>
              I am interested in pursuing graduate studies in economics. You can find a recent
              copy of my CV{" "}
              <a href={CV_URL} target="_blank" rel="noreferrer" className="text-primary hover:underline">here</a>.
            </p>
          </div>

          <aside className="md:w-48 mx-auto md:mx-0">
            <div className="rounded-full overflow-hidden ring-1 ring-border w-40 h-40 md:w-48 md:h-48 mx-auto">
              <img src={asset("profile/miguel-portrait.jpeg")} alt="Miguel Ángel Torres Montoya" className="w-full h-full object-cover object-[50%_30%]" />
            </div>
            <div className="mt-5 text-xs leading-relaxed text-muted-foreground whitespace-pre-line text-center md:text-left">
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
  return (
    <SectionBlock id="education" title="education">
      <ul className="divide-y divide-border/60">
        <Entry
          title="Universidad Icesi"
          subtitle="B.A. in Economics · GPA 4.5/5.0"
          detail="Graduate-level coursework: Quantitative and Computational Methods (4.8), Advanced Macroeconomics (4.8), Advanced Microeconomics (in progress), Game Theory and Asymmetric Information (in progress), Advanced Econometrics (in progress)."
          term="Expected 2027"
        />
        <Entry
          title="Universidad del Rosario, Bogotá"
          subtitle="Bogotá Summer School in Economics"
          detail="Real Analysis (4.7/5.0)."
          term="2026"
        />
      </ul>
    </SectionBlock>
  );
}

function Honors() {
  return (
    <SectionBlock id="honors" title="honors and training">
      <ul className="divide-y divide-border/60">
        <Entry
          title="1st Place, Undergraduate Presentation Competition on Behavioral Economics"
          subtitle="Universidad Icesi"
          term="2026"
          links={[{ href: asset("articles/ponencia_comportamiento.pdf"), label: "Slides" }]}
        />
        <Entry
          title="3rd Place, Undergraduate Presentation Competition on the Economics of Crime"
          subtitle="Universidad Icesi"
          term="2025"
          links={[{ href: asset("articles/ponencia_crimen.pdf"), label: "Slides" }]}
        />
        <Entry title="1st Place, Undergraduate Economic Debate Competition" subtitle="Universidad Icesi" term="2023" />
        <Entry
          title="IEM01x: Evaluating Impact in Low- and Middle-Income Countries"
          subtitle="World Bank Group, via edX"
          term="2026"
          links={[{ href: "https://courses.edx.org/certificates/394dc8c9c5b1481bb28bcd3eb8a6a856", label: "Certificate" }]}
        />
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
          <Mail className="size-4 text-muted-foreground" />
          <a href="mailto:miguel.torres2@u.icesi.edu.co" className="hover:text-primary hover:underline">miguel.torres2@u.icesi.edu.co</a>
        </li>
        <li className="flex items-center gap-3">
          <Linkedin className="size-4 text-muted-foreground" />
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-primary hover:underline inline-flex items-center gap-1">
            linkedin.com/in/miguel-angel-torres-montoya-economics <ExternalLink className="size-3" />
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

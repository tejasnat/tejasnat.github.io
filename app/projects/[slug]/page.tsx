import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/ProjectVisual";
import { getProject, projects } from "@/lib/projects";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main>
      <section className="case-hero dark-section">
        <div className="hero-grid-overlay" />
        <div className="shell case-hero-grid">
          <div className="case-copy">
            <Link className="back-link" href="/projects">← All projects</Link>
            <div className="project-meta"><span>{project.number} · {project.category}</span><span>{project.date}</span></div>
            <h1>{project.title}</h1>
            <p>{project.brief}</p>
            <div className="chip-row dark-chips">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          </div>
          <ProjectVisual type={project.visual} label={project.shortTitle} />
        </div>
        <div className="shell fact-strip">
          {project.facts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}
        </div>
      </section>

      <section className="section case-body">
        <div className="shell case-layout">
          <aside className="case-aside">
            <span className="section-kicker">Project anatomy</span>
            <nav aria-label="On this page"><a href="#challenge">Challenge</a><a href="#approach">Approach</a><a href="#findings">Findings</a><a href="#reflection">Reflection</a></nav>
          </aside>
          <div className="case-content">
            <section id="challenge" className="case-section"><span className="case-number">01</span><div><h2>The challenge</h2><p className="lead-copy">{project.challenge}</p></div></section>
            <section id="approach" className="case-section"><span className="case-number">02</span><div><h2>How I approached it</h2><div className="case-points">{project.approach.map((item, i) => <article key={item}><strong>0{i + 1}</strong><p>{item}</p></article>)}</div></div></section>
            <section id="findings" className="case-section"><span className="case-number">03</span><div><h2>What the work revealed</h2><ul className="finding-list">{project.findings.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
            <section id="reflection" className="case-section reflection-section"><span className="case-number">04</span><div><h2>Engineering reflection</h2><blockquote>{project.reflection}</blockquote><div className="focus-list"><span>Focus areas</span>{project.focus.map((item) => <strong key={item}>{item}</strong>)}</div></div></section>
          </div>
        </div>
      </section>

      <section className="next-project dark-section">
        <Link href={`/projects/${next.slug}`} className="shell next-project-link"><span>Next case study · {next.number}</span><h2>{next.shortTitle}</h2><strong>↗</strong></Link>
      </section>
    </main>
  );
}

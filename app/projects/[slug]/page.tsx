import { notFound } from "next/navigation";
import Link from "next/link";
import { ProjectVisual } from "@/components/ProjectVisual";
import { getProject, projects } from "@/lib/projects";

const contributions: Record<string, string> = {
  "tesla-turbine": "Developed the CAD assembly, connected geometry choices to the inter-disk flow problem, and reviewed the design for bypass, sealing, alignment and manufacturability.",
  "aerodynamic-ml-model": "Prepared the aerodynamic dataset and built the two-stage classification and regression workflow as an individual machine-learning capstone.",
  "joule-heating-multiphysics": "Built the coupled electric–thermal model, investigated the unrealistic first temperature response and revised the boundary-condition logic.",
  "public-transport-electrification": "Contributed to the technical, economic and policy synthesis and presented the first-author review with the project team.",
  "autonomous-underwater-vehicle": "Worked on mechanical CAD, structural-component concepts and subsystem packaging within the university AUV team.",
  "bismuth-oxide-tribology": "Reviewed nanoparticle lubrication mechanisms and connected particle characteristics to friction, wear and dispersion stability.",
  "roof-heat-transfer": "Modelled the combined conduction, convection and radiation problem in MATLAB and ANSYS and compared material and surface scenarios.",
  "transient-heat-conduction": "Formulated and implemented the finite-difference solution, tested numerical sensitivity and checked the result against analytical trends.",
};

const contexts: Record<string, string> = {
  "tesla-turbine": "Course project · Team of two",
  "aerodynamic-ml-model": "Machine-learning capstone · Individual",
  "joule-heating-multiphysics": "Multiphysics project · Academic",
  "public-transport-electrification": "Review paper · Team research",
  "autonomous-underwater-vehicle": "University AUV team · Mechanical subsystem",
  "bismuth-oxide-tribology": "Ongoing research study",
  "roof-heat-transfer": "Heat-transfer project · Academic",
  "transient-heat-conduction": "Numerical-methods project · Academic",
};

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
      <section className="case-hero dark-section case-hero-v2">
        <div className="hero-grid-overlay" />
        <div className="shell case-title-block">
          <Link className="back-link" href="/projects">← Project archive</Link>
          <div className="project-meta"><span>{project.number} · {project.category}</span><span>{project.date}</span></div>
          <h1>{project.title}</h1>
          <p className="case-outcome">{project.brief}</p>
        </div>

        <div className="shell case-visual-stage">
          <ProjectVisual type={project.visual} label={project.shortTitle} />
          <div className="case-stage-notes">
            <div><span>Context</span><strong>{contexts[project.slug]}</strong></div>
            <div><span>My contribution</span><p>{contributions[project.slug]}</p></div>
            <div><span>Tools</span><div className="chip-row dark-chips">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div>
          </div>
        </div>

        <div className="shell fact-strip">
          {project.facts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}
        </div>
      </section>

      <section className="section case-body case-body-v2">
        <div className="shell case-layout">
          <aside className="case-aside">
            <span className="section-kicker">Case study</span>
            <nav aria-label="On this page"><a href="#objective">Objective</a><a href="#contribution">Contribution</a><a href="#method">Method</a><a href="#results">Results</a><a href="#next">Next iteration</a></nav>
          </aside>

          <div className="case-content">
            <section id="objective" className="case-section case-objective"><span className="case-number">01</span><div><span className="case-label">Objective and motivation</span><h2>The engineering question</h2><p className="lead-copy">{project.challenge}</p></div></section>

            <section id="contribution" className="case-section contribution-section"><span className="case-number">02</span><div><span className="case-label">Role clarity</span><h2>What I was responsible for</h2><div className="contribution-card"><p>{contributions[project.slug]}</p><div className="focus-list">{project.focus.map((item) => <strong key={item}>{item}</strong>)}</div></div></div></section>

            <section id="method" className="case-section"><span className="case-number">03</span><div><span className="case-label">Technical approach</span><h2>From question to model</h2><div className="case-workflow">{project.approach.map((item, i) => <article key={item}><strong>0{i + 1}</strong><div className="workflow-node" /><p>{item}</p></article>)}</div></div></section>

            <section id="results" className="case-section"><span className="case-number">04</span><div><span className="case-label">Evidence and interpretation</span><h2>What the work revealed</h2><div className="result-grid">{project.findings.map((item, i) => <article key={item}><span>R{i + 1}</span><p>{item}</p></article>)}</div></div></section>

            <section id="next" className="case-section reflection-section"><span className="case-number">05</span><div><span className="case-label">Limitations and next iteration</span><h2>What I would carry forward</h2><blockquote>{project.reflection}</blockquote></div></section>
          </div>
        </div>
      </section>

      <section className="next-project dark-section">
        <Link href={`/projects/${next.slug}`} className="shell next-project-link"><span>Next case study · {next.number}</span><h2>{next.shortTitle}</h2><strong>↗</strong></Link>
      </section>
    </main>
  );
}

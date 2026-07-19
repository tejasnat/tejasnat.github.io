import { projects } from "@/lib/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import Link from "next/link";

export default function Home() {
  const featured = projects.slice(0, 4);
  return (
    <main>
      <section className="hero dark-section">
        <div className="hero-grid-overlay" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <span className="eyebrow"><i /> Mechanical engineering · computational analysis</span>
            <h1>Designing where <em>physics, computation</em> and manufacturability meet.</h1>
            <p>I’m Tejas Natekar, a Mechanical Engineering undergraduate exploring thermal-fluid systems, simulation and mechanical design for aerospace and mobility applications.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/projects">Explore projects <span>↗</span></Link>
              <a className="button button-ghost" href="/tejasnatekar/Tejas-Natekar-CV.docx" download>Download CV <span>↓</span></a>
            </div>
          </div>
          <div className="hero-instrument" aria-label="Engineering disciplines represented as an abstract system map">
            <div className="orbit orbit-one"><span>CFD</span></div>
            <div className="orbit orbit-two"><span>FEM</span></div>
            <div className="orbit orbit-three"><span>CAD</span></div>
            <div className="instrument-core"><strong>TN</strong><small>ME · 27</small></div>
            <div className="instrument-axis axis-x" />
            <div className="instrument-axis axis-y" />
            <span className="instrument-label top">THERMAL — FLUID</span>
            <span className="instrument-label bottom">DESIGN — VALIDATE — ITERATE</span>
          </div>
        </div>
        <div className="shell hero-stats">
          <div><strong>08</strong><span>Engineering case studies</span></div>
          <div><strong>03</strong><span>Core tracks: design, simulation, research</span></div>
          <div><strong>2027</strong><span>B.Tech Mechanical Engineering</span></div>
        </div>
      </section>

      <section className="section featured-section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><span className="section-kicker">Selected work</span><h2>Projects built around real engineering questions.</h2></div>
            <p>Each case study shows the problem, method, constraints and what changed after the first answer was not good enough.</p>
          </div>
          <div className="featured-grid">
            {featured.map((project, index) => (
              <Link className={`featured-card ${index === 0 ? "featured-wide" : ""}`} href={`/projects/${project.slug}`} key={project.slug}>
                <ProjectVisual type={project.visual} label={project.shortTitle} />
                <div className="featured-card-copy">
                  <div className="project-meta"><span>{project.number} · {project.category}</span><span>{project.date}</span></div>
                  <h3>{project.shortTitle}</h3>
                  <p>{project.summary}</p>
                  <span className="text-link">View case study ↗</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="center-action"><Link className="button button-outline" href="/projects">View all eight projects <span>↗</span></Link></div>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell process-layout">
          <div className="section-heading">
            <span className="section-kicker light">Engineering approach</span>
            <h2>Model the system.<br />Interrogate the result.<br /><em>Improve the design.</em></h2>
          </div>
          <div className="process-list">
            <article><span>01</span><div><h3>Frame the physics</h3><p>Define the system, assumptions, loads, boundaries and the quantity that actually matters.</p></div></article>
            <article><span>02</span><div><h3>Build and simulate</h3><p>Translate the problem into CAD, analytical reasoning or a numerical model with traceable choices.</p></div></article>
            <article><span>03</span><div><h3>Challenge the output</h3><p>Look for sensitivity, numerical artefacts, poor constraints and practical failure points.</p></div></article>
            <article><span>04</span><div><h3>Carry the learning forward</h3><p>Use what went wrong to make the next geometry, model or engineering decision more credible.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section experience-preview">
        <div className="shell experience-card">
          <div className="experience-marker"><span>INDUSTRIAL<br />EXPOSURE</span><strong>AZAD</strong><small>HYDERABAD · 2025</small></div>
          <div className="experience-copy">
            <span className="section-kicker">Aerospace manufacturing</span>
            <h2>From turbine-blade geometry to the discipline of making it repeatedly.</h2>
            <p>At AZAD Engineering, I followed the manufacturing and quality chain behind precision aerospace components—from multi-axis machining and tooling to CMM inspection, tolerance verification and process control.</p>
            <Link className="text-link dark-link" href="/experience">Explore the experience ↗</Link>
          </div>
          <div className="experience-tags"><span>5-axis CNC</span><span>CMM inspection</span><span>Tolerance verification</span><span>Quality systems</span></div>
        </div>
      </section>

      <section className="section toolkit-section">
        <div className="shell">
          <div className="section-heading split-heading"><div><span className="section-kicker">Technical toolkit</span><h2>Tools are useful. Engineering judgement is the multiplier.</h2></div><p>Working exposure across CAD, numerical modelling, analysis and programming.</p></div>
          <div className="tool-grid">
            <article><span>01</span><h3>Design</h3><p>SolidWorks · Inventor · AutoCAD</p></article>
            <article><span>02</span><h3>Analysis</h3><p>ANSYS · CFD · FEM · Multiphysics</p></article>
            <article><span>03</span><h3>Computation</h3><p>MATLAB · Python · C/C++</p></article>
            <article><span>04</span><h3>Manufacturing</h3><p>CNC coding · Metrology · Process observation</p></article>
          </div>
        </div>
      </section>
    </main>
  );
}

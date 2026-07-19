import Link from "next/link";
import { ProjectVisual } from "@/components/ProjectVisual";
import { EngineeringOrbit } from "@/components/EngineeringOrbit";
import { projects } from "@/lib/projects";

const featuredSlugs = [
  "tesla-turbine",
  "aerodynamic-ml-model",
  "joule-heating-multiphysics",
  "autonomous-underwater-vehicle",
];

const evidence: Record<string, string[]> = {
  "tesla-turbine": ["12-disk rotor", "2 mm baseline spacing", "CAD + CFD review"],
  "aerodynamic-ml-model": ["3 Reynolds regimes", "Stall classification", "Lift prediction"],
  "joule-heating-multiphysics": ["Coupled physics", "Boundary sensitivity", "Physical validation"],
  "autonomous-underwater-vehicle": ["Mechanical packaging", "Subsystem interfaces", "Team integration"],
};

export default function Home() {
  const featured = featuredSlugs.map((slug) => projects.find((project) => project.slug === slug)!);

  return (
    <main>
      <section className="hero dark-section portfolio-hero">
        <div className="hero-grid-overlay" />
        <div className="shell personal-hero">
          <div className="hero-name-block">
            <span className="eyebrow"><i /> Mechanical engineering portfolio</span>
            <h1>Tejas Natekar</h1>
            <div className="hero-keywords" aria-label="Areas of interest">
              <span>Mechanical Design</span>
              <span>CFD &amp; Numerical Modelling</span>
              <span>Thermal-Fluid Systems</span>
              <span>Aerospace &amp; Mobility</span>
              <span>Aviation Enthusiast</span>
            </div>
          </div>

          <div className="hero-profile-grid">
            <figure className="hero-portrait">
              <img src="/tejas-natekar-portrait.jpg" alt="Tejas Natekar at NCSPER 2025" />
              <figcaption><span>Tejas Natekar</span><strong>Mechanical Engineering · 2027</strong></figcaption>
            </figure>

            <div className="hero-summary">
              <span className="section-kicker">About me</span>
              <h2>Hi, I’m Tejas—a mechanical engineering student interested in how physical ideas become credible designs.</h2>
              <p>I’m currently in the fourth year of my B.Tech in Mechanical Engineering at Mahindra University’s École Centrale School of Engineering. I’m drawn to problems where fluid flow, heat transfer, computation and mechanical design have to come together to produce something that can work beyond the screen.</p>
              <p>My work spans CAD assemblies, CFD and thermal-fluid analysis, multiphysics modelling, numerical methods and machine learning. I have designed and analysed a Tesla turbine, developed an aerodynamic stall-classification and lift-prediction workflow, worked on AUV mechanical packaging, and studied precision aerospace manufacturing at AZAD Engineering.</p>
              <p>Going forward, I’m looking for opportunities in mechanical design, CFD and aerospace engineering where analysis can guide a practical, buildable decision. Outside formal coursework, I follow aviation closely and enjoy learning through travel, engineering systems and hands-on experimentation.</p>
              <div className="hero-actions">
                <Link className="button button-primary" href="#selected-work">Explore my work <span>↓</span></Link>
                <a className="button button-ghost" href="/Tejas-Natekar-CV.docx" download>Download résumé <span>↓</span></a>
                <a className="text-link hero-contact" href="mailto:tejasnatekar10@gmail.com">Contact me ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section selected-work" id="selected-work">
        <div className="shell">
          <div className="section-heading split-heading portfolio-heading">
            <div><span className="section-kicker">Selected engineering work</span><h2>Four projects. Four different ways of answering a physical question.</h2></div>
            <p>Each case study identifies the objective, my contribution, the technical approach, the evidence and what I would improve next.</p>
          </div>

          <div className="portfolio-grid">
            {featured.map((project, index) => (
              <Link className={`portfolio-card portfolio-card-${index + 1}`} href={`/projects/${project.slug}`} key={project.slug}>
                <div className="portfolio-card-visual">
                  <ProjectVisual type={project.visual} label={project.shortTitle} />
                  <span className="figure-label">Fig. 0{index + 1} · {project.category}</span>
                </div>
                <div className="portfolio-card-copy">
                  <div className="project-meta"><span>{project.number} · {project.date}</span><span>Case study ↗</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul>{evidence[project.slug].map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </Link>
            ))}
          </div>

          <div className="archive-link"><span>More numerical, thermal and research work is available in the complete project archive.</span><Link className="button button-outline" href="/projects">View all projects <span>↗</span></Link></div>
        </div>
      </section>

      <section className="section method-section">
        <div className="shell method-layout">
          <div className="method-intro">
            <span className="section-kicker">How I work</span>
            <h2>Make the assumptions visible. Then make the result earn trust.</h2>
            <p>My projects follow a common engineering loop, whether the tool is CAD, CFD, finite differences or machine learning.</p>
          </div>
          <ol className="method-steps">
            <li><span>01</span><div><strong>Frame</strong><p>Define the system, objective, constraints and measurable outputs.</p></div></li>
            <li><span>02</span><div><strong>Model</strong><p>Translate the physics into geometry, equations and traceable assumptions.</p></div></li>
            <li><span>03</span><div><strong>Interrogate</strong><p>Check sensitivity, numerical behaviour and physical consistency.</p></div></li>
            <li><span>04</span><div><strong>Iterate</strong><p>Carry limitations and evidence into the next design decision.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section experience-preview professional-experience">
        <div className="shell experience-card">
          <div className="experience-marker"><span>INDUSTRIAL<br />EXPOSURE</span><strong>AZAD</strong><small>HYDERABAD · 2025</small></div>
          <div className="experience-copy">
            <span className="section-kicker">Precision aerospace manufacturing</span>
            <h2>Seeing how complex airfoil geometry becomes a repeatable component.</h2>
            <p>I followed the manufacturing and quality chain behind precision aerospace components—from multi-axis machining and tooling to CMM inspection, tolerance verification and process control.</p>
            <Link className="text-link dark-link" href="/experience">View industrial experience ↗</Link>
          </div>
          <div className="experience-tags"><span>5-axis machining</span><span>Airfoil geometry</span><span>CMM inspection</span><span>Quality systems</span></div>
        </div>
      </section>

      <section className="section capability-section">
        <div className="shell">
          <div className="section-heading split-heading portfolio-heading"><div><span className="section-kicker">Technical capability</span><h2>Skills connected to work—not a list of software logos.</h2></div><p>The strongest evidence for each capability is linked through the projects above.</p></div>
          <div className="capability-orbit-layout">
            <div className="skill-orbit-panel"><EngineeringOrbit /><p>Design, computation and physical validation are not separate tracks in my work—they inform the same engineering decision.</p></div>
            <div className="evidence-grid">
              <article><span>01 · Design</span><h3>Mechanical systems and assemblies</h3><p>SolidWorks · Inventor · packaging · design for assembly</p></article>
              <article><span>02 · Simulation</span><h3>CFD, thermal and multiphysics analysis</h3><p>ANSYS · fluid flow · heat transfer · coupled physics</p></article>
              <article><span>03 · Computation</span><h3>Numerical models and engineering data</h3><p>MATLAB · Python · finite differences · machine learning</p></article>
              <article><span>04 · Manufacturing</span><h3>Process-aware engineering judgement</h3><p>CNC exposure · metrology · CMM · tolerance awareness</p></article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

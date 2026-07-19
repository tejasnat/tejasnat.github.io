import Link from "next/link";

export const metadata = { title: "About | Tejas Natekar" };

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero dark-section about-hero">
        <div className="hero-grid-overlay" />
        <div className="shell about-hero-grid">
          <div className="page-hero-copy">
            <span className="eyebrow"><i /> About Tejas</span>
            <h1>Curious about how systems behave—and what makes them <em>credible.</em></h1>
          </div>
          <div className="about-coordinate"><span>17.3850° N</span><span>78.4867° E</span><strong>HYD</strong><small>INDIA</small></div>
        </div>
      </section>

      <section className="section profile-section">
        <div className="shell profile-grid">
          <div><span className="section-kicker">Profile</span><h2>Mechanical engineering, viewed through design, computation and the realities of manufacture.</h2></div>
          <div className="profile-copy">
            <p className="lead-copy">I’m a B.Tech Mechanical Engineering student at Mahindra University’s École Centrale School of Engineering, graduating in 2027.</p>
            <p>My interests sit at the intersection of thermal-fluid systems, CFD, finite-element analysis, numerical modelling and mechanical design. I’m especially drawn to aerospace and mobility problems because they demand both analytical depth and uncompromising attention to practical constraints.</p>
            <p>Across my projects, I have learned to value the uncomfortable part of engineering: investigating the result that looks too good, acknowledging what a first design missed, and using that evidence to improve the next iteration.</p>
          </div>
        </div>
      </section>

      <section className="section education-section">
        <div className="shell education-grid">
          <div className="education-main"><span className="section-kicker light">Education</span><span className="education-date">2023 — 2027</span><h2>Bachelor of Technology<br />Mechanical Engineering</h2><p>Mahindra University · École Centrale School of Engineering</p></div>
          <div className="coursework"><span>Relevant coursework</span><div className="course-grid"><strong>Thermodynamics</strong><strong>Fluid Mechanics</strong><strong>Computational Fluid Dynamics</strong><strong>Finite Element Method</strong><strong>Material Science</strong><strong>Design of Machine Elements</strong><strong>Mechanics & Dynamics</strong><strong>Heat Transfer</strong></div></div>
        </div>
      </section>

      <section className="section capability-section">
        <div className="shell">
          <div className="section-heading split-heading"><div><span className="section-kicker">Capabilities</span><h2>A developing toolkit, organised around engineering work.</h2></div><p>Working exposure developed through academic projects, team design and industrial observation.</p></div>
          <div className="capability-grid">
            <article><span>Design & CAD</span><h3>SolidWorks<br />Inventor<br />AutoCAD</h3><p>Part modelling, assemblies, system layouts and design-for-integration reasoning.</p></article>
            <article><span>Simulation</span><h3>ANSYS<br />CFD · FEM<br />Multiphysics</h3><p>Boundary-condition definition, coupled analysis, result interpretation and model scrutiny.</p></article>
            <article><span>Computation</span><h3>MATLAB<br />Python<br />C/C++</h3><p>Numerical methods, data-driven models, preprocessing and engineering calculations.</p></article>
            <article><span>Manufacturing</span><h3>CNC coding<br />Metrology<br />Quality</h3><p>Process observation, dimensional verification and awareness of production constraints.</p></article>
          </div>
        </div>
      </section>

      <section className="section direction-section">
        <div className="shell direction-card">
          <div><span className="section-kicker">What I’m looking for</span><h2>Problems in mechanical design, thermal-fluid systems and aerospace engineering where analysis has to inform a buildable decision.</h2></div>
          <div className="direction-actions"><a className="button button-primary" href="mailto:tejasnatekar10@gmail.com">Email me <span>↗</span></a><a className="button button-outline" href="https://www.linkedin.com/in/tejasnatekar" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><Link className="button button-outline" href="/projects">View projects <span>↗</span></Link></div>
        </div>
      </section>
    </main>
  );
}

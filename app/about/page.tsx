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
            <h1>Learning how complex physical systems are designed, analysed and made <em>reliable.</em></h1>
          </div>
          <div className="about-coordinate"><span>17.3850° N</span><span>78.4867° E</span><strong>HYD</strong><small>INDIA</small></div>
        </div>
      </section>

      <section className="section profile-section">
        <div className="shell profile-grid">
          <div><span className="section-kicker">Profile</span><h2>Mechanical engineering through design, computation and physical reasoning.</h2></div>
          <div className="profile-copy">
            <p className="lead-copy">I’m a B.Tech Mechanical Engineering student at Mahindra University’s École Centrale School of Engineering, graduating in 2027.</p>
            <p>My interests span mechanical design, thermal-fluid systems, CFD, finite-element analysis, numerical modelling and multiphysics. I’m particularly interested in technical environments where mechanical engineering contributes to scientific research, aerospace, energy and other complex systems.</p>
            <p>Through my projects, I have developed a methodical approach: define the physical problem, choose an appropriate model, question the numerical behaviour, compare the result with engineering expectations and communicate the limitations clearly. I value the point where an unexpected result leads to a better question or a more credible next iteration.</p>
            <p>I’m motivated by multidisciplinary work, where mechanical engineering connects with computation, manufacturing, electronics and experimental systems. Experience in student engineering teams and as Treasurer of the IEEE Student Branch has also strengthened my ability to coordinate responsibilities, communicate clearly and contribute within a team.</p>
          </div>
        </div>
      </section>

      <section className="section education-section">
        <div className="shell education-grid">
          <div className="education-main"><span className="section-kicker light">Education</span><span className="education-date">2023 — 2027</span><h2>Bachelor of Technology<br />Mechanical Engineering</h2><p>Mahindra University · École Centrale School of Engineering</p></div>
          <div className="coursework"><span>Relevant coursework</span><div className="course-grid"><strong>Thermodynamics</strong><strong>Fluid Mechanics</strong><strong>Computational Fluid Dynamics</strong><strong>Finite Element Method</strong><strong>Materials Science</strong><strong>Design of Machine Elements</strong><strong>Mechanics & Dynamics</strong><strong>Heat Transfer</strong></div></div>
        </div>
      </section>

      <section className="section capability-section">
        <div className="shell">
          <div className="section-heading split-heading"><div><span className="section-kicker">Capabilities</span><h2>A developing toolkit, organised around engineering work.</h2></div><p>Developed through academic projects, team design work and industrial exposure.</p></div>
          <div className="capability-grid">
            <article><span>Design & CAD</span><h3>SolidWorks<br />Inventor<br />AutoCAD</h3><p>Part modelling, assemblies, system layouts and design-for-integration reasoning.</p></article>
            <article><span>Simulation</span><h3>ANSYS<br />CFD · FEM<br />Multiphysics</h3><p>Boundary-condition definition, coupled analysis, result interpretation and model scrutiny.</p></article>
            <article><span>Computation</span><h3>MATLAB<br />Python<br />C/C++</h3><p>Numerical methods, data-driven models, preprocessing and engineering calculations.</p></article>
            <article><span>Manufacturing</span><h3>CNC processes<br />Metrology<br />Quality</h3><p>Process observation, dimensional verification and awareness of production constraints.</p></article>
          </div>
        </div>
      </section>

      <section className="section direction-section">
        <div className="shell direction-card">
          <div><span className="section-kicker">What I’m looking for</span><h2>An opportunity to contribute to multidisciplinary engineering projects involving mechanical design, simulation, thermal-fluid systems or scientific equipment—and to learn from the teams responsible for building and operating them.</h2></div>
          <div className="direction-actions"><a className="button button-primary" href="mailto:tejasnatekar10@gmail.com">Email me <span>↗</span></a><a className="button button-outline" href="https://www.linkedin.com/in/tejasnatekar" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><Link className="button button-outline" href="/projects">View projects <span>↗</span></Link></div>
        </div>
      </section>
    </main>
  );
}

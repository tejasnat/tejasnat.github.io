import Link from "next/link";

export default function Home() {
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
              <span>Multiphysics</span>
              <span>Aerospace &amp; Scientific Engineering</span>
            </div>
          </div>

          <div className="hero-profile-grid">
            <figure className="hero-portrait">
              <img src="/tejas-natekar-portrait.jpg" alt="Tejas Natekar at NCSPER 2025" />
              <figcaption><span>Tejas Natekar</span><strong>Mechanical Engineering · 2027</strong></figcaption>
            </figure>

            <div className="hero-summary">
              <span className="section-kicker">About me</span>
              <h2>Hi, I’m Tejas—a mechanical engineering student who enjoys understanding, designing and improving physical systems.</h2>
              <p>I’m currently in the fourth year of my B.Tech in Mechanical Engineering at Mahindra University’s École Centrale School of Engineering. My interests lie in mechanical design, fluid flow, heat transfer, numerical simulation and multiphysics. I enjoy translating engineering theory into models, designs and decisions that can be tested against physical behaviour.</p>
              <p>My work spans CAD assemblies, CFD and thermal-fluid analysis, multiphysics modelling, numerical methods and machine learning. I have designed and analysed a Tesla turbine, developed an aerodynamic stall-classification and lift-prediction workflow, and contributed to the mechanical design and subsystem packaging of an autonomous underwater vehicle.</p>
              <p>My experience at AZAD Engineering provided valuable exposure to the manufacturing and inspection of precision aerospace components, including multi-axis CNC machining, airfoil geometry inspection, CMM measurement and quality-control processes.</p>
              <p>I’m seeking opportunities to contribute to multidisciplinary technical projects while learning from experienced engineers and researchers. I’m particularly interested in environments where mechanical engineering supports advanced scientific, aerospace, energy, and large-scale technical systems. Beyond formal coursework, I maintain a strong interest in aviation and enjoy expanding my knowledge through hands-on experimentation and independent learning.</p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/projects">Explore my work <span>↗</span></Link>
                <a className="button button-ghost" href="/Tejas-Natekar-CV.docx" download>Download résumé <span>↓</span></a>
                <a className="text-link hero-contact" href="mailto:tejasnatekar10@gmail.com">Contact me ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section capability-section">
        <div className="shell">
          <div className="section-heading split-heading portfolio-heading">
            <div>
              <span className="section-kicker">Technical capability</span>
              <h2>An integrated engineering toolkit for the design, simulation, and analysis of physical systems.</h2>
            </div>
            <p>Developed through project work that combines design, simulation, computation and manufacturing awareness.</p>
          </div>

          <div className="capability-system">
            <aside className="capability-profile">
              <div className="capability-profile-top">
                <span>Engineering profile</span>
                <strong>ME / 04</strong>
              </div>
              <div className="capability-profile-copy">
                <p className="capability-overline">Design · Analyse · Validate</p>
                <h3>Mechanical engineering across design and analysis.</h3>
                <p>I combine physical reasoning with computational tools to define a problem, examine system behaviour and make practical engineering decisions.</p>
              </div>
              <div className="capability-profile-note">
                <span>Working approach</span>
                <p>Understand the physics → build the model → evaluate the result → improve the design</p>
              </div>
            </aside>

            <div className="capability-disciplines">
              <article className="capability-row">
                <span className="capability-number">01</span>
                <div className="capability-row-copy">
                  <span>Design</span>
                  <h3>Mechanical systems &amp; assemblies</h3>
                  <p>Developing parts, assemblies and subsystem layouts with attention to function, packaging and assembly.</p>
                </div>
                <div className="capability-tools">
                  <span>SolidWorks</span><span>Inventor</span><span>CAD assemblies</span><span>Design for assembly</span>
                </div>
              </article>

              <article className="capability-row">
                <span className="capability-number">02</span>
                <div className="capability-row-copy">
                  <span>Simulation</span>
                  <h3>CFD, thermal &amp; multiphysics analysis</h3>
                  <p>Setting up boundary conditions, interpreting field behaviour and connecting numerical results to physical systems.</p>
                </div>
                <div className="capability-tools">
                  <span>ANSYS</span><span>OpenFOAM</span><span>Fluid flow</span><span>Heat transfer</span>
                </div>
              </article>

              <article className="capability-row">
                <span className="capability-number">03</span>
                <div className="capability-row-copy">
                  <span>Computation</span>
                  <h3>Numerical models &amp; engineering data</h3>
                  <p>Using computation to model behaviour, analyse data and test engineering assumptions.</p>
                </div>
                <div className="capability-tools">
                  <span>MATLAB</span><span>Python</span><span>Finite differences</span><span>Machine learning</span>
                </div>
              </article>

              <article className="capability-row">
                <span className="capability-number">04</span>
                <div className="capability-row-copy">
                  <span>Manufacturing</span>
                  <h3>Process-aware engineering judgement</h3>
                  <p>Understanding how machining, inspection and tolerances influence the practicality of a design.</p>
                </div>
                <div className="capability-tools">
                  <span>Multi-axis CNC</span><span>CMM</span><span>Metrology</span><span>Tolerance awareness</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

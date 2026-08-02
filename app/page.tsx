import Link from "next/link";
import { EngineeringOrbit } from "@/components/EngineeringOrbit";

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
          <div className="section-heading split-heading portfolio-heading"><div><span className="section-kicker">Technical capability</span><h2>Skills connected to work—not a list of software logos.</h2></div><p>The strongest evidence for each capability is linked through the projects above.</p></div>
          <div className="capability-orbit-layout">
            <div className="skill-orbit-panel"><EngineeringOrbit /><p>I use design, computation and physical reasoning together to understand a system and make better engineering decisions.</p></div>
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

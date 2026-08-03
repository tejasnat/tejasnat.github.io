import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero dark-section portfolio-hero">
        <div className="portfolio-hero-banner">
          <img className="hero-train-background" src="/shinkansen-station.webp" alt="" aria-hidden="true" />
          <div className="hero-banner-shade" />
          <div className="shell hero-banner-content">
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

            <figure className="hero-avatar">
              <img src="/tejas-natekar-portrait.jpg" alt="Tejas Natekar" />
            </figure>
          </div>
        </div>

        <div className="shell personal-hero">
          <div className="hero-intro-panel">
            <div className="hero-summary">
              <span className="section-kicker">About me</span>
              <h2>Hi, I’m Tejas—a mechanical engineering student who enjoys understanding, designing and improving physical systems.</h2>
              <p>I’m currently in the fourth year of my B.Tech in Mechanical Engineering at Mahindra University’s École Centrale School of Engineering. My interests lie in mechanical design, fluid flow, heat transfer, numerical simulation and multiphysics. I enjoy translating engineering theory into models, designs and decisions that can be tested against physical behaviour.</p>
              <p>My work spans CAD assemblies, CFD and thermal-fluid analysis, multiphysics modelling, numerical methods and machine learning. I have designed and analysed a Tesla turbine, developed an aerodynamic stall-classification and lift-prediction workflow, and contributed to the mechanical design and subsystem packaging of an autonomous underwater vehicle.</p>
              <p>My experience at AZAD Engineering provided valuable exposure to the manufacturing and inspection of precision aerospace components, including multi-axis CNC machining, airfoil geometry inspection, CMM measurement and quality-control processes.</p>
              <p>I’m seeking opportunities to contribute to multidisciplinary technical projects while learning from experienced engineers and researchers. I’m particularly interested in environments where mechanical engineering supports advanced scientific, aerospace, energy, and large-scale technical systems. Beyond formal coursework, I maintain a strong interest in aviation and enjoy expanding my knowledge through hands-on experimentation and independent learning.</p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/projects">Explore my work <span>↗</span></Link>
                <a className="button button-ghost" href="/Tejas-Natekar-CV.pdf" target="_blank" rel="noopener noreferrer">View Resume <span>↗</span></a>
                <a className="text-link hero-contact" href="mailto:tejasnatekar10@gmail.com">Contact me ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section capability-section">
        <div className="shell">
          <div className="section-heading portfolio-heading capability-heading">
            <span className="section-kicker">Technical capability</span>
            <h2>Engineering Capabilities in Design, Simulation and Analysis</h2>
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
              </div>
            </aside>

            <div className="capability-disciplines">
              <article className="capability-row capability-row-design">
                <span className="capability-number">01</span>
                <div className="capability-design-body">
                  <div className="capability-row-copy capability-design-copy">
                    <span>Design</span>
                    <h3>Mechanical Systems &amp; Assemblies</h3>
                    <p>Developing parts, assemblies and subsystem layouts.</p>
                  </div>

                  <div className="design-software-grid" aria-label="Mechanical design software">
                    <div className="software-card software-solidworks">
                      <span className="software-logo" aria-hidden="true">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/b/bf/SOLIDWORKS_Logo.svg"
                          alt=""
                        />
                      </span>
                      <span className="software-name">SolidWorks</span>
                    </div>

                    <div className="software-card software-inventor">
                      <span className="software-logo" aria-hidden="true">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/8/81/Autodesk_Inventor_Logo.svg"
                          alt=""
                        />
                      </span>
                      <span className="software-name">Inventor</span>
                    </div>

                    <div className="software-card software-autocad">
                      <span className="software-logo" aria-hidden="true">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/d/db/Autodesk_AutoCAD_Logo.svg"
                          alt=""
                        />
                      </span>
                      <span className="software-name">AutoCAD</span>
                    </div>

                    <div className="software-card software-fusion">
                      <span className="software-logo" aria-hidden="true">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Autodesk_Fusion_Logo.svg"
                          alt=""
                        />
                      </span>
                      <span className="software-name">Fusion 360</span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="capability-row capability-row-expanded">
                <span className="capability-number">02</span>
                <div className="capability-detail-body">
                  <div className="capability-row-copy capability-expanded-copy">
                    <span>Simulation</span>
                    <h3>CFD, Thermal &amp; Multiphysics Analysis</h3>
                    <p>Defining boundary conditions, solving fluid, thermal and coupled-physics problems, and interpreting field behaviour.</p>
                  </div>

                  <div className="capability-tool-grid capability-tool-grid-three" aria-label="Engineering simulation software">
                    <div className="software-card">
                      <span className="software-logo" aria-hidden="true">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/1/14/Ansys_logo_%282019%29.svg"
                          alt=""
                        />
                      </span>
                      <span className="software-name">ANSYS</span>
                    </div>

                    <div className="software-card">
                      <span className="software-logo" aria-hidden="true">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/4/48/OpenFOAM_logo.svg"
                          alt=""
                        />
                      </span>
                      <span className="software-name">OpenFOAM</span>
                    </div>

                    <div className="software-card">
                      <span className="software-logo" aria-hidden="true">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/2/28/Comsol_logo.svg"
                          alt=""
                        />
                      </span>
                      <span className="software-name">COMSOL Multiphysics</span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="capability-row capability-row-expanded">
                <span className="capability-number">03</span>
                <div className="capability-detail-body">
                  <div className="capability-row-copy capability-expanded-copy">
                    <span>Computation</span>
                    <h3>Numerical Modelling &amp; Engineering Data</h3>
                    <p>Developing numerical models, analysing engineering data and applying machine-learning methods to physical systems.</p>
                  </div>

                  <div className="capability-tool-grid capability-tool-grid-three" aria-label="Computational engineering tools">
                    <div className="software-card software-matlab">
                      <span className="software-logo software-logo-symbol" aria-hidden="true">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
                          alt=""
                        />
                      </span>
                      <span className="software-name">MATLAB</span>
                    </div>

                    <div className="software-card software-python">
                      <span className="software-logo software-logo-symbol" aria-hidden="true">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                          alt=""
                        />
                      </span>
                      <span className="software-name">Python</span>
                    </div>

                    <div className="software-card software-machine-learning">
                      <span className="software-logo" aria-hidden="true">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
                          alt=""
                        />
                      </span>
                      <span className="software-name">Machine Learning</span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="capability-row capability-row-expanded capability-row-manufacturing">
                <span className="capability-number">04</span>
                <div className="capability-detail-body">
                  <div className="capability-row-copy capability-expanded-copy">
                    <span>Manufacturing &amp; Metrology</span>
                    <h3>CNC Programming, Manufacturing Processes &amp; Inspection</h3>
                    <p>Working knowledge of CNC programming fundamentals, including G- and M-codes, machining operations and process planning, along with an understanding of manufacturing methods and dimensional inspection using CMM.</p>
                  </div>

                  <div className="design-software-grid" aria-label="Manufacturing and inspection capabilities">
                    <div className="software-card technical-icon-card">
                      <span className="software-logo software-logo-symbol" aria-hidden="true">
                        <img
                          src="https://cdn.jsdelivr.net/npm/@mdi/svg@7.4.47/svg/code-braces.svg"
                          alt=""
                        />
                      </span>
                      <span className="software-name">CNC Programming</span>
                    </div>

                    <div className="software-card technical-icon-card">
                      <span className="software-logo software-logo-symbol" aria-hidden="true">
                        <img
                          src="https://cdn.jsdelivr.net/npm/@mdi/svg@7.4.47/svg/factory.svg"
                          alt=""
                        />
                      </span>
                      <span className="software-name">Manufacturing Processes</span>
                    </div>

                    <div className="software-card technical-icon-card">
                      <span className="software-logo software-logo-symbol" aria-hidden="true">
                        <img
                          src="https://cdn.jsdelivr.net/npm/@mdi/svg@7.4.47/svg/clipboard-text-outline.svg"
                          alt=""
                        />
                      </span>
                      <span className="software-name">Process Planning</span>
                    </div>

                    <div className="software-card technical-icon-card">
                      <span className="software-logo software-logo-symbol" aria-hidden="true">
                        <img
                          src="https://cdn.jsdelivr.net/npm/@mdi/svg@7.4.47/svg/axis-arrow.svg"
                          alt=""
                        />
                      </span>
                      <span className="software-name">CMM Inspection</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

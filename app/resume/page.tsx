import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Résumé | Tejas Natekar",
  description: "Résumé of Tejas Natekar, Mechanical Engineering student focused on design, simulation and computational engineering.",
};

const skills = [
  { label: "Design & CAD", value: "SolidWorks · Inventor · AutoCAD · Fusion 360" },
  { label: "Simulation", value: "ANSYS · OpenFOAM · COMSOL Multiphysics" },
  { label: "Computation", value: "MATLAB · Python · C/C++ · Machine Learning" },
  { label: "Engineering", value: "CFD · FEM/FEA · Heat Transfer · Numerical Methods" },
  { label: "Manufacturing", value: "CNC programming fundamentals · G/M codes · Process planning · CMM inspection" },
];

const projects = [
  {
    title: "Tesla Turbine — CAD & CFD",
    date: "Jan — Apr 2026",
    text: "Developed a 12-disk bladeless turbine assembly in SolidWorks and connected geometry decisions to pressure drop, viscous shear, torque and mass-flow behaviour. Reviewed the design for casing bypass, sealing, alignment and manufacturability.",
  },
  {
    title: "Aerodynamic Stall Detection & Lift Prediction",
    date: "2026",
    text: "Built an individual two-stage machine-learning workflow using UIUC airfoil data to classify pre- and post-stall behaviour and predict lift across multiple Reynolds-number regimes.",
  },
  {
    title: "Coupled Electro-Thermal Analysis",
    date: "Jan — Apr 2026",
    text: "Modelled Joule heating in a conductive plate using coupled electrical and thermal physics, investigating current-density concentration, heat generation and boundary-condition sensitivity.",
  },
  {
    title: "Autonomous Underwater Vehicle",
    date: "Feb 2024 — Feb 2025",
    text: "Contributed to mechanical CAD, structural-component concepts and compact subsystem layouts for a university AUV, with attention to mounting, assembly access and cross-subsystem integration.",
  },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <section className="resume-hero dark-section">
        <div className="hero-grid-overlay" />
        <div className="shell resume-hero-content">
          <div className="resume-hero-topline">
            <span className="eyebrow"><i /> Résumé · Mechanical Engineering</span>
            <a className="resume-pdf-link" href="/Tejas-Natekar-CV.pdf" target="_blank" rel="noreferrer">
              PDF Résumé <span>↗</span>
            </a>
          </div>
          <h1>Tejas Natekar</h1>
          <p className="resume-role">Mechanical Engineering · Design · Simulation · Computational Engineering</p>
          <div className="resume-contact-row">
            <a href="mailto:tejasnatekar10@gmail.com">tejasnatekar10@gmail.com</a>
            <a href="https://www.linkedin.com/in/tejasnatekar" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <span>Hyderabad, India</span>
          </div>
        </div>
      </section>

      <section className="resume-content-section">
        <div className="shell resume-layout">
          <div className="resume-main-column">
            <section className="resume-block">
              <div className="resume-section-label"><span>01</span><h2>Education</h2></div>
              <article className="resume-entry resume-education-entry">
                <div>
                  <h3>Mahindra University · École Centrale School of Engineering</h3>
                  <p>Bachelor of Technology · Mechanical Engineering</p>
                </div>
                <span className="resume-date">2023 — 2027</span>
              </article>
            </section>

            <section className="resume-block">
              <div className="resume-section-label"><span>02</span><h2>Experience</h2></div>
              <article className="resume-entry">
                <div className="resume-entry-heading">
                  <div>
                    <h3>AZAD Engineering Pvt. Ltd.</h3>
                    <p>Mechanical Engineering Internship · Hyderabad, India</p>
                  </div>
                  <span className="resume-date">Jul — Aug 2025</span>
                </div>
                <ul>
                  <li>Shadowed manufacturing and quality teams to understand the production and inspection of precision aerospace turbine-blade and airfoil components.</li>
                  <li>Studied multi-axis CNC machining, process sequencing, tool and fixture considerations, on-machine probing and surface-finishing operations.</li>
                  <li>Observed dimensional verification using CMM and quality controls for chord, thickness, leading and trailing edges, twist, stacking line, platforms and shrouds.</li>
                </ul>
              </article>
            </section>

            <section className="resume-block">
              <div className="resume-section-label"><span>03</span><h2>Selected Projects</h2></div>
              <div className="resume-project-list">
                {projects.map((project) => (
                  <article className="resume-project" key={project.title}>
                    <div className="resume-entry-heading">
                      <h3>{project.title}</h3>
                      <span className="resume-date">{project.date}</span>
                    </div>
                    <p>{project.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-block">
              <div className="resume-section-label"><span>04</span><h2>Research & Publication</h2></div>
              <article className="resume-entry">
                <h3>The Road to Electrifying India’s Public Transport</h3>
                <p className="resume-entry-subtitle">Review of technological, economic and policy perspectives · First-author research</p>
                <p>Examined electric-bus technology, charging infrastructure, energy storage, economics and policy to understand the system-level conditions shaping public-transport electrification in India. Presented as a conference paper with the project team.</p>
              </article>
            </section>
          </div>

          <aside className="resume-side-column">
            <section className="resume-side-block">
              <span className="section-kicker">Technical Skills</span>
              <div className="resume-skill-list">
                {skills.map((skill) => (
                  <div key={skill.label}>
                    <strong>{skill.label}</strong>
                    <p>{skill.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="resume-side-block">
              <span className="section-kicker">Leadership</span>
              <div className="resume-side-entry">
                <h3>Treasurer · IEEE Student Branch</h3>
                <p>Budget coordination, financial tracking and support for student technical activities.</p>
              </div>
            </section>

            <section className="resume-side-block">
              <span className="section-kicker">Engineering Focus</span>
              <div className="resume-focus-tags">
                <span>Mechanical Design</span>
                <span>CFD</span>
                <span>Thermal-Fluid Systems</span>
                <span>Multiphysics</span>
                <span>Aerospace</span>
                <span>Scientific Engineering</span>
              </div>
            </section>

            <section className="resume-side-block resume-coursework">
              <span className="section-kicker">Relevant Coursework</span>
              <p>Fluid Mechanics · Heat Transfer · Computational Fluid Dynamics · Finite Element Method · Thermodynamics · Design of Machine Elements · Materials Science · Mechanics & Dynamics</p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}

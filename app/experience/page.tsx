import Link from "next/link";

export const metadata = { title: "Experience | Tejas Natekar" };

const manufacturingChain = [
  { step: "01", title: "Process planning", text: "How material condition, datum strategy, tooling and machining sequence establish the route to a finished airfoil." },
  { step: "02", title: "Multi-axis machining", text: "Observation of 3–7 axis systems, including 5-axis roughing and finishing of complex turbine-blade surfaces." },
  { step: "03", title: "Surface and geometry", text: "Attention to chord, thickness, leading and trailing edges, twist, stacking line, metal angles, platforms and shrouds." },
  { step: "04", title: "Metrology", text: "CMM and dimensional-inspection practices used to compare manufactured geometry with controlled requirements." },
  { step: "05", title: "Quality loop", text: "How inward, in-process and final inspection feed process control, repeatability and risk-based quality decisions." },
];

export default function ExperiencePage() {
  return (
    <main>
      <section className="page-hero dark-section experience-hero">
        <div className="hero-grid-overlay" />
        <div className="shell page-hero-copy">
          <span className="eyebrow"><i /> Industrial exposure · Jul—Aug 2025</span>
          <h1>Understanding the discipline behind <em>precision aerospace manufacturing.</em></h1>
          <p>AZAD Engineering · Hyderabad, India</p>
        </div>
        <div className="shell manufacturing-band" aria-label="Manufacturing themes">
          <span>5-axis machining</span><span>Airfoil geometry</span><span>CMM inspection</span><span>Process quality</span>
        </div>
      </section>

      <section className="section experience-story">
        <div className="shell story-grid">
          <div><span className="section-kicker">The experience</span><h2>Following a precision component from machining strategy to final verification.</h2></div>
          <div className="story-copy">
            <p className="lead-copy">My internship was observational and shop-floor focused: I shadowed manufacturing and quality personnel to understand how aerospace turbine-blade geometry is produced, controlled and inspected.</p>
            <p>The value was in seeing the complete chain. Machining strategy, tool selection, fixture rigidity, probing, surface finishing and dimensional inspection do not operate separately—they collectively determine whether a complex component can be produced accurately and repeatedly.</p>
            <p>This experience gave physical context to concepts that can otherwise remain abstract in CAD and simulation: datum choices, tolerance accumulation, leading- and trailing-edge sensitivity, measurement access and the relationship between design intent and process capability.</p>
          </div>
        </div>
      </section>

      <section className="section chain-section">
        <div className="shell">
          <div className="section-heading split-heading"><div><span className="section-kicker light">Manufacturing chain</span><h2>One component.<br />A connected system of decisions.</h2></div><p>What I followed across the shop floor and quality environment.</p></div>
          <div className="chain-grid">
            {manufacturingChain.map((item) => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section learning-section">
        <div className="shell">
          <div className="section-heading"><span className="section-kicker">What changed in my thinking</span><h2>Precision is not added at inspection.<br />It is designed into the process.</h2></div>
          <div className="learning-grid">
            <article><strong>01</strong><h3>Geometry becomes a process problem</h3><p>A complex airfoil surface is only useful when it can be located, cut, accessed, finished and measured.</p></article>
            <article><strong>02</strong><h3>Measurement shapes confidence</h3><p>CMM strategy and dimensional controls turn nominal design intent into evidence about the manufactured part.</p></article>
            <article><strong>03</strong><h3>Repeatability matters as much as possibility</h3><p>A one-off successful cut is not a production system; fixtures, tools, controls and feedback must support consistent output.</p></article>
          </div>
          <div className="experience-note"><span>Nature of work</span><p>Observational internship and structured shop-floor learning—not hands-on operation of production machinery.</p></div>
        </div>
      </section>

      <section className="experience-project-link dark-section"><div className="shell"><span className="section-kicker light">Related case study</span><Link href="/projects/tesla-turbine"><h2>See how manufacturing constraints shaped my Tesla turbine review.</h2><strong>↗</strong></Link></div></section>
    </main>
  );
}

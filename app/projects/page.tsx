import { ProjectExplorer } from "@/components/ProjectExplorer";

export const metadata = { title: "Projects | Tejas Natekar" };

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero dark-section compact-hero">
        <div className="hero-grid-overlay" />
        <div className="shell page-hero-copy">
          <span className="eyebrow"><i /> Engineering case studies</span>
          <h1>Work that connects <em>theory</em> to the decisions that shape a real system.</h1>
          <p>Design, thermal-fluid analysis, multiphysics, machine learning and research—documented with the assumptions, limitations and lessons intact.</p>
          <div
            role="status"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              marginTop: "1.25rem",
              padding: "0.7rem 1rem",
              border: "1px solid rgba(245, 183, 66, 0.45)",
              borderRadius: "999px",
              background: "rgba(245, 183, 66, 0.1)",
              color: "#ffffff",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "0.55rem",
                height: "0.55rem",
                flex: "0 0 auto",
                borderRadius: "50%",
                background: "#f5b742",
                boxShadow: "0 0 0 4px rgba(245, 183, 66, 0.13)",
              }}
            />
            <span><strong>Work in Progress</strong> · More project details and case studies are being added.</span>
          </div>
        </div>
      </section>
      <section className="section project-index-section">
        <div className="shell"><ProjectExplorer /></div>
      </section>
    </main>
  );
}

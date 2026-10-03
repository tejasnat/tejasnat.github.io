import { ProjectExplorer } from "@/components/ProjectExplorer";
import { WorkInProgressNotice } from "@/components/WorkInProgressNotice";

export const metadata = { title: "Projects | Tejas Natekar" };

export default function ProjectsPage() {
  return (
    <main>
      <WorkInProgressNotice />
      <section className="page-hero dark-section compact-hero">
        <div className="hero-grid-overlay" />
        <div className="shell page-hero-copy">
          <span className="eyebrow"><i /> Engineering case studies</span>
          <h1>Work that connects <em>theory</em> to the decisions that shape a real system.</h1>
          <p>Design, thermal-fluid analysis, multiphysics, machine learning and research—documented with the assumptions, limitations and lessons intact.</p>
        </div>
      </section>
      <section className="section project-index-section">
        <div className="shell"><ProjectExplorer /></div>
      </section>
    </main>
  );
}

import type { Project } from "@/lib/projects";

const annotations: Record<Project["visual"], [string, string, string]> = {
  turbine: ["12 DISKS", "2 mm GAP", "FLOW → TORQUE"],
  airfoil: ["CL / CD", "STALL", "REYNOLDS"],
  thermal: ["VOLTAGE", "JOULE HEAT", "ΔT"],
  mobility: ["FLEET", "CHARGING", "POLICY"],
  auv: ["STRUCTURE", "PACKAGING", "INTERFACES"],
  material: ["Bi₂O₃", "FRICTION", "WEAR"],
  roof: ["CONDUCTION", "CONVECTION", "RADIATION"],
  rod: ["x / L", "Δt", "T(x,t)"],
};

export function ProjectVisual({ type, label }: { type: Project["visual"]; label: string }) {
  const notes = annotations[type];
  return (
    <div className={`project-visual visual-${type}`} aria-label={`${label} technical concept visual`} role="img">
      <div className="visual-grid" />
      <div className="visual-shape visual-shape-a" />
      <div className="visual-shape visual-shape-b" />
      <div className="visual-line line-a" />
      <div className="visual-line line-b" />
      <div className="visual-annotations">
        {notes.map((note, index) => <span key={note} className={`annotation-${index + 1}`}>{note}</span>)}
      </div>
      <span className="visual-code">{type.toUpperCase()} · TECHNICAL STUDY</span>
    </div>
  );
}

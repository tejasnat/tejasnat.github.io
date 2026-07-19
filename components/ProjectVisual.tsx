import type { Project } from "@/lib/projects";

export function ProjectVisual({ type, label }: { type: Project["visual"]; label: string }) {
  return (
    <div className={`project-visual visual-${type}`} aria-label={`${label} abstract technical visual`} role="img">
      <div className="visual-grid" />
      <div className="visual-shape visual-shape-a" />
      <div className="visual-shape visual-shape-b" />
      <div className="visual-line line-a" />
      <div className="visual-line line-b" />
      <span className="visual-code">{type.toUpperCase()}</span>
    </div>
  );
}

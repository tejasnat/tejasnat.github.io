"use client";

import { useState } from "react";
import { categories, projects } from "@/lib/projects";
import { ProjectVisual } from "./ProjectVisual";
import Link from "next/link";

export function ProjectExplorer() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <>
      <div className="filter-row" aria-label="Filter projects">
        {categories.map((category) => (
          <button key={category} className={active === category ? "active" : ""} onClick={() => setActive(category)} aria-pressed={active === category}>
            {category}
          </button>
        ))}
      </div>
      <div className="project-list">
        {visible.map((project) => (
          <Link href={`/projects/${project.slug}`} className="project-row" key={project.slug}>
            <div className="project-row-number">{project.number}</div>
            <ProjectVisual type={project.visual} label={project.shortTitle} />
            <div className="project-row-copy">
              <div className="project-meta"><span>{project.category}</span><span>{project.date}</span></div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="chip-row">{project.tools.slice(0, 3).map((tool) => <span key={tool}>{tool}</span>)}</div>
            </div>
            <span className="project-arrow" aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
    </>
  );
}

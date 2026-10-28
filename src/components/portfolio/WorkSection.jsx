import { projects } from "./data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function WorkSection() {
  return (
    <section className="content-section work-section" id="work">
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">A few things I&apos;ve made</p>
          <h2>
            Selected work<span className="accent">.</span>
          </h2>
        </div>
        <span className="section-count">01 — 03</span>
      </Reveal>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

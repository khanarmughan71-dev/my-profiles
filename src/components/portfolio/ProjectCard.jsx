import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function ProjectCard({ project, index }) {
  return (
    <Reveal
      as="article"
      className="project-card"
      delay={index * 100}
      direction={index % 2 === 0 ? "up" : "right"}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={`project-preview project-preview--${project.theme}`}
        aria-label={`Visit ${project.name}`}
      >
        {project.previewImage ? (
          <Image
            className="preview-image"
            src={project.previewImage}
            alt={`${project.name} website preview`}
            fill
            sizes="(max-width: 480px) calc(100vw - 32px), (max-width: 760px) calc(50vw - 30px), 500px"
          />
        ) : (
          <div className="preview-window">
            <div className="preview-topbar">
              <span />
              <span />
              <span />
              <div className="preview-address" />
            </div>
            <div className="preview-page">
              <div className="preview-brand">{project.monogram}</div>
              <div className="preview-menu">
                <i />
                <i />
                <i />
              </div>
              <div className="preview-copy">
                <span className="preview-kicker">PROJECT PREVIEW</span>
                <span className="preview-title">{project.previewTitle}</span>
                <span className="preview-line">{project.previewLine}</span>
                <span className="preview-action">
                  Explore <Icon name="arrowRight" size={13} />
                </span>
              </div>
              <div className="preview-shape preview-shape-one" />
              <div className="preview-shape preview-shape-two" />
            </div>
          </div>
        )}
        <span className="preview-open" aria-hidden="true">
          <Icon name="arrow" size={17} />
        </span>
      </a>

      <div className="project-details">
        <div className="project-heading">
          <span className="project-number">{project.number}</span>
          <span className="project-type">{project.type}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-footer">
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            Visit <Icon name="arrow" size={15} />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

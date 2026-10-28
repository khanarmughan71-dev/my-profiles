import Icon from "./Icon";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <Reveal as="section" className="about-section" id="about">
      <div className="about-mark" aria-hidden="true">
        ✳
      </div>
      <div>
        <p className="eyebrow">A good place to start</p>
        <h2>
          Curious by nature.
          <br />
          Thoughtful by design.
        </h2>
        <p>
          I enjoy turning ideas into clear, useful experiences on the web. I
          bring curiosity, care, and a collaborative mindset to every project.
        </p>
        <a href="#contact" className="text-link">
          Have something in mind? <Icon name="arrowRight" size={15} />
        </a>
      </div>
    </Reveal>
  );
}

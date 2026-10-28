import Icon from "./Icon";
import Reveal from "./Reveal";

export default function IntroSection() {
  return (
    <Reveal as="section" className="intro-section">
      <div className="intro-copy">
        <p className="eyebrow">A little about what I do</p>
        <h2>
          Good ideas deserve
          <br />
          <span>a great website.</span>
        </h2>
        <p className="intro-description">
          I&apos;m a developer who cares about the details. Explore my work,
          find me online, or tell me about something you&apos;re building.
        </p>
        <a href="#work" className="intro-link">
          Take a look around <Icon name="arrowRight" size={16} />
        </a>
      </div>
      <div className="intro-code" aria-hidden="true">
        <span className="code-line"><i>const</i> developer = {"{"}</span>
        <span className="code-line code-indent">creative: <b>true</b>,</span>
        <span className="code-line code-indent">curious: <b>true</b>,</span>
        <span className="code-line code-indent">building: <em>&quot;what&apos;s next&quot;</em></span>
        <span className="code-line">{"}"}</span>
      </div>
    </Reveal>
  );
}

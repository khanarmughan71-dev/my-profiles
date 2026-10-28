import Icon from "./Icon";
import Reveal from "./Reveal";
import { socialLinks } from "./data";

export default function LinksSection() {
  return (
    <section className="content-section links-section opening-links" id="links">
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">The rest of my corner of the internet</p>
          <h2>
            Find me online<span className="accent">.</span>
          </h2>
        </div>
        <span className="section-count">
          {String(socialLinks.length).padStart(2, "0")} LINKS
        </span>
      </Reveal>

      <div className="link-list">
        {socialLinks.map((link, index) => (
          <Reveal
            key={link.name}
            as="a"
            href={link.url}
            target={link.url.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.url.startsWith("mailto:") ? undefined : "noreferrer"}
            className="profile-link"
            delay={index * 70}
            direction="left"
          >
            <span className="link-icon">
              <Icon name={link.icon} size={19} />
            </span>
            <span className="link-copy">
              <span className="link-title">{link.name}</span>
              <span className="link-description">{link.description}</span>
            </span>
            <span className="link-label">{link.label}</span>
            <span className="link-arrow">
              <Icon name="arrow" size={17} />
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

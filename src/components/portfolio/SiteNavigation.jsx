import Icon from "./Icon";

export default function SiteNavigation() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a href="#home" className="nav-brand">
        AK<span>.</span>
      </a>
      <div className="nav-links">
        <a href="#work">Selected work</a>
        <a href="#links">Find me online</a>
        <a href="#about">About</a>
      </div>
      <a className="nav-contact" href="#contact">
        Get in touch <Icon name="arrow" size={14} />
      </a>
    </nav>
  );
}

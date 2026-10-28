"use client";

import { useEffect, useRef } from "react";
import Icon from "./Icon";
import { featuredSocialLinks } from "./data";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      return;
    }

    let frame = 0;
    const updateScrollEffect = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        const progress = Math.min(
          Math.max(window.scrollY / Math.max(hero.offsetHeight * 0.9, 1), 0),
          1,
        );
        hero.style.setProperty("--scroll-darkness", `${progress * 0.48}`);
        hero.style.setProperty("--scroll-vignette", `${progress * 0.62}`);
        hero.style.setProperty(
          "--scroll-shift",
          `${reducedMotion.matches ? 0 : -progress * 72}px`,
        );
        frame = 0;
      });
    };

    updateScrollEffect();
    window.addEventListener("scroll", updateScrollEffect, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollEffect);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
      id="home"
      aria-labelledby="hero-title"
    >
      <div className="hero-media">
        <div className="hero-photo" />
        <div className="hero-shade" />
        <div className="hero-bottom-vignette" aria-hidden="true" />
        <header className="hero-topbar">
          <div className="availability-pill">
            <span className="availability-dot" />
            Available for work
          </div>
          <span className="hero-code-mark">
            <Icon name="code" size={17} />
          </span>
        </header>
        <a className="scroll-cue" href="#links">
          <span>Scroll to explore</span>
          <Icon name="arrowDown" size={18} />
        </a>
      </div>

      <div className="hero-content">
        <span className="hero-accent-line" />
        <p className="hero-eyebrow">Developer · Creator</p>
        <h1 id="hero-title">
          ARMUGHAN
          <br />
          HASSAN KHAN
        </h1>
        <p className="hero-tagline">
          Building digital experiences with code, creativity, and purpose.
        </p>
        <nav className="hero-socials" aria-label="Featured social profiles">
          {featuredSocialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="hero-social"
            >
              <Icon name={social.icon} size={19} />
            </a>
          ))}
        </nav>
        <a className="hero-explore-link" href="#work">
          Explore my work <Icon name="arrowDown" size={16} />
        </a>
      </div>
    </section>
  );
}

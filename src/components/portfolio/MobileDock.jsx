"use client";

import { useEffect, useRef } from "react";
import Icon from "./Icon";

export default function MobileDock() {
  const dockRef = useRef(null);

  useEffect(() => {
    const updateVisibility = () => {
      const dock = dockRef.current;

      if (!dock) {
        return;
      }

      const isVisible = window.scrollY > window.innerHeight * 0.65;
      dock.classList.toggle("is-visible", isVisible);
      dock.setAttribute("aria-hidden", String(!isVisible));
      dock.inert = !isVisible;
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <nav
      ref={dockRef}
      className="mobile-dock"
      aria-label="Quick links"
      aria-hidden="true"
      inert
    >
      <a href="#work">
        <Icon name="layers" size={18} />
        <span>Work</span>
      </a>
      <a href="#links">
        <Icon name="globe" size={18} />
        <span>Links</span>
      </a>
      <a href="mailto:khanarmughan71@gmail.com">
        <Icon name="mail" size={18} />
        <span>Contact</span>
      </a>
      <a
        href="https://github.com/khanarmughan71-dev"
        target="_blank"
        rel="noreferrer"
        className="dock-github"
      >
        <Icon name="github" size={18} />
        <span>GitHub</span>
      </a>
    </nav>
  );
}

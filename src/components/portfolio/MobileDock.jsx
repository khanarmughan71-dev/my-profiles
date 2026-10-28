"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

const dockSections = [
  { id: "links", label: "Links", icon: "globe" },
  { id: "work", label: "Work", icon: "layers" },
  { id: "contact", label: "Contact", icon: "mail" },
];

export default function MobileDock() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("links");

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.65);

      const activeTarget = dockSections
        .map((section) => ({
          ...section,
          element: document.getElementById(section.id),
        }))
        .filter(({ element }) => element)
        .map((section) => {
          const { top, bottom } = section.element.getBoundingClientRect();
          return {
            ...section,
            top,
            bottom,
            centerDistance: Math.abs(
              (top + bottom) / 2 - window.innerHeight / 2,
            ),
          };
        })
        .filter(({ top, bottom }) => top < window.innerHeight && bottom > 0)
        .sort(
          (first, second) => first.centerDistance - second.centerDistance,
        )[0];

      if (activeTarget) {
        setActiveSection(activeTarget.id);
      }
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <nav
      className={`mobile-dock${isVisible ? " is-visible" : ""}`}
      aria-label="Quick links"
      aria-hidden={!isVisible}
      inert={!isVisible}
    >
      {dockSections.map(({ id, label, icon }) => (
        id === "contact" ? (
          <button
            key={id}
            type="button"
            onClick={() =>
              window.dispatchEvent(new Event("portfolio:open-contact-form"))
            }
            aria-current={activeSection === id ? "location" : undefined}
          >
            <Icon name={icon} size={18} />
            <span>{label}</span>
          </button>
        ) : (
          <a
            key={id}
            href={`#${id}`}
            aria-current={activeSection === id ? "location" : undefined}
          >
            <Icon name={icon} size={18} />
            <span>{label}</span>
          </a>
        )
      ))}
      <a
        href="https://github.com/khanarmughan71-dev"
        target="_blank"
        rel="noreferrer"
        aria-label="Open GitHub profile in a new tab"
      >
        <Icon name="github" size={18} />
        <span>GitHub</span>
      </a>
    </nav>
  );
}

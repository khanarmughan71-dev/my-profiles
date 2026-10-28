"use client";

import { useEffect, useRef } from "react";

export default function Reveal({
  as: Element = "div",
  children,
  className = "",
  delay = 0,
  direction = "up",
  ...elementProps
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("is-pending");
          element.classList.add("is-visible");
        } else {
          element.classList.remove("is-visible");
          element.classList.add("is-pending");
        }
      },
      { threshold: 0.08, rootMargin: "-8% 0px -8% 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Element
      {...elementProps}
      ref={elementRef}
      className={`reveal is-pending ${className}`}
      data-direction={direction}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Element>
  );
}

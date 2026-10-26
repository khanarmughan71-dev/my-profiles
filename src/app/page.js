
"use client";

import { useEffect, useState } from "react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/khanarmughan71-dev",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/armughan-hassan-khan-075801321/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/khanarmughan.git/",
    icon: "instagram",
  },
];

const profileLinks = [
  {
    title: "GitHub",
    description: "Projects, code & contributions",
    url: "https://github.com/khanarmughan71-dev",
    icon: "code",
  },
  {
    title: "Armughan Hassan — Upwork",
    description: "Freelance development services",
    url: "https://www.upwork.com/freelancers/~01b8281dbd4a946a53",
    icon: "briefcase",
  },
  {
    title: "Armughan.Dev",
    description: "Personal portfolio",
    url: "https://armughankhan.pythonanywhere.com/",
    icon: "globe",
  },
  {
    title: "Axiora Digital",
    description: "Digital agency & web solutions",
    url: "https://axioradigitalagency.vercel.app/",
    icon: "layers",
  },
  {
    title: "Maymarmos",
    description: "Website project",
    url: "https://maymarmos-website.vercel.app/",
    icon: "monitor",
  },
  {
    title: "Contact Me",
    description: "Let's discuss your next project",
    url: "mailto:khanarmughan71@gmail.com",
    icon: "mail",
  },
];

function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    github: (
      <>
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.3 15 3a13.3 13.3 0 0 0-6 0C6.5 1.3 5.3 1.6 5.3 1.6a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 9 18.1V22" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7v.01M12 17v-7m0 3a3 3 0 0 1 6 0v4" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    code: (
      <>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    monitor: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    arrow: <path d="M7 17 17 7M7 7h10v10" />,
  };

  return <svg {...common}>{paths[name] || paths.code}</svg>;
}

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      setScrollProgress(Math.min(Math.max(window.scrollY / 280, 0), 1));
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const backgroundBlur = scrollProgress * 16;
  const backgroundDarkness =
    0.12 + Math.pow(scrollProgress, 0.8) * 0.64;

  return (
    <main className="relative min-h-screen overflow-clip bg-[#030504] text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[100svh] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url('/profile.jpg')",
            backgroundPosition: "center 12%",
            filter: `blur(${backgroundBlur + 18}px)`,
            transition: "filter 180ms linear",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-1/2 w-full max-w-[480px] -translate-x-1/2 bg-no-repeat"
          style={{
            backgroundImage: "url('/profile.jpg')",
            backgroundPosition: "center 12%",
            backgroundSize: "auto 100svh",
            filter: `blur(${backgroundBlur}px)`,
            transition: "filter 180ms linear",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black"
          style={{
            opacity: backgroundDarkness,
            transition: "opacity 180ms linear",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[480px] px-5 pb-12">
        <section className="relative isolate flex min-h-[760px] flex-col items-center justify-end text-center sm:min-h-[800px]">
          <header className="absolute inset-x-0 top-0 flex items-center justify-between px-1 pt-6">
            <div className="flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-3 py-2 shadow-lg backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#39ff7d] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#39ff7d]" />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white">
                Available for work
              </span>
            </div>

            <div className="rounded-full border border-white/25 bg-black/35 p-2.5 text-[#8ef6ae] shadow-lg backdrop-blur-md">
              <Icon name="code" size={17} />
            </div>
          </header>

          <div className="w-full px-2 pb-12 pt-[420px] drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            <div className="mx-auto mb-4 h-px w-10 bg-[#39ff7d] shadow-[0_0_14px_#39ff7d]" />
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#a6ffc1]">
              Developer · Creator
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.045em]">
              ARMUGHAN
              <br />
              <span>HASSAN KHAN</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[310px] text-sm leading-6 text-white">
              Building digital experiences with code, creativity, and purpose.
            </p>

            <nav
              aria-label="Social media"
              className="mt-6 flex items-center justify-center gap-3"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white transition-all duration-300 hover:border-[#39ff7d]/70 hover:bg-[#39ff7d]/15 hover:text-[#8ef6ae]"
                >
                  <Icon name={social.icon} size={19} />
                </a>
              ))}
            </nav>
          </div>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60">
            <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.3em]">
              Scroll to explore
            </span>
          </div>
        </section>

        <section className="space-y-3">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#39ff7d]">
                Find me online
              </p>

              <h2 className="mt-1 text-xl font-semibold tracking-tight">
                Explore my world
                <span className="text-[#39ff7d]">.</span>
              </h2>
            </div>

            <span className="pb-1 text-xs text-white/50">
              {String(profileLinks.length).padStart(2, "0")} links
            </span>
          </div>

          {profileLinks.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target={
                link.url.startsWith("mailto:") ? undefined : "_blank"
              }
              rel={
                link.url.startsWith("mailto:") ? undefined : "noreferrer"
              }
              className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-[#080c09]/75 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#39ff7d]/55 hover:bg-[#0b150e]/95 hover:shadow-[0_0_25px_rgba(57,255,125,0.09)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#39ff7d]/25 bg-[#39ff7d]/[0.08] text-[#39ff7d] transition-colors group-hover:bg-[#39ff7d]/15">
                <Icon name={link.icon} size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-medium text-white">
                  {link.title}
                </h3>

                <p className="mt-1 truncate text-xs text-white/55">
                  {link.description}
                </p>
              </div>

              <div className="text-white/45 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#39ff7d]">
                <Icon name="arrow" size={17} />
              </div>
            </a>
          ))}
        </section>

        <section className="mt-10 rounded-[24px] border border-[#39ff7d]/20 bg-[#08110b]/85 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8ef6ae]">
            Have a project in mind?
          </p>
          <h2 className="mt-2 text-lg font-semibold tracking-tight">
            Let’s make something great.
          </h2>
          <p className="mt-1 text-xs leading-5 text-white/60">
            Tell me what you’re building and let’s make it happen.
          </p>
          <a
            href="mailto:khanarmughan71@gmail.com?subject=Let%27s%20work%20together"
            className="mt-5 flex min-h-12 items-center justify-between rounded-xl bg-[#39ff7d] px-4 py-3 text-sm font-semibold text-[#07100a] transition-colors hover:bg-[#70ff9f]"
          >
            Let’s work together
            <Icon name="arrow" size={18} />
          </a>
        </section>

        <footer className="mt-12 border-t border-white/10 pt-6 text-center">
          <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-[#39ff7d]/25 bg-[#39ff7d]/[0.07] text-[#39ff7d]">
            <Icon name="code" size={17} />
          </div>

          <p className="text-xs font-medium tracking-wide text-white/85">
            ARMUGHAN<span className="text-[#39ff7d]">.DEV</span>
          </p>

          <p className="mt-2 text-[10px] tracking-wide text-white/45">
            Designed with purpose. Built with passion.
          </p>

          <p className="mt-5 text-[10px] text-white/35">
            © 2026 Armughan Hassan Khan
          </p>
        </footer>
      </div>
    </main>
  );
}

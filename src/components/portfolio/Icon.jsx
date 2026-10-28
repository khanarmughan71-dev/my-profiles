export default function Icon({ name, size = 20 }) {
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
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.3 15 3a13.3 13.3 0 0 0-6 0C6.5 1.3 5.3 1.6 5.3 1.6a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 9 18.1V22" />
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7v.01M12 17v-7m0 3a3 3 0 0 1 6 0v4" />
      </>
    ),
    upwork: (
      <>
        <path d="M5 8v5a3 3 0 0 0 6 0V8m-3 5 2 4" />
        <circle cx="17.5" cy="12.5" r="2.5" />
      </>
    ),
    facebook: (
      <path d="M14 21v-8h3l.5-3H14V8c0-.9.4-1.5 1.6-1.5H18V3.2c-.8-.1-1.7-.2-2.8-.2C12.4 3 11 4.7 11 7.7V10H8v3h3v8h3Z" />
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    snapchat: (
      <path d="M12 3a5 5 0 0 0-5 5v3.2c0 .8-.5 1.5-1.3 1.8l-1.2.5c-.5.2-.5.9 0 1.1l1.2.5c.6.2 1 .8 1.3 1.3.5.8 1.3 1.3 2.2 1.3.7 0 1.2-.3 1.8-.7.6.4 1.1.7 1.8.7.9 0 1.7-.5 2.2-1.3.3-.5.7-1.1 1.3-1.3l1.2-.5c.5-.2.5-.9 0-1.1l-1.2-.5c-.8-.3-1.3-1-1.3-1.8V8a5 5 0 0 0-5-5Z" />
    ),
    whatsapp: (
      <>
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
        <path d="M9 8.5c.4-.5.8-.4 1.1.1l.8 1.4c.2.4 0 .7-.4 1l-.5.4c.6 1.2 1.5 2.1 2.7 2.7l.4-.5c.3-.4.6-.6 1-.4l1.4.8c.5.3.6.7.1 1.1-.6.7-1.4 1-2.3.8-2.8-.7-5-2.9-5.7-5.7-.2-.9.1-1.7.8-2.3Z" />
      </>
    ),
    code: <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />,
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
    arrowDown: <path d="m7 10 5 5 5-5" />,
    arrowRight: <path d="M5 12h14m-6-6 6 6-6 6" />,
  };

  return <svg {...common}>{paths[name] || paths.code}</svg>;
}

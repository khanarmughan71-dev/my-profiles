# Armughan Hassan Khan — Portfolio

A responsive, portrait-first developer portfolio with project previews, social
links, and a mobile quick-links dock. The desktop intro uses a framed portrait
beside the profile; on mobile, the portrait sits above the intro and shifts
upward beneath a bottom vignette as you scroll. Off-screen portfolio content
fades away and returns with a subtle blur-to-clear, upward reveal as it enters
the viewport.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/page.js` composes the portfolio sections.
- `src/app/globals.css` contains the responsive theme, layout, and animations.
- `src/components/portfolio/Hero.jsx` renders the responsive portrait and
  scroll-linked photo treatment.
- `src/components/portfolio/WorkSection.jsx` and `ProjectCard.jsx` render work.
- `src/components/portfolio/LinksSection.jsx` renders profile links.
- `src/components/portfolio/Reveal.jsx` adds accessible scroll-in animations.
- `src/components/portfolio/data.js` contains project and profile-link content.
- `public/profile.jpg` is the portrait used in the hero.

## Add project screenshots

Place optimized project screenshots in `public/projects/`, then add a
`previewImage` path to the matching project in
`src/components/portfolio/data.js`. Reference public files from the site root:

```js
{
  name: "Axiora Digital",
  previewImage: "/projects/axiora.webp",
  // Keep the remaining project fields here.
}
```

Use landscape screenshots around 1400 × 900 pixels in WebP or AVIF format. If
`previewImage` is not set, the portfolio displays its built-in project mockup.

## Validate

```bash
npm run lint
npm run build
```

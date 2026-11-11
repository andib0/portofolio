# Portfolio

My personal portfolio: who I am, where I've worked, and the things I've built.

Built with Next.js 15 (App Router), React 19 and TypeScript, styled with CSS Modules and
exported as a static site.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Lint, type-check and export the static site to `out/` |
| `npm run start` | Serve the exported `out/` folder |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |
| `npm run cv` | Build, then print the `/cv` page to `public/Andi-Basha-CV.pdf` |

## Structure

```
src/
  app/                 layout, home page, case-study pages, CV page, 404, sitemap, robots
  components/
    atoms/             smallest pieces (buttons, logo, list, image)
    molecules/         navigation, side panel contents, experience tabs, A/B demo, project cards
    organisms/         header, hero, about, experience, projects, case study, CV, contact, footer
  assets/              portrait, logo and project screenshots (imported statically)
  hooks/               scroll reveal, active section for the header
  styles/globals.css   colour, type and spacing tokens, shared section layout
  utils/mocks/
    data.ts            all copy: hero, about, experience, contact, links
    projects.ts        featured and other projects
```

## Updating the content

Everything written on the site lives in two files, so no component needs to change:

- `src/utils/mocks/data.ts`: name, links, hero text, about text, technology list, jobs, contact text.
- `src/utils/mocks/projects.ts`: featured projects (with a screenshot in `src/assets/projects/`)
  and the smaller project cards.

To add a job, add an entry to `options` in `data.ts`. To add a project, add an entry to
`featuredProjects` or `otherProjects` in `projects.ts`. A featured project also carries its
case study (`caseStudy`), which becomes the page at `/projects/<slug>/`.

## CV

The CV is a page (`/cv`) built from the same data as the rest of the site. `npm run cv` prints
it to `public/Andi-Basha-CV.pdf` with headless Edge or Chrome, which is the file the header
button links to. Run it again after changing jobs or skills, and commit the new PDF.

## Deploy

`.github/workflows/deploy.yml` builds the site and publishes `out/` to GitHub Pages on every push
to `main`. The workflow passes the Pages base path to the build, so the same code also works at
the root of a domain (Vercel, Netlify or a custom domain) with no changes.

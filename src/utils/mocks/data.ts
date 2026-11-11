/*
  All copy for the site lives here (projects are in ./projects.ts).
  Components read from this file and never hard-code text.
*/

export const site = {
  name: "Andi Basha",
  role: "JavaScript Engineer",
  location: "Prishtina, Kosovo",
  email: "andi.basha@gmail.com",
  github: "https://github.com/andib0",
  linkedin: "https://www.linkedin.com/in/andibasha",
  instagram: "https://www.instagram.com/andibashaa",
  source: "https://github.com/andib0/portofolio",
  /** Public origin plus base path, without a trailing slash. */
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://andib0.github.io/portofolio"
  ).replace(/\/$/, ""),
  description:
    "Andi Basha is a JavaScript engineer in Prishtina, Kosovo. He builds A/B experiments for high-traffic online stores at Sogody, and local-first apps with React Native and Rust on the side.",
  keywords: [
    "Andi Basha",
    "JavaScript engineer",
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Rust",
    "A/B testing",
    "Prishtina",
    "Kosovo",
  ],
} as const;

/* Header navigation. Numbers match the section titles on the page. */
export const navItems = [
  { href: "/#about", label: "About", number: "01" },
  { href: "/#experience", label: "Experience", number: "02" },
  { href: "/#work", label: "Work", number: "03" },
  { href: "/#contact", label: "Contact", number: "04" },
] as const;

/* Section ids and numbered titles, in page order. */
export const sections = {
  about: { id: "about", number: "01", title: "About Me" },
  experience: { id: "experience", number: "02", title: "Where I've Worked" },
  work: { id: "work", number: "03", title: "Some Things I've Built" },
  contact: { id: "contact", number: "04", title: "What's Next?" },
} as const;

export const hero = {
  greet: "Hi, my name is",
  name: "Andi Basha.",
  tagline: "I build mobile & web things.",
  intro:
    "I'm a JavaScript engineer based in Prishtina, Kosovo. Right now I build A/B experiments for high-traffic online stores at Sogody, and on the side I make small, local-first apps with React Native and Rust.",
  cta: { label: "Get in touch", href: "/#contact" },
} as const;

export const partOneDescription =
  "I'm a JavaScript engineer from Prishtina. I started out in React Native, shipping mobile apps at Innovative Solutions, worked full-stack on a clinic platform at Pabau, and today I build A/B tests and personalisation experiments at Sogody. After hours I like building software that is small, fast and works offline.";

export const partTwoDescription =
  "I'm always open to new challenges and collaborations—let's bring your ideas to life!";

export const partThreeDescription =
  "Some of the technologies I work with:";

export const technologies = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "GraphQL",
  "Rust",
  "Adobe Target",
];

export type ExperienceOption = {
  value: number;
  /** Short name shown in the tab list. */
  label: string;
  time: string;
  details: {
    role: string;
    company: string;
    /** Company website, when there is one. */
    url?: string;
    tasks: string[];
  };
};

export const options: ExperienceOption[] = [
  {
    value: 0,
    label: "Sogody",
    time: "Jan 2026 - Present",
    details: {
      role: "Web Developer",
      company: "Sogody",
      url: "https://sogody.com",
      tasks: [
        "Build A/B tests & personalisation campaigns for high-traffic e-commerce storefronts",
        "Write variant code in vanilla JavaScript & CSS, shipped through Adobe Target & Insider",
        "Set up audiences, targeting rules & analytics tracking for every experiment",
        "QA each variant across browsers & devices before launch, with screenshot evidence",
      ],
    },
  },
  {
    value: 1,
    label: "Unicare",
    time: "Aug 2025 - Nov 2025",
    details: {
      role: "Field Engineer",
      company: "Unicare",
      tasks: [
        "Field work for a medical device servicing company, at hospitals & clinics",
        "Now building its field-service platform as a client project: job scheduling, device records & stock",
        "Mobile apps in React Native (Expo) & a React admin panel, on Supabase & PostgreSQL",
      ],
    },
  },
  {
    value: 2,
    label: "Pabau",
    time: "May 2025 - Jul 2025",
    details: {
      role: "Software Engineer",
      company: "Pabau",
      url: "https://pabau.com",
      tasks: [
        "Developed full-stack features for the Pabau clinic software platform",
        "Worked with React, GraphQL & Apollo across front-end & back-end",
        "Collaborated with cross-functional teams to track down issues & ship scalable fixes",
      ],
    },
  },
  {
    value: 3,
    label: "Innovative Solutions",
    time: "Apr 2023 - Oct 2024",
    details: {
      role: "React Native Developer",
      company: "Innovative Solutions",
      tasks: [
        "Developed new features & optimized existing apps",
        "Integrated REST & GraphQL APIs for data management",
        "Collaborated with UX/UI & backend teams on scalable architectures",
        "Monitored performance using Firebase, Sentry",
        "Worked with Zustand, React Hook Form, TanStack Query, & i18next",
        "Version control with Git including branching strategies & code reviews",
      ],
    },
  },
  {
    value: 4,
    label: "CEC",
    time: "Jul 2021 - Dec 2021",
    details: {
      role: "Database Officer",
      company: "Central Election Commission",
      tasks: [
        "Extracted, transformed & loaded (ETL) data",
        "Performed database backup, recovery & tuning",
        "Provided administrative & technical support",
      ],
    },
  },
  {
    value: 5,
    label: "NightDesign Studio",
    time: "Jun 2017 - Mar 2019",
    details: {
      role: "Office Administrator",
      company: "NightDesign Studio",
      tasks: [
        "Managed office administration & client communications",
        "Created reports, handled documentation & translations",
        "Organized meetings, scheduled visits & maintained filing systems",
      ],
    },
  },
];

export const contact = {
  heading: "Get In Touch",
  text: "My inbox is always open. Whether you have a project in mind, a question about something I've built, or just want to say hi, send me an email and I'll get back to you.",
  cta: "Say Hello",
} as const;

export const footer = {
  credit: "Built by Andi Basha",
} as const;

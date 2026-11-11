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

/* The image shown when a page is shared. The file is public/og.png. */
export const shareImage = {
  url: `${site.url}/og.png`,
  width: 1200,
  height: 630,
  alt: "Andi Basha, JavaScript engineer. I build mobile and web things.",
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
  "JavaScript",
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

/*
  Files in /public are not prefixed automatically when the site is served
  from a sub-path, so links to them go through this helper.
*/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (path: string) => `${basePath}${path}`;

/* The PDF is generated from the /cv page by `npm run cv`. */
export const resume = {
  label: "CV",
  file: "/Andi-Basha-CV.pdf",
} as const;

/* The interactive A/B test under the experience tabs. */
export const experimentDemo = {
  title: "An A/B test, in one toggle",
  intro:
    "Most of my work at Sogody looks like this: the same page, changed by a script and shown to half of the visitors. Switch between the two versions.",
  toggleLabel: "Version shown",
  control: "Control",
  variant: "Variant",
  changesTitle: "What the variant changes",
  changes: [
    "Voucher field folds into a link",
    "Returns banner becomes a badge",
    "Trade-in card becomes one line",
  ],
  note: "Illustrative example, not a client's page.",
  cart: {
    title: "Your basket",
    item: "Smartphone, 256 GB",
    price: "€799.00",
    voucherLabel: "Voucher code",
    voucherApply: "Apply",
    voucherToggle: "Have a voucher?",
    returnsBanner:
      "Holiday returns: orders placed between 1 November and 24 December can be returned free of charge until 31 January.",
    returnsBadge: "Free returns until 31 Jan",
    tradeInTitle: "Trade in your old device",
    tradeInText:
      "Send us your old phone after the new one arrives and get up to €150 back, paid to your original payment method.",
    tradeInTeaser: "Trade in and save up to €150",
    totalLabel: "Total",
    checkout: "Checkout",
  },
} as const;

/* Extra facts used by the CV page only. */
export const cv = {
  summary:
    "JavaScript engineer with a background in React Native and full-stack web work, currently building A/B tests and personalisation experiments for high-traffic e-commerce storefronts. On the side I build small, local-first apps with Rust and React Native.",
  /** Jobs from this index on are listed in one line each under "Earlier". */
  earlierFrom: 4,
  skills: [
    {
      label: "Code",
      items: ["JavaScript (ES6+)", "TypeScript", "Rust", "SQL", "HTML & CSS"],
    },
    {
      label: "Web & mobile",
      items: ["React", "Next.js", "React Native", "Expo", "Svelte", "Tauri"],
    },
    {
      label: "Experimentation",
      items: ["A/B testing", "Adobe Target", "Insider", "Adobe Analytics"],
    },
    {
      label: "Backend & data",
      items: ["Node.js", "Express", "GraphQL", "Prisma", "PostgreSQL", "SQLite"],
    },
    {
      label: "Tooling",
      items: ["Git", "TanStack Query", "Zustand", "Playwright", "Sentry"],
    },
  ],
  education: [
    {
      school: "UBT, University for Business and Technology",
      detail: "Computer Science and Engineering",
      place: "Prishtina",
    },
  ],
  courses: [
    { name: "Red Teaming Certified Professional", by: "Findbug", year: "2024" },
    {
      name: "Mobile App Development Bootcamp",
      by: "UNDP, GIZ & Cactus",
      year: "2023",
    },
    {
      name: "Advanced JavaScript & React",
      by: "Povio Engineering Academy",
      year: "2022",
    },
  ],
  languages: ["Albanian (native)", "English (fluent)"],
  projects: [
    {
      name: "Glint",
      line: "Windows tray app for DDC/CI monitor control, in Rust on raw Win32",
      url: "github.com/andib0/glint",
    },
    {
      name: "Onyx",
      line: "Local-first training & nutrition planner: Expo app, Express API",
      url: "github.com/andib0/onyx",
    },
    {
      name: "Moneywort",
      line: "Local-first Android finance app in Rust, Tauri 2 & Svelte 5",
      url: "github.com/andib0/moneywort",
    },
  ],
  headings: {
    summary: "Summary",
    experience: "Experience",
    earlier: "Earlier",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    courses: "Courses",
    languages: "Languages",
  },
  download: "Download PDF",
} as const;

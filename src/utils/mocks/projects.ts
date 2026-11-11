import type { StaticImageData } from "next/image";
import glintPanel from "@/assets/projects/glint-panel.webp";
import onyxProgram from "@/assets/projects/onyx-program.webp";
import onyxNutrition from "@/assets/projects/onyx-nutrition.webp";
import moneywortHome from "@/assets/projects/moneywort-home.webp";
import moneywortAdd from "@/assets/projects/moneywort-add.webp";

export type ProjectLink = {
  kind: "github" | "live" | "download";
  href: string;
  /** Accessible label, e.g. "Glint on GitHub". */
  label: string;
};

/* Which side a featured project's content column hugs on desktop. */
export type ProjectAlign = "left" | "right";

export type ProjectImage = {
  src: StaticImageData;
  alt: string;
};

export type FeaturedProject = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  /** One desktop screenshot, or up to two phone screens shown side by side. */
  images: ProjectImage[];
  caseStudy: ProjectCaseStudy;
};

export type ProjectCaseStudySection = {
  heading: string;
  paragraphs: string[];
};

export type ProjectFact = {
  label: string;
  value: string;
};

export type ProjectCaseStudy = {
  /** Two sentences: what it is and who it is for. Also the page description. */
  summary: string;
  sections: ProjectCaseStudySection[];
  facts: ProjectFact[];
};

export type OtherProject = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
};

/* Where an other-project card points: the live site, else GitHub. */
export const primaryLink = (links: ProjectLink[]): ProjectLink =>
  links.find((link) => link.kind === "live") ??
  links.find((link) => link.kind === "github") ??
  links[0];

export const featuredLabel = "Featured Project";

/* Copy for the case-study pages and the links that lead to them. */
export const caseStudyCopy = {
  readLink: "Read the case study",
  frameLabel: (title: string) => `${title} case study`,
  back: { label: "Back to all projects", href: "/#work" },
  factsLabel: "Project facts",
  pagerLabel: "More projects",
  previous: "Previous project",
  next: "Next project",
  repo: "View the code on GitHub",
} as const;

export const caseStudyHref = (slug: string) => `/projects/${slug}/`;

export const otherProjectsSection = {
  title: "Other Noteworthy Projects",
  archive: {
    label: "view all on GitHub",
    href: "https://github.com/andib0?tab=repositories",
  },
} as const;

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "glint",
    title: "Glint",
    description:
      "A tiny native Windows tray app for controlling monitors over DDC/CI: brightness, contrast, colour, input and more. Profiles, global hotkeys and a time-of-day schedule, plus a command-line companion. No Electron, no runtime.",
    stack: ["Rust", "Win32 API", "DDC/CI", "TOML"],
    links: [
      {
        kind: "github",
        href: "https://github.com/andib0/glint",
        label: "Glint on GitHub",
      },
      {
        kind: "live",
        href: "https://andib0.github.io/glint/",
        label: "Glint website",
      },
      {
        kind: "download",
        href: "https://github.com/andib0/glint/releases/latest",
        label: "Download Glint",
      },
    ],
    images: [
      {
        src: glintPanel,
        alt: "Glint panel with brightness, contrast and colour sliders for two monitors",
      },
    ],
    caseStudy: {
      summary:
        "Glint is a small native Windows tray app that controls monitor settings over DDC/CI. It is for anyone who wants brightness, colour, game modes and input from the desktop instead of the buttons on the back of the screen.",
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "Brightness, contrast, colour presets, game modes and input are all settings a monitor will accept from the PC over DDC/CI, the control channel built into almost every modern monitor. Glint puts them in the Windows tray: a left click opens a panel with one column per monitor, and it only shows the settings each monitor actually answers.",
            "I built and tested it on two AOC C32G2ZE monitors, and it works with any monitor that speaks DDC/CI.",
          ],
        },
        {
          heading: "How it works",
          paragraphs: [
            "Glint is plain Rust on the Windows API through windows-sys, with no GUI framework: the tray icon, panel, on-screen display and theme are drawn with Win32 and GDI+ in src/ui. Monitors are reached through the Monitor Configuration API in dxva2 (ddc_win.rs).",
            "Each monitor's MCCS capabilities string is parsed by caps.rs, and vcp.rs maps the codes it lists to sliders and dropdowns. Reading capabilities takes about a second per monitor, so the result is cached in caps.toml. Profiles, hotkeys and the schedule live in a TOML config that reloads when it changes.",
          ],
        },
        {
          heading: "The hard part",
          paragraphs: [
            "A DDC/CI write takes about 50 ms, so the UI never talks to a monitor directly. worker.rs runs a background thread: the panel updates a shared cache straight away and queues a command. The worker drains the whole queue at once and keeps only the latest value for each monitor and code, so dragging a slider sends one write instead of dozens.",
            "Keys with a queued write are marked dirty so a refresh cannot overwrite the new value, and a failed write is read back from the monitor. After a colour preset or game mode change the monitor ignores input for a moment, so the worker waits 350 ms.",
          ],
        },
        {
          heading: "Restoring a profile exactly",
          paragraphs: [
            "On these AOC monitors the red, green and blue gains live in the User colour preset, even while another preset is active. profile.rs restores them by switching to User, writing the RGB values, then switching to the target preset. The input switch always goes last, because it can take the screen away.",
            "That logic runs against mock monitors in 35 tests, and a separate hardware suite runs on real monitors and puts their values back. CI runs rustfmt, clippy with warnings as errors, the tests and a release build on Windows.",
          ],
        },
      ],
      facts: [
        { label: "Language", value: "Rust (2024 edition)" },
        { label: "Platform", value: "Windows 10 and 11, 64-bit" },
        { label: "Tray app size", value: "About 800 KB" },
        { label: "Tests", value: "35 logic tests on mock monitors" },
        { label: "Latest release", value: "v0.2.1, November 2026" },
        { label: "License", value: "MIT" },
      ],
    },
  },
  {
    slug: "onyx",
    title: "Onyx",
    description:
      "A local-first daily planner for training, nutrition and routine. Log workouts, meals and supplements in a tap or two, fully offline; writes go through a durable outbox and sync to an Express API.",
    stack: ["Expo", "React Native", "TypeScript", "Express", "Prisma", "PostgreSQL"],
    links: [
      {
        kind: "github",
        href: "https://github.com/andib0/onyx",
        label: "Onyx on GitHub",
      },
      {
        kind: "live",
        href: "https://onyx-bay-theta.vercel.app",
        label: "Onyx live web build",
      },
    ],
    images: [
      {
        src: onyxProgram,
        alt: "Onyx program screen listing training programs to choose from",
      },
      {
        src: onyxNutrition,
        alt: "Onyx nutrition screen with calorie, macro and water targets for the day",
      },
    ],
    caseStudy: {
      summary:
        "Onyx is a local-first daily planner for training, nutrition and routine, built as an Expo app with its own API. It is for one person who wants to open it, see what today needs, and log a set, a meal or a supplement in a tap or two, online or not.",
      sections: [
        {
          heading: "What it is for",
          paragraphs: [
            "The plan behind Onyx sets two targets: within ten seconds of opening it you know what to do today, and core actions such as logging a set or a meal take at most two taps and five seconds. A Playwright suite against the Expo web build checks those budgets.",
            "Today renders from a persisted query cache with no network request, then revalidates with a single GET /api/today. The backend is a small Express, Prisma and PostgreSQL API with JWT auth.",
          ],
        },
        {
          heading: "Offline first, sync second",
          paragraphs: [
            "Every write goes through a durable outbox (mobile/sync/outbox.ts). An op is saved before it counts as queued, ops go out strictly in order, and failures back off from 2 seconds to 5 minutes. Each create carries a client UUID, so a retried request returns the same row instead of a duplicate. Permanent errors land in a dead-letter list in Settings, never silently dropped.",
            "Conflicts are settled with hybrid logical clocks: fixed-width stamps of time, counter and device id that sort correctly as plain strings. The server keeps the newest stamp, per field for edits, rejects stamps more than 24 hours ahead, and answers 410 to any write on a deleted id.",
          ],
        },
        {
          heading: "When the server forgets",
          paragraphs: [
            "The API runs on Render's free plan, where the database can expire. That is by design: the device keeps a full backup and a journal of confirmed writes. Each account has a random dataEpoch, and when /today returns a different one, the app imports its backup to the server and replays the journal.",
            "Convergence is covered by property-based tests on both the mobile sync code and the API, and every API route needs a passing and a failing test or the run fails.",
          ],
        },
        {
          heading: "What I'd do next",
          paragraphs: [
            "The repository lists its known limits. There is no delta sync yet, so history is refreshed from a full export, at most once a day. Cold start on Android has a target of under one second, and the last recorded measurement was a median of 2.34 seconds on an emulator. Both are still open.",
          ],
        },
      ],
      facts: [
        { label: "Platforms", value: "Android and web (Expo)" },
        { label: "Backend", value: "Express, Prisma, PostgreSQL" },
        { label: "Sync", value: "Outbox with hybrid logical clocks" },
        { label: "Testing", value: "Vitest, Playwright, Maestro" },
        { label: "Started", value: "2026" },
        { label: "Status", value: "Live web build" },
      ],
    },
  },
  {
    slug: "moneywort",
    title: "Moneywort",
    description:
      "A local-first personal finance app for Android. Log expenses, income and transfers from a keypad sheet, set monthly budgets and recurring entries, and see where the money goes. Everything stays in SQLite on the phone: no accounts, no cloud, no tracking.",
    stack: ["Rust", "Tauri 2", "Svelte 5", "SQLite", "Android"],
    links: [
      {
        kind: "github",
        href: "https://github.com/andib0/moneywort",
        label: "Moneywort on GitHub",
      },
      {
        kind: "download",
        href: "https://github.com/andib0/moneywort/releases/latest",
        label: "Download the Moneywort APK",
      },
    ],
    images: [
      {
        src: moneywortHome,
        alt: "Moneywort home screen showing this month's spending, accounts and latest entries",
      },
      {
        src: moneywortAdd,
        alt: "Moneywort add entry sheet with category grid and number keypad",
      },
    ],
    caseStudy: {
      summary:
        "Moneywort is a personal finance app for Android that keeps every entry in SQLite on the phone. It is for people who want to track spending, budgets and recurring bills without an account, a cloud or tracking.",
      sections: [
        {
          heading: "What it does",
          paragraphs: [
            "Expenses, income and transfers go in from a keypad sheet with a category grid. On top of that sit monthly budgets per category, recurring entries such as rent or salary, an insights screen with six months of money in and out, and JSON backup, restore and CSV export. It ships as an APK on GitHub Releases and needs Android 8.0 or newer.",
          ],
        },
        {
          heading: "How it's built",
          paragraphs: [
            "The finance logic lives in moneywort-core, a plain Rust crate on rusqlite and chrono with no Tauri dependency, so cargo test covers it on its own. src-tauri is a thin shell: it opens moneywort.db in the app's data folder, guards it with a mutex and exposes each core function as a Tauri command.",
            "The Svelte 5 UI calls those commands through typed wrappers in src/lib/api.ts. In a plain browser the same wrappers fall back to mock.ts, which mirrors the core on localStorage, so screens can be worked on without a phone.",
          ],
        },
        {
          heading: "Getting money and dates right",
          paragraphs: [
            "Amounts are stored as integer cents, and the schema rejects anything that is not positive, so totals are whole-number sums with no floating-point rounding.",
            "A recurring rule stores its start date and how many times it has posted. Each next date is computed from the start date again, not from the previous date, so a rule on the 31st posts on January 31, February 28 and March 31 instead of sticking to the 28th. Due entries are posted in one transaction whenever the app loads its data, and a second run posts nothing.",
          ],
        },
        {
          heading: "Keeping data safe",
          paragraphs: [
            "Accounts and categories that already have entries are archived instead of deleted, so old entries keep their labels. Restoring a backup replaces every table inside one transaction, so a failed restore leaves the existing data untouched. The core's unit tests cover the default data, balances and summaries, invalid entries, month-end recurring dates, archiving and a backup round trip.",
          ],
        },
      ],
      facts: [
        { label: "Platform", value: "Android 8.0 or newer" },
        { label: "Core", value: "Rust, rusqlite, chrono" },
        { label: "UI", value: "Svelte 5 in Tauri 2" },
        { label: "Storage", value: "SQLite on the device" },
        { label: "Latest release", value: "v0.1.1, November 2026" },
        { label: "License", value: "MIT" },
      ],
    },
  },
];

export const otherProjects: OtherProject[] = [
  {
    slug: "phonebook-localstorage",
    title: "Phonebook",
    description:
      "A contact book that keeps everything in the browser's localStorage: add, edit, delete and search contacts, with no backend.",
    stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Zod"],
    links: [
      {
        kind: "github",
        href: "https://github.com/andib0/phonebook_localstorage",
        label: "Phonebook on GitHub",
      },
      {
        kind: "live",
        href: "https://phonebook-localstorage.vercel.app",
        label: "Phonebook live site",
      },
    ],
  },
  {
    slug: "graphql-rmorty",
    title: "Rick and Morty Characters",
    description:
      "A character browser on the Rick and Morty GraphQL API, with status and species filters, infinite scroll and English and German translations.",
    stack: ["React", "TypeScript", "Apollo Client", "GraphQL", "Tailwind CSS", "i18next"],
    links: [
      {
        kind: "github",
        href: "https://github.com/andib0/graphql_rmorty_task",
        label: "Rick and Morty Characters on GitHub",
      },
    ],
  },
  {
    slug: "irc-autosender",
    title: "ircAutosender",
    description:
      "A small desktop app that posts a random message from your list to a Twitch chat over IRC on a timer, with start and stop controls.",
    stack: ["Python", "Tkinter", "Sockets", "Threading"],
    links: [
      {
        kind: "github",
        href: "https://github.com/andib0/ircAutosender",
        label: "ircAutosender on GitHub",
      },
    ],
  },
];

export const getFeaturedProject = (slug: string) =>
  featuredProjects.find((project) => project.slug === slug);

/* Previous and next featured project, wrapping around at both ends. */
export const getProjectNeighbours = (slug: string) => {
  const index = featuredProjects.findIndex((project) => project.slug === slug);
  const count = featuredProjects.length;
  return {
    previous: featuredProjects[(index - 1 + count) % count],
    next: featuredProjects[(index + 1) % count],
  };
};

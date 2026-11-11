import type { StaticImageData } from "next/image";

export type ProjectLink = {
  kind: "github" | "live" | "download";
  href: string;
  /** Accessible label, e.g. "Glint on GitHub". */
  label: string;
};

export type FeaturedProject = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  image: StaticImageData;
  imageAlt: string;
};

export type OtherProject = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
};

/* Stub: the projects agent fills these in from the real repositories. */
export const featuredProjects: FeaturedProject[] = [];

export const otherProjects: OtherProject[] = [];

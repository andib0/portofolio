import type { MetadataRoute } from "next";
import { site } from "@/utils/mocks/data";
import { featuredProjects } from "@/utils/mocks/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${site.url}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...featuredProjects.map((project) => ({
      url: `${site.url}/projects/${project.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${site.url}/cv/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/organisms/ProjectCaseStudy/ProjectCaseStudy";
import { shareImage, site } from "@/utils/mocks/data";
import {
  featuredProjects,
  getFeaturedProject,
  getProjectNeighbours,
} from "@/utils/mocks/projects";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getFeaturedProject(slug);
  if (!project) return {};

  // Next resolves "./" against this page's own path, so "./" is /projects/<slug>/.
  const url = "./";
  const title = `${project.title} | ${site.name}`;
  const description = project.caseStudy.summary;
  return {
    title: project.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: site.name,
      locale: "en_US",
      title,
      description,
      url,
      /* A page that sets its own openGraph does not inherit the root image. */
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage.url],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getFeaturedProject(slug);
  if (!project) notFound();

  const { previous, next } = getProjectNeighbours(project.slug);

  return <ProjectCaseStudy project={project} previous={previous} next={next} />;
}

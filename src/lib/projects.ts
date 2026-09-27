import projectsData from "../../content/projects.json";
import { release } from "@/lib/truth";

export type ProjectRecord = (typeof projectsData.items)[number];

export function getProjectCandidates(): readonly ProjectRecord[] {
  return projectsData.items;
}

export function getPublicProjects(): readonly ProjectRecord[] {
  if (!release.routes.projectsPublic) return [];
  return projectsData.items.filter((project) => project.publicationAllowed && project.status === "PUBLISHED");
}

export function getPublicProject(slug: string): ProjectRecord | undefined {
  return getPublicProjects().find((project) => project.slug === slug);
}

import type { MetadataRoute } from "next";
import routes from "../../content/routes.json";
import { getPublicProjects } from "@/lib/projects";
import { release, truth } from "@/lib/truth";

function routeAllowed(path: string, defaultIndexable: boolean) {
  if (path.startsWith("/peliculas/nanoceramica/ir")) return release.routes.tonePagesIndexable;
  if (path === "/proyectos/") return release.routes.projectsPublic;
  if (path === "/garantias/") return release.production.warrantiesApproved && release.routes.warrantyPageIndexable;
  if (path === "/guias/polarizado-automotriz-jalisco/") return release.routes.jaliscoGuideIndexable;
  return defaultIndexable;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = truth.site.canonicalBaseUrl;
  const staticRoutes = routes
    .filter((route) => routeAllowed(route.path, route.indexable))
    .map((route) => ({ url: `${base}${route.path === "/" ? "/" : route.path}`, changeFrequency: "monthly" as const, priority: route.path === "/" ? 1 : 0.7 }));
  const projects = release.routes.projectsPublic
    ? getPublicProjects().map((project) => ({ url: `${base}/proyectos/${project.slug}/`, changeFrequency: "yearly" as const, priority: 0.6 }))
    : [];
  return [...staticRoutes, ...projects];
}

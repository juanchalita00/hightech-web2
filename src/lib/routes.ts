import routeRegistry from "../../content/routes.json";

export const routes = routeRegistry;

export function routeRecord(path: string) {
  return routes.find((route) => route.path === path);
}

export function isIndexable(path: string): boolean {
  return routeRecord(path)?.indexable ?? false;
}

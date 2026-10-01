import { notFound } from "next/navigation";

/** Única definición de entorno: Production sólo cuando NEXT_PUBLIC_DEPLOYMENT_ENV === "production". */
export function isProductionDeployment(): boolean {
  return process.env.NEXT_PUBLIC_DEPLOYMENT_ENV === "production";
}

/**
 * Hard gate para documentos no liberados: en Production responde 404 y no renderiza el borrador.
 * En Preview/Staging la página sigue disponible (noindex) para revisión interna.
 */
export function requireReleasedInProduction(approved: boolean): void {
  if (!approved && isProductionDeployment()) notFound();
}

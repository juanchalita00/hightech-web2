import { notFound } from "next/navigation";
import { isProductionDeployment } from "@/lib/deployment-env";

export { deploymentEnvironment, isProductionDeployment } from "@/lib/deployment-env";

/**
 * Hard gate para contenido no liberado: en Production responde 404 y no renderiza el borrador.
 * En Preview/Staging la página sigue disponible (noindex) para revisión interna.
 */
export function requireReleasedInProduction(approved: boolean): void {
  if (!approved && isProductionDeployment()) notFound();
}

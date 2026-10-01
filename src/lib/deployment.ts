import { notFound } from "next/navigation";

/**
 * Entorno de despliegue. Prioridad:
 * 1. VERCEL_ENV (variable de sistema de Vercel: "production" | "preview" | "development").
 * 2. VERCEL_TARGET_ENV (segunda señal de Vercel).
 * 3. NEXT_PUBLIC_DEPLOYMENT_ENV, sólo fuera de Vercel (local, simulaciones y tests).
 * Dentro de Vercel, NEXT_PUBLIC_DEPLOYMENT_ENV no puede contradecir a la plataforma.
 */
export function deploymentEnvironment(): string {
  if (process.env.VERCEL_ENV) return process.env.VERCEL_ENV;
  if (process.env.VERCEL_TARGET_ENV) return process.env.VERCEL_TARGET_ENV;
  return process.env.NEXT_PUBLIC_DEPLOYMENT_ENV ?? "development";
}

/** Única definición de Production para gates del servidor (robots, páginas no liberadas). */
export function isProductionDeployment(): boolean {
  return deploymentEnvironment() === "production";
}

/**
 * Hard gate para contenido no liberado: en Production responde 404 y no renderiza el borrador.
 * En Preview/Staging la página sigue disponible (noindex) para revisión interna.
 */
export function requireReleasedInProduction(approved: boolean): void {
  if (!approved && isProductionDeployment()) notFound();
}

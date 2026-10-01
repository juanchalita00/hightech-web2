/**
 * Resolución única del entorno de despliegue (sin dependencias de Next para poder usarse en next.config.ts).
 * Prioridad:
 * 1. VERCEL_ENV (variable de sistema de Vercel: "production" | "preview" | "development").
 * 2. VERCEL_TARGET_ENV (segunda señal de Vercel).
 * 3. NEXT_PUBLIC_DEPLOYMENT_ENV, sólo fuera de Vercel (local, simulaciones y tests).
 * Dentro de Vercel, NEXT_PUBLIC_DEPLOYMENT_ENV no puede contradecir a la plataforma.
 */
export function deploymentEnvironment(env: Record<string, string | undefined> = process.env): string {
  if (env.VERCEL_ENV) return env.VERCEL_ENV;
  if (env.VERCEL_TARGET_ENV) return env.VERCEL_TARGET_ENV;
  return env.NEXT_PUBLIC_DEPLOYMENT_ENV ?? "development";
}

/** Production sólo cuando el entorno resuelto es exactamente "production". */
export function isProductionDeployment(env: Record<string, string | undefined> = process.env): boolean {
  return deploymentEnvironment(env) === "production";
}

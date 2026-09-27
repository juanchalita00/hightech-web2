import { truth } from "@/lib/truth";

/**
 * Adapter boundary.
 * Hoy devuelve el snapshot local aprobado.
 * Sanity deberá implementar esta misma interfaz sin permitir que business_truth crudo llegue a la UI.
 */
export async function getPublicationTruth() {
  return truth;
}

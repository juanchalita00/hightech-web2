import { GateNotice } from "@/components/GateNotice";
import { hasApprovedWarranty } from "@/lib/truth";

type Props = { product: string };

export function WarrantySummaryGate({ product }: Props) {
  if (!hasApprovedWarranty()) {
    return <GateNotice title="Garantía no liberada">La arquitectura de garantía para {product} existe, pero la póliza contractual pública sigue bloqueada. No renderizar plazo universal en producción.</GateNotice>;
  }
  return null;
}

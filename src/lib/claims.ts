import { claimRegistry } from "@/lib/truth";

export function isBlockedCopy(text: string): string | null {
  const normalized = text.toLocaleLowerCase("es-MX");
  const match = claimRegistry.blockedPhrases.find((phrase) =>
    normalized.includes(phrase.toLocaleLowerCase("es-MX")),
  );
  return match ?? null;
}

export function approvedClaim(id: string): string {
  const claim = claimRegistry.approved.find((item) => item.id === id);
  if (!claim) throw new Error(`Claim no aprobado: ${id}`);
  return claim.text;
}

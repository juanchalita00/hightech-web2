import publicationTruth from "../../content/publication-truth.json";
import claims from "../../content/claims.json";
import releaseState from "../../content/release-state.json";

export type NanoProduct = (typeof publicationTruth.nano)[number];

export const truth = publicationTruth;
export const release = releaseState;
export const claimRegistry = claims;

export function getNanoProduct(id: string): NanoProduct | undefined {
  return truth.nano.find((product) => product.id.toLowerCase() === id.toLowerCase());
}

export function getPublicAddress(): string | null {
  return release.production.napApproved ? truth.contact.exactAddress : null;
}

export function hasApprovedWarranty(): boolean {
  return release.production.warrantiesApproved;
}

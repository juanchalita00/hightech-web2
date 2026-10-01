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

export type PublicAddress = NonNullable<typeof truth.contact.exactAddress>;

/** Dirección canónica (única) sólo cuando el NAP está aprobado. */
export function getPublicAddress(): PublicAddress | null {
  return release.production.napApproved ? truth.contact.exactAddress : null;
}

/** Líneas visibles de la dirección: calle, colonia y "CP Municipio, Estado". */
export function addressLines(address: PublicAddress): string[] {
  return [address.streetAddress, address.neighborhood, `${address.postalCode} ${address.addressLocality}, ${address.addressRegion}`];
}

export function hasApprovedWarranty(): boolean {
  return release.production.warrantiesApproved;
}

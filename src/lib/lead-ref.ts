const ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";

export function generateLeadRef(): string {
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  const code = Array.from(bytes, (byte) => ALPHABET[byte % ALPHABET.length]).join("");
  return `HT-W2-${code}`;
}

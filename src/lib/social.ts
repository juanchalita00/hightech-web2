import { truth } from "@/lib/truth";

export const socialProfiles = [
  { id: "instagram", label: "Instagram", href: truth.contact.social.instagram },
  { id: "tiktok", label: "TikTok", href: truth.contact.social.tiktok },
  { id: "linkedin", label: "LinkedIn", href: truth.contact.social.linkedin },
  { id: "facebook", label: "Facebook", href: truth.contact.social.facebook },
  { id: "googleMaps", label: "Google Maps", href: truth.contact.social.googleMaps },
] as const;

export type SocialId = (typeof socialProfiles)[number]["id"];

export function socialSameAs(): string[] {
  return socialProfiles.map((profile) => profile.href);
}

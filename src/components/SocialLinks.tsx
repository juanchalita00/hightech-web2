import { socialProfiles, type SocialId } from "@/lib/social";

function SocialIcon({ id }: { id: SocialId }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (id) {
    case "instagram":
      return <svg {...common}><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.4"/><circle cx="17.2" cy="6.8" r=".8" fill="currentColor" stroke="none"/></svg>;
    case "tiktok":
      return <svg {...common}><path d="M14 5.2v9.1a3.3 3.3 0 1 1-2.3-3.15V8.6c1.4.7 2.6 1.1 4.3.9V7.2c-1.1.1-2-.3-2-2Z"/></svg>;
    case "linkedin":
      return <svg {...common}><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 11v5M8 8h.01M12 16v-3.1c0-1.2.7-2 1.7-2s1.5.8 1.5 2V16"/></svg>;
    case "facebook":
      return <svg {...common}><path d="M14 9h2.2V6H14c-2 0-3.2 1.2-3.2 3.3V11H8.5v3H10.8v5h3V14h2.1l.4-3H13.8v-1.1c0-.5.2-.9 1.2-.9Z"/></svg>;
    case "googleMaps":
      return <svg {...common}><path d="M12 21s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10Z"/><circle cx="12" cy="11" r="2.1"/></svg>;
  }
}

export function SocialLinks({ labeled = false, tone = "dark" }: { labeled?: boolean; tone?: "dark" | "light" }) {
  const className = ["social-links", labeled ? "social-links-labeled" : "", tone === "light" ? "social-links-on-light" : ""].filter(Boolean).join(" ");
  return (
    <nav className={className} aria-label="Redes y mapas">
      {socialProfiles.map((profile) => (
        <a key={profile.id} href={profile.href} target="_blank" rel="noopener noreferrer" aria-label={profile.label}>
          <SocialIcon id={profile.id} />
          {labeled ? <span>{profile.label}</span> : null}
        </a>
      ))}
    </nav>
  );
}

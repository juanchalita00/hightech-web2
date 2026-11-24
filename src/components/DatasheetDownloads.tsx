import { datasheets, securityDatasheetLabel } from "@/lib/datasheets";

type Kind = "casa" | "auto" | "security";

const defaultLabel: Record<Kind, string> = {
  casa: datasheets.casa.label,
  auto: datasheets.auto.label,
  security: securityDatasheetLabel,
};

function hrefFor(kind: Kind): string | null {
  if (kind === "casa") return datasheets.casa.href;
  if (kind === "auto") return datasheets.auto.href;
  return datasheets.securityPdf;
}

export function DatasheetDownloads({
  items,
}: {
  items: { kind: Kind; label?: string }[];
}) {
  const visible = items
    .map((item) => ({ ...item, href: hrefFor(item.kind), label: item.label ?? defaultLabel[item.kind] }))
    .filter((item) => item.href);

  if (visible.length === 0) return null;

  return (
    <div className="datasheet-downloads">
      {visible.map((item, index) => (
        <a
          key={item.href}
          className={index === 0 ? "button button-primary" : "button button-secondary"}
          href={item.href!}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;
  let last = 0;
  let index = 0;
  for (const match of text.matchAll(pattern)) {
    const start = match.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    const token = match[0];
    const key = `${keyPrefix}-${index++}`;
    if (token.startsWith("**")) {
      nodes.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const [, label, href] = link;
        if (href.startsWith("/")) nodes.push(<Link key={key} href={href}>{label}</Link>);
        else nodes.push(<a key={key} href={href} target="_blank" rel="noopener noreferrer">{label}</a>);
      }
    }
    last = start + token.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function Markdown({ source }: { source: string }) {
  const blocks = source.replace(/\r\n/g, "\n").split(/\n{2,}/);
  return (
    <div className="markdown">
      {blocks.map((block, index) => {
        const lines = block.split("\n").filter((line) => line.trim().length > 0);
        if (!lines.length) return null;
        if (lines.every((line) => line.startsWith("- "))) {
          return (
            <ul key={index}>
              {lines.map((line) => <li key={line}>{renderInline(line.slice(2), `${index}-${line}`)}</li>)}
            </ul>
          );
        }
        const heading = lines[0].match(/^(#{2,3})\s+(.+)$/);
        if (heading && lines.length === 1) {
          const text = renderInline(heading[2], `h-${index}`);
          return heading[1].length === 2 ? <h2 key={index}>{text}</h2> : <h3 key={index}>{text}</h3>;
        }
        return <p key={index}>{renderInline(lines.join(" "), `p-${index}`)}</p>;
      })}
    </div>
  );
}

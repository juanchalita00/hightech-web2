import { getBlogPosts } from "@/lib/blog";
import { truth } from "@/lib/truth";

function escapeXml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function GET() {
  const base = truth.site.canonicalBaseUrl;
  const items = getBlogPosts().map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${base}/blog/${post.slug}/</link>
      <guid>${base}/blog/${post.slug}/</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Blog de HIGHTECH Polarizados</title>
    <link>${base}/blog/</link>
    <description>Artículos sobre películas para cristales en Zapopan y Guadalajara.</description>
    <language>es-mx</language>${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}

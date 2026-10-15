import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AutomotiveLawCopy } from "@/components/AutomotiveLawCopy";
import { JsonLd } from "@/components/JsonLd";
import { formatBlogDate, getBlogPost, getBlogPosts } from "@/lib/blog";
import { Markdown } from "@/lib/markdown";
import { canonicalUrl } from "@/lib/seo";
import { truth } from "@/lib/truth";

function MythPost({ body }: { body: string }) {
  const parts = body.split(/\n{2,}/);
  const lead = parts[0] ?? "";
  const rest = parts.slice(1).join("\n\n");
  return <>
    <Markdown source={lead} />
    <AutomotiveLawCopy links="blog" />
    {rest ? <Markdown source={rest} /> : null}
  </>;
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { robots: { index: false, follow: false } };
  return {
    title: { absolute: `${post.title} | HIGHTECH Polarizados` },
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: { type: "article", title: post.title, description: post.description, publishedTime: post.date, modifiedTime: post.updated },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const url = canonicalUrl(`/blog/${post.slug}/`);
  const related = getBlogPosts().filter((item) => item.slug !== post.slug).slice(0, 2);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    inLanguage: "es-MX",
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: truth.brand.name, url: truth.site.canonicalBaseUrl },
    publisher: { "@id": `${truth.site.canonicalBaseUrl}/#organization` },
    image: `${truth.site.canonicalBaseUrl}/brand/hightech-logo.png`,
  };
  return (
    <article className="section blog-post">
      <JsonLd data={schema} />
      <div className="container blog-post-layout">
        <p className="eyebrow">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="blog-post-meta"><time dateTime={post.date}>{formatBlogDate(post.date)}</time> · HIGHTECH Polarizados · Zapopan, Jalisco</p>
        {post.slug === "mitos-de-porcentajes-en-el-auto" ? <MythPost body={post.body} /> : <Markdown source={post.body} />}
        <p className="blog-post-cta"><Link className="button button-primary" href="/contacto/#cotizar">Solicitar cotización</Link></p>
        {related.length ? (
          <aside className="blog-related">
            <h2>También puede servirte</h2>
            {related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}/`}>{item.title}</Link>)}
            <Link href="/guias/">Guías técnicas</Link>
            <Link href="/blog/">Todos los artículos</Link>
          </aside>
        ) : null}
      </div>
    </article>
  );
}

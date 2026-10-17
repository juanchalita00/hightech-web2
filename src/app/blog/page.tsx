import type { Metadata } from "next";
import Link from "next/link";
import { formatBlogDate, getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/" },
  title: { absolute: "Blog de películas para cristales | HIGHTECH Polarizados" },
  description: "Artículos de HIGHTECH Polarizados sobre nanocerámica, confort en casa y porcentajes automotrices, escritos para Zapopan y Guadalajara.",
};

export default function BlogIndexPage() {
  const posts = getBlogPosts();
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Blog</p>
        <h1>Para decidir con mejor contexto.</h1>
        <p className="blog-lede">Notas cortas sobre películas, luz y vehículos. Si un tema necesita la ficha técnica, enlazamos la guía correspondiente.</p>
        {posts.length ? (
          <div className="blog-index">
            {posts.map((post) => (
              <article key={post.slug}>
                <p className="eyebrow">{post.category} · <time dateTime={post.date}>{formatBlogDate(post.date)}</time></p>
                <h2><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h2>
                <p>{post.description}</p>
                <Link className="text-link text-link-strong" href={`/blog/${post.slug}/`}>Leer artículo</Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="gallery-empty">
            <h2>Todavía no hay artículos publicados.</h2>
            <p>Mientras se preparan, las guías técnicas siguen disponibles.</p>
            <Link className="button button-primary" href="/guias/">Ver guías</Link>
          </div>
        )}
        <p className="blog-rss"><a href="/rss.xml">Suscribirse por RSS</a></p>
      </div>
    </section>
  );
}

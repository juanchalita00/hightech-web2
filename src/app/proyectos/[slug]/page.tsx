import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductCTA } from "@/components/ProductCTA";
import { requireReleasedInProduction } from "@/lib/deployment";
import { getPublicProject, getPublicProjects } from "@/lib/projects";
import { release } from "@/lib/truth";

const productLabel: Record<string, string> = { NANOCERAMICA: "Nanocerámica" };

export function generateStaticParams() {
  return getPublicProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getPublicProject(slug);
  if (!project) return { robots: { index: false, follow: false } };
  return {
    title: { absolute: `Polarizado: ${project.internalTitle} | HIGHTECH Polarizados` },
    alternates:{canonical:`/proyectos/${slug}/`},
    robots: release.routes.projectsPublic ? { index: true, follow: true } : { index: false, follow: true },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  requireReleasedInProduction(release.routes.projectsPublic);
  const project = getPublicProject(slug);
  if (!project) notFound();
  const image = project.image;
  const imageAlt = project.imageAlt;
  return (
    <>
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1.25rem" }}>
          <p className="eyebrow">Proyecto</p>
          <h1>{project.internalTitle}</h1>
          {image ? (
            <Image src={image} alt={imageAlt || project.internalTitle} width={1600} height={1000} style={{ width: "100%", height: "auto", borderRadius: "1rem" }} />
          ) : null}
          <div className="project-case-grid">
            <div>
              <p className="eyebrow">Qué se buscaba</p>
              <h2>{project.problem}</h2>
              <p>{project.observedResult}</p>
            </div>
            <div className="project-case-facts">
              <div><span>Película</span><strong>{productLabel[project.productId ?? ""] ?? project.productId}</strong></div>
              <div><span>Lugar</span><strong>{project.locationGeneral}</strong></div>
            </div>
          </div>
        </div>
      </section>
      <ProductCTA
        title="¿Tienes un cristal parecido?"
        text="El caso muestra cómo se instaló. Otro vidrio se cotiza con sus propias medidas."
        cta="WhatsApp"
        context={{ sourcePage: `/proyectos/${slug}/`, businessLine: project.businessLine }}
        secondaryHref="/proyectos/"
        secondaryLabel="Ver proyectos"
      />
    </>
  );
}

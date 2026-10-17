import type { Metadata } from "next";
import Link from "next/link";
import { EvidenceGatePanel } from "@/components/EvidenceGatePanel";
import { ProjectGrid } from "@/components/ProjectGrid";
import { TrustHero } from "@/components/TrustHero";
import { getPublicProjects } from "@/lib/projects";
import { requireReleasedInProduction } from "@/lib/deployment";
import { release } from "@/lib/truth";

export const metadata: Metadata = {
  alternates: { canonical: "/proyectos/" },
  title: { absolute: "Proyectos documentados | HIGHTECH Polarizados" },
  description: "Casos de HIGHTECH Polarizados con el problema, la película instalada y el resultado que se puede mostrar. Las fotos sueltas están en la galería.",
  robots: release.routes.projectsPublic ? { index: true, follow: true } : { index: false, follow: true },
};

export default function Page() {
  requireReleasedInProduction(release.routes.projectsPublic);
  const publicProjects = getPublicProjects();
  return <>
    <TrustHero eyebrow="Proyectos" title="Un proyecto se entiende mejor cuando se puede explicar qué se hizo." description="Aquí publicamos casos con el problema, la solución y fotos que tenemos autorización de mostrar. Si buscas imágenes, la galería ya está disponible." points={["Problema y solución", "Fotos reales", "Galería abierta"]} ctaLabel="Ver galería" ctaHref="/galeria/" />
    {publicProjects.length ? <section className="section"><div className="container"><div className="section-heading"><p className="eyebrow">Casos publicados</p><h2>Proyectos documentados.</h2></div><ProjectGrid projects={publicProjects} /></div></section> : <section className="section section-project-gate"><div className="container"><EvidenceGatePanel /></div></section>}
    <section className="section section-alt">
      <div className="container project-standard-grid">
        <div>
          <p className="eyebrow">Qué vas a encontrar</p>
          <h2>Contexto, no solo una foto.</h2>
          <p>Cada caso publicado dice qué espacio era, qué se buscaba, qué película se instaló y qué se puede observar del resultado.</p>
        </div>
        <ol>
          <li><span>01</span><div><strong>El espacio</strong><p>Casa, negocio o vehículo, y la necesidad de ese proyecto.</p></div></li>
          <li><span>02</span><div><strong>La solución</strong><p>La película y el tono que sí se instalaron.</p></div></li>
          <li><span>03</span><div><strong>La evidencia</strong><p>Fotografías del trabajo. Las mediciones solo aparecen si existen.</p></div></li>
          <li><span>04</span><div><strong>El permiso</strong><p>Mostramos un proyecto cuando se puede compartir.</p></div></li>
        </ol>
        <p><Link href="/galeria/">Ir a la galería</Link></p>
      </div>
    </section>
  </>;
}

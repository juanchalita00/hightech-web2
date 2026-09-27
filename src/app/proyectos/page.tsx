import type { Metadata } from "next";
import { EvidenceGatePanel } from "@/components/EvidenceGatePanel";
import { ProjectGrid } from "@/components/ProjectGrid";
import { TrustHero } from "@/components/TrustHero";
import { getProjectCandidates, getPublicProjects } from "@/lib/projects";
import { release } from "@/lib/truth";

export const metadata:Metadata={ alternates: { canonical: "/proyectos/" },title:"Proyectos | HIGHTECH Polarizados",description:"Casos documentados de HIGHTECH Polarizados publicados con contexto, producto y permiso.",robots:release.routes.projectsPublic?{index:true,follow:true}:{index:false,follow:true}};

export default function Page(){const publicProjects=getPublicProjects();const candidates=getProjectCandidates();return <>
  <TrustHero eyebrow="Evidencia" title="Un proyecto vale más cuando puedes explicar qué se hizo y por qué." description="Esta sección está diseñada para publicar casos reales con producto identificado, contexto, resultado demostrable y autorización. Mientras esos datos no estén completos, el caso permanece fuera de la web pública." points={["Fotos auténticas","Producto y contexto","Permiso antes de publicar"]}/>
  {publicProjects.length ? <section className="section"><div className="container"><div className="section-heading"><p className="eyebrow">Casos publicados</p><h2>Proyectos documentados.</h2></div><ProjectGrid projects={publicProjects}/></div></section> : <section className="section section-project-gate"><div className="container"><EvidenceGatePanel candidateCount={candidates.length}/></div></section>}
  <section className="section section-alt"><div className="container project-standard-grid"><div><p className="eyebrow">Qué debe demostrar un caso</p><h2>Contexto antes que galería.</h2><p>No publicaremos tres fotos sueltas con un título genérico. Cada caso necesita explicar problema, condiciones, solución, límites y resultado observable.</p></div><ol><li><span>01</span><div><strong>Contexto</strong><p>Tipo de espacio, necesidad y condiciones relevantes.</p></div></li><li><span>02</span><div><strong>Solución</strong><p>Producto y tono realmente instalados.</p></div></li><li><span>03</span><div><strong>Evidencia</strong><p>Fotografías auténticas y mediciones sólo cuando existan con método.</p></div></li><li><span>04</span><div><strong>Permiso</strong><p>Uso comercial separado de la foto técnica del expediente.</p></div></li></ol></div></section>
</>}

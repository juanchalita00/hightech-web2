import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCTA } from "@/components/ProductCTA";
import { TrustHero } from "@/components/TrustHero";
import { getPublicProject, getPublicProjects } from "@/lib/projects";

export function generateStaticParams(){return getPublicProjects().map(project=>({slug:project.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const project=getPublicProject(slug);if(!project)return {robots:{index:false,follow:false}};return {title:`${project.internalTitle} | Proyectos HIGHTECH`,alternates:{canonical:`/proyectos/${slug}/`},robots:{index:true,follow:true}};}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=getPublicProject(slug);if(!project)notFound();return <>
  <TrustHero eyebrow="Proyecto documentado" title={project.internalTitle} description="Caso publicado después de pasar los gates de contexto, evidencia, privacidad y autorización." points={[project.businessLine,"Evidencia autorizada","Contexto trazable"]}/>
  <section className="section"><div className="container project-case-grid"><div><p className="eyebrow">Problema</p><h2>{project.problem ?? "Contexto documentado en el expediente del proyecto."}</h2></div><div className="project-case-facts"><div><span>Producto</span><strong>{project.productId ?? "Documentado"}</strong></div><div><span>Tono</span><strong>{project.tone ?? "Según caso"}</strong></div><div><span>Ubicación</span><strong>{project.locationGeneral ?? "Precisión limitada por privacidad"}</strong></div></div></div></section>
  <ProductCTA title="¿Tienes un proyecto parecido?" text="Usamos el caso como referencia contextual, no como promesa de que otro cristal tendrá exactamente el mismo resultado." cta="Revisar mi proyecto" context={{sourcePage:`/proyectos/${slug}/`,businessLine:project.businessLine}} secondaryHref="/proyectos/" secondaryLabel="Ver proyectos"/>
</>}

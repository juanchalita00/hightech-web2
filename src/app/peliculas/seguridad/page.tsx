import Link from "next/link";
import { Icon } from "@/components/Icon";
import { LimitationNotice } from "@/components/LimitationNotice";
import { ProductCTA } from "@/components/ProductCTA";
import { ProductHero } from "@/components/ProductHero";
import { SecuritySystemDiagram } from "@/components/SecuritySystemDiagram";
import { WarrantySummaryGate } from "@/components/WarrantySummaryGate";
import { GateNotice } from "@/components/GateNotice";

export const metadata = { alternates: { canonical: "/peliculas/seguridad/" },
  title: { absolute: "Película de seguridad para cristal | HIGHTECH Polarizados" },
  description: "Película arquitectónica orientada a retención de fragmentos. Los objetivos de retardo de acceso dependen del sistema completo: película, vidrio, marco y fijación.",
};

export default function SecurityPage() {
  return <>
    <ProductHero variant="security" eyebrow="Seguridad arquitectónica" title="Cuando el cristal se rompe, la película puede ayudar a mantener los fragmentos unidos." description="Esa función no es lo mismo que blindaje ni que una garantía anti-intrusión. Si el objetivo es retardar el acceso, hay que evaluar película, vidrio, marco y fijación como sistema." ctaLabel="Evaluar mis cristales" context={{sourcePage:"/peliculas/seguridad/", product:"Seguridad", problem:"safety"}} facts={[{label:"Función base",value:"Retención"},{label:"Intrusión",value:"Sistema completo"},{label:"Uso",value:"Arquitectura"}]} secondary={<Link href="/servicios/" className="button button-secondary">Ver necesidades <Icon name="arrow" size={18}/></Link>} />

    <section className="section security-function-section"><div className="container"><div className="section-heading section-heading-split"><div><p className="eyebrow">Qué hace realmente</p><h2>“Película de seguridad” describe una función, no una promesa ilimitada.</h2></div><p>El nivel de desempeño depende de la construcción de la película y de cómo trabaja junto con el cristal y su marco.</p></div><div className="security-do-grid"><article className="security-do"><span><Icon name="check" size={21}/></span><h3>Retención de fragmentos</h3><p>Puede ayudar a mantener unidos los fragmentos del vidrio después de una rotura.</p></article><article className="security-do"><span><Icon name="check" size={21}/></span><h3>Especificación por objetivo</h3><p>La solución cambia si el objetivo es accidente, fragmentación o una estrategia de retardo de acceso.</p></article><article className="security-dont"><span>×</span><h3>No significa “irrompible”</h3><p>No usamos blindaje, antibalas, impide robo ni otros absolutos sin un sistema y evidencia que realmente los soporte.</p></article></div></div></section>

    <section className="section section-alt"><div className="container"><div className="section-heading"><p className="eyebrow">Sistema completo</p><h2>Para objetivos de intrusión, una película sola no cuenta toda la historia.</h2></div><SecuritySystemDiagram/><LimitationNotice title="La fijación puede cambiar el resultado"><p>Una afirmación sobre retardo de acceso requiere conocer la película, el vidrio, el marco, el sistema de fijación/perímetro y la evidencia aplicable a esa configuración.</p></LimitationNotice></div></section>

    <section className="section security-process-section"><div className="container security-process-grid"><div><p className="eyebrow">Cómo lo revisamos</p><h2>Primero definimos el riesgo que quieres atender.</h2><p>No es lo mismo reducir dispersión de fragmentos que diseñar una solución orientada a retardar acceso. Esa diferencia debe quedar clara antes de cotizar.</p></div><ol><li><span>01</span><div><strong>Objetivo</strong><p>Qué situación quieres mejorar.</p></div></li><li><span>02</span><div><strong>Cristal y marco</strong><p>Qué sistema existe hoy.</p></div></li><li><span>03</span><div><strong>Película / configuración</strong><p>Qué solución puede especificarse con respaldo.</p></div></li></ol></div></section>

    <div className="container"><GateNotice title="Strong claims gate">`securityStrongClaims=false`: no renderizar resistencia cuantificada, anti-intrusión categórica ni garantía universal.</GateNotice><WarrantySummaryGate product="Película de Seguridad" /></div>
    <ProductCTA title="Cuéntanos qué quieres que haga el cristal cuando se rompa." text="Con el objetivo claro podemos revisar si necesitas retención de fragmentos o una evaluación de sistema más completa." cta="Evaluar mis cristales" context={{sourcePage:"/peliculas/seguridad/", product:"Seguridad", problem:"safety"}} secondaryHref="/comercial/" secondaryLabel="Ver proyectos comerciales" />
  </>;
}

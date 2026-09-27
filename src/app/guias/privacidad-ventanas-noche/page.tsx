import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, GuideAside, GuideBody } from "@/components/GuideArticle";
import { GuideCallout } from "@/components/GuideCallout";
import { GuideHero } from "@/components/GuideHero";
import { PrivacyLightDemo } from "@/components/PrivacyLightDemo";
import { ProductCTA } from "@/components/ProductCTA";

export const metadata:Metadata={ alternates: { canonical: "/guias/privacidad-ventanas-noche/" },title:"Privacidad en ventanas de noche | HIGHTECH Polarizados",description:"Por qué la privacidad de una película puede disminuir o invertirse de noche cuando el interior tiene más luz que el exterior."};
export default function Page(){return <>
  <GuideHero eyebrow="Guía · Privacidad" title="De noche, la privacidad puede invertirse." description="Las soluciones basadas en contraste y reflectividad dependen de qué lado está más iluminado. Por eso no prometemos un espejo unidireccional permanente." category="Privacidad" ctaHref="/peliculas/privacidad/" ctaLabel="Ver soluciones de privacidad" />
  <GuideArticle><GuideBody>
    <h2>La privacidad depende del contraste de luz.</h2><p>Durante el día, un exterior más iluminado puede hacer que ciertas películas se perciban más reflectivas desde afuera. Por la noche, si el interior está encendido y afuera está oscuro, ese contraste cambia.</p>
    <PrivacyLightDemo/>
    <GuideCallout title="Regla sencilla"><p>Si quieres evaluar privacidad, no revises la película sólo al mediodía. Piensa también en la condición más crítica: interior iluminado y exterior oscuro.</p></GuideCallout>
    <h2>Oscuridad y reflectividad no son exactamente lo mismo.</h2><p>Una película oscura reduce transmisión visible. Una solución reflectiva cambia además la apariencia del cristal. En ambos casos la privacidad real depende de iluminación, distancia y ángulo.</p>
    <h2>¿Qué hacemos cuando la privacidad nocturna es prioritaria?</h2><p>Primero definimos qué tanto debe bloquearse la visión, cuánto quieres conservar de luz y si aceptas apoyo adicional con persianas, cortinas, esmerilado u otra solución específica. No vendemos una promesa 24/7 que el comportamiento óptico no puede sostener.</p>
  </GuideBody><GuideAside><div className="guide-aside-card"><span>Expectativa correcta</span><strong>Privacidad ≠ invisibilidad.</strong><p>La iluminación puede cambiar el resultado a lo largo del día.</p></div><div className="guide-aside-card"><span>Relacionadas</span><Link href="/peliculas/privacidad/">Películas de privacidad</Link><Link href="/peliculas/plata-reflecta/">Plata Reflecta</Link></div></GuideAside></GuideArticle>
  <ProductCTA title="Diseñemos la privacidad para el horario en que realmente la necesitas." text="Envíanos fotos del cristal y cuéntanos si la prioridad es de día, de noche o en ambos escenarios." cta="Revisar mi privacidad" context={{sourcePage:"/guias/privacidad-ventanas-noche/",problem:"PRIVACY"}} secondaryHref="/peliculas/privacidad/" secondaryLabel="Ver privacidad" />
</>}

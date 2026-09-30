import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, GuideAside, GuideBody } from "@/components/GuideArticle";
import { GuideCallout } from "@/components/GuideCallout";
import { GuideHero } from "@/components/GuideHero";
import { Icon } from "@/components/Icon";
import { PrivacyLightDemo } from "@/components/PrivacyLightDemo";
import { ProductCTA } from "@/components/ProductCTA";

export const metadata:Metadata={ alternates: { canonical: "/guias/privacidad-ventanas-noche/" },title:{ absolute: "Privacidad en ventanas de noche | HIGHTECH Polarizados" },description:"Por qué la privacidad de una película puede disminuir o invertirse de noche cuando el interior tiene más luz que el exterior."};
export default function Page(){return <>
  <GuideHero eyebrow="Guía · Privacidad" title="¿Por qué de día no ven hacia adentro y de noche sí?" description="Porque la privacidad de una película reflectiva depende del contraste de luz. Cuando afuera hay más luz, cuesta más ver hacia adentro. Cuando el interior queda más iluminado que el exterior, ese efecto puede reducirse o invertirse." category="Privacidad nocturna" ctaHref="/peliculas/privacidad/" ctaLabel="Ver soluciones de privacidad" />
  <GuideArticle><GuideBody>
    <h2>La clave está en qué lado del cristal tiene más luz.</h2>
    <p>Una película reflectiva no crea un espejo unidireccional permanente. Durante el día, la luz exterior puede hacer que el cristal se vea más reflectivo desde afuera. Por la noche, si enciendes las luces interiores y afuera está oscuro, cambia el contraste y también cambia lo que puede verse.</p>
    <PrivacyLightDemo/>
    <GuideCallout title="Una regla fácil de recordar"><p>La privacidad favorece al lado que está más oscuro. Si el interior queda más iluminado que el exterior, desde afuera puede verse más hacia adentro.</p></GuideCallout>

    <h2>Oscurecer el cristal y hacerlo más reflectivo no son exactamente lo mismo.</h2>
    <p>Un tono más oscuro reduce la cantidad de luz visible que atraviesa el cristal. Una película reflectiva cambia además su apariencia. Ambas cosas pueden influir en la privacidad, pero ninguna garantiza por sí sola que nunca pueda verse hacia el interior.</p>
    <p className="guide-bridge">Por eso primero definimos qué tipo de privacidad buscas y en qué horario la necesitas.</p>

    <p className="eyebrow">Si la noche es la prioridad</p>
    <h2>Cuando necesitas privacidad menos dependiente de la iluminación, cambia la estrategia.</h2>
    <p>En esos casos puede tener más sentido una solución que difumine o bloquee la visión, o combinar la película con cortinas o persianas según el espacio.</p>
    <div className="guide-options">
      <div><strong>Reflectividad</strong><p>Funciona mejor cuando el exterior tiene más luz que el interior.</p></div>
      <div><strong>Difusión</strong><p>Reduce la definición de lo que se ve a través del cristal y depende menos del contraste de luz.</p></div>
      <div><strong>Solución opaca o complemento</strong><p>Cuando realmente necesitas bloquear la visión, puede ser necesario usar otra solución o complementarla con cortinas o persianas.</p></div>
    </div>
    <p className="guide-context-link"><Link className="text-link" href="/peliculas/plata-reflecta/">Ver cómo cambia la privacidad según la iluminación <Icon name="arrow" size={17}/></Link></p>
  </GuideBody><GuideAside><div className="guide-aside-card"><span>Idea clave</span><strong>Privacidad ≠ invisibilidad</strong><p>La iluminación, el ángulo y la distancia pueden cambiar lo que se ve a través del cristal.</p></div><div className="guide-aside-card"><span>Relacionadas</span><Link href="/peliculas/privacidad/">Películas de privacidad</Link><Link href="/peliculas/plata-reflecta/">Plata Reflecta</Link></div></GuideAside></GuideArticle>
  <ProductCTA title="Cuéntanos dónde necesitas más privacidad." text="Revisamos el espacio, la iluminación y la vista que quieres conservar para recomendarte la estrategia que tenga más sentido." cta="Quiero una recomendación" context={{sourcePage:"/guias/privacidad-ventanas-noche/",problem:"PRIVACY"}} secondaryHref="/peliculas/privacidad/" secondaryLabel="Ver soluciones de privacidad" />
</>}

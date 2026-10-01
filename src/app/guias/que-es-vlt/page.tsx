import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, GuideAside, GuideBody } from "@/components/GuideArticle";
import { GuideCallout } from "@/components/GuideCallout";
import { GuideHero } from "@/components/GuideHero";
import { Icon } from "@/components/Icon";
import { NanoComparison } from "@/components/NanoComparison";
import { ProductCTA } from "@/components/ProductCTA";
import { truth } from "@/lib/truth";

export const metadata:Metadata={ alternates: { canonical: "/guias/que-es-vlt/" },title:{ absolute: "Qué es VLT en una película para cristal | HIGHTECH" },description:"Qué significa transmisión de luz visible y cómo interpretar IR75, IR50, IR35, IR15 e IR5 sin confundir el nombre comercial con el VLT técnico."};
export default function Page(){
  const film = (id: string) => truth.nano.find((item) => item.id === id);
  const ir75 = film("IR75"), ir15 = film("IR15"), ir50 = film("IR50"), ir5 = film("IR5");
  const ref = truth.nano[0];
  return <>
  <GuideHero eyebrow="Guía · Luz visible" title="¿Qué significa VLT y por qué un número más bajo se ve más oscuro?" description="VLT indica cuánta luz visible atraviesa una película. Un porcentaje alto deja pasar más luz; uno bajo deja pasar menos. Esa cifra ayuda a entender claridad y oscuridad, pero no mide por sí sola calor, protección UV o desempeño total." category="Transmisión de luz visible" ctaHref="/peliculas/nanoceramica/" ctaLabel="Comparar tonos" />
  <GuideArticle><GuideBody>
    <p className="eyebrow">En una frase</p>
    <h2>VLT es la cantidad de luz visible que atraviesa la película.</h2>
    <p>Si una película tiene un VLT alto, conserva más luz visible. Si tiene un VLT bajo, deja pasar menos luz y el cristal se percibe más oscuro.</p>
    <p className="guide-bridge">Por ejemplo, una película con {ir75?.vlt}% VLT conserva mucha más luz visible que una con {ir15?.vlt}% VLT.</p>

    <p className="eyebrow">Cómo leer el número</p>
    <h2>Más porcentaje = más luz. Menos porcentaje = más oscuridad.</h2>
    <div className="guide-options">
      <div><strong>VLT alto</strong><p>Conserva mayor cantidad de luz visible y una apariencia más clara.</p></div>
      <div><strong>VLT intermedio</strong><p>Reduce más luz visible sin llegar a una apariencia extremadamente oscura.</p></div>
      <div><strong>VLT bajo</strong><p>Deja pasar poca luz visible y produce una apariencia mucho más oscura.</p></div>
    </div>

    <GuideCallout title="El nombre comercial no siempre es el VLT exacto."><p>Los nombres IR75, IR50, IR35, IR15 e IR5 ayudan a identificar cada opción, pero el número del nombre no siempre coincide exactamente con el VLT medido en la ficha. Por ejemplo: IR50 → {ir50?.vlt}% VLT; IR5 → {ir5?.vlt}% VLT.</p><p>Por eso HIGHTECH muestra por separado el nombre comercial y el dato técnico.</p></GuideCallout>

    <p className="eyebrow">La gama HIGHTECH</p>
    <h2>De mayor claridad a una apariencia mucho más oscura.</h2>
    <NanoComparison/>
    <p className="guide-followup">La diferencia visual entre tonos se entiende principalmente por la cantidad de luz visible que dejan pasar.</p>

    <p className="eyebrow">Lo que VLT no te dice</p>
    <h2>Un cristal más oscuro no necesariamente tiene mayor protección.</h2>
    <p>VLT mide luz visible. No es una medida directa de protección UV, rechazo infrarrojo o energía solar total.</p>
    <div className="guide-options">
      <div><strong>Protección UV</strong><p>Se evalúa con su propia especificación. En la gama nanocerámica activa HIGHTECH, los tonos reportan {ref?.uv}% UV.</p></div>
      <div><strong>Infrarrojo</strong><p>La ficha reporta {ref?.infraredRejection}% de rechazo a {ref?.infraredWavelengthNm} nm. Ese dato no debe confundirse con VLT.</p></div>
      <div><strong>TSER</strong><p>Es otra métrica que describe el rechazo de energía solar total reportado por la ficha.</p></div>
    </div>
    <p className="guide-context-link"><Link className="text-link" href="/guias/irr-vs-tser/">Entender IR vs TSER <Icon name="arrow" size={17}/></Link></p>

    <p className="eyebrow">Un detalle importante</p>
    <h2>El VLT de la película no es automáticamente el VLT final de la ventana.</h2>
    <p>La película se instala sobre un vidrio que ya transmite una determinada cantidad de luz. Por eso el resultado del conjunto vidrio + película puede ser distinto del dato de la película por sí sola.</p>

    <p className="eyebrow">Cuando oscurece</p>
    <h2>Un VLT bajo también significa menos luz disponible para ver hacia afuera.</h2>
    <p>Los tonos más oscuros reducen más la luz visible en ambos sentidos. Esa diferencia puede sentirse especialmente de noche, cuando ya existe menos luz en el entorno.</p>
    <p className="guide-followup">Esto importa especialmente en vehículos y en espacios donde quieres conservar buena visibilidad exterior.</p>
    <p className="guide-context-link"><Link className="text-link" href="/guias/privacidad-ventanas-noche/">Entender privacidad de noche <Icon name="arrow" size={17}/></Link></p>

    <p className="eyebrow">Entonces, ¿qué VLT conviene?</p>
    <h2>Empieza por decidir cuánta luz quieres conservar.</h2>
    <div className="guide-options">
      <div><strong>Quiero máxima claridad</strong><p>Busca una opción con mayor transmisión visible.</p></div>
      <div><strong>Quiero equilibrio</strong><p>Un nivel intermedio puede reducir más luz y deslumbramiento manteniendo una apariencia moderada.</p></div>
      <div><strong>Quiero una apariencia oscura</strong><p>Un VLT bajo produce una apariencia más marcada y deja pasar menos luz visible.</p></div>
    </div>
    <p className="guide-bridge">Después de decidir la claridad, revisamos las demás métricas y el uso del espacio para elegir la película adecuada.</p>
  </GuideBody><GuideAside><div className="guide-aside-card"><span>Idea clave</span><strong>VLT habla de luz visible.</strong><p>No lo uses como sustituto de UV, IR o TSER.</p></div><div className="guide-aside-card"><span>Relacionadas</span><Link href="/guias/privacidad-ventanas-noche/">Privacidad de noche</Link><Link href="/automotriz/">Aplicación automotriz</Link><Link href="/guias/irr-vs-tser/">IR vs TSER</Link></div></GuideAside></GuideArticle>
  <ProductCTA title="Dinos cuánta luz quieres conservar." text="Te ayudamos a comparar claridad, apariencia y las demás prestaciones de cada película para elegir una opción adecuada al espacio o vehículo." cta="Quiero una recomendación" context={{sourcePage:"/guias/que-es-vlt/",product:"Nanocerámica HIGHTECH"}} secondaryHref="/peliculas/nanoceramica/" secondaryLabel="Comparar nanocerámica" />
</>}

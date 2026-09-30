import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GateNotice } from "@/components/GateNotice";
import { Icon } from "@/components/Icon";
import { LimitationNotice } from "@/components/LimitationNotice";
import { ProductCTA } from "@/components/ProductCTA";
import { ProductHero } from "@/components/ProductHero";
import { WarrantySummaryGate } from "@/components/WarrantySummaryGate";
import { getNanoProduct, release, truth } from "@/lib/truth";

const toneCopy: Record<string, { headline:string; decision:string; visual:string; caution:string; neighbors:string[] }> = {
  IR75: { headline:"Máxima claridad dentro de la gama activa.", decision:"Para proyectos donde conservar la entrada de luz es una prioridad.", visual:"Apariencia muy clara frente a los tonos más oscuros de la gama.", caution:"Si la aplicación es automotriz, la claridad de la película no sustituye la revisión de la normativa aplicable a cada cristal.", neighbors:["IR50"] },
  IR50: { headline:"Claridad alta con un TSER de ficha mayor que IR75.", decision:"Para quien quiere conservar bastante luz pero bajar un escalón respecto a IR75.", visual:"VLT de ficha 48%; el nombre comercial IR50 no sustituye ese dato.", caution:"La apariencia final también depende del cristal sobre el que se instala.", neighbors:["IR75","IR35"] },
  IR35: { headline:"Un punto medio entre claridad y una apariencia más marcada.", decision:"Para balancear entrada de luz, deslumbramiento y privacidad visual.", visual:"VLT de ficha 35%.", caution:"En automotriz, la elección del tono también debe considerar visibilidad nocturna y la normativa aplicable a cada cristal.", neighbors:["IR50","IR15"] },
  IR15: { headline:"Privacidad visual más marcada con menor entrada de luz.", decision:"Para quien acepta una apariencia más oscura para reducir luz visible.", visual:"VLT de ficha 15%.", caution:"La menor transmisión visible puede afectar de forma más marcada la visibilidad nocturna, especialmente en aplicaciones automotrices.", neighbors:["IR35","IR5"] },
  IR5: { headline:"La máxima oscuridad de la gama activa.", decision:"Para aplicaciones donde la reducción de luz visible es una prioridad fuerte.", visual:"Aunque se llama IR5, su VLT de ficha es 3%.", caution:"Tiene un impacto fuerte en visibilidad nocturna y la privacidad nunca es absoluta en todos los escenarios de luz.", neighbors:["IR15"] },
};

export function generateStaticParams() { return truth.nano.map((film) => ({ tone: film.id.toLowerCase() })); }

export async function generateMetadata({ params }: { params: Promise<{ tone: string }> }): Promise<Metadata> {
  const { tone } = await params; const film = getNanoProduct(tone); if (!film) return {};
  return { title: { absolute: `${film.id} | Nanocerámica HIGHTECH` }, description:`${film.id}: VLT ${film.vlt}%, UV ${film.uv}%, rechazo infrarrojo ${film.infraredRejection}% a ${film.infraredWavelengthNm} nm y TSER ${film.tser}% según ficha.`, alternates:{canonical:`/peliculas/nanoceramica/${tone.toLowerCase()}/`}, robots: release.routes.tonePagesIndexable ? { index:true, follow:true } : { index:false, follow:true } };
}

export default async function TonePage({ params }: { params: Promise<{ tone: string }> }) {
  const { tone } = await params; const film = getNanoProduct(tone); if (!film) notFound();
  const copy=toneCopy[film.id];
  return <>
    <ProductHero variant="nano" eyebrow="Nanocerámica HIGHTECH" title={`${film.id} · ${copy.headline}`} description={copy.decision} ctaLabel={`Consultar si ${film.id} es adecuada`} context={{sourcePage:`/peliculas/nanoceramica/${tone}/`, product:film.id, tone:film.id}} facts={[{label:"VLT",value:`${film.vlt}%`},{label:"UV",value:`${film.uv}%`},{label:"IR a 950 nm",value:`${film.infraredRejection}%`},{label:"TSER",value:`${film.tser}%`}]} secondary={<Link href="/peliculas/nanoceramica/" className="button button-secondary">Ver toda la gama <Icon name="arrow" size={18}/></Link>} />
    <section className="section tone-detail-section"><div className="container tone-detail-grid"><div><p className="eyebrow">Cómo leer {film.id}</p><h2>{copy.visual}</h2><p>Los datos técnicos son especificaciones de ficha. La apariencia y el desempeño del sistema instalado dependen también del vidrio y de las condiciones reales de uso.</p><LimitationNotice title="Antes de elegir este tono"><p>{copy.caution}</p></LimitationNotice></div><div className="tone-spec-card"><div><span>Transmisión visible</span><strong>{film.vlt}%</strong></div><div><span>Rechazo UV</span><strong>{film.uv}%</strong></div><div><span>Rechazo IR</span><strong>{film.infraredRejection}% <small>a {film.infraredWavelengthNm} nm</small></strong></div><div><span>TSER</span><strong>{film.tser}%</strong></div></div></div></section>
    <section className="section section-alt"><div className="container tone-neighbors"><div><p className="eyebrow">Comparar antes de decidir</p><h2>Los tonos vecinos ayudan a entender qué estás ganando o sacrificando en luz visible.</h2></div><div>{copy.neighbors.map(id=><Link href={`/peliculas/nanoceramica/${id.toLowerCase()}/`} key={id}><strong>{id}</strong><span>Comparar con {film.id}</span><Icon name="arrow" size={18}/></Link>)}</div></div></section>
    <div className="container"><GateNotice title="INDEX_IF_COMPLETE">Esta URL permanece `noindex` hasta que reúna suficiente evidencia visual/editorial propia para justificar una página independiente.</GateNotice><WarrantySummaryGate product={film.id}/></div>
    <ProductCTA title={`¿${film.id} o un tono vecino?`} text="Cuéntanos la aplicación y cuánta luz quieres conservar. La recomendación debe partir del uso, no sólo del número del tono." cta={`Consultar ${film.id}`} context={{sourcePage:`/peliculas/nanoceramica/${tone}/`, product:film.id, tone:film.id}} secondaryHref="/peliculas/nanoceramica/" secondaryLabel="Comparar toda la gama" />
  </>;
}

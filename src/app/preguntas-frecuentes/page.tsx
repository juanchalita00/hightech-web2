import type { Metadata } from "next";
import Link from "next/link";
import { FAQList } from "@/components/FAQList";
import { ProductCTA } from "@/components/ProductCTA";
import { TrustHero } from "@/components/TrustHero";

export const metadata:Metadata={ alternates: { canonical: "/preguntas-frecuentes/" },title:{ absolute: "Preguntas frecuentes | HIGHTECH Polarizados" },description:"Respuestas breves sobre nanocerámica, VLT, IR, TSER, privacidad, cotización, instalación automotriz, garantías y polarizado en Jalisco."};

const items=[
  {question:"¿Nanocerámica significa más oscuro?",answer:<p>No. El tono se relaciona con la transmisión de luz visible (VLT). La tecnología y la oscuridad son conceptos distintos. <Link href="/guias/que-es-vlt/">Entender VLT</Link>.</p>},
  {question:"¿Qué es VLT?",answer:<p>Es la transmisión de luz visible: cuánto de la luz visible atraviesa la película en la condición de referencia. Un VLT menor implica menos entrada de luz visible. <Link href="/guias/que-es-vlt/">Ver guía completa</Link>.</p>},
  {question:"¿95% de rechazo IR significa 95% menos calor?",answer:<p>No. Nuestras fichas actuales reportan 95% de rechazo infrarrojo medido a 950 nm. TSER es otra métrica y no convertimos ese dato en una promesa universal de temperatura. <Link href="/guias/irr-vs-tser/">IR vs TSER</Link>.</p>},
  {question:"¿La privacidad se mantiene igual de noche?",answer:<p>No necesariamente. Depende del contraste de iluminación; si hay más luz dentro que fuera puede aumentar la visibilidad hacia el interior. <Link href="/guias/privacidad-ventanas-noche/">Privacidad de noche</Link>.</p>},
  {question:"¿Instalan automóviles a domicilio?",answer:<p>No. La instalación automotriz HIGHTECH se realiza en taller para controlar mejor las condiciones de aplicación. <Link href="/automotriz/">Ver servicio automotriz</Link>.</p>},
  {question:"¿Cómo cotizan una casa u oficina?",answer:<p>Podemos empezar con fotos, medidas aproximadas y el problema que quieres resolver. Dependiendo del vidrio, acceso y alcance puede requerirse revisión adicional. <Link href="/contacto/">Preparar mi cotización</Link>.</p>},
  {question:"¿Qué garantía tiene la película?",answer:<p>La cobertura depende del producto, la aplicación y la versión de la póliza correspondiente. No tratamos un plazo histórico o de ficha como garantía universal. <Link href="/garantias/">Consultar garantías</Link>.</p>},
  {question:"¿Qué referencia de tonos manejan en Jalisco?",answer:<p>HIGHTECH recibió de personal de Tránsito una referencia práctica de 70–75% en parabrisas, 35% en piloto/copiloto y 20% en la parte trasera. No la presentamos como tabla literal de la Ley ni como garantía frente a sanciones. <Link href="/guias/polarizado-automotriz-jalisco/">Ver contexto</Link>.</p>},
  {question:"¿Hay que retirar la película anterior?",answer:<p>Si existe una película previa, revisamos su estado y si debe retirarse antes de instalar la nueva. El tiempo adicional puede variar según el adhesivo y el deterioro.</p>},
  {question:"¿Cuánto tarda una instalación?",answer:<p>Depende del alcance, el vehículo o metraje, el acceso y si existe retiro previo. La cotización y la confirmación de agenda deben indicar la referencia aplicable al trabajo concreto.</p>},
] as const;

export default function Page(){return <>
  <TrustHero eyebrow="Preguntas frecuentes" title="Respuestas cortas. Contexto cuando hace falta." description="Esta página resuelve dudas comunes sin duplicar las guías técnicas. Cuando una respuesta necesita más profundidad, enlazamos la explicación correspondiente." points={["Sin claims absolutos","Datos técnicos con fuente","Legalidad con contexto"]}/>
  <section className="section"><div className="container faq-page-grid"><div><p className="eyebrow">Dudas comunes</p><h2>Lo esencial antes de cotizar.</h2><p>Si tu caso depende del tipo de vidrio, una condición especial o una configuración concreta, la respuesta final se aterriza durante la cotización.</p></div><FAQList items={items}/></div></section>
  <ProductCTA title="¿Tu duda depende de tu cristal o vehículo?" text="Cuéntanos el caso concreto y continuamos desde ahí, sin obligarte a elegir una película por tu cuenta." cta="Preguntar por WhatsApp" context={{sourcePage:"/preguntas-frecuentes/"}} secondaryHref="/guias/" secondaryLabel="Explorar guías" />
</>}

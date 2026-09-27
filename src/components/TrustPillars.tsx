import { Icon } from "@/components/Icon";

const pillars = [
  { icon:"glass" as const, title:"Diagnóstico antes que catálogo", text:"La película se elige después de entender cristal, exposición, uso del espacio y objetivo." },
  { icon:"sun" as const, title:"Datos con contexto", text:"VLT, UV, IR a 950 nm y TSER se explican como métricas distintas; una cifra no sustituye el análisis." },
  { icon:"shield" as const, title:"Límites visibles", text:"Privacidad nocturna, compatibilidad, legalidad y garantías se comunican donde afectan la decisión." },
  { icon:"message" as const, title:"Cotización aterrizada", text:"La web prepara la conversación para que WhatsApp continúe con contexto, no desde cero." },
] as const;

export function TrustPillars(){return <div className="trust-pillars">{pillars.map((item,index)=><article key={item.title}><div className="trust-pillar-head"><span className="trust-pillar-icon"><Icon name={item.icon} size={22}/></span><small>0{index+1}</small></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>}

import { Icon } from "@/components/Icon";

const groups=[
  {icon:"home" as const,title:"Casa / departamento",items:["Fotos de los cristales","Medidas aproximadas ancho × alto","Qué quieres mejorar: calor, luz, privacidad o seguridad"]},
  {icon:"building" as const,title:"Negocio / oficina",items:["Fotos o planos disponibles","Medidas/metraje aproximado","Uso del espacio, acceso y objetivo del proyecto"]},
  {icon:"car" as const,title:"Vehículo",items:["Marca, modelo y año","Qué cristales quieres instalar","Si existe película previa que deba revisarse"]},
] as const;
export function QuotePrep(){return <div className="quote-prep-grid">{groups.map(group=><article key={group.title}><div className="quote-prep-icon"><Icon name={group.icon} size={22}/></div><h3>{group.title}</h3><ul>{group.items.map(item=><li key={item}><Icon name="check" size={15}/><span>{item}</span></li>)}</ul></article>)}</div>}

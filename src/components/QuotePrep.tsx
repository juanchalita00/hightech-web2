import { Icon } from "@/components/Icon";

const groups=[
  {icon:"home" as const,title:"Casa / departamento",items:["Dónde se encuentra el proyecto","Medidas aproximadas, si las tienes","Qué quieres mejorar: calor, luz, privacidad o seguridad","Fotos opcionales para entender mejor el espacio"]},
  {icon:"building" as const,title:"Negocio / oficina",items:["Ubicación del proyecto","Medidas o alcance aproximado, si ya los tienes","Qué necesitas resolver y cómo se usa el espacio","Fotos o planos opcionales"]},
  {icon:"car" as const,title:"Vehículo",items:["Marca, modelo y año","Qué cristales quieres trabajar","Qué buscas: claridad, apariencia, privacidad o control solar","Si ya tiene película instalada, cuéntanos su estado si lo conoces"]},
] as const;
export function QuotePrep(){return <div className="quote-prep-grid">{groups.map(group=><article key={group.title}><div className="quote-prep-icon"><Icon name={group.icon} size={22}/></div><h3>{group.title}</h3><ul>{group.items.map(item=><li key={item}><Icon name="check" size={15}/><span>{item}</span></li>)}</ul></article>)}</div>}

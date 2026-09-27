import Link from "next/link";
import { Icon } from "@/components/Icon";

type GuideCardProps = { href:string; category:string; title:string; description:string; badge?:string };
export function GuideCard({href, category, title, description, badge}:GuideCardProps){
  return <Link className="guide-card" href={href}>
    <div className="guide-card-top"><span>{category}</span>{badge ? <small>{badge}</small> : null}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <span className="guide-card-link">Leer guía <Icon name="arrow" size={17}/></span>
  </Link>;
}

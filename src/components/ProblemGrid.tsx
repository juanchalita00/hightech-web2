import Link from "next/link";
import { Icon } from "@/components/Icon";

const problems = [
  { icon: "sun" as const, title: "Calor", text: "Reducir ganancia solar sin oscurecer más de lo necesario.", href: "/servicios/" },
  { icon: "uv" as const, title: "UV", text: "Proteger interiores y superficies con una especificación verificable.", href: "/servicios/" },
  { icon: "glare" as const, title: "Deslumbramiento", text: "Controlar exceso de luz según orientación, VLT y uso del espacio.", href: "/servicios/" },
  { icon: "privacy" as const, title: "Privacidad", text: "Elegir privacidad entendiendo qué ocurre de día y de noche.", href: "/peliculas/privacidad/" },
  { icon: "shield" as const, title: "Seguridad", text: "Ayudar a mantener fragmentos unidos con una solución bien especificada.", href: "/peliculas/seguridad/" },
  { icon: "car" as const, title: "Automotriz", text: "Elegir claridad, tono y desempeño para tu vehículo.", href: "/automotriz/" },
];

export function ProblemGrid() {
  return (
    <div className="problem-grid">
      {problems.map((problem, index) => (
        <Link className="problem-card" href={problem.href} key={problem.title}>
          <div className="problem-card-top">
            <span className="problem-icon"><Icon name={problem.icon} /></span>
            <span className="problem-index">0{index + 1}</span>
          </div>
          <h3>{problem.title}</h3>
          <p>{problem.text}</p>
          <span className="text-link">Explorar <Icon name="arrow" size={17}/></span>
        </Link>
      ))}
    </div>
  );
}

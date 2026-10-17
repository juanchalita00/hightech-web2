import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { ProjectRecord } from "@/lib/projects";

type Props = { projects: readonly ProjectRecord[] };

export function ProjectGrid({ projects }: Props) {
  return (
    <div className="project-grid">
      {projects.map((project) => {
        const image = project.image;
        const imageAlt = project.imageAlt;
        return (
          <Link className="project-card" href={`/proyectos/${project.slug}/`} key={project.projectId}>
            <div className="project-card-visual">
              {image ? (
                <Image src={image} alt={imageAlt || ""} width={800} height={520} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <Icon name={project.businessLine === "commercial" ? "building" : project.businessLine === "automotive" ? "car" : "home"} size={28} />
              )}
            </div>
            <div>
              <small>{project.businessLine === "commercial" ? "Negocio" : project.businessLine === "residential" ? "Casa" : "Auto"}</small>
              <h3>{project.internalTitle}</h3>
              <span>Ver caso <Icon name="arrow" size={16} /></span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

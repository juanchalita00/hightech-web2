import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { ProjectRecord } from "@/lib/projects";

type Props={projects:readonly ProjectRecord[]};
export function ProjectGrid({projects}:Props){return <div className="project-grid">{projects.map(project=><Link className="project-card" href={`/proyectos/${project.slug}/`} key={project.projectId}><div className="project-card-visual"><Icon name={project.businessLine==="commercial"?"building":project.businessLine==="automotive"?"car":"home"} size={28}/></div><div><small>{project.businessLine}</small><h3>{project.internalTitle}</h3><span>Ver caso <Icon name="arrow" size={16}/></span></div></Link>)}</div>}

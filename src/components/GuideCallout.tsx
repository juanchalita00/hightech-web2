import type { ReactNode } from "react";
export function GuideCallout({title, children, tone="blue"}:{title:string;children:ReactNode;tone?:"blue"|"neutral"|"warning"}){
  return <aside className={`guide-callout guide-callout-${tone}`}><strong>{title}</strong><div>{children}</div></aside>;
}

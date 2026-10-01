import type { ReactNode } from "react";
export function GuideArticle({children}:{children:ReactNode}){return <div className="guide-article"><div className="container guide-article-grid">{children}</div></div>}
export function GuideBody({children}:{children:ReactNode}){return <article className="guide-body">{children}</article>}
export function GuideAside({children}:{children:ReactNode}){return <aside className="guide-aside">{children}</aside>}

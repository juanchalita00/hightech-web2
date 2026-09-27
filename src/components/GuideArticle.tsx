import type { ReactNode } from "react";
export function GuideArticle({children}:{children:ReactNode}){return <main className="guide-article"><div className="container guide-article-grid">{children}</div></main>}
export function GuideBody({children}:{children:ReactNode}){return <article className="guide-body">{children}</article>}
export function GuideAside({children}:{children:ReactNode}){return <aside className="guide-aside">{children}</aside>}

import { Icon } from "@/components/Icon";

type Props = { title: string; children: React.ReactNode; tone?: "light" | "dark" };

export function LimitationNotice({ title, children, tone = "light" }: Props) {
  return <aside className={`limitation-notice limitation-${tone}`}><span className="limitation-icon"><Icon name="glass" size={21}/></span><div><strong>{title}</strong><div>{children}</div></div></aside>;
}

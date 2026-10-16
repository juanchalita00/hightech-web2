type Props = { children: React.ReactNode; title?: string };

export function SimpleExample({ children, title = "Un ejemplo sencillo" }: Props) {
  return (
    <aside className="simple-example">
      <p>{title}</p>
      <div>{children}</div>
    </aside>
  );
}

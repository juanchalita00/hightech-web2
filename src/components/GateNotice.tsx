type Props = { title: string; children: React.ReactNode };

export function GateNotice({ title, children }: Props) {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <aside className="gate-notice" role="note">
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}

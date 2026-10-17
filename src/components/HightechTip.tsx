type Props = { children: React.ReactNode; title?: string };

function BulbIcon() {
  return (
    <svg className="hightech-tip-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.3 1.1 2.2h5c0-.9.5-1.7 1.1-2.2A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

export function HightechTip({ children, title = "Hightech Tip" }: Props) {
  return (
    <aside className="hightech-tip">
      <p><BulbIcon /><span>{title}</span></p>
      <div>{children}</div>
    </aside>
  );
}

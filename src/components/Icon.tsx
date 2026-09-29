type IconName =
  | "sun"
  | "uv"
  | "glare"
  | "privacy"
  | "shield"
  | "car"
  | "home"
  | "building"
  | "arrow"
  | "check"
  | "glass"
  | "message";

type Props = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 22, className = "" }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className,
  };

  switch (name) {
    case "sun":
      return <svg {...common}><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56"/></svg>;
    case "uv":
      return <svg {...common}><path d="M4 5v8a4 4 0 0 0 8 0V5"/><path d="m14 5 3 14 3-14"/></svg>;
    case "glare":
      return <svg {...common}><path d="M3 12h18M12 3v18"/><path d="m5.6 5.6 12.8 12.8M18.4 5.6 5.6 18.4"/><circle cx="12" cy="12" r="3.2"/></svg>;
    case "privacy":
      return <svg {...common}><path d="M2.5 12s3.5-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.6"/></svg>;
    case "shield":
      return <svg {...common}><path d="M12 2.8 19 6v5.3c0 4.2-2.6 7.8-7 9.9-4.4-2.1-7-5.7-7-9.9V6l7-3.2Z"/><path d="m8.9 12 2 2 4.4-4.4"/></svg>;
    case "car":
      return <svg {...common}><path d="m4 15 1.3-5.1A2.5 2.5 0 0 1 7.7 8h8.6a2.5 2.5 0 0 1 2.4 1.9L20 15"/><path d="M3 15.5h18v3H3zM6 18.5V21M18 18.5V21M6.8 12h10.4"/></svg>;
    case "home":
      return <svg {...common}><path d="m3 10 9-7 9 7"/><path d="M5.5 9.5V21h13V9.5M9.5 21v-6h5v6"/></svg>;
    case "building":
      return <svg {...common}><path d="M5 21V4h10v17M15 9h4v12M8 8h2M8 12h2M8 16h2M12 8h1M12 12h1M12 16h1M3 21h18"/></svg>;
    case "arrow":
      return <svg {...common}><path d="M5 12h14M14 7l5 5-5 5"/></svg>;
    case "check":
      return <svg {...common}><path d="m5 12 4 4L19 6"/></svg>;
    case "glass":
      return <svg {...common}><rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M8 3v18M16 3v18"/></svg>;
    case "message":
      return <svg {...common}><path d="M4 5h16v11H8l-4 4V5Z"/><path d="M8 9h8M8 12h5"/></svg>;
  }
}

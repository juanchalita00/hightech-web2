"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "@/components/Icon";

type LinkItem = readonly [string, string];

export function MobileMenu({ links }: { links: readonly LinkItem[] }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const root = rootRef.current;
    const startY = window.scrollY;

    function closeIfFocusInside() {
      if (root && root.contains(document.activeElement)) buttonRef.current?.focus();
    }

    function onPointerDown(event: PointerEvent) {
      if (!root?.contains(event.target as Node)) setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    }

    function onScroll() {
      if (Math.abs(window.scrollY - startY) < 12) return;
      closeIfFocusInside();
      setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
    };
  }, [open]);

  return (
    <div className="mobile-menu" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((current) => !current)}
      >
        <span></span><span></span><span></span>
      </button>
      <nav id={panelId} aria-label="Navegación móvil" className="mobile-nav-panel" hidden={!open}>
        {links.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}<Icon name="arrow" size={17} />
          </Link>
        ))}
      </nav>
    </div>
  );
}

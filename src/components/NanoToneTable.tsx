"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { truth } from "@/lib/truth";
import styles from "@/app/home-v09.module.css";

const toneSamples: Record<string, string> = {
  IR75: "linear-gradient(90deg, #c7d6df 0%, #a8becb 100%)",
  IR50: "linear-gradient(90deg, #8f969b 0%, #70777c 100%)",
  IR35: "linear-gradient(90deg, #60666a 0%, #484e52 100%)",
  IR15: "linear-gradient(90deg, #292e31 0%, #191d20 100%)",
  IR5: "linear-gradient(90deg, #0b0d0f 0%, #020304 100%)",
};

export function NanoToneTable() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      root.style.setProperty("--shine-shift", "0px");
      return;
    }

    let frame = 0;
    let active = false;

    const update = () => {
      frame = 0;
      if (!active) return;

      const rect = root.getBoundingClientRect();
      const viewport = window.innerHeight || document.documentElement.clientHeight;
      const center = rect.top + rect.height / 2;
      const normalized = Math.max(-1, Math.min(1, (viewport / 2 - center) / (viewport * 0.72)));
      const shift = normalized * 24;
      root.style.setProperty("--shine-shift", shift.toFixed(2) + "px");
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) requestUpdate();
      },
      { rootMargin: "18% 0px 18% 0px" },
    );

    observer.observe(root);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.toneExperience}>
      <div className={styles.toneAxis}>
        <span>Más claridad</span>
        <span className={styles.toneAxisLabel}>Tono aproximado</span>
        <span>Más oscuridad</span>
      </div>
      <div className={styles.toneTable}>
        {truth.nano.map((film) => (
          <Link className={styles.toneRow} href={"/peliculas/nanoceramica/" + film.id.toLowerCase() + "/"} key={film.id}>
            <span className={styles.toneName}><strong>{film.id}</strong><span>VLT {film.vlt}%</span></span>
            <span
              className={styles.toneSwatch}
              style={{ "--tone-bg": toneSamples[film.id] } as CSSProperties}
              aria-hidden="true"
            />
            <span className={styles.toneMeta}><strong>TSER {film.tser}%</strong><span>según ficha</span></span>
          </Link>
        ))}
      </div>
      <p className={styles.toneNote}>
        Muestra visual orientativa del tono; la apariencia final depende también del cristal y de la iluminación. IR50 e IR5 son nombres comerciales; sus VLT de ficha son 48% y 3%, respectivamente.
      </p>
    </div>
  );
}

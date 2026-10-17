"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

function safeId(value: string | undefined, pattern: RegExp) {
  if (!value || !pattern.test(value)) return "";
  return value;
}

const gaId = safeId(process.env.NEXT_PUBLIC_GA4_ID, /^G-[A-Z0-9]+$/);
const gtmId = safeId(process.env.NEXT_PUBLIC_GTM_ID, /^GTM-[A-Z0-9]+$/);
const metaId = safeId(process.env.NEXT_PUBLIC_META_PIXEL_ID, /^\d{5,20}$/);

export function AnalyticsScripts() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => setReady(localStorage.getItem("hightech-cookies") === "accepted");
    sync();
    window.addEventListener("hightech:cookies", sync);
    return () => window.removeEventListener("hightech:cookies", sync);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const onEvent = (event: Event) => {
      const detail = (event as CustomEvent<{ name?: string; payload?: Record<string, unknown> }>).detail;
      if (!detail?.name) return;
      const win = window as Window & {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
        fbq?: (...args: unknown[]) => void;
      };
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({ event: detail.name, ...detail.payload });
      win.gtag?.("event", detail.name, detail.payload ?? {});
      win.fbq?.("trackCustom", detail.name, detail.payload ?? {});
    };
    window.addEventListener("hightech:analytics", onEvent);
    return () => window.removeEventListener("hightech:analytics", onEvent);
  }, [ready]);

  if (!ready || (!gaId && !gtmId && !metaId)) return null;

  return (
    <>
      {gaId ? <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" /> : null}
      {gaId ? (
        <Script id="hightech-ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
        </Script>
      ) : null}
      {gtmId ? (
        <Script id="hightech-gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      ) : null}
      {metaId ? (
        <Script id="hightech-meta" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaId}');fbq('track','PageView');`}
        </Script>
      ) : null}
    </>
  );
}

"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_UPDATED_EVENT,
  hasAnalyticsConsent,
  readStoredConsent,
  type StoredCookieConsent,
} from "../lib/cookieConsent";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function AnalyticsScripts() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => {
      const stored = readStoredConsent();
      setEnabled(Boolean(gaId && stored && hasAnalyticsConsent(stored.preferences)));
    };

    sync();

    const onUpdate = (event: Event) => {
      const detail = (event as CustomEvent<StoredCookieConsent>).detail;
      setEnabled(Boolean(gaId && hasAnalyticsConsent(detail.preferences)));
    };

    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, onUpdate);
    return () => window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, onUpdate);
  }, []);

  if (!enabled || !gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="scle-google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}

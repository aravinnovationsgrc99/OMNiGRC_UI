"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const DEFAULT_TAG_ID = "AW-18503231155";
const TAG_ID_REGEX = /^(AW|G|GT|GTM)-[A-Za-z0-9_-]+$/;

function getValidTagId(): string {
  const envId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID?.trim();
  if (envId && TAG_ID_REGEX.test(envId)) {
    return envId;
  }
  return DEFAULT_TAG_ID;
}

export function GoogleTag() {
  const [loadScript, setLoadScript] = useState(false);
  const tagId = getValidTagId();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer.push(arguments);
      };
    window.gtag("js", new Date());
    window.gtag("config", tagId);

    let idleTimer: any;
    let didTrigger = false;

    const cleanup = () => {
      window.removeEventListener("scroll", triggerLoad);
      window.removeEventListener("click", triggerLoad);
      window.removeEventListener("touchstart", triggerLoad);
      window.removeEventListener("mousemove", triggerLoad);
      if ("cancelIdleCallback" in window && typeof idleTimer === "number") {
        (window as any).cancelIdleCallback(idleTimer);
      } else if (idleTimer) {
        clearTimeout(idleTimer);
      }
    };

    const triggerLoad = () => {
      if (didTrigger) return;
      didTrigger = true;
      cleanup();
      setLoadScript(true);
    };

    window.addEventListener("scroll", triggerLoad, { passive: true, once: true });
    window.addEventListener("click", triggerLoad, { passive: true, once: true });
    window.addEventListener("touchstart", triggerLoad, { passive: true, once: true });
    window.addEventListener("mousemove", triggerLoad, { passive: true, once: true });

    if ("requestIdleCallback" in window) {
      idleTimer = (window as any).requestIdleCallback(
        () => {
          idleTimer = setTimeout(triggerLoad, 6000);
        },
        { timeout: 8000 }
      );
    } else {
      idleTimer = setTimeout(triggerLoad, 8000);
    }

    return () => {
      cleanup();
    };
  }, [tagId]);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${tagId}');
          `,
        }}
      />
      {loadScript && (
        <Script
          id="google-gtag-loader"
          src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}

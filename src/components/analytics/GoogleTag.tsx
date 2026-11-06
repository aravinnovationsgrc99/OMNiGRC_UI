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

    const triggerLoad = () => {
      setLoadScript(true);
      window.removeEventListener("scroll", triggerLoad);
      window.removeEventListener("click", triggerLoad);
      window.removeEventListener("touchstart", triggerLoad);
      window.removeEventListener("mousemove", triggerLoad);
    };

    window.addEventListener("scroll", triggerLoad, { passive: true, once: true });
    window.addEventListener("click", triggerLoad, { passive: true, once: true });
    window.addEventListener("touchstart", triggerLoad, { passive: true, once: true });
    window.addEventListener("mousemove", triggerLoad, { passive: true, once: true });

    let idleTimer: any;
    if ("requestIdleCallback" in window) {
      idleTimer = (window as any).requestIdleCallback(
        () => {
          setTimeout(triggerLoad, 3500);
        },
        { timeout: 5000 }
      );
    } else {
      idleTimer = setTimeout(triggerLoad, 4000);
    }

    return () => {
      window.removeEventListener("scroll", triggerLoad);
      window.removeEventListener("click", triggerLoad);
      window.removeEventListener("touchstart", triggerLoad);
      window.removeEventListener("mousemove", triggerLoad);
      if ("cancelIdleCallback" in window && typeof idleTimer === "number") {
        (window as any).cancelIdleCallback(idleTimer);
      } else {
        clearTimeout(idleTimer);
      }
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

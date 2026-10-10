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
  const tagId = getValidTagId();

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
      <Script
        id="google-gtag-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`}
        strategy="afterInteractive"
      />
    </>
  );
}

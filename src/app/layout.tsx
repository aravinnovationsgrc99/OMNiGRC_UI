import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-sans",
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-mono",
  display: "swap",
});

import { FRAMEWORKS } from "@/lib/frameworks";

const frameworkNamesStr = FRAMEWORKS.map((f) => f.name).join(", ");
const frameworkCodesStr = FRAMEWORKS.map((f) => f.code).join(", ");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://omnigrc.com"),
  title: "OMNiGRC — Unified Risk, Asset, and Control Management",
  description:
    `The connected GRC operating layer for lean security and compliance teams. Unify risk registers, asset inventories, control mapping, and compliance testing across ${frameworkNamesStr}.`,
  openGraph: {
    title: "OMNiGRC — Unified Risk, Asset, and Control Management",
    description:
      `Connect risk, assets, controls, and testing in one operating workflow. Advisory AI suggests; human oversight approves. Built for ${frameworkCodesStr}.`,
    url: "https://omnigrc.com",
    siteName: "OMNiGRC",
    images: [
      {
        url: "/omnigrc-aurora-og.png",
        width: 1200,
        height: 630,
        alt: "OMNiGRC — Unified Risk, Asset, and Control Management Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OMNiGRC — Unified Risk, Asset, and Control Management",
    description:
      "Connect risk, assets, controls, and testing in one operating workflow. Advisory AI suggests; human oversight approves. Built for ISO 27001, ISO 42001, SOC 2, GDPR, DPDP, and HIPAA.",
    images: ["/omnigrc-aurora-og.png"],
  },
};

import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${ibmSans.variable} ${ibmMono.variable} overflow-x-hidden w-full max-w-full`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('omnigrc-theme');
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased selection:bg-[#F15E1C]/20 selection:text-navy-900 dark:selection:bg-teal/30 dark:selection:text-white bg-white text-navy-900 dark:bg-[#0A111F] dark:text-slate-100 min-h-screen font-sans transition-colors duration-200 overflow-x-hidden w-full max-w-full relative">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

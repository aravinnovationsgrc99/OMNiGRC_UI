import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-sans",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-mono",
});

export const metadata: Metadata = {
  title: "OMNiGRC — Unified Risk, Asset, and Control Management",
  description:
    "The connected GRC operating layer for lean security and compliance teams. Unify risk registers, asset inventories, control mapping, and compliance testing with advisory AI and human-in-the-loop oversight.",
  openGraph: {
    title: "OMNiGRC — Unified Risk, Asset, and Control Management",
    description:
      "Connect risk, assets, controls, and testing in one operating workflow. Advisory AI suggests; human oversight approves. Built for ISO 27001, SOC 2, GDPR, DPDP, and Essential 8.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${ibmSans.variable} ${ibmMono.variable}`}>
      <body className="antialiased selection:bg-teal/30 selection:text-white bg-[#0A111F] text-slate-100 min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}

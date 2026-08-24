import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OMNiGRC — Autonomous Assurance & Trust Platform",
  description:
    "Trust doesn't wait for your next audit. Neither does OMNiGRC. The world's first Autonomous Trust Platform for compliance, vendor risk, and AI governance.",
  openGraph: {
    title: "OMNiGRC — Autonomous Assurance & Trust Platform",
    description:
      "Automate SOC 2, ISO 27001, HIPAA, GDPR, PCI DSS, and 200+ frameworks with continuous autonomous evidence collection and real-time risk intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-brand-orange selection:text-white bg-[#0B0F17] text-slate-100">
        {children}
      </body>
    </html>
  );
}

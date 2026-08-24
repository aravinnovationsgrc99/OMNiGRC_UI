import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arav'sGRC — Autonomous Trust Platform",
  description:
    "Trust doesn't wait for your next audit. Neither does Arav'sGRC. The world's first Autonomous Trust Platform for compliance, vendor risk, and AI governance.",
  openGraph: {
    title: "Arav'sGRC — Autonomous Trust Platform",
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
      <body className="antialiased selection:bg-brand-teal selection:text-white bg-[#0B0F17] text-slate-100">
        {children}
      </body>
    </html>
  );
}

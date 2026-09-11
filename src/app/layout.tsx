import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-brand-orange selection:text-white bg-[#0B0F17] text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}

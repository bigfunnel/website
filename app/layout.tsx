import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bigfunnel.co"),
  title: "Big Funnel — WhatsApp Campaigns + CRM",
  description: "Run WhatsApp campaigns, track every response and manage every lead from first message to final outcome with Big Funnel by Arthatech Softwares LLP.",
  openGraph: {
    title: "Big Funnel — WhatsApp Campaigns + CRM",
    description: "Turn WhatsApp conversations into managed revenue.",
  },
  twitter: { card: "summary" },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}

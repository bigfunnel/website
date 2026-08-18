import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bigfunnel.co"),
  title: "Big Funnel — Turn every lead into measurable revenue",
  description: "Big Funnel by Arthatech Softwares LLP unifies CRM, marketing, sales, automation, communications and analytics.",
  openGraph: {
    title: "Big Funnel — Every lead. One revenue system.",
    description: "The revenue operating layer for lead-heavy teams, by Arthatech Softwares LLP.",
    images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Big Funnel — More signal. Less chase." }],
  },
  twitter: { card: "summary_large_image", images: ["/og-v2.png"] },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}

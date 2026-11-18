import type { Metadata } from "next";
import "./globals.css";
import { CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.siteUrl),
  title: "ForConnect | Vaš lični telefonski asistent",
  description:
    "ForConnect je AI telefonski asistent na srpskom jeziku. Javlja se kad vi ne stignete, odgovara na pitanja, prima zahteve za termine i šalje vam pregledan izveštaj na mejl.",
  openGraph: {
    title: "ForConnect | Vaš lični telefonski asistent",
    description:
      "AI telefonski asistent na srpskom jeziku za prodavnice, ordinacije i salone. Nijedan propušten poziv više.",
    url: CONFIG.siteUrl,
    siteName: "ForConnect",
    locale: "sr_RS",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "@fontsource-variable/inter/wght.css";
import "./globals.css";
import { CONFIG } from "@/lib/config";

const title = "ForConnect - AI telefonski asistent na srpskom";
const description =
  "AI telefonski asistent na srpskom jeziku za prodavnice, ordinacije, salone i druge firme. Javlja se kad vi ne stignete i šalje pregledan izveštaj na mejl.";

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.siteUrl),
  title,
  description,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title,
    description,
    url: CONFIG.siteUrl,
    siteName: "ForConnect",
    locale: "sr_RS",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ForConnect" }],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body className="antialiased">{children}</body>
    </html>
  );
}

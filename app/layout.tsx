import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Spurb | Earn passive income from unused space",
  description:
    "Spurb lists your unused garage, driveway, or storage space, screens tenants, generates leases, and collects recurring rent."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <Script
          src="https://phospho-nanocorp-prod--nanocorp-api-fastapi-app.modal.run/analytics/v1.js?c=53c02381-eea2-4ffc-a311-4078d1054894"
          defer
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

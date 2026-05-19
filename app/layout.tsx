import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Spurb — Vos biens inutilisés rapportent de l'argent. Automatiquement.",
  description:
    "Spurb est l'agent IA qui liste, gère, contractualise et encaisse à votre place. Garage, voiture, chambre, jardin, serveur. Commission de 15% sur les revenus générés, sans frais fixes."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
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

import type { Metadata } from "next";
import { Inter, Sora, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Babo Tabio Anselme | Marketing Digital & Création de Boutiques en Ligne — B_T Entreprise",
  description:
    "Portfolio de Babo Tabio Anselme : marketing des produits de boutiques en ligne, formation en marketing digital et accompagnement à la création de boutiques en ligne. B_T Entreprise — Votre partenaire pour réussir.",
  keywords: [
    "marketing digital",
    "boutique en ligne",
    "e-commerce",
    "formation marketing",
    "création boutique en ligne",
    "B_T Entreprise",
    "Babo Tabio Anselme",
  ],
  authors: [{ name: "Babo Tabio Anselme" }],
  icons: {
    icon: "/logo-bt.png",
  },
  openGraph: {
    title:
      "Babo Tabio Anselme — Marketing Digital & Création de Boutiques en Ligne",
    description:
      "Je fais le marketing des produits de boutiques en ligne et je forme les entrepreneurs au marketing digital et à la création de boutiques en ligne. B_T Entreprise — Ensemble, bâtissons votre succès.",
    siteName: "B_T Entreprise",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Babo Tabio Anselme — Marketing Digital & E-commerce",
    description:
      "Marketing de produits e-commerce, formations en marketing digital et création de boutiques en ligne.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

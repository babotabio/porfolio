import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sur Vercel, output:"standalone" n'est pas requis et peut casser le déploiement (404).
  // Vercel définit VERCEL=1 pendant les builds → on lui laisse sa config standard.
  // En local / sandbox, on garde standalone pour le server.js personnalisé.
  ...(process.env.VERCEL ? {} : { output: "standalone" as const }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;

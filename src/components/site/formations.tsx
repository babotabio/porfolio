"use client";

import { GraduationCap, CheckCircle2, Users } from "lucide-react";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { Button } from "@/components/ui/button";

const programs = [
  {
    badge: "Programme 1",
    title: "Marketing digital appliqué à la vente",
    description:
      "Pour vendre vos produits en ligne de façon autonome : de la stratégie aux premières campagnes.",
    modules: [
      "Comprendre votre clientèle et positionner vos produits",
      "Réseaux sociaux : Facebook, Instagram, TikTok, WhatsApp Business",
      "Créer du contenu de vente (textes, visuels, vidéos)",
      "Lancer et optimiser des campagnes Meta Ads",
      "Mesurer les résultats et améliorer en continu",
    ],
  },
  {
    badge: "Programme 2",
    title: "Création de boutique en ligne",
    description:
      "De l'idée au lancement : créez votre boutique et réalisez vos premières ventes en vous faisant accompagner.",
    modules: [
      "Choisir sa plateforme et structurer son offre",
      "Créer et personnaliser sa boutique",
      "Ajouter produits, prix et moyens de paiement",
      "Préparer des fiches produits et visuels efficaces",
      "Organiser son lancement et ses premières ventes",
    ],
  },
];

export function Formations() {
  return (
    <section
      id="formations"
      className="relative scroll-mt-24 overflow-hidden bg-brand-950 py-20 md:py-28"
    >
      {/* Décor */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-700/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          dark
          eyebrow="Formations"
          title="Apprenez à vendre en ligne, étape par étape"
          description="Des formations 100 % pratiques, pensées pour les débutants comme pour les commerçants qui veulent digitaliser leur activité."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {programs.map(({ badge, title, description, modules }, i) => (
            <Reveal key={title} delay={i * 0.12} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:border-gold-400/40 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500 text-brand-950">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <span className="rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400">
                    {badge}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white md:text-2xl">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-100/80">
                  {description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {modules.map((mod) => (
                    <li
                      key={mod}
                      className="flex items-start gap-2.5 text-sm text-brand-100/90"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                      {mod}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bannière coaching */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-start gap-5 rounded-3xl bg-gradient-to-r from-gold-500 to-gold-400 p-7 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-950 text-gold-400">
                <Users className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-brand-950 md:text-xl">
                  Formations individuelles ou en groupe
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-brand-950/80">
                  En ligne ou en présentiel, au rythme qui vous convient. Le
                  programme s&apos;adapte à votre projet : vous apprenez en
                  travaillant directement sur votre boutique.
                </p>
              </div>
            </div>
            <Button
              asChild
              className="shrink-0 bg-brand-950 text-white hover:bg-brand-900"
            >
              <a href="#contact">Réserver ma place</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

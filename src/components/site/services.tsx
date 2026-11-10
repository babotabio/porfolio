"use client";

import {
  Megaphone,
  GraduationCap,
  Store,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

const services = [
  {
    icon: Megaphone,
    title: "Marketing de vos produits",
    lead: "Je promeus les produits de votre boutique en ligne pour vendre davantage.",
    items: [
      "Stratégie de promotion adaptée à vos produits",
      "Contenu de vente pour les réseaux sociaux",
      "Campagnes de publicité ciblées (Meta Ads)",
      "Suivi des performances et ajustements",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formation en marketing digital",
    lead: "Apprenez à marketeer vos produits vous-même, étape par étape.",
    items: [
      "Fondamentaux du marketing digital",
      "Stratégie réseaux sociaux : Facebook, Instagram, TikTok, WhatsApp Business",
      "Publicité en ligne et budget efficace",
      "Création de contenu qui convertit",
    ],
  },
  {
    icon: Store,
    title: "Création de boutique en ligne",
    lead: "Lancez votre boutique avec un accompagnement complet, de A à Z.",
    items: [
      "Choix de la plateforme et mise en place",
      "Ajout des produits, prix et paiements",
      "Fiches produits et visuels qui vendent",
      "Formation à la gestion au quotidien",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-brand-50/70 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Mes services"
          title="Ce que je fais pour vous"
          description="Trois offres complémentaires pour démarrer, vendre et vous former — vous choisissez celle qui correspond à votre besoin du moment."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, lead, items }, i) => (
            <Reveal key={title} delay={i * 0.1} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-900/10">
                <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 p-3.5 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {lead}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-gold-600"
                >
                  Demander ce service
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

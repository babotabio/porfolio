"use client";

import { Search, Target, Rocket, TrendingUp } from "lucide-react";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

const steps = [
  {
    icon: Search,
    title: "Diagnostic",
    text: "On échange sur votre projet, vos produits et vos objectifs pour comprendre votre situation.",
  },
  {
    icon: Target,
    title: "Stratégie",
    text: "Je vous propose un plan d'action clair : canaux, contenu, budget et calendrier.",
  },
  {
    icon: Rocket,
    title: "Exécution",
    text: "Mise en place concrète : boutique, campagnes, contenus de vente et outils.",
  },
  {
    icon: TrendingUp,
    title: "Résultats & autonomie",
    text: "Suivi des performances et transfert de compétences pour que vous gagniez en autonomie.",
  },
];

export function Process() {
  return (
    <section className="bg-white py-20 md:py-28" aria-label="Ma méthode">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Ma méthode"
          title="Un accompagnement simple, en 4 étapes"
        />

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <li className="relative flex h-full flex-col items-start">
                {/* Ligne de connexion (desktop) */}
                {i < steps.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute top-8 left-[4.5rem] hidden h-px w-[calc(100%-3rem)] border-t-2 border-dashed border-brand-200 lg:block"
                  />
                ) : null}
                <span className="relative inline-flex items-center">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-700 text-white shadow-lg shadow-brand-900/20">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="absolute -top-2 -right-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold-500 font-display text-sm font-bold text-brand-950">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-brand-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

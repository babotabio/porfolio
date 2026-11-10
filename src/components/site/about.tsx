"use client";

import Image from "next/image";
import {
  Handshake,
  ShoppingCart,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { profile } from "@/lib/profile";

const pillars = [
  {
    icon: Handshake,
    title: "Conseil",
    text: "Stratégie et accompagnement sur mesure pour votre projet.",
  },
  {
    icon: ShoppingCart,
    title: "Commerce",
    text: "Marketing et vente de produits de boutiques en ligne.",
  },
  {
    icon: TrendingUp,
    title: "Services",
    text: "Formations et solutions pour entreprendre en ligne.",
  },
];

const strengths = [
  "Approche pratique, orientée résultats",
  "Accompagnement personnalisé, pas à pas",
  "Formations accessibles aux débutants",
];

export function About() {
  return (
    <section id="apropos" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="À propos"
          title="Le marketing digital et l'e-commerce, au service de votre croissance"
        />

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.25fr]">
          {/* Logo de l'entreprise */}
          <Reveal>
            <div className="relative rounded-[2rem] border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 shadow-lg shadow-brand-900/5 md:p-12">
              <div
                aria-hidden
                className="absolute top-6 right-6 h-16 w-16 rounded-full border-4 border-gold-300/70"
              />
              <div className="mx-auto w-full max-w-[300px]">
                <Image
                  src="/logo-bt.png"
                  alt={`Logo officiel de ${profile.business}`}
                  width={700}
                  height={700}
                  className="h-auto w-full rounded-full shadow-md"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="font-display text-xl font-bold text-brand-900">
                  {profile.business}
                </p>
                <p className="mt-1 text-sm font-medium text-gold-700">
                  {profile.tagline}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Texte de présentation */}
          <div>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate-700">
                Je suis{" "}
                <strong className="font-semibold text-brand-900">
                  {profile.name}
                </strong>
                , entrepreneur et spécialiste du marketing digital. À travers{" "}
                <strong className="font-semibold text-brand-900">
                  {profile.business}
                </strong>
                , j&apos;assure le marketing des produits de différentes
                boutiques en ligne : mise en valeur des produits, contenu de
                vente, campagnes de promotion et suivi des résultats.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                Je forme également les entrepreneurs, commerçants et porteurs
                de projets au{" "}
                <strong className="font-semibold text-brand-900">
                  marketing digital
                </strong>{" "}
                et à la{" "}
                <strong className="font-semibold text-brand-900">
                  création de boutiques en ligne
                </strong>
                , de l&apos;idée jusqu&apos;aux premières ventes, avec une
                pédagogie simple et concrète.
              </p>
            </Reveal>

            {/* Les 3 pôles */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pillars.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={0.15 + i * 0.08}>
                  <div className="h-full rounded-2xl border border-brand-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-700 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 font-display font-bold text-brand-900">
                      {title}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-slate-600">
                      {text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Points forts */}
            <Reveal delay={0.3}>
              <ul className="mt-8 space-y-3">
                {strengths.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-slate-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

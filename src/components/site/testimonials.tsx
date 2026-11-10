"use client";

import { Quote } from "lucide-react";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { profile } from "@/lib/profile";

export function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28" aria-label="Témoignages">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Témoignages"
          title="Ils m'ont fait confiance"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {profile.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-brand-100 bg-gradient-to-b from-brand-50/80 to-white p-7 shadow-sm transition-shadow hover:shadow-md">
                <Quote className="h-8 w-8 text-gold-500" aria-hidden />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-700 italic">
                  « {t.quote} »
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-brand-100 pt-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-700 font-display text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-display text-sm font-bold text-brand-900">
                      {t.name}
                    </span>
                    <span className="block text-xs text-slate-500">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

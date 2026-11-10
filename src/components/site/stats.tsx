"use client";

import { profile } from "@/lib/profile";
import { Reveal } from "./reveal";

export function Stats() {
  return (
    <section aria-label="Chiffres clés" className="bg-brand-950">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {profile.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-3xl font-extrabold text-gold-400 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-brand-100/85">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Shirt, Store, Smartphone, type LucideIcon } from "lucide-react";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { profile } from "@/lib/profile";

const iconMap: Record<string, LucideIcon> = {
  shirt: Shirt,
  store: Store,
  smartphone: Smartphone,
};

const coverStyles = [
  "from-brand-600 to-brand-800",
  "from-gold-500 to-gold-700",
  "from-brand-500 to-brand-700",
];

export function Portfolio() {
  return (
    <section
      id="realisations"
      className="scroll-mt-24 bg-brand-50/70 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Réalisations"
          title="Des missions concrètes, orientées résultats"
          description="Quelques exemples de missions que je réalise pour les boutiques en ligne et les entrepreneurs qui me font confiance."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {profile.projects.map((project, i) => {
            const Icon = iconMap[project.icon] ?? Store;
            return (
              <Reveal key={project.title} delay={i * 0.1} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-900/10">
                  {/* Couverture illustrative */}
                  <div
                    className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${coverStyles[i % coverStyles.length]}`}
                  >
                    <div
                      aria-hidden
                      className="absolute top-4 right-4 h-14 w-14 rounded-full border-2 border-white/30"
                    />
                    <div
                      aria-hidden
                      className="absolute bottom-4 left-4 h-8 w-8 rounded-full bg-white/15"
                    />
                    <Icon className="h-14 w-14 text-white/95" strokeWidth={1.4} />
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-900">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold text-brand-950">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

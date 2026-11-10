"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { profile } from "@/lib/profile";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-brand-50/70 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <SectionHeader
              align="left"
              eyebrow="FAQ"
              title="Questions fréquentes"
              description="Vous vous demandez peut-être comment je peux vous aider. Voici les réponses aux questions que l'on me pose le plus souvent."
            />
          </div>

          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {profile.faq.map((item, i) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${i}`}
                  className="rounded-2xl border border-brand-100 bg-white px-5 shadow-sm last:border-b"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-brand-950 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

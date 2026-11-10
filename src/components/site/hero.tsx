"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Handshake,
  ShoppingCart,
  TrendingUp,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";

const pillars = [
  { icon: Handshake, label: "Conseil" },
  { icon: ShoppingCart, label: "Commerce" },
  { icon: TrendingUp, label: "Services" },
];

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Décor : halos bleu et or */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-gold-200/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-[1.15fr_1fr]">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-100/60 px-4 py-1.5 text-sm font-semibold text-gold-700">
            <Star className="h-4 w-4 fill-gold-500 text-gold-500" />
            Marketing digital · E-commerce · Formation
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-brand-950 md:text-5xl lg:text-6xl">
            Babo Tabio
            <span className="relative mx-2 inline-block text-brand-700">
              Anselme
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 h-2.5 w-full text-gold-500"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9 C 50 2, 150 2, 198 8"
                  stroke="currentColor"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-5 font-display text-lg font-semibold text-brand-800 md:text-xl">
            {profile.role}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-brand-700 px-6 text-white hover:bg-brand-800"
            >
              <a href="#contact">
                Discutons de votre projet
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-brand-200 px-6 text-brand-800 hover:bg-brand-50"
            >
              <a href="#services">Découvrir mes services</a>
            </Button>
          </div>

          {/* Piliers de la marque */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            {pillars.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-medium text-brand-900 shadow-sm"
              >
                <Icon className="h-4 w-4 text-gold-600" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute -top-6 -right-6 h-28 w-28 rounded-full border-4 border-gold-400/70"
          />
          <div
            aria-hidden
            className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-brand-100"
          />

          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl shadow-brand-900/20 ring-1 ring-brand-100">
            <Image
              src="/portrait.jpg"
              alt={`Portrait de ${profile.name}`}
              width={900}
              height={1953}
              priority
              className="h-[430px] w-full object-cover object-[50%_28%] sm:h-[500px] lg:h-[560px]"
            />
          </div>

          {/* Carte flottante : logo */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-5 left-4 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-brand-100 backdrop-blur md:-left-8"
          >
            <Image
              src="/logo-bt.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
            <span className="leading-tight">
              <span className="block font-display text-sm font-bold text-brand-900">
                {profile.business}
              </span>
              <span className="block text-xs text-slate-500">
                {profile.tagline}
              </span>
            </span>
          </motion.div>

          {/* Carte flottante : devise */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="absolute -bottom-5 right-4 rounded-2xl bg-brand-900 px-4 py-3 text-white shadow-xl md:-right-6"
          >
            <p className="text-xs uppercase tracking-wider text-gold-400">
              Notre devise
            </p>
            <p className="mt-0.5 font-display text-sm font-bold">
              « {profile.motto} »
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

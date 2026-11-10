"use client";

import Image from "next/image";
import { Mail, MessageCircle, ArrowUp } from "lucide-react";
import { profile } from "@/lib/profile";

const navLinks = [
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#formations", label: "Formations" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-brand-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marque */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-gold-400/60">
                <Image
                  src="/logo-bt.png"
                  alt={`Logo ${profile.business}`}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <span>
                <span className="block font-display text-lg font-bold">
                  {profile.business}
                </span>
                <span className="block text-sm text-gold-400">
                  {profile.tagline}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-100/80">
              {profile.intro}
            </p>
            <p className="mt-4 font-display text-sm font-semibold text-gold-300">
              « {profile.motto} »
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Pied de page">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-gold-400">
              Navigation
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-100/85 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact rapide */}
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-gold-400">
              Contact
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-brand-100/85 transition-colors hover:text-gold-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                  <span className="break-all">{profile.email}</span>
                </a>
              </li>
              {profile.whatsapp ? (
                <li>
                  <a
                    href={`https://wa.me/${profile.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-brand-100/85 transition-colors hover:text-gold-300"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 text-gold-400" />
                    {profile.phoneDisplay}
                  </a>
                </li>
              ) : null}
            </ul>
            <a
              href="#accueil"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-brand-100/85 transition-colors hover:border-gold-400/50 hover:text-gold-300"
            >
              <ArrowUp className="h-4 w-4" />
              Retour en haut
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-center text-xs text-brand-100/70 sm:flex-row md:px-6">
          <p>
            © {year} {profile.business} — {profile.name}. Tous droits réservés.
          </p>
          <p>Marketing digital · E-commerce · Formation</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";
import { cn } from "@/lib/utils";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#formations", label: "Formations" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-brand-100 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-white/0"
      )}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-18 md:px-6"
      >
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-gold-400/60 md:h-11 md:w-11">
            <Image
              src="/logo-bt.png"
              alt={`Logo ${profile.business}`}
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold text-brand-900 md:text-lg">
              {profile.business}
            </span>
            <span className="hidden text-xs text-slate-500 sm:block">
              {profile.tagline}
            </span>
          </span>
        </a>

        {/* Liens desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div className="hidden lg:block">
          <Button asChild className="bg-brand-700 text-white hover:bg-brand-800">
            <a href="#contact">
              <MessageCircle className="mr-2 h-4 w-4" />
              Discutons
            </a>
          </Button>
        </div>

        {/* Bouton mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-900 transition-colors hover:bg-brand-50 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open ? (
        <div className="border-t border-brand-100 bg-white/95 shadow-lg backdrop-blur-md lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full bg-brand-700 text-white hover:bg-brand-800">
                <a href="#contact" onClick={() => setOpen(false)}>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Discutons de votre projet
                </a>
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}

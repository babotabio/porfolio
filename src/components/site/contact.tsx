"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Facebook,
  Linkedin,
  Instagram,
  Music2,
} from "lucide-react";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { profile } from "@/lib/profile";

const serviceOptions = [
  "Marketing de mes produits",
  "Formation en marketing digital",
  "Création de ma boutique en ligne",
  "Autre demande",
];

const socials = [
  { key: "facebook", label: "Facebook", url: profile.socials.facebook, Icon: Facebook },
  { key: "linkedin", label: "LinkedIn", url: profile.socials.linkedin, Icon: Linkedin },
  { key: "instagram", label: "Instagram", url: profile.socials.instagram, Icon: Instagram },
  { key: "tiktok", label: "TikTok", url: profile.socials.tiktok, Icon: Music2 },
].filter((s) => s.url && s.url.trim() !== "");

export function Contact() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState<string>("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Portfolio] ${service || "Nouvelle demande"} — ${name || "Visiteur"}`
    );
    const body = encodeURIComponent(
      `Bonjour ${profile.name},\n\n` +
        `Nom : ${name}\n` +
        `E-mail : ${email}\n` +
        `Service souhaité : ${service || "Non précisé"}\n\n` +
        `Message :\n${message}\n\n` +
        `— Envoyé depuis votre site portfolio`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast({
      title: "Demande prête !",
      description:
        "Votre application e-mail va s'ouvrir avec votre message pré-rempli.",
    });
  };

  const whatsappUrl = profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
        `Bonjour ${profile.name}, je découvre votre site et je souhaite discuter d'un projet.`
      )}`
    : null;

  return (
    <section id="contact" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Parlons de votre projet"
          description="Vous avez des produits à vendre, une boutique à créer ou une formation à suivre ? Écrivez-moi : je réponds sous 24 h."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          {/* Coordonnées */}
          <Reveal>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-brand-950">
                    E-mail
                  </span>
                  <span className="block break-all text-sm text-slate-600">
                    {profile.email}
                  </span>
                </span>
              </a>

              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500 text-brand-950">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-brand-950">
                      WhatsApp
                    </span>
                    <span className="block text-sm text-slate-600">
                      {profile.phoneDisplay}
                    </span>
                  </span>
                </a>
              ) : null}

              <div className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-sm">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-brand-950">
                    Localisation
                  </span>
                  <span className="block text-sm text-slate-600">
                    {profile.location}
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-sm">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white">
                  <Clock className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-brand-950">
                    Disponibilité
                  </span>
                  <span className="block text-sm text-slate-600">
                    {profile.availability}
                  </span>
                </span>
              </div>

              {socials.length > 0 ? (
                <div className="pt-2">
                  <p className="mb-3 text-sm font-semibold text-brand-950">
                    Suivez-moi
                  </p>
                  <div className="flex gap-3">
                    {socials.map(({ key, label, url, Icon }) => (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 bg-white text-brand-700 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>

          {/* Formulaire */}
          <Reveal delay={0.12}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-brand-100 bg-gradient-to-b from-brand-50/70 to-white p-6 shadow-lg shadow-brand-900/5 md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Votre nom *</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex : Jean Kouassi"
                    required
                    className="h-12 bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Votre e-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vous@exemple.com"
                    required
                    className="h-12 bg-white"
                  />
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="service">Service souhaité *</Label>
                <Select value={service} onValueChange={setService} required>
                  <SelectTrigger
                    id="service"
                    className="h-12 w-full bg-white text-left"
                  >
                    <SelectValue placeholder="Choisissez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="message">Votre message *</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Décrivez votre projet : vos produits, vos objectifs, ce dont vous avez besoin…"
                  rows={5}
                  required
                  className="bg-white"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-6 w-full bg-brand-700 text-white hover:bg-brand-800 sm:w-auto"
              >
                <Send className="mr-2 h-4 w-4" />
                Envoyer ma demande
              </Button>
              <p className="mt-3 text-xs text-slate-500">
                En envoyant ce formulaire, votre application e-mail s&apos;ouvre
                avec un message pré-rempli — vous n&apos;avez plus qu&apos;à
                cliquer sur « Envoyer ».
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

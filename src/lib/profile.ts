// =====================================================================
//  PROFIL B_T ENTREPRISE — FICHIER DE CONFIGURATION DU SITE
//  ------------------------------------------------------------------
//  ⚠️  IMPORTANT : Les valeurs marquées « À REMPLACER » ci-dessous sont
//  des exemples. Modifiez-les avec VOS vraies coordonnées : tout le
//  site se mettra à jour automatiquement (contact, WhatsApp, réseaux
//  sociaux, chiffres, avis…).
// =====================================================================

export const profile = {
  // ---- Identité -----------------------------------------------------
  name: "Babo Tabio Anselme",
  business: "B_T Entreprise",
  tagline: "Votre partenaire pour réussir",
  motto: "Ensemble, bâtissons votre succès",
  role: "Spécialiste en Marketing Digital & E-commerce",
  intro:
    "J'aide les boutiques en ligne à vendre plus grâce au marketing digital, et je forme les entrepreneurs à créer et développer leur propre boutique en ligne.",

  // ---- Coordonnées (⚠️ À REMPLACER par vos vraies informations) ------
  email: "contact@bt-entreprise.com",
  phoneDisplay: "+00 000 000 000", // numéro affiché sur le site
  whatsapp: "", // ex : "2250700000000" (indicatif + numéro, sans + ni espaces)
  location: "Disponible en ligne, où que vous soyez",
  availability: "Réponse sous 24 h",

  // ---- Réseaux sociaux (⚠️ À REMPLACER — laissez "" pour masquer) ---
  socials: {
    facebook: "https://facebook.com/btentreprise",
    linkedin: "https://linkedin.com/in/babotabioanselme",
    instagram: "",
    tiktok: "",
  },

  // ---- Chiffres clés (⚠️ À AJUSTER selon vos vrais résultats) -------
  stats: [
    { value: "10+", label: "Boutiques et entrepreneurs accompagnés" },
    { value: "50+", label: "Apprenants formés au marketing digital" },
    { value: "3", label: "Pôles d'expertise : Conseil · Commerce · Services" },
    { value: "100%", label: "Accompagnement personnalisé" },
  ],

  // ---- Réalisations (exemples de missions — adaptez-les) -----------
  projects: [
    {
      title: "Marketing de produits mode & beauté",
      category: "Marketing produit",
      description:
        "Promotion de catalogues de produits via les réseaux sociaux, création de contenu de vente et campagnes ciblées pour augmenter les ventes.",
      tags: ["Réseaux sociaux", "Contenu de vente", "Campagnes"],
      icon: "shirt",
    },
    {
      title: "Lancement de boutique en ligne",
      category: "Création + Formation",
      description:
        "Création complète de la boutique, mise en place des produits et des paiements, puis formation du propriétaire pour gérer son activité en autonomie.",
      tags: ["Boutique en ligne", "Produits", "Autonomie"],
      icon: "store",
    },
    {
      title: "Stratégie produits électroniques",
      category: "Stratégie & contenu",
      description:
        "Diagnostic de l'activité, choix des canaux de vente, plan de contenu et suivi des performances pour une boutique d'électronique.",
      tags: ["Diagnostic", "Plan d'action", "Suivi"],
      icon: "smartphone",
    },
  ],

  // ---- Témoignages (⚠️ À REMPLACER par de vrais avis clients) ------
  testimonials: [
    {
      quote:
        "Grâce à la formation, j'ai pu ouvrir ma boutique en ligne en quelques semaines et réaliser mes premières ventes.",
      name: "A. K.",
      role: "Entrepreneure",
    },
    {
      quote:
        "Mes produits se vendent mieux depuis que B_T Entreprise s'occupe de mon marketing.",
      name: "K. S.",
      role: "Vendeur en ligne",
    },
    {
      quote:
        "Un accompagnement clair et concret : du diagnostic jusqu'au lancement de ma boutique.",
      name: "M. T.",
      role: "Créatrice de boutique",
    },
  ],

  // ---- FAQ ----------------------------------------------------------
  faq: [
    {
      question: "Quels services proposez-vous ?",
      answer:
        "Deux grands services : d'une part le marketing des produits de boutiques en ligne (promotion, contenu, campagnes, suivi des ventes) ; d'autre part la formation au marketing digital et à la création de boutiques en ligne.",
    },
    {
      question: "Comment se déroulent vos formations ?",
      answer:
        "Les formations sont pratiques et adaptées à votre niveau, en ligne ou en présentiel. Vous apprenez en travaillant directement sur votre projet, avec un suivi après la formation pour vous accompagner.",
    },
    {
      question: "En combien de temps peut-on créer une boutique en ligne ?",
      answer:
        "Cela dépend de votre projet et de votre disponibilité. Une boutique simple peut être opérationnelle en quelques jours ; avec l'accompagnement complet, comptez quelques semaines pour un lancement solide.",
    },
    {
      question: "Quels types de produits peut-on marketing ?",
      answer:
        "Tous types de produits : mode et beauté, électronique, agroalimentaire, artisanat, accessoires… La stratégie s'adapte à votre produit et à votre clientèle cible.",
    },
    {
      question: "Comment démarrer un accompagnement ?",
      answer:
        "Écrivez-moi par WhatsApp ou par e-mail en décrivant votre projet. Nous faisons un premier échange de diagnostic, puis je vous propose un plan d'action adapté à vos objectifs et à votre budget.",
    },
  ],
} as const;

export type Profile = typeof profile;

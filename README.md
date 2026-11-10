# Portfolio — Babo Tabio Anselme · B_T Entreprise

Site portfolio professionnel : marketing des produits de boutiques en ligne, formation en marketing digital et création de boutiques en ligne.

## ✏️ Personnaliser le site (important avant le déploiement)

**Toutes les informations personnelles sont centralisées dans un seul fichier :**
`src/lib/profile.ts`

Remplacez les valeurs d'exemple par vos vraies informations :

| Champ | Description |
| --- | --- |
| `email` | Votre vraie adresse e-mail de contact |
| `phoneDisplay` | Votre numéro affiché sur le site |
| `whatsapp` | Votre numéro WhatsApp (format international, sans `+` ni espaces, ex : `2250700000000`) |
| `socials` | Vos liens Facebook, LinkedIn, Instagram, TikTok (laissez `""` pour masquer un réseau) |
| `stats` | Vos vrais chiffres (boutiques accompagnées, apprenants formés…) |
| `projects` | Vos vraies réalisations |
| `testimonials` | De vrais avis de vos clients |

Vos deux images sont déjà intégrées dans `public/` :
- `portrait.jpg` — votre photo (redressée automatiquement)
- `logo-bt.png` — logo B_T Entreprise

## 🚀 Déployer sur Vercel

### Méthode recommandée : via GitHub

1. **Créez un compte** sur [github.com](https://github.com) puis un nouveau dépôt (ex : `portfolio-bt`).
2. **Poussez le projet** :
   ```bash
   git init
   git add .
   git commit -m "Portfolio B_T Entreprise"
   git branch -M main
   git remote add origin https://github.com/VOTRE_COMPTE/portfolio-bt.git
   git push -u origin main
   ```
3. **Connectez Vercel** : allez sur [vercel.com](https://vercel.com), connectez-vous avec GitHub.
4. Cliquez sur **« Add New… » → « Project »**, sélectionnez votre dépôt `portfolio-bt`.
5. Vercel détecte Next.js automatiquement — cliquez sur **« Deploy »** (aucune configuration nécessaire).
6. Votre site sera en ligne sur `https://portfolio-bt.vercel.app` (ou votre domaine).

### Méthode rapide : via la CLI Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Ajouter un nom de domaine personnalisé (optionnel)

Dans le tableau de bord Vercel : **Settings → Domains → Add**, puis suivez les instructions pour pointer votre domaine (ex : `bt-entreprise.com`) vers Vercel.

## 🛠️ Développement local

```bash
bun install     # installer les dépendances
bun run dev     # serveur de développement sur http://localhost:3000
bun run lint    # vérifier la qualité du code
```

## 📁 Structure du projet

```
src/
├── app/
│   ├── layout.tsx      # Métadonnées SEO + polices (Inter, Sora)
│   ├── page.tsx        # Assemblage des sections
│   └── globals.css     # Palette de marque (bleu royal + or)
├── components/site/    # Sections du site (hero, services, contact…)
└── lib/profile.ts      # ⚠️ VOS INFORMATIONS PERSONNELLES ICI
public/
├── portrait.jpg        # Votre photo
└── logo-bt.png         # Logo B_T Entreprise
```

## 📝 Notes techniques

- **Next.js 16 + TypeScript + Tailwind CSS 4** — optimisé pour Vercel.
- Le formulaire de contact ouvre l'application e-mail du visiteur avec un message pré-rempli (aucun backend requis, fonctionne immédiatement sur Vercel).
- Le bouton WhatsApp s'affiche dès que vous renseignez `whatsapp` dans `profile.ts`.

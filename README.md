# Spurb

Spurb is the OS for Idle Assets: an AI platform built to monetize dormant assets such as garages, driveways, storage spaces, rooms, vehicles, and other underused property.

Spurb est l'OS des actifs dormants : une plateforme IA concue pour monetiser des actifs sous-utilises comme des garages, allees, espaces de stockage, chambres, vehicules et autres biens inexploites.

## Presentation

### English

Spurb gives owners a deployable operating system for idle assets. The platform is designed to:

- onboard users and assets,
- manage listings and monthly pricing,
- track tenants, leases, and payments,
- support Stripe Connect onboarding and split payments,
- provide a foundation for AI-powered operations around listing, pricing, and asset workflows.

### Francais

Spurb fournit aux proprietaires un systeme d'exploitation deployable pour leurs actifs dormants. La plateforme permet de :

- onboarder les utilisateurs et les actifs,
- gerer les annonces et les prix mensuels,
- suivre les locataires, les baux et les paiements,
- gerer l'onboarding Stripe Connect et les paiements partages,
- fournir une base pour des operations pilotees par l'IA autour du listing, du pricing et de l'exploitation des actifs.

## Stack

- Next.js 14
- Tailwind CSS
- TypeScript
- Prisma ORM
- PostgreSQL
- Stripe Connect

## Local Setup

### English

```bash
git clone https://github.com/jdp4mkymvv-ai/spurb.git
cd spurb
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev
```

If you do not have migrations yet, use:

```bash
npx prisma db push
```

### Francais

```bash
git clone https://github.com/jdp4mkymvv-ai/spurb.git
cd spurb
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev
```

Si vous n'avez pas encore de migrations, utilisez :

```bash
npx prisma db push
```

## Required Environment Variables

### English

- `DATABASE_URL`: PostgreSQL connection string used by Prisma and the application server.
- `STRIPE_SECRET_KEY`: Stripe secret key used for account onboarding, payment intents, and webhook validation.
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripe publishable key exposed to the browser for client-side payment flows.
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook signing secret used to verify inbound webhook events.
- `NEXTAUTH_SECRET`: secret for authentication or session management.
- `NEXTAUTH_URL`: base URL used to generate Stripe onboarding refresh and return URLs.

### Francais

- `DATABASE_URL` : chaine de connexion PostgreSQL utilisee par Prisma et le serveur applicatif.
- `STRIPE_SECRET_KEY` : cle secrete Stripe utilisee pour l'onboarding des comptes, les intentions de paiement et la validation des webhooks.
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` : cle publique Stripe exposee au navigateur pour les flux de paiement cote client.
- `STRIPE_WEBHOOK_SECRET` : secret de signature Stripe utilise pour verifier les webhooks entrants.
- `NEXTAUTH_SECRET` : secret pour l'authentification ou la gestion de session.
- `NEXTAUTH_URL` : URL de base utilisee pour generer les URLs de refresh et de retour Stripe.

## Vercel Deployment

### English

Deploy in five steps:

1. Import the GitHub repository into Vercel.
2. Add all required environment variables in the Vercel project settings.
3. Confirm the framework is detected as Next.js.
4. Trigger the first deployment.
5. Validate the production site, Prisma connectivity, and Stripe endpoints.

### Francais

Deploiement en cinq etapes :

1. Importez le depot GitHub dans Vercel.
2. Ajoutez toutes les variables d'environnement requises dans les parametres du projet Vercel.
3. Verifiez que le framework detecte est bien Next.js.
4. Lancez le premier deploiement.
5. Validez le site en production, la connectivite Prisma et les endpoints Stripe.

## Folder Architecture

```text
app/
  api/
    assets/
    listings/
    stripe/
      onboard/
      payment/
      webhook/
    webhooks/
      stripe/
  dashboard/
  onboarding/
  globals.css
  layout.tsx
  page.tsx
components/
  dashboard/
  landing/
  ui/
lib/
  agents/
  prisma.ts
  stripe.ts
prisma/
  schema.prisma
config/
content/
db/
scripts/
```

## Notes

### English

The Prisma schema includes `User`, `Asset`, `Listing`, `Tenant`, `Lease`, `Payment`, and `AgentLog` models to support the Spurb MVP backend.

### Francais

Le schema Prisma inclut les modeles `User`, `Asset`, `Listing`, `Tenant`, `Lease`, `Payment` et `AgentLog` pour supporter le backend MVP de Spurb.

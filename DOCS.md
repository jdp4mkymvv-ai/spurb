# Spurb Codebase Audit

Last updated: 2026-05-19

## Exploration Notes: Spurb MVP alignment task

Exploration completed on 2026-05-19 before applying the requested MVP file set.

### Current state discovered

- The repo already contains a working Next.js 14 + Tailwind + TypeScript scaffold.
- `prisma/schema.prisma` existed but used a different data model:
  - `Owner` instead of `User`
  - enum-based `AssetType`
  - asset fields such as `title`, `priceMonth`, and `active`
  - payment fields such as `spurb_fee`, `paidAt`, and `stripeId`
- Existing API routes depended on that old Prisma shape:
  - `app/api/assets/route.ts` imported `AssetType` and created nested `owner` records
  - `app/api/listings/route.ts` queried `asset.owner` and created `externalId` / `active` listing fields
- Stripe webhook support already existed at `app/api/stripe/webhook/route.ts`, but the task requires an additional route at `app/api/webhooks/stripe/route.ts`.
- `README.md` was still minimal and not yet bilingual.
- `.env.example` and `vercel.json` were missing.
- `package.json` already included `stripe` and `@prisma/client`, but `prisma` was listed under `dependencies` instead of `devDependencies`.

### Planned changes from this exploration

- Replace the Prisma schema with the task-specified MVP schema.
- Update existing Prisma-backed API routes so they compile against the new model names and fields.
- Add the three requested Stripe routes:
  - `app/api/stripe/onboard/route.ts`
  - `app/api/stripe/payment/route.ts`
  - `app/api/webhooks/stripe/route.ts`
- Add `.env.example` and `vercel.json`.
- Rewrite `README.md` in English and French with setup, env vars, deployment, and architecture sections.
- Move `prisma` to `devDependencies`, regenerate Prisma client, run a production build, then commit and push to the requested GitHub remote.

## Implementation Update: Spurb MVP alignment

Completed on 2026-05-19 for the "Spurb MVP — Build complete codebase and push to GitHub jdp4mkymvv-ai/spurb" task.

### What changed

- Replaced `prisma/schema.prisma` with the requested MVP schema:
  - `User`
  - `Asset`
  - `Listing`
  - `Tenant`
  - `Lease`
  - `Payment`
  - `AgentLog`
- Added the requested Stripe routes:
  - `app/api/stripe/onboard/route.ts`
  - `app/api/stripe/payment/route.ts`
  - `app/api/webhooks/stripe/route.ts`
- Added `.env.example` with the requested environment variables.
- Added `vercel.json` with Prisma generation in the build command.
- Rewrote `README.md` in English and French with:
  - product presentation,
  - stack overview,
  - local setup,
  - environment variable descriptions,
  - five-step Vercel deployment instructions,
  - folder architecture.
- Updated `package.json` so:
  - `stripe` remains in `dependencies`,
  - `@prisma/client` remains in `dependencies`,
  - `prisma` is now in `devDependencies`.
- Updated `app/api/assets/route.ts` and `app/api/listings/route.ts` to compile against the new Prisma schema instead of the prior `Owner` / `AssetType` model.

### Build and implementation notes

- `npm install` completed successfully.
- `prisma generate` completed successfully through `postinstall`.
- `npm run build` passed successfully on 2026-05-19 after two compatibility fixes:
  - the requested Stripe `apiVersion` string needed a TypeScript compatibility cast because the installed Stripe SDK types target a newer literal API version;
  - Stripe client construction in the new route modules was made lazy so local builds do not fail when `STRIPE_SECRET_KEY` is absent at build time.

### Files added by this task

- `.env.example`
- `vercel.json`
- `app/api/stripe/onboard/route.ts`
- `app/api/stripe/payment/route.ts`
- `app/api/webhooks/stripe/route.ts`

### Files updated by this task

- `DOCS.md`
- `README.md`
- `app/api/assets/route.ts`
- `app/api/listings/route.ts`
- `package.json`
- `package-lock.json`
- `prisma/schema.prisma`

### Git and deployment outcome

- Commit created: `dda1233` with message `feat: Spurb MVP — Prisma schema + Stripe Connect + Vercel config + README`.
- Push to the requested target repo `jdp4mkymvv-ai/spurb` was attempted twice and failed due credentials:
  - HTTPS push failed because no GitHub username/password credentials were available for `https://github.com`.
  - SSH push failed with `Permission to jdp4mkymvv-ai/spurb.git denied to deploy key`, which confirms the worker's GitHub key is scoped to the company repo instead.
- To avoid losing work, the commit was pushed successfully to the authorized repo `nanocorp-hq/spurb` on `main`.
- Post-push deployment verification was attempted exactly once after the required 90-second wait, but `agent-browser` could not launch because Chrome/Chromium is not installed in the worker environment.
- Result: code changes are pushed and preserved in the company repo, but verification of the live site remains pending, and the requested external-repo push remains blocked on GitHub access.

## Implementation Update: Next.js 14 App Initialization

Completed on 2026-05-19 after the initial audit.

### What was added

- Full Next.js 14 App Router project at the repo root
- TypeScript, Tailwind CSS, PostCSS, ESLint, and standard Next config
- `app/` routes for:
  - `/`
  - `/dashboard`
  - `/onboarding`
  - `/api/assets`
  - `/api/listings`
  - `/api/stripe/webhook`
- `components/landing/*` for the marketing page sections
- `components/dashboard/*` for owner dashboard widgets
- `components/ui/*` for shadcn-style primitives (`button`, `badge`, `card`, `input`, `textarea`)
- `lib/prisma.ts` Prisma singleton
- `lib/stripe.ts` Stripe server utility
- `lib/agents/*` modules for listing, pricing, and screening agent scaffolding using the OpenAI SDK
- `prisma/schema.prisma` with the requested owner / asset / listing / tenant / lease / payment data model
- NanoCorp analytics script installed in `app/layout.tsx`
- `components.json` added for shadcn/ui-compatible project structure

### Package / tooling decisions

- Next.js pinned to `14.2.35`
- React pinned to `18.2.0` for compatibility with Next 14
- TypeScript pinned to `5.4.5`
- Prisma pinned to `6.19.3` instead of Prisma 7 to avoid introducing Prisma 7 migration/config changes during the scaffold task
- Added the user-requested `@shadcn/ui` package plus the usual utility packages needed for local shadcn-style components:
  - `@radix-ui/react-slot`
  - `class-variance-authority`
  - `clsx`
  - `tailwind-merge`
  - `lucide-react`

### Build verification

- `npm install` completed successfully
- `prisma generate` completed successfully via `postinstall`
- `npm run build` passed successfully on 2026-05-19
- Changes committed in `3d39a47` (`Initialize Next.js 14 app foundation`) and pushed to `main`

Generated app routes during build:

- `/`
- `/dashboard`
- `/onboarding`
- `/api/assets`
- `/api/listings`
- `/api/stripe/webhook`

### Current repo status after initialization

The repository is no longer a pre-app placeholder. It now contains a deployable Next.js application foundation with the requested folder structure, backend scaffolding, and Prisma schema.

### Deployment verification status

- Post-push verification was attempted once with `agent-browser open https://spurb.nanocorp.app` after the required 90-second wait
- Verification did not complete in this worker because `agent-browser` could not find a Chrome/Chromium executable
- Result: deployment status is still pending manual/browser-capable verification even though the code was built and pushed successfully

### Immediate follow-up tasks recommended

1. Connect the onboarding form to `POST /api/assets` with a client action or server action.
2. Run `prisma db push` or create the first SQL migration so the live database matches `prisma/schema.prisma`.
3. Add auth for owners before treating `/dashboard` as real production state.
4. Replace placeholder dashboard metrics with real Prisma queries.
5. Build the Stripe checkout/subscription path and persist webhook outcomes.
6. Wire the OpenAI agent modules into concrete onboarding, pricing, and review workflows.

## Scope

Audit of the current Spurb repository, deployment, database, and company-level integrations before MVP build-out.

## Repository Structure

Current tracked application files in the repo root:

- `README.md`
- `DOCS.md`
- `content/homepage.md`
- `config/billing/spurb-monthly.json`
- `scripts/activate_spurb_monthly_stripe_product.sh`
- `db/migrations/0001_billing_products.sql`

Notably missing:

- `package.json`
- `package-lock.json`
- `app/` or `pages/`
- `components/`
- `public/`
- `tsconfig.json`
- `next.config.*`
- Tailwind, ESLint, or TypeScript config
- Any ORM config

Git state:

- Branch: `main`
- Remote: `git@github.com:nanocorp-hq/spurb.git`
- Current history: single `Initial commit`

Conclusion: the repo has not been initialized as a Next.js app yet. There is no existing application code.

## Tech Stack Status

Current codebase stack:

- Git repository only
- Markdown README only
- Billing product manifest in JSON
- One SQL migration for payment product metadata
- One shell activation script for Stripe API product creation
- No Node.js project manifest
- No React or Next.js source code
- No frontend build pipeline
- No backend/API code

Platform/runtime context available from NanoCorp:

- Intended web framework: Next.js App Router on Vercel
- Database: Neon Postgres exposed through `DATABASE_URL`
- Payments: NanoCorp Stripe tooling available, but not configured in-app
- Analytics: NanoCorp analytics available, but no tracking script is installed in code

Conclusion: Spurb is at pre-implementation stage. The platform supports a Next.js + Postgres app, but the repo does not yet contain one.

## Deployment Audit

Expected public URL:

- `https://spurb.nanocorp.app`

Observed behavior on 2026-05-19:

- Browser inspection shows a NanoCorp placeholder page with title `spurb | Coming Soon`
- Page body includes `NANOCORP_STATUS:coming_soon` and `DEPLOYED:false`
- HTTP inspection also returned a Vercel `DEPLOYMENT_NOT_FOUND` response header path before the placeholder handling
- Post-push verification was attempted again on 2026-05-19 after commit `30dae14`, but the local `agent-browser` installation could not launch because Chrome is not installed in the worker environment

Conclusion:

- There is no live Spurb application deployment yet
- The domain currently resolves to a platform placeholder rather than an app built from this repo
- Browser-based post-push verification is currently blocked in this worker environment until `agent-browser install` or a Chrome executable is available

## Database Audit

Environment access:

- `DATABASE_URL` is present locally
- Vercel env vars also include `DATABASE_URL` for `production`, `preview`, and `development`

Schema inspection on 2026-05-19:

- `billing_products` table exists in the `public` schema
- `billing_products` contains one seeded row for `spurb_monthly`

Conclusion:

- Neon/Postgres is provisioned and now stores billing product metadata
- There is still no broader application schema beyond the billing placeholder record

## Existing Routes, Pages, and API Endpoints

In the current repo:

- No `app/` directory
- No `pages/` directory
- No API route files
- No server actions
- No webhook handlers

Conclusion:

- There are currently no web routes, product pages, dashboard pages, or backend endpoints in source control

## Integrations Audit

### Vercel

- `DATABASE_URL` is configured
- No evidence of a successful app deployment yet

### Stripe / Payments

- No `STRIPE_SECRET_KEY` environment variable is present locally as of 2026-05-19
- Direct Stripe API activation is therefore blocked for now
- NanoCorp CLI product creation was tested and appears to create simple products only; the exposed tooling does not currently expose a recurring/monthly interval flag
- A billing manifest now exists at `config/billing/spurb-monthly.json`
- An activation script now exists at `scripts/activate_spurb_monthly_stripe_product.sh`
- A seeded database record now exists in `billing_products` with slug `spurb_monthly`
- The Stripe lookup key reserved in config and DB is `spurb_monthly_usd_2900`
- `nanocorp products list` returned no active products after cleanup
- `nanocorp payments link` still returned an active Stripe payment link after cleanup, so do not use that link as the source of truth for the MVP recurring plan
- `nanocorp payments revenue` returned `$0.00` across `0` payments

Conclusion:

- Payments are not fully activated yet because the Stripe secret key is missing
- The current NanoCorp payment link state appears stale relative to the active product list
- The recurring product definition is now stored in code and database state, ready to activate as soon as `STRIPE_SECRET_KEY` is provided

### Analytics

- `nanocorp analytics summary` returned zero events, pageviews, visitors, sessions, and exceptions for the last 30 days
- No analytics script exists in the repo because there is no app code yet

Conclusion:

- Analytics are not installed and there is no observed traffic

## What Is Already Built

Very little is built today:

- Company/repo naming and mission statement in `README.md`
- GitHub repository connected to NanoCorp/Vercel platform
- Neon database credentials provisioned
- Vercel environment variable `DATABASE_URL` provisioned
- Billing product config for the MVP monthly plan
- Billing product placeholder row stored in Postgres
- Stripe activation script for creating the real recurring Stripe product and price
- Public domain assigned

There is no implemented product surface yet.

## Billing Product Setup

Implemented on 2026-05-19 for the MVP subscription placeholder:

- Product name: `Spurb — Space Management`
- Description: `Automated listing, tenant screening, lease generation, and rent collection for your garage or driveway space.`
- Price: `$29/month`
- Currency: `usd`
- Billing interval: `month`
- Pricing model note: flat-fee MVP placeholder for the intended 10% platform fee business model

Artifacts created:

- `config/billing/spurb-monthly.json`
- `db/migrations/0001_billing_products.sql`
- `scripts/activate_spurb_monthly_stripe_product.sh`

Database state after migration:

- Table `billing_products` exists
- Seed row `spurb_monthly` exists
- `stripe_product_id` is `NULL`
- `stripe_price_id` is `NULL`
- `activation_status` is `pending_stripe_secret_key`

Activation path once Stripe credentials are available:

1. Export `STRIPE_SECRET_KEY` in the execution environment.
2. Run `scripts/activate_spurb_monthly_stripe_product.sh`.
3. The script will create the Stripe product and recurring monthly price, update `config/billing/spurb-monthly.json`, and backfill `billing_products.stripe_product_id` and `billing_products.stripe_price_id`.

Blocking gap:

- A real Stripe `prod_...` and `price_...` could not be created during this task because no Stripe secret key was present in the environment.
- Browser deployment verification after pushing could not complete because `agent-browser` has no Chrome binary available in this worker environment.

## Missing Pieces

Critical missing pieces for even a minimal MVP:

- Next.js application scaffold
- Landing page and product messaging
- Data model for homeowners, spaces, listings, tenants, leases, payments, and application status
- Owner intake flow
- Internal/admin workflow to review and publish listings
- Integrations for Neighbor.com and Facebook Marketplace, or an MVP-compatible manual/assisted workflow
- Tenant screening workflow
- Lease generation flow
- Payment collection flow and webhook handling
- Authentication/authorization
- Analytics instrumentation
- Error handling, logging, and monitoring

## Recommended First MVP Build Steps

Recommended order of work:

1. Initialize the repo as a Next.js App Router project with TypeScript, Tailwind, and ESLint.
2. Add the NanoCorp analytics script and a minimal root layout.
3. Define the first database schema and migration set for:
   - homeowners
   - spaces
   - listing_requests
   - tenants
   - leases
   - payments
4. Build a simple marketing site with a clear CTA for homeowners to submit a space.
5. Build an owner onboarding flow that captures address, space type, dimensions, photos, asking price, and availability.
6. Build an admin/internal review page to approve, reject, and track listing submissions.
7. Start with a manual-assisted listing operations model instead of immediate Neighbor/Facebook automation:
   - store listing-ready data in Postgres
   - mark each listing by channel/status
   - add placeholders for future automated publishing
8. Create a Stripe product/payment path for the simplest monetization step, then add:
   - checkout success page
   - payment webhook handler
   - payment status storage in Postgres
9. Add a basic lease record flow and document-generation placeholder so operational work can begin before full automation.
10. Ship a thin but live MVP, then iterate toward screening automation, lease generation, and channel integrations.

## Suggested MVP Scope

To get live quickly, the first version should likely focus on:

- Homeowner lead capture
- Space submission and review
- Internal tracking dashboard
- Manual listing operations support
- Basic payment collection plumbing

This avoids blocking on third-party marketplace automation before proving demand and operations.

## Landing Page Implementation (2026-05-19)

Full rebuild of `app/page.tsx` and all `components/landing/` files with the new agentique vision.

### Design system
- Background: `#0a0a0a` deep black with radial purple gradients
- Accent: `#7c3aed` violet/purple — all CTAs, badges, card hovers, icon backgrounds
- Typography: Bricolage Grotesque (display) + DM Sans (body)
- Animations: CSS keyframes (`blob-float`, `fade-up`, `shimmer`) — no external deps needed

### Components (all in `components/landing/`)
| File | Purpose |
|------|---------|
| `Hero.tsx` (`"use client"`) | Animated gradient blobs, AI badge, large headline, 2 CTAs |
| `SocialProof.tsx` | Stats bar: 2 400 assets / +€180k / 15% commission |
| `HowItWorks.tsx` | 3-step cards with numbered indicators and purple icons |
| `AssetCards.tsx` | 2×3 grid of 6 asset cards with hover glow animations |
| `AgentFeatures.tsx` | Sticky left col + 6 feature rows (what the agent does) |
| `Pricing.tsx` (`"use client"`) | Single 15%-commission plan with example calculation |
| `FAQ.tsx` (`"use client"`) | Interactive accordion with 5 French Q&As |
| `Footer.tsx` | Logo, 4 nav links, copyright |

### Key files changed
- `app/globals.css` — purple CSS variables, animation keyframes, `.card-hover` glow
- `tailwind.config.ts` — violet shadow/gradient tokens
- `app/layout.tsx` — DM_Sans font, French metadata
- `app/page.tsx` — assembles all sections + final CTA section

### Build status
- `npm run build` passes (9/9 static pages generated)
- Committed `a233fb8` and pushed to `main`
- Vercel deployment pending (screenshot confirmed old version still served after push)

## Documentation Change Log

- 2026-05-19: Initial codebase audit added
- 2026-05-19: Homepage copy and value proposition written — see `content/homepage.md`
- 2026-05-19: Added billing product manifest, Postgres billing_products migration, and Stripe activation script for `spurb_monthly`
- 2026-05-19: Attempted required post-push deployment verification, but `agent-browser` could not start because Chrome is not installed locally
- 2026-05-19: **Repositioning** — `content/homepage.md` fully rewritten with new "OS for Idle Assets" / agentique positioning. Central pitch: "Dis à Spurb ce que tu possèdes. L'IA fait tout le reste." New pricing model: 15% commission on generated revenue only (no fixed fees). Scope expanded beyond garage/driveway to multi-asset (voiture, chambre, jardin, cave, serveur).

## Content Assets

### `content/homepage.md`
Full homepage copywriting for the frontend worker to implement. **Fully rewritten 2026-05-19** with new agentique positioning ("OS for Idle Assets"). Includes:
- Hero: "Vos biens inutilisés rapportent de l'argent. Automatiquement." + subhead highlighting the AI agent + CTA "Commencer gratuitement"
- Comment ça marche (3 étapes): Dites-nous ce que vous avez → L'IA déploie partout → L'argent arrive
- Assets supportés (6 cards): Garage/allée/stockage, Voiture, Chambre/logement, Cave/débarras, Jardin/terrain, Compute/serveur
- Pourquoi Spurb (4 differentiators): 100% IA zéro effort, multi-assets une plateforme, optimisation prix temps réel, contrats auto
- Pricing: 15% commission sur revenus générés uniquement, zéro frais fixe
- Social proof/vision: "Le futur appartient aux biens qui travaillent pour vous"
- FAQ (7 questions) orientée IA et automatisation
- CTA final: "Laissez votre IA travailler pendant que vous dormez"
- SEO/meta copy and implementation notes for the frontend worker

# Spurb Codebase Audit

Last updated: 2026-05-19

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

## Documentation Change Log

- 2026-05-19: Initial codebase audit added
- 2026-05-19: Homepage copy and value proposition written — see `content/homepage.md`
- 2026-05-19: Added billing product manifest, Postgres billing_products migration, and Stripe activation script for `spurb_monthly`
- 2026-05-19: Attempted required post-push deployment verification, but `agent-browser` could not start because Chrome is not installed locally

## Content Assets

### `content/homepage.md`
Full homepage copywriting for the frontend worker to implement. Includes:
- Hero headline + subheadline (benefit-driven, punchy)
- How It Works (3-step flow: Sign Up → We List & Screen → You Get Paid)
- Feature bullets (auto-listing, tenant screening, lease generation, payments, dashboard, cancel anytime)
- Social proof bar (stats: $312 avg/mo, 4 days to first tenant, $0 upfront) + 3 testimonial placeholders
- Pricing section (Free tier + Spurb Standard at 10% of rent + Spurb Pro at 8% coming soon)
- FAQ (5 questions covering space types, screening, leases, payouts, and cancellation)
- CTA copy: primary "List My Space Free", secondary "See How It Works"
- SEO/meta copy and implementation notes for the frontend worker

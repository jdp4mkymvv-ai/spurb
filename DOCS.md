# Spurb Codebase Audit

Last updated: 2026-05-19

## Scope

Audit of the current Spurb repository, deployment, database, and company-level integrations before MVP build-out.

## Repository Structure

Current tracked application files in the repo root:

- `README.md`

Notably missing:

- `package.json`
- `package-lock.json`
- `app/` or `pages/`
- `components/`
- `public/`
- `tsconfig.json`
- `next.config.*`
- Tailwind, ESLint, or TypeScript config
- Any migration files or ORM config

Git state:

- Branch: `main`
- Remote: `git@github.com:nanocorp-hq/spurb.git`
- Current history: single `Initial commit`

Conclusion: the repo has not been initialized as a Next.js app yet. There is no existing application code.

## Tech Stack Status

Current codebase stack:

- Git repository only
- Markdown README only
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

Conclusion:

- There is no live Spurb application deployment yet
- The domain currently resolves to a platform placeholder rather than an app built from this repo

## Database Audit

Environment access:

- `DATABASE_URL` is present locally
- Vercel env vars also include `DATABASE_URL` for `production`, `preview`, and `development`

Schema inspection on 2026-05-19:

- No non-system tables found
- No tables in the `public` schema

Conclusion:

- Neon/Postgres is provisioned but unused
- There is no application schema, no migrations, and no seed data

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

- `nanocorp products list` returned no products
- `nanocorp payments link` returned no payment link
- `nanocorp payments revenue` returned `$0.00` across `0` payments

Conclusion:

- Payments are not configured
- No sellable products or checkout link exist yet

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
- Public domain assigned

There is no implemented product surface yet.

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

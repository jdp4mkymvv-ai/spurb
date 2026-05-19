# Spurb

Spurb turns underused homeowner space into managed recurring income.

This repository now contains a full Next.js 14 App Router foundation with:

- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL schema
- Stripe server scaffolding
- shadcn-style UI primitives in `components/ui`
- OpenAI agent modules for listing, pricing, and screening workflows

## Local Development

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file with the values you need locally:

```bash
DATABASE_URL=postgresql://...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
OPENAI_API_KEY=sk-...
```

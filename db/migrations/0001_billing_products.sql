CREATE TABLE IF NOT EXISTS billing_products (
    slug TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    pricing_model TEXT NOT NULL,
    unit_amount_cents INTEGER NOT NULL CHECK (unit_amount_cents > 0),
    currency TEXT NOT NULL,
    billing_interval TEXT NOT NULL,
    stripe_product_id TEXT,
    stripe_price_id TEXT,
    stripe_price_lookup_key TEXT NOT NULL UNIQUE,
    activation_status TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO billing_products (
    slug,
    name,
    description,
    pricing_model,
    unit_amount_cents,
    currency,
    billing_interval,
    stripe_product_id,
    stripe_price_id,
    stripe_price_lookup_key,
    activation_status
)
VALUES (
    'spurb_monthly',
    'Spurb — Space Management',
    'Automated listing, tenant screening, lease generation, and rent collection for your garage or driveway space.',
    'flat_fee_mvp_placeholder_for_10_percent_platform_fee',
    2900,
    'usd',
    'month',
    NULL,
    NULL,
    'spurb_monthly_usd_2900',
    'pending_stripe_secret_key'
)
ON CONFLICT (slug) DO UPDATE
SET name = EXCLUDED.name,
    description = EXCLUDED.description,
    pricing_model = EXCLUDED.pricing_model,
    unit_amount_cents = EXCLUDED.unit_amount_cents,
    currency = EXCLUDED.currency,
    billing_interval = EXCLUDED.billing_interval,
    stripe_price_lookup_key = EXCLUDED.stripe_price_lookup_key,
    updated_at = NOW();

#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CONFIG_PATH="${ROOT_DIR}/config/billing/spurb-monthly.json"

if ! command -v jq >/dev/null 2>&1; then
  echo "jq is required to run this script." >&2
  exit 1
fi

if [[ -z "${STRIPE_SECRET_KEY:-}" ]]; then
  echo "STRIPE_SECRET_KEY is required to activate the Stripe product." >&2
  exit 1
fi

slug="$(jq -r '.slug' "${CONFIG_PATH}")"
name="$(jq -r '.name' "${CONFIG_PATH}")"
description="$(jq -r '.description' "${CONFIG_PATH}")"
unit_amount_cents="$(jq -r '.unit_amount_cents' "${CONFIG_PATH}")"
currency="$(jq -r '.currency' "${CONFIG_PATH}")"
billing_interval="$(jq -r '.billing_interval' "${CONFIG_PATH}")"
lookup_key="$(jq -r '.stripe.price_lookup_key' "${CONFIG_PATH}")"

stripe_post() {
  local endpoint="$1"
  shift

  curl -fsS https://api.stripe.com/v1/"${endpoint}" \
    -u "${STRIPE_SECRET_KEY}:" \
    "$@"
}

product_response="$(
  stripe_post products \
    -d "name=${name}" \
    -d "description=${description}" \
    -d "metadata[slug]=${slug}" \
    -d "metadata[pricing_model]=flat_fee_mvp_placeholder_for_10_percent_platform_fee"
)"
product_id="$(jq -r '.id' <<<"${product_response}")"

price_response="$(
  stripe_post prices \
    -d "product=${product_id}" \
    -d "unit_amount=${unit_amount_cents}" \
    -d "currency=${currency}" \
    -d "recurring[interval]=${billing_interval}" \
    -d "lookup_key=${lookup_key}" \
    -d "metadata[slug]=${slug}"
)"
price_id="$(jq -r '.id' <<<"${price_response}")"

updated_config="$(jq \
  --arg product_id "${product_id}" \
  --arg price_id "${price_id}" \
  '.stripe.product_id = $product_id
   | .stripe.price_id = $price_id
   | .stripe.activation_status = "active"' \
  "${CONFIG_PATH}")"
printf '%s\n' "${updated_config}" > "${CONFIG_PATH}"

if [[ -n "${DATABASE_URL:-}" ]] && command -v psql >/dev/null 2>&1; then
  psql "${DATABASE_URL}" \
    -v ON_ERROR_STOP=1 \
    -v slug="${slug}" \
    -v product_id="${product_id}" \
    -v price_id="${price_id}" \
    -v lookup_key="${lookup_key}" \
    <<'SQL'
UPDATE billing_products
SET stripe_product_id = :'product_id',
    stripe_price_id = :'price_id',
    stripe_price_lookup_key = :'lookup_key',
    activation_status = 'active',
    updated_at = NOW()
WHERE slug = :'slug';
SQL
fi

echo "Stripe product activated."
echo "product_id=${product_id}"
echo "price_id=${price_id}"

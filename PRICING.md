# Plebify — Pricing (source of truth)

The site's `pricing.html` and the homepage teaser are generated to match this file.
Update here first, then reflect in the pages.

## Positioning

- **Value metric = a "report"** — one question run against the swarm, returning a
  calibrated distribution, party crosstab (Dem/Rep/Ind), representative voices,
  a calibration-confidence band, and a downloadable PDF + JSON.
- **COGS is ~$0.003/report** (48 personas × Llama 3.3 70B via OpenRouter). Pricing
  is **value-based**, not cost-plus — gated by features/speed/support, not compute.
- **Anchor:** a comparable read from a survey panel (SurveyMonkey Audience ~$1–3 per
  *response* → $500–1,500 for n=500 on one question; traditional panels $5k–$50k/study,
  weeks). Plebify = seconds, calibrated TVD ~0.10 (binary) / ~0.15 (divided opinion).
- **Framing:** augmented research / pre-testing / iterate-100-variants — **not** a
  citable n=1,000 poll. Keep calibration on every tier (it's the credibility moat);
  monetize confidence reporting + calibration-on-your-own-data.

## Tiers

| Tier | Price | Reports/mo | Key inclusions |
|---|---|---|---|
| **Free** | $0 | 10 | Binary + 4-pt scales · party crosstab · Plebify-watermarked PDF · shared public workspace · no API |
| **Starter** | **$49/mo** | 150 | All scales · full demographic crosstabs · your-logo PDF · JSON/CSV export · 1 seat |
| **Pro** ⭐ | **$249/mo** | 750 | Custom + saved audiences · multi-sample tightening · API + MCP (10k calls) · calibration-confidence reporting · 3 seats |
| **Scale** | **$999/mo** | 4,000 | Warm compute (no cold start) · ZIP/demo-targeted audiences · higher API + webhooks · 10 seats · priority support |
| **Enterprise** | **Custom (from ~$2.5k/mo)** | Negotiated | Calibration on your own ground-truth data · custom/private libraries · white-label · SSO/SAML · SLA · VPC/on-prem · dedicated support |

**À la carte:** $1 per report, no commitment. **Annual billing:** ~2 months free.

## Notes / open decisions

- Pro at $249 assumes team buyers who'd otherwise spend $500+/question on panels. If
  early signups skew indie/creator, add a **$19–29 "Hobby"** rung between Free and
  Starter and A/B it.
- CTAs on the live site point self-serve tiers to the demo (no billing wired yet);
  Enterprise → `mailto:jonathan@agi.pro` (swap for a brand inbox once provisioned).
- "Gating" on the dashboard is presentational (plan badge + upgrade nudges); the
  shared demo runs everything free today. Real enforcement comes with auth/billing.

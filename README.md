# ebanumsystem.com — Ebano Labs

Marketing site for Ebano Labs. Next.js 16 (App Router, Turbopack) · Tailwind v4 · TypeScript.

## Develop

```bash
nvm use            # Node 22 (see .nvmrc)
npm ci
npm run dev
```

Env vars (`.env.local`, never committed): `RESEND_API_KEY`.

## Scripts

| Script | What |
| --- | --- |
| `npm run check` | lint + typecheck + build (same as CI) |
| `npm run build:webpack` | fallback build without Turbopack, if a Turbopack bug blocks a deploy |

## Structure

- `app/` — routes, metadata, `api/contact` (thin controller)
- `components/` — UI; `components/sections` page sections, `components/ui` primitives
- `lib/site.ts` — site constants (URL, emails, Cal link, OG defaults)
- `lib/contact/` — validation, email template, use case (`submitContact`)
- `lib/email/` — `EmailSender` interface + Resend HTTPS adapter
- `lib/data/` — portfolio content

## CI/CD

- **CI** (`.github/workflows/ci.yml`): prod-deps audit, lint, typecheck, build on every push/PR.
- **CodeQL**, **Dependency Review**, **Dependabot** (weekly, majors excluded).
- **Uptime** check every 30 min; failures notify by email.
- Deploy: the host builds `dev` on push. Protect `dev` so only green PRs reach it.

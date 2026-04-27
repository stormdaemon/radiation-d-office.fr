# radiation-d-office.fr

Landing SSR Next.js 16.2 pour radiation-office.fr.

## Stack

- Next.js 16.2.4 App Router
- React 19.2
- Bun 1.3.5
- SSR force sur `/`
- Formspree pour le formulaire
- Netlify avec OpenNext auto-adapter

## Netlify

La configuration est dans `netlify.toml`.

- Build command: `bun install --frozen-lockfile && bun run build`
- Publish directory: `.next`
- Node: `24`
- Bun: `1.3.5`
- Production URL: `https://radiation-office.fr`

Variables publiques déjà définies dans `netlify.toml` :

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_FORMSPREE_ID`
- `NETLIFY_NEXT_SKEW_PROTECTION`

Netlify recommande de garder les secrets dans l'UI, CLI ou API. Ici l'ID Formspree est public côté client par nature.

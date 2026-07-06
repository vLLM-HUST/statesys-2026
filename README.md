# StateSys 2026 Workshop Website

Static website for the StateSys 2026 ACM SIGOPS ATC workshop.

The site is intended to be linked from the official ATC workshop listing while
keeping a richer standalone identity for the workshop.

## Local Preview

```bash
npx serve .
```

## Cloudflare Pages

This repository is configured for Cloudflare Pages as a no-build static site.

- Project name: `statesys-2026`
- Production domain: `workshop.sage.org.ai`
- Build command: empty
- Build output directory: `dist`

Deploy from the command line:

```bash
npm run deploy
```

Then attach the custom domain in Cloudflare Pages:

```bash
npx wrangler pages domain add statesys-2026 workshop.sage.org.ai
```

## GitHub Actions Deployment

The repository also includes `.github/workflows/deploy.yml`. Add these repository
secrets before enabling the workflow:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

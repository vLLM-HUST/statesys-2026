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
- Build output directory: `.`

Deploy from the command line:

```bash
npx wrangler pages deploy . --project-name statesys-2026
```

Then attach the custom domain in Cloudflare Pages:

```bash
npx wrangler pages domain add statesys-2026 workshop.sage.org.ai
```

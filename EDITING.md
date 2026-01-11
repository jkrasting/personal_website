# Quick Edit & Deploy Guide

**Site**: https://johnkrasting.com
**Status**: LIVE - In iterative refinement phase

## Edit & Deploy Process

### 1. Make your code changes
Edit files in: `/home/krasting/services/johnkrasting-site/site/src/`

### 2. Test the build
```bash
cd /home/krasting/services/johnkrasting-site/site
npm run build
```

### 3. Deploy to production
```bash
cd /home/krasting/services/johnkrasting-site
docker compose build && docker compose up -d
```

### 4. Verify it's live
```bash
curl -I https://johnkrasting.com
```

## Common Edit Locations

- **Homepage**: `site/src/pages/index.astro`
- **Publications**: `site/src/pages/publications.astro`
- **Research areas**: `site/src/content/research/*.mdx`
- **Publication data**: `site/src/content/publications/*.json`
- **Components**: `site/src/components/`
- **Styles**: `site/src/styles/globals.css`
- **Config**: `site/src/data/site-config.ts`

## Key Commands

```bash
# Container status
docker ps --filter "name=johnkrasting"

# View logs
docker logs johnkrasting-site

# Stop container
docker compose down

# Restart container
docker compose restart
```

Ready for fast iteration!

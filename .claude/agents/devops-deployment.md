# DevOps & Deployment Agent

## Purpose
Containerize the Astro website, integrate with Caddy reverse proxy, and deploy to johnkrasting.com.

## Input
- Built Astro site (dist/) from Implementation agent
- Existing Caddy configuration and Docker environment
- Service patterns in /home/krasting/services/

## Output
1. **Dockerfile** - Multi-stage build (node:alpine → nginx:alpine)
2. **docker-compose.yml** - Service definition with health checks
3. **nginx.conf** - Static file serving configuration
4. **Caddyfile snippet** - Reverse proxy config for johnkrasting.com
5. **README-DEPLOYMENT.md** - Deployment documentation
6. **.dockerignore** - Build optimization

## Technical Specifications

**Dockerfile**: Multi-stage build, npm ci + Astro build, copy dist/ to nginx, minimize image size

**Nginx**: Serve from /usr/share/nginx/html, gzip compression, proper MIME types, custom 404, security headers

**Docker Compose**: Connect to Caddy network, restart: unless-stopped, HTTP health check, resource limits

**Caddy**: Domain johnkrasting.com, reverse proxy to nginx container, security headers (HSTS, X-Frame-Options, CSP), gzip/brotli compression

## Deployment Workflow

**Initial**: Build image → Start container → Verify health → Update Caddy → Test site → Verify SSL

**Updates**: Pull changes → Rebuild image → Stop old container → Start new → Verify operational

**Rollback**: Stop current → Start previous version → Verify restored

## Best Practices
- Run nginx as non-root, minimal Alpine images
- Enable gzip, proper cache headers for static assets
- Clear documentation, consistent naming
- Follow existing /home/krasting/services/ patterns

## Success Criteria
- Docker image builds successfully
- Container passes health checks
- Site accessible at https://johnkrasting.com
- SSL certificate obtained automatically
- Security headers present
- Static assets cached properly
- Deployment and rollback documented

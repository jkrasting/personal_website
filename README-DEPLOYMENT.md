# Dr. John P. Krasting Website - Deployment Guide

## Overview

This is a containerized Astro static website for Dr. John P. Krasting's academic portfolio. The site is built with Astro, served by Nginx, and proxied through Caddy for SSL/TLS termination.

## Architecture

```
Internet → Cloudflare → Caddy (reverse proxy + SSL) → Nginx (static files)
```

### Components

- **Astro**: Static site generator (builds HTML/CSS/JS)
- **Nginx**: Web server for static files (Alpine-based, runs in container)
- **Caddy**: Reverse proxy with automatic HTTPS (separate container on caddy-net)
- **Docker**: Container orchestration
- **Cloudflare**: DNS and DDoS protection (optional)

## Directory Structure

```
/home/krasting/services/johnkrasting-site/
├── site/                       # Astro project files
│   ├── src/
│   │   └── pages/
│   │       └── index.astro     # Homepage
│   ├── public/                 # Static assets
│   ├── package.json
│   ├── astro.config.mjs
│   └── tsconfig.json
├── Dockerfile                  # Multi-stage build (node + nginx)
├── docker-compose.yml          # Service definition
├── nginx.conf                  # Nginx configuration
├── .dockerignore              # Build optimization
├── caddy-config-snippet.txt    # Caddy configuration to add
└── README-DEPLOYMENT.md        # This file
```

## Prerequisites

- Docker and Docker Compose installed
- Caddy container running on `caddy-net` network
- DNS for johnkrasting.com pointed to this server (or through Cloudflare)
- SSL certificate for johnkrasting.com (Cloudflare Origin or Let's Encrypt)

## Initial Deployment

### Step 1: Configure SSL Certificate

**Option A: Cloudflare Origin Certificate (Recommended if using Cloudflare)**

1. Generate Cloudflare Origin Certificate for `johnkrasting.com` and `*.johnkrasting.com`
2. Save certificate as `/etc/ssl/cloudflare/johnkrasting.com.pem`
3. Save private key as `/etc/ssl/cloudflare/johnkrasting.com.key`
4. Set permissions:
   ```bash
   sudo chown root:caddy /etc/ssl/cloudflare/johnkrasting.com.*
   sudo chmod 644 /etc/ssl/cloudflare/johnkrasting.com.pem
   sudo chmod 640 /etc/ssl/cloudflare/johnkrasting.com.key
   ```
5. Update caddy-config-snippet.txt to use these certificates

**Option B: Let's Encrypt (If DNS points directly to server)**

- Caddy will automatically obtain a certificate
- Ensure port 80 and 443 are accessible from the internet
- No manual certificate management needed

### Step 2: Update Caddy Configuration

1. Edit `/home/krasting/services/caddy/Caddyfile`
2. Add the configuration from `caddy-config-snippet.txt`
3. If using Cloudflare Origin Certificate, update the `tls` directive
4. Reload Caddy:
   ```bash
   cd /home/krasting/services/caddy
   docker-compose restart caddy
   # Or reload without restart:
   docker exec caddy caddy reload --config /etc/caddy/Caddyfile
   ```

### Step 3: Build and Deploy the Website

```bash
# Navigate to the project directory
cd /home/krasting/services/johnkrasting-site

# Build the Docker image
docker-compose build

# Start the container
docker-compose up -d

# Check that the container is running
docker-compose ps

# Check container logs
docker-compose logs -f
```

### Step 4: Verify Deployment

1. **Check container health**:
   ```bash
   docker ps | grep johnkrasting-site
   # STATUS should show "healthy" after ~30 seconds
   ```

2. **Test local access**:
   ```bash
   curl http://localhost  # Should return HTML (will fail - nginx not exposed)
   docker exec johnkrasting-site wget -qO- http://localhost/health
   # Should return "healthy"
   ```

3. **Test through Caddy**:
   ```bash
   # From the server
   curl -H "Host: johnkrasting.com" http://localhost

   # Check HTTPS
   curl -I https://johnkrasting.com
   # Should return 200 OK with security headers
   ```

4. **Test from external browser**:
   - Navigate to https://johnkrasting.com
   - Should see the deployment test page
   - Check SSL certificate (should be valid)

### Step 5: Verify DNS and Cloudflare

If using Cloudflare:
1. Check DNS settings at Cloudflare dashboard
2. Ensure A/AAAA records point to your server IP
3. Set SSL/TLS mode to "Full (strict)" if using Cloudflare Origin Certificate
4. Enable "Always Use HTTPS"

## Updates and Maintenance

### Updating the Website Content

```bash
cd /home/krasting/services/johnkrasting-site

# Pull latest changes (if using git)
# git pull

# Rebuild the Docker image
docker-compose build

# Stop and remove old container
docker-compose down

# Start new container
docker-compose up -d

# Verify it's running
docker-compose ps
docker-compose logs -f
```

### Zero-Downtime Updates

```bash
# Build new image with a tag
docker-compose build

# Start new container with a different name
docker-compose -p johnkrasting-site-new up -d

# Test the new container
# Once verified, switch Caddy to point to the new container

# Remove old container
docker-compose -p johnkrasting-site down
```

### Quick Restart

```bash
cd /home/krasting/services/johnkrasting-site
docker-compose restart
```

### Viewing Logs

```bash
# Container logs
docker-compose logs -f

# Nginx access/error logs (inside container)
docker exec johnkrasting-site cat /var/log/nginx/access.log
docker exec johnkrasting-site cat /var/log/nginx/error.log

# Caddy logs
tail -f /home/krasting/services/caddy/caddy-logs/johnkrasting.com.log
```

## Rollback Procedure

If something goes wrong with an update:

```bash
# List available images
docker images | grep johnkrasting-site

# Find the previous image ID
# Tag it as latest
docker tag <old-image-id> johnkrasting-site:latest

# Stop current container
docker-compose down

# Start with previous image
docker-compose up -d
```

## Troubleshooting

### Container won't start

```bash
# Check build logs
docker-compose build --no-cache

# Check for port conflicts
docker ps | grep :80

# Check Docker networks
docker network ls
docker network inspect caddy-net
```

### Site not accessible via domain

```bash
# Check DNS resolution
nslookup johnkrasting.com

# Check Caddy is running
docker ps | grep caddy

# Check Caddy configuration
docker exec caddy caddy validate --config /etc/caddy/Caddyfile

# Check Caddy logs
docker logs caddy
```

### SSL certificate issues

```bash
# Check Caddy logs for certificate errors
docker logs caddy | grep -i cert

# If using Cloudflare, verify SSL mode is "Full (strict)"
# If using Let's Encrypt, ensure ports 80/443 are accessible

# Force certificate renewal (Let's Encrypt)
docker exec caddy caddy reload --config /etc/caddy/Caddyfile
```

### Container is unhealthy

```bash
# Check health check
docker inspect johnkrasting-site | grep -A 10 Health

# Test health endpoint
docker exec johnkrasting-site wget -qO- http://localhost/health

# Check nginx is running
docker exec johnkrasting-site ps aux | grep nginx
```

### Performance issues

```bash
# Check resource usage
docker stats johnkrasting-site

# Increase resource limits in docker-compose.yml
# Then restart:
docker-compose up -d
```

## Security Considerations

1. **Container runs as non-root user** (nginx user)
2. **Security headers** enabled in both Nginx and Caddy
3. **HSTS** enabled with 1-year max-age
4. **Gzip compression** enabled for faster transfers
5. **Resource limits** prevent container from consuming all server resources
6. **Health checks** ensure container is responding
7. **No sensitive data** in container (static site only)

## Performance Optimizations

- **Multi-stage build**: Minimizes final image size (~25MB)
- **Alpine Linux**: Minimal base image
- **Nginx sendfile**: Efficient static file serving
- **Gzip compression**: Reduces bandwidth
- **Cache headers**: Browser caching for static assets
- **CDN-ready**: Works with Cloudflare CDN

## Monitoring

The container is configured to work with Watchtower for automatic updates:

```bash
# Check Watchtower status
docker logs watchtower

# The label `com.centurylinklabs.watchtower.enable=true`
# allows Watchtower to auto-update this container
```

## Network Configuration

The container connects to the `caddy-net` network (external):

```bash
# View network details
docker network inspect caddy-net

# List containers on the network
docker network inspect caddy-net | grep Name
```

## Health Checks

The container has two health check mechanisms:

1. **Docker health check**: `wget http://localhost/health`
   - Runs every 30 seconds
   - 3 retries before marking unhealthy
   - Check status: `docker ps` (STATUS column)

2. **Nginx health endpoint**: `/health`
   - Returns plain text "healthy"
   - No logging to reduce noise

## Contact & Support

For issues or questions:
- Check Docker logs: `docker-compose logs -f`
- Verify Caddy config: `docker exec caddy caddy validate`
- Review this README
- Check Astro documentation: https://docs.astro.build

## Future Enhancements

When deploying the full academic website:

1. Replace `site/src/pages/index.astro` with the complete site
2. Add additional pages (research, publications, teaching, etc.)
3. Install additional dependencies if needed
4. Update build process if using React components
5. Consider adding:
   - Analytics (Vercel Analytics or Umami)
   - SEO optimizations
   - OpenGraph metadata
   - Sitemap generation
   - RSS feed

## Production Checklist

- [ ] DNS correctly points to server
- [ ] SSL certificate obtained and valid
- [ ] Caddy configuration added and tested
- [ ] Container builds successfully
- [ ] Container passes health checks
- [ ] Site accessible via HTTPS
- [ ] Security headers present (check with securityheaders.com)
- [ ] Performance acceptable (check with PageSpeed Insights)
- [ ] 404 page works correctly
- [ ] Mobile responsive (test on phone)
- [ ] Compression enabled (check response headers)
- [ ] Logs are being written
- [ ] Watchtower can update container
- [ ] Rollback procedure tested

## Quick Reference Commands

```bash
# Deploy
cd /home/krasting/services/johnkrasting-site
docker-compose up -d

# Update
docker-compose build && docker-compose up -d

# Restart
docker-compose restart

# Stop
docker-compose down

# Logs
docker-compose logs -f

# Shell access
docker exec -it johnkrasting-site sh

# Health check
docker exec johnkrasting-site wget -qO- http://localhost/health

# Rebuild from scratch
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

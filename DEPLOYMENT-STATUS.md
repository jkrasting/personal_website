# johnkrasting.com Deployment Status

## Current Status: CONFIGURED - Awaiting Cloudflare SSL/TLS Mode Change

### Completed Steps

1. **SSL Certificates** - ✅ DONE
   - Cloudflare Origin Certificate installed: `/etc/ssl/cloudflare/johnkrasting.com.pem`
   - Private key installed: `/etc/ssl/cloudflare/johnkrasting.com.key`
   - Certificates mounted in Caddy container at `/etc/ssl/certs/`
   - Valid until: Dec 28, 2040

2. **Docker Container** - ✅ DONE
   - Container `johnkrasting-site` is running
   - Nginx serving Astro static site on port 80
   - Connected to `caddy-net` network
   - Successfully tested: `http://johnkrasting-site:80` returns content

3. **Caddy Configuration** - ✅ DONE
   - Added to `/home/krasting/services/caddy/Caddyfile`:
     - HTTPS block for `johnkrasting.com` with Cloudflare Origin Certificate
     - HTTP to HTTPS redirect
     - Security headers (HSTS, CSP, X-Frame-Options, etc.)
     - Gzip/Zstd compression
     - Reverse proxy to `johnkrasting-site:80`
     - Access logging to `/var/log/caddy/johnkrasting.com.log`
   - Configuration validated: VALID
   - Caddy reloaded successfully

4. **DNS** - ✅ DONE
   - `johnkrasting.com` resolves to Cloudflare IPs:
     - 172.67.176.70
     - 104.21.96.92
   - Domain is proxied through Cloudflare (orange cloud)

### Current Issue: HTTP 525 Error

When accessing `https://johnkrasting.com`, Cloudflare returns:
```
HTTP/2 525
```

**Diagnosis**: Error 525 means "SSL Handshake Failed" - Cloudflare cannot establish an SSL connection to the origin server.

**Root Cause**: Cloudflare Origin Certificates require the SSL/TLS encryption mode to be set to "Full (strict)" in the Cloudflare dashboard.

### Required Action

**Go to Cloudflare Dashboard and change SSL/TLS mode:**

1. Log in to Cloudflare dashboard
2. Select the `johnkrasting.com` domain
3. Navigate to **SSL/TLS** → **Overview**
4. Change encryption mode from current setting to: **Full (strict)**
   - This tells Cloudflare to:
     - Encrypt traffic between visitors and Cloudflare
     - Encrypt traffic between Cloudflare and origin server
     - Validate the origin certificate (which is why Origin Certificates require this mode)

### Testing After SSL/TLS Mode Change

Once the SSL/TLS mode is changed to "Full (strict)", run these tests:

```bash
# Test HTTPS access
curl -I https://johnkrasting.com

# Should return HTTP/2 200 with security headers:
# - Strict-Transport-Security
# - X-Content-Type-Options
# - X-Frame-Options
# - Content-Security-Policy

# Test HTTP redirect
curl -I http://johnkrasting.com

# Should return HTTP/1.1 301 or 308 redirect to https://

# Check Caddy logs
docker exec caddy cat /var/log/caddy/johnkrasting.com.log
```

### Configuration Files

- **Caddyfile**: `/home/krasting/services/caddy/Caddyfile` (lines 88-121)
- **SSL Certificate**: `/etc/ssl/cloudflare/johnkrasting.com.pem`
- **Private Key**: `/etc/ssl/cloudflare/johnkrasting.com.key`
- **Docker Compose**: `/home/krasting/services/johnkrasting-site/docker-compose.yml`

### Technical Details

**Server Configuration:**
- Server IP: 72.61.73.187
- Caddy container: Exposes ports 80/tcp, 443/tcp
- johnkrasting-site container: Internal port 80, reverse proxied by Caddy
- Docker network: `caddy-net` (both containers connected)

**SSL/TLS Configuration:**
- Certificate Type: Cloudflare Origin Certificate
- Certificate Subject: CloudFlare Origin Certificate
- Valid: Jan 1 2026 - Dec 28 2040
- Key Type: PKCS#8 Private Key (standard format)

**Security Headers Applied:**
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; ...`

### Notes

- The container healthcheck shows "unhealthy" due to IPv6 localhost connection issue, but this does not affect functionality
- All services are properly configured and awaiting only the Cloudflare SSL/TLS mode change
- The site content is currently a test deployment page confirming proper setup

---

**Date**: January 1, 2026
**Status**: Ready for production pending Cloudflare configuration

# Quick Start Guide - johnkrasting.com

## Current Status

The Docker container is **running and healthy**. The site is accessible from the Caddy container but not yet exposed to the internet. You need to add the Caddy configuration to make it publicly accessible.

## One-Command Status Check

```bash
cd /home/krasting/services/johnkrasting-site && \
docker ps | grep johnkrasting-site && \
docker exec johnkrasting-site wget -qO- http://127.0.0.1/health
```

Expected output:
- Container running with (healthy) status
- "healthy" printed on last line

## To Make Site Public (Choose One Option)

### Option A: With Cloudflare Origin Certificate (Recommended)

1. **Get Certificate from Cloudflare**:
   - Cloudflare Dashboard → SSL/TLS → Origin Server
   - Create certificate for `johnkrasting.com` and `*.johnkrasting.com`
   - Save on server as `/etc/ssl/cloudflare/johnkrasting.com.pem` and `.key`

2. **Add to Caddy**:
   ```bash
   sudo vi /home/krasting/services/caddy/Caddyfile
   ```

   Add at the end:
   ```
   johnkrasting.com {
       tls /etc/ssl/certs/johnkrasting.com.pem /etc/ssl/certs/johnkrasting.com.key
       header {
           Strict-Transport-Security "max-age=31536000"
           X-Content-Type-Options "nosniff"
           X-Frame-Options "SAMEORIGIN"
       }
       encode gzip
       reverse_proxy johnkrasting-site:80
   }

   http://johnkrasting.com {
       redir https://{host}{uri} permanent
   }
   ```

3. **Reload Caddy**:
   ```bash
   docker exec caddy caddy reload --config /etc/caddy/Caddyfile
   ```

4. **Test**:
   ```bash
   curl -I https://johnkrasting.com
   ```

### Option B: With Let's Encrypt (If no Cloudflare proxy)

1. **Add to Caddy** (simpler - no tls line):
   ```bash
   sudo vi /home/krasting/services/caddy/Caddyfile
   ```

   Add:
   ```
   johnkrasting.com {
       encode gzip
       reverse_proxy johnkrasting-site:80
   }
   ```

2. **Reload Caddy**:
   ```bash
   docker exec caddy caddy reload --config /etc/caddy/Caddyfile
   ```

Caddy will automatically get a Let's Encrypt certificate.

## Common Operations

### View Logs
```bash
cd /home/krasting/services/johnkrasting-site
docker compose logs -f
```

### Restart Site
```bash
cd /home/krasting/services/johnkrasting-site
docker compose restart
```

### Update Content and Redeploy
```bash
cd /home/krasting/services/johnkrasting-site
# Edit files in site/src/
docker compose build
docker compose up -d
```

### Check Health
```bash
docker ps | grep johnkrasting-site
# Look for (healthy) in output
```

### Stop Site
```bash
cd /home/krasting/services/johnkrasting-site
docker compose down
```

### Start Site
```bash
cd /home/krasting/services/johnkrasting-site
docker compose up -d
```

## Testing Checklist

After adding Caddy config:

- [ ] `curl -I https://johnkrasting.com` returns 200 OK
- [ ] Browser shows site with no SSL warnings
- [ ] `curl -I http://johnkrasting.com` redirects to HTTPS
- [ ] Security headers present in response
- [ ] Container status shows (healthy)

## Troubleshooting

**Site not loading?**
```bash
# Check container
docker ps | grep johnkrasting-site

# Check from Caddy
docker exec caddy wget -qO- http://johnkrasting-site/

# Check Caddy config
docker exec caddy caddy validate --config /etc/caddy/Caddyfile

# View Caddy errors
docker logs caddy | tail -50
```

**SSL errors?**
```bash
# Check cert is mounted
docker exec caddy ls -la /etc/ssl/certs/ | grep johnkrasting

# Check Cloudflare SSL mode (should be "Full (strict)")
```

## Files Location

Everything is in: `/home/krasting/services/johnkrasting-site/`

- `site/` - Astro source code
- `Dockerfile` - Container build instructions
- `docker-compose.yml` - Container runtime config
- `nginx.conf` - Web server config
- `caddy-config-snippet.txt` - Copy/paste for Caddy
- `README-DEPLOYMENT.md` - Full documentation
- `DEPLOYMENT-SUMMARY.md` - Detailed status
- `QUICK-START.md` - This file

## Next Steps

1. **Get SSL certificate** (Cloudflare Origin or Let's Encrypt)
2. **Add Caddy configuration** (see above)
3. **Test site loads** at https://johnkrasting.com
4. **Replace with full site** when ready (edit files in `site/src/`)

## Support

Check logs first:
```bash
docker compose logs -f
docker logs caddy
```

Container is healthy and waiting for Caddy configuration!

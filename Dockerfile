# Multi-stage Dockerfile for Astro static site
# Stage 1: Build the Astro site
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY site/package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source files
COPY site/ ./

# Build the site
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy password file for basic authentication
COPY .htpasswd /etc/nginx/.htpasswd

# Copy built site from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Set proper permissions for nginx user
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html && \
    chmod 644 /etc/nginx/.htpasswd && \
    chown nginx:nginx /etc/nginx/.htpasswd

# Expose port 80
EXPOSE 80

# Start nginx (runs as root, then drops to nginx user based on nginx.conf)
CMD ["nginx", "-g", "daemon off;"]

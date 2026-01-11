# Deployment Guide - Don's Transport Shuttle

## Overview

This guide covers deploying the website to:
1. **Raspberry Pi** (current) - Docker-based deployment
2. **Shared Hosting** (future) - cPanel static file upload

## Prerequisites

### For Docker Deployment
- Docker & Docker Compose installed
- Domain pointing to server (transport.voogt.co.za)
- SSL certificate (via Traefik Let's Encrypt or similar)

### For cPanel Deployment
- cPanel access
- FTP/SFTP credentials
- Domain configured in cPanel

## Building for Production

```bash
# Clone the repository
git clone <repo-url>
cd dons-transport-shuttle

# Install dependencies
npm install

# Build static site
npm run build

# Output will be in ./dist/
```

The `dist/` folder contains:
- Static HTML files
- Optimized CSS/JS bundles
- Images and assets
- sitemap.xml
- robots.txt

---

## Option 1: Docker Deployment (Raspberry Pi)

### Directory Structure on Server

```
/opt/dons-transport/
├── docker-compose.yml
├── nginx.conf
└── dist/               # Built static files
```

### Docker Compose Configuration

```yaml
# docker-compose.prod.yml
version: '3.8'

services:
  web:
    image: nginx:alpine
    volumes:
      - ./dist:/usr/share/nginx/html:ro
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    restart: unless-stopped
    labels:
      # Traefik labels for reverse proxy (if using Traefik)
      - "traefik.enable=true"
      - "traefik.http.routers.transport.rule=Host(`transport.voogt.co.za`)"
      - "traefik.http.routers.transport.entrypoints=websecure"
      - "traefik.http.routers.transport.tls.certresolver=letsencrypt"
      - "traefik.http.services.transport.loadbalancer.server.port=80"
```

### Deployment Steps

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Copy files to server:**
   ```bash
   rsync -avz --delete dist/ user@server:/opt/dons-transport/dist/
   scp docker-compose.prod.yml user@server:/opt/dons-transport/docker-compose.yml
   scp nginx.conf user@server:/opt/dons-transport/nginx.conf
   ```

3. **Start container on server:**
   ```bash
   ssh user@server
   cd /opt/dons-transport
   docker-compose up -d
   ```

4. **Verify deployment:**
   ```bash
   curl -I https://transport.voogt.co.za
   ```

### Without Traefik (Direct Nginx)

If not using Traefik, modify docker-compose:

```yaml
services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./dist:/usr/share/nginx/html:ro
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./certs:/etc/nginx/certs:ro  # SSL certificates
```

### Updating the Site

```bash
# Local: Build new version
npm run build

# Sync to server
rsync -avz --delete dist/ user@server:/opt/dons-transport/dist/

# No container restart needed for static file updates
# Unless nginx config changed:
ssh user@server "cd /opt/dons-transport && docker-compose restart"
```

---

## Option 2: cPanel Deployment (Shared Hosting)

### Preparation

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Verify output:**
   - Check `dist/` contains all pages
   - Verify `sitemap.xml` and `robots.txt` present
   - Test locally: `npm run preview`

### Upload via File Manager

1. Log into cPanel
2. Open **File Manager**
3. Navigate to `public_html/` (or subdomain folder)
4. **Delete** existing files (backup first if needed)
5. **Upload** all contents of `dist/` folder
6. Ensure `index.html` is in root

### Upload via FTP

```bash
# Using lftp
lftp -u username,password ftp.hosting.com <<EOF
mirror -R --delete dist/ /public_html/
bye
EOF

# Or using rsync over SSH (if available)
rsync -avz --delete dist/ user@hosting:/public_html/
```

### .htaccess Configuration

Create `.htaccess` in `public_html/` for Apache servers:

```apache
# Enable rewrite engine
RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove www (optional - choose one)
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

# Clean URLs - remove .html extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ $1.html [L]

# Handle 404
ErrorDocument 404 /404.html

# Caching
<IfModule mod_expires.c>
    ExpiresActive On
    
    # HTML - no cache
    ExpiresByType text/html "access plus 0 seconds"
    
    # CSS/JS - 1 year
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    
    # Images - 1 year
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    
    # Fonts - 1 year
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType font/woff "access plus 1 year"
</IfModule>

# Gzip compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/json
    AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### Domain Configuration

In cPanel, ensure:
1. **SSL/TLS** is enabled (Let's Encrypt or AutoSSL)
2. **Force HTTPS** redirect is enabled
3. Domain DNS points to hosting server

---

## Environment Variables

Create `.env` file before building:

```env
# Contact information
PUBLIC_WHATSAPP_NUMBER=27XXXXXXXXX
PUBLIC_EMAIL=bookings@donstransport.co.za
PUBLIC_PHONE=+27 XX XXX XXXX
PUBLIC_ADDRESS=123 Example Street, Johannesburg

# Site configuration
PUBLIC_SITE_URL=https://transport.voogt.co.za
```

---

## Post-Deployment Checklist

### Functional Checks
- [ ] Homepage loads correctly
- [ ] All service pages accessible
- [ ] WhatsApp links work (correct number)
- [ ] Email links work (correct address)
- [ ] Phone links clickable on mobile
- [ ] Images loading properly
- [ ] No broken internal links
- [ ] 404 page displays correctly

### SEO Checks
- [ ] robots.txt accessible (/robots.txt)
- [ ] sitemap.xml accessible (/sitemap.xml)
- [ ] Meta titles correct on all pages
- [ ] Meta descriptions present
- [ ] Canonical URLs correct
- [ ] Structured data validates (use Google's testing tool)

### Performance Checks
- [ ] Run Lighthouse audit (target 90+ on all metrics)
- [ ] Test on mobile devices
- [ ] Check page load times
- [ ] Verify caching headers

### Security Checks
- [ ] HTTPS working
- [ ] Security headers present
- [ ] No mixed content warnings

---

## Troubleshooting

### "Page not found" for clean URLs
- **Docker:** Check nginx.conf try_files directive
- **cPanel:** Ensure .htaccess is uploaded and mod_rewrite enabled

### Images not loading
- Check file paths (case-sensitive on Linux)
- Verify images were uploaded
- Check file permissions (644 for files)

### Slow page loads
- Verify caching headers are set
- Check if gzip is enabled
- Ensure images are optimized (WebP)

### SSL certificate errors
- **Docker/Traefik:** Check certresolver configuration
- **cPanel:** Enable AutoSSL or install Let's Encrypt

---

## Rollback Procedure

### Docker
```bash
# Keep previous version tagged
docker tag dons-transport:latest dons-transport:backup

# Rollback if needed
docker tag dons-transport:backup dons-transport:latest
docker-compose down && docker-compose up -d
```

### cPanel
- Keep backup of previous `public_html` contents
- Simply re-upload backup files to rollback

---

## Monitoring

### Recommended Tools
- **Uptime:** UptimeRobot (free tier available)
- **Analytics:** Google Analytics 4
- **Search:** Google Search Console
- **Performance:** Google PageSpeed Insights

### Health Check Endpoint

The nginx configuration includes a health check. Test with:
```bash
curl -s -o /dev/null -w "%{http_code}" https://transport.voogt.co.za
# Should return 200
```

# 🚀 Complete Deployment Guide for Your Portfolio

Deploy your portfolio to a live server in minutes. Choose your preferred hosting platform.

---

## 📋 Prerequisites

Before deploying, ensure:
- ✅ Project runs locally: `npm run dev`
- ✅ Build succeeds: `npm run build`
- ✅ GitHub account (for most platforms)
- ✅ Git installed on your machine

---

## 🎯 Deployment Options (Ranked by Ease)

### **Option 1: Vercel (RECOMMENDED - Easiest) ⭐**

**Why Vercel?**
- ✅ Free tier with unlimited projects
- ✅ Automatic deployments on Git push
- ✅ Custom domains included
- ✅ Zero configuration needed
- ✅ Fastest setup (5 minutes)

**Steps:**

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/amuchin-portfolio.git
git push -u origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"
   - Vercel automatically detects Vite
   - Click "Deploy"

3. **Your site is live!**
   - Vercel provides a URL: `https://amuchin-portfolio.vercel.app`
   - Every Git push automatically redeploys

4. **Add Custom Domain (Optional)**
   - In Vercel dashboard → Settings → Domains
   - Add your custom domain
   - Follow DNS instructions

---

### **Option 2: Netlify (Easy)**

**Why Netlify?**
- ✅ Free tier with generous limits
- ✅ Simple Git integration
- ✅ Drag-and-drop deployment
- ✅ Custom domains available

**Steps:**

1. **Build locally**
```bash
npm run build
```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect GitHub
   - Select repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

3. **Your site is live!**
   - Netlify provides a URL
   - Custom domain available in settings

---

### **Option 3: GitHub Pages (Free)**

**Why GitHub Pages?**
- ✅ Completely free
- ✅ No external account needed
- ✅ Automatic deployment from Git

**Steps:**

1. **Update vite.config.ts**
```typescript
export default defineConfig({
  base: '/amuchin-portfolio/', // Replace with your repo name
  // ... rest of config
})
```

2. **Add deploy script to package.json**
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

4. **Deploy**
```bash
npm run deploy
```

5. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "GitHub Pages"
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Click Save

6. **Your site is live!**
   - URL: `https://YOUR_USERNAME.github.io/amuchin-portfolio`

---

### **Option 4: Traditional VPS (AWS, DigitalOcean, Linode)**

**Why VPS?**
- ✅ Full control
- ✅ Can run backend services
- ✅ Custom configurations

**Steps:**

1. **Build your project**
```bash
npm run build
```

2. **Connect via SSH**
```bash
ssh root@your_server_ip
```

3. **Install Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. **Upload project**
```bash
scp -r dist/ root@your_server_ip:/var/www/portfolio/
```

5. **Setup Nginx (reverse proxy)**
```bash
sudo apt-get install nginx
```

6. **Configure Nginx**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    root /var/www/portfolio;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

7. **Enable SSL (free with Let's Encrypt)**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

8. **Restart Nginx**
```bash
sudo systemctl restart nginx
```

---

### **Option 5: Cloudflare Pages**

**Why Cloudflare?**
- ✅ Free tier
- ✅ Fast CDN
- ✅ DDoS protection included

**Steps:**

1. **Push to GitHub**
```bash
git push origin main
```

2. **Deploy on Cloudflare**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Click "Create a project"
   - Connect GitHub
   - Select repository
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Click "Save and Deploy"

3. **Your site is live!**
   - Cloudflare provides a URL
   - Add custom domain in settings

---

## 🌐 Custom Domain Setup

### For Vercel/Netlify/Cloudflare:

1. **Buy a domain** (Namecheap, GoDaddy, Google Domains)

2. **Add to hosting platform**
   - Dashboard → Settings → Domains
   - Enter your domain name
   - Follow DNS instructions

3. **Update DNS records**
   - Go to domain registrar
   - Add CNAME or A records as instructed
   - Wait 24-48 hours for propagation

4. **Enable SSL**
   - Most platforms auto-enable HTTPS
   - Check "Force HTTPS" in settings

---

## 🔄 Continuous Deployment (Auto-Deploy on Git Push)

All recommended platforms support this:

1. **Make changes locally**
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

2. **Platform automatically:**
   - Detects the push
   - Builds your project
   - Deploys to live server
   - Your changes go live in 1-2 minutes

---

## 📊 Platform Comparison

| Platform | Cost | Setup Time | Custom Domain | SSL | Auto-Deploy |
|----------|------|-----------|----------------|-----|------------|
| **Vercel** | Free | 5 min | ✅ | ✅ | ✅ |
| **Netlify** | Free | 5 min | ✅ | ✅ | ✅ |
| **GitHub Pages** | Free | 10 min | ✅ | ✅ | ✅ |
| **Cloudflare** | Free | 5 min | ✅ | ✅ | ✅ |
| **DigitalOcean** | $5/mo | 20 min | ✅ | ✅ | Manual |

---

## ✅ Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All pages accessible
- [ ] Images display correctly
- [ ] Links work properly
- [ ] Theme toggle works
- [ ] Mobile responsive
- [ ] Fast loading time
- [ ] SSL certificate active
- [ ] Custom domain working (if applicable)

---

## 🆘 Troubleshooting

### Issue: Build fails
```bash
# Clear cache and rebuild
npm cache clean --force
npm install
npm run build
```

### Issue: 404 on refresh
**Solution:** Add `_redirects` file to `public/`:
```
/* /index.html 200
```

### Issue: Images not loading
- Check image paths in components
- Ensure images are in `client/public/`
- Use absolute paths: `/image.jpg`

### Issue: Slow loading
- Use Vercel/Netlify (includes CDN)
- Optimize images
- Enable caching

---

## 🎯 Recommended Setup (Fastest)

1. **Use Vercel** (easiest, fastest)
2. **Push code to GitHub**
3. **Connect GitHub to Vercel**
4. **Auto-deploy on every push**
5. **Add custom domain** (optional)

**Total time: 5 minutes** ⏱️

---

## 📚 Additional Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages**: https://pages.github.com
- **Vite Deployment**: https://vitejs.dev/guide/static-deploy.html

---

## 🎉 You're Ready to Deploy!

Choose your platform, follow the steps, and your portfolio will be live on the internet.

**Recommended: Start with Vercel for the fastest setup.** 🚀

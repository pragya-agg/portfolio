# GitHub Pages Deployment Guide

## 🚀 How to Deploy Your Next.js Portfolio to GitHub Pages

Your portfolio is now configured for GitHub Pages deployment! Here's what I've set up and how to deploy:

### ✅ What's Been Configured

1. **Next.js Static Export**: Modified `next.config.ts` to export static files
2. **Build Scripts**: Added deployment scripts to `package.json`
3. **GitHub Actions**: Created automated deployment workflow
4. **Output Directory**: Set to `docs/` folder for GitHub Pages

### 📍 Where the "index.html" Will Be

After building, your `index.html` will be located at:
```
frontend/docs/index.html
```

### 🛠️ Manual Deployment Steps

1. **Build the static site:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Your static files will be in:**
   ```
   frontend/docs/
   ├── index.html          ← Your main page
   ├── about/index.html    ← About page
   ├── projects/index.html ← Projects page
   ├── resume/index.html   ← Resume page
   └── _next/              ← Assets and JS files
   ```

3. **Push to GitHub and enable Pages:**
   - Go to your GitHub repository
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: Select "main" or "master"
   - Folder: Select "/docs"
   - Save

### 🤖 Automatic Deployment (Recommended)

The GitHub Actions workflow will automatically:
1. Build your site when you push to main/master
2. Deploy to GitHub Pages
3. Your site will be available at: `https://yourusername.github.io/repository-name`

### 🔧 To Enable GitHub Actions:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages in repository settings:**
   - Go to Settings → Pages
   - Source: "GitHub Actions"
   - The workflow will run automatically

3. **Your site will be live at:**
   ```
   https://pragya-agg.github.io/portfolio
   ```

### 📝 Important Notes

- **Images**: All images are now unoptimized for static export
- **Routing**: All pages will have trailing slashes
- **Build Time**: First build may take a few minutes
- **Updates**: Any push to main branch will trigger redeployment

### 🚨 Alternative: Vercel (Easier Option)

If GitHub Pages seems complex, you can also deploy to Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically detect Next.js and deploy
4. Your site will be live in minutes!

## Current Status
✅ Next.js configured for static export
✅ GitHub Actions workflow ready
✅ Build scripts added
✅ Ready for deployment!

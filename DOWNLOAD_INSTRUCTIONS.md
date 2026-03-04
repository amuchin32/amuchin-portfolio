# 📥 How to Download & Run Your Portfolio Locally

## ✅ What You're Getting

Your complete **production-ready React portfolio website** with:
- All source code files
- All components and pages
- All styling and animations
- Professional structure
- Ready to run in Visual Studio Code

---

## 📥 Download Files

### File 1: Project Source Code (138 KB)
**File:** `amuchin-portfolio-clean.tar.gz`
**Contains:** All project files (without node_modules for faster download)

### File 2: Setup Guide (9 KB)
**File:** `SETUP_GUIDE.md`
**Contains:** Complete installation and customization instructions

---

## 🎯 Step-by-Step Instructions

### Step 1: Download Both Files
1. Download `amuchin-portfolio-clean.tar.gz` 
2. Download `SETUP_GUIDE.md`
3. Save both files to your Downloads folder

### Step 2: Extract the Project
**On Windows:**
- Right-click `amuchin-portfolio-clean.tar.gz`
- Select "Extract All..." (or use 7-Zip/WinRAR)
- Extract to a folder like `C:\Users\YourName\Documents\amuchin-portfolio`

**On Mac/Linux:**
```bash
tar -xzf amuchin-portfolio-clean.tar.gz
cd amuchin_portfolio
```

### Step 3: Open in Visual Studio Code
1. Open Visual Studio Code
2. Go to **File → Open Folder**
3. Navigate to the extracted `amuchin_portfolio` folder
4. Click **Select Folder**

### Step 4: Install Dependencies
Open the terminal in VS Code (Ctrl + ` or View → Terminal) and run:
```bash
npm install
```

This will download and install all required packages (~500 MB).
**Wait for it to complete** (2-5 minutes depending on internet speed).

### Step 5: Start Development Server
In the same terminal, run:
```bash
npm run dev
```

You should see:
```
➜  Local:   http://localhost:5173/
➜  Network: http://169.254.0.21:5173/
```

### Step 6: View Your Portfolio
Open your browser and go to: **http://localhost:5173/**

**You should see your portfolio website!** 🎉

---

## 🛠 Making Changes

### Edit Components
1. Open any file in `client/src/components/`
2. Make changes
3. Save (Ctrl+S)
4. Browser automatically refreshes (hot reload)

### Update Your Information
- **Name/Title:** Edit `client/src/components/HeroSection.tsx`
- **Skills:** Edit `client/src/components/SkillsSection.tsx`
- **Projects:** Edit `client/src/components/ProjectsSection.tsx`
- **Colors:** Edit `client/src/index.css`

---

## 🚀 Build for Production

When ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

---

## 📋 File Structure Quick Reference

```
amuchin_portfolio/
├── client/src/
│   ├── pages/           → Page components (Home, Education)
│   ├── components/      → Reusable components
│   ├── App.tsx          → Main app & routing
│   ├── index.css        → Global styles
│   └── main.tsx         → Entry point
├── package.json         → Dependencies
└── vite.config.ts       → Build configuration
```

---

## ✨ Key Features

✅ **Responsive Design** - Works on all devices
✅ **Dark/Light Theme** - Toggle in navigation
✅ **Smooth Animations** - Professional transitions
✅ **Fast Performance** - Optimized with Vite
✅ **Easy to Customize** - Well-organized code
✅ **Production Ready** - Deploy immediately

---

## 🆘 Common Issues & Solutions

### Issue: `npm install` fails
```bash
npm cache clean --force
npm install
```

### Issue: Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Issue: Styles not loading
```bash
# Restart dev server
npm run dev
```

### Issue: Changes not showing
- Save the file (Ctrl+S)
- Check browser console for errors (F12)
- Hard refresh browser (Ctrl+Shift+R)

---

## 📞 Need Help?

1. Check `SETUP_GUIDE.md` for detailed instructions
2. Review the code comments in component files
3. Visit [Vite Docs](https://vitejs.dev/) for build questions
4. Visit [React Docs](https://react.dev/) for React questions

---

## 🎓 What You Can Do Now

✅ Run the website locally
✅ Edit and customize content
✅ Test all pages and features
✅ Make design changes
✅ Build for production
✅ Deploy to hosting (Vercel, Netlify, etc.)

---

## 🚀 Next Steps

1. **Extract & Install** - Follow steps 1-4 above
2. **Run Locally** - Follow step 5
3. **Customize** - Update your information
4. **Test** - Check all pages work
5. **Build** - Run `npm run build`
6. **Deploy** - Push to GitHub and deploy to Vercel

---

**Your portfolio is ready to go! Happy coding! 🎉**

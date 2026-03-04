# Amuchin Feoley Togba - Professional Portfolio Website
## Complete Setup & Installation Guide

---

## 📋 Project Overview

This is a **production-ready React portfolio website** built with:
- **React 19** - Modern UI framework
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe development
- **Framer Motion** - Smooth animations
- **shadcn/ui** - Pre-built UI components

**Features:**
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light theme toggle
- ✅ Smooth animations and transitions
- ✅ Professional portfolio sections (Home, Education, Skills, Projects, Achievements)
- ✅ Contact information and social links
- ✅ SEO-optimized structure
- ✅ Fast performance with Vite

---

## 🚀 Quick Start (5 Minutes)

### Prerequisites
Make sure you have installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **pnpm** (comes with Node.js)
- **Visual Studio Code** (optional but recommended) - [Download](https://code.visualstudio.com/)

### Step 1: Extract the Project
```bash
# Extract the downloaded archive
tar -xzf amuchin-portfolio-clean.tar.gz
cd amuchin_portfolio
```

### Step 2: Install Dependencies
```bash
# Using npm (recommended for beginners)
npm install

# OR using pnpm (faster, if you prefer)
pnpm install
```

### Step 3: Run Development Server
```bash
# Start the development server
npm run dev

# OR with pnpm
pnpm dev
```

### Step 4: Open in Browser
The server will output something like:
```
➜  Local:   http://localhost:5173/
➜  Network: http://169.254.0.21:5173/
```

Open `http://localhost:5173/` in your browser. **You should see the portfolio website!**

---

## 📁 Project Structure

```
amuchin_portfolio/
│
├── client/                          # React Frontend
│   ├── public/                      # Static assets
│   │   └── index.html              # Main HTML file
│   │
│   ├── src/                         # Source code
│   │   ├── pages/                  # Page components
│   │   │   ├── Home.tsx            # Home page
│   │   │   ├── Education.tsx       # Education page
│   │   │   └── NotFound.tsx        # 404 page
│   │   │
│   │   ├── components/             # Reusable components
│   │   │   ├── NavigationBar.tsx   # Top navigation
│   │   │   ├── HeroSection.tsx     # Hero section with profile
│   │   │   ├── SkillsSection.tsx   # Skills showcase
│   │   │   ├── ProjectsSection.tsx # Projects display
│   │   │   ├── AchievementsSection.tsx # Achievements
│   │   │   ├── EducationHeroSection.tsx
│   │   │   ├── AcademicTimelineSection.tsx
│   │   │   ├── CertificationsGallerySection.tsx
│   │   │   ├── Footer.tsx          # Footer
│   │   │   ├── ErrorBoundary.tsx   # Error handling
│   │   │   └── ui/                 # shadcn/ui components
│   │   │
│   │   ├── contexts/               # React contexts
│   │   │   └── ThemeContext.tsx    # Theme management
│   │   │
│   │   ├── hooks/                  # Custom React hooks
│   │   │
│   │   ├── lib/                    # Utility functions
│   │   │
│   │   ├── App.tsx                 # Main app component & routing
│   │   ├── main.tsx                # React entry point
│   │   └── index.css               # Global styles & Tailwind
│   │
│   ├── package.json                # Frontend dependencies
│   ├── tsconfig.json               # TypeScript config
│   ├── vite.config.ts              # Vite configuration
│   └── tailwind.config.ts          # Tailwind CSS config
│
├── server/                          # Node.js/Express Backend
│   ├── index.ts                    # Server entry point
│   └── (minimal - static file serving only)
│
├── package.json                    # Root package.json
├── README.md                       # Project documentation
└── .gitignore                      # Git ignore rules
```

---

## 💻 Available Commands

### Development
```bash
# Start development server with hot reload
npm run dev

# Check TypeScript errors
npm run check

# Format code with Prettier
npm run format
```

### Production
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Start production server
npm start
```

---

## 🎨 Customization Guide

### Change Your Name/Title
Edit `client/src/components/HeroSection.tsx`:
```tsx
// Find this section and update:
<h1 className="text-5xl md:text-7xl font-bold text-foreground">
  Your Name Here
</h1>
```

### Update Profile Photo
Edit `client/src/components/HeroSection.tsx`:
```tsx
// Replace the image URL
<img
  src="https://your-image-url.com/photo.jpg"
  alt="Your Name"
  className="w-full h-full object-cover rounded-full"
/>
```

### Modify Skills
Edit `client/src/components/SkillsSection.tsx`:
```tsx
const skills = [
  { name: 'Your Skill', level: 90 },
  // Add more skills here
];
```

### Update Projects
Edit `client/src/components/ProjectsSection.tsx`:
```tsx
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    // Update project details
  },
];
```

### Change Colors
Edit `client/src/index.css` - Update the CSS variables:
```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
  /* Update other colors */
}
```

---

## 🌐 Pages & Routes

The portfolio includes these pages:

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Main landing page with hero, skills, projects |
| `/education` | Education | Academic background, timeline, certifications |
| `/skills` | Skills | Detailed skills breakdown |
| `/projects` | Projects | Project showcase |
| `/achievements` | Achievements | Accomplishments and statistics |
| `/contact` | Contact | Contact information |

---

## 🔧 Troubleshooting

### Issue: `npm install` fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Try installing again
npm install
```

### Issue: Port 5173 already in use
**Solution:**
```bash
# Use a different port
npm run dev -- --port 3000
```

### Issue: Styles not loading
**Solution:**
```bash
# Rebuild Tailwind CSS
npm run build

# Or restart dev server
npm run dev
```

### Issue: Images not showing
**Solution:**
- Check image URLs are correct
- Ensure images are in `client/public/` folder
- Use absolute paths starting with `/`

### Issue: Theme toggle not working
**Solution:**
- Check `ThemeContext.tsx` is properly imported
- Ensure `ThemeProvider` wraps the app in `App.tsx`

---

## 📦 Dependencies Overview

### Frontend Dependencies
- **react** - UI library
- **react-dom** - React DOM rendering
- **wouter** - Lightweight routing
- **tailwindcss** - CSS framework
- **framer-motion** - Animations
- **lucide-react** - Icon library
- **axios** - HTTP client
- **react-hook-form** - Form management
- **zod** - Schema validation
- **sonner** - Toast notifications

### Dev Dependencies
- **vite** - Build tool
- **typescript** - Type checking
- **tailwindcss** - CSS framework
- **prettier** - Code formatter
- **esbuild** - JavaScript bundler

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/amuchin-portfolio.git
git push -u origin main

# 2. Go to vercel.com and import your repository
# 3. Vercel will automatically detect Vite and deploy
```

### Deploy to Netlify
```bash
# 1. Build the project
npm run build

# 2. Drag and drop the `dist` folder to Netlify
# Or connect your GitHub repository
```

### Deploy to GitHub Pages
```bash
# Update vite.config.ts with your repo name
# Then build and push to gh-pages branch
npm run build
```

---

## 📝 Environment Variables

This is a static frontend project, so no `.env` file is required. However, if you add backend features later, create a `.env` file:

```
# .env (create in root directory)
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=Amuchin's Portfolio
```

---

## 🎯 Next Steps

1. **Customize Content** - Update your name, skills, projects
2. **Add Your Images** - Replace placeholder images
3. **Update Colors** - Modify the theme in `index.css`
4. **Test Locally** - Run `npm run dev` and check all pages
5. **Build for Production** - Run `npm run build`
6. **Deploy** - Push to GitHub and deploy to Vercel/Netlify

---

## 📞 Support & Resources

- **Vite Documentation**: https://vitejs.dev/
- **React Documentation**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **shadcn/ui**: https://ui.shadcn.com/

---

## 📄 License

MIT License - Feel free to use this portfolio template for personal or commercial projects.

---

## ✨ Features Included

✅ Responsive Design (Mobile, Tablet, Desktop)
✅ Dark/Light Theme Toggle
✅ Smooth Animations & Transitions
✅ Professional Typography
✅ SEO Optimized
✅ Fast Performance (Vite)
✅ Type-Safe (TypeScript)
✅ Modern UI Components (shadcn/ui)
✅ Easy to Customize
✅ Production Ready

---

**Happy coding! 🚀**

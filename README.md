# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, and TypeScript. Features a clean design, dark/light mode, custom animated scenes, and smooth animations.

Live site here: [https://enbattle.github.io/](https://enbattle.github.io/)

## 🚀 Features

- ⚡️ Next.js 15 with App Router & Turbopack
- 🎨 TailwindCSS 4 for modern styling
- 🌓 Dark/Light/System mode support with next-themes
- ✨ Advanced animations with Framer Motion
- 🎭 Custom animated anime-style character scene
- 📱 Fully responsive design
- 🎯 TypeScript for type safety
- 🎨 Modern UI components with Radix UI & Shadcn/ui
- 📧 Contact information with social links
- 🚀 Optimized performance with static site generation
- 🔄 Dynamic typing animation effects
- 👁️ Scroll-triggered animations with intersection observer
- 🎪 Interactive theme-aware visual elements

## 🛠️ Tech Stack

- **Framework:** Next.js 15.2.2
- **Language:** TypeScript 5
- **Styling:** TailwindCSS 4 with CSS custom properties
- **UI Components:** Radix UI + Shadcn/ui
- **Animations:** Framer Motion 12.5.0
- **Theme:** next-themes with system detection
- **Icons:** Lucide React
- **Development:** Turbopack for fast dev builds
- **Deployment:** GitHub Pages with static export

## 🏗️ Project Structure

```
src/
├── app/                  # Next.js app router
│   ├── layout.tsx       # Root layout with theme provider
│   ├── page.tsx         # Main portfolio page
│   └── globals.css      # Global styles with CSS variables
├── components/          # React components
│   ├── bio.tsx          # About section with skills
│   ├── experience.tsx   # Work experience timeline
│   ├── projects.tsx     # Portfolio projects showcase
│   ├── education.tsx    # Educational background
│   ├── contact.tsx      # Contact information
│   ├── scene-wrapper.tsx # Custom animated character scene
│   ├── theme-provider.tsx # Theme context wrapper
│   ├── theme-switcher.tsx # Theme toggle component
│   └── ui/              # Reusable UI components (Shadcn/ui)
└── lib/
    └── utils.ts         # Utility functions
```

## 🎨 Technical Implementation

This personal portfolio showcases modern web development practices with:

- **CSS Custom Properties** for theme colors using OKLCH color space for better perceptual uniformity
- **Component-based architecture** with reusable UI elements
- **Static site generation** for optimal performance and GitHub Pages compatibility
- **Responsive design** with mobile-first approach using Tailwind breakpoints

## 📱 Features Highlights

### Custom Animated Scene

The hero section features a custom-built anime-style character scene with:

- Hand-coded character using CSS and div elements
- Theme-aware styling (adapts to dark/light mode)
- Complex animations with Framer Motion
- Interactive elements (laptop, environment objects)

### Performance Optimizations

- Static site generation for fast loading
- Intersection Observer for scroll-triggered animations
- Optimized images with Next.js Image component
- Efficient animation patterns with Framer Motion

### Accessibility

- WCAG compliant color contrast ratios
- Keyboard navigation support
- Screen reader friendly markup
- Semantic HTML structure

# KA-Photographer — Modern Photographer Portfolio Website

## 📋 Overview

KA-Photographer is a modern, responsive portfolio website built with React and TypeScript. This frontend application provides an elegant showcase for photographers with smooth animations, interactive galleries, and a comprehensive admin panel for content management. The site connects to a backend API for photo management and booking functionality.

## 🌐 Live Demo

https://your-site.com

## ✨ Key Features

### 🖼️ **Visual Experience**

- **Responsive & Modern UI** – Tailwind CSS with a fully responsive layout for all devices.
- **Custom Design System** – Built from Figma, designed by the photographer.
- **Rich Animations** – Extensive Framer Motion usage:
  - Scroll‑triggered reveals, staggered text, parallax backgrounds.
  - Interactive hover effects, custom cursor follower, animated form fields.
  - Smooth modal transitions, sliding navigation line, page transitions.
  - Animated bouncing‑dot loading states.
- **Lightbox Gallery** – Fancybox integration with lazy‑loaded, responsive images.

---

### 👨‍💼 **Admin Functionality**

- **Secure Admin Panel** with JWT-based authentication
- **Photo Upload System** with Cloudinary integration
- **Batch Upload** support (up to 10 photos at once)
- **Category Management** for organizing photos
- **Photo Deletion** with confirmation dialogs
- **Protected Routes** for admin-only access

### 📅 **Booking System**

- **Interactive Contact Form** with React Hook Form validation
- **Service Selection** with detailed service pages
- **Form Validation** for better user experience
- **Success/Failure Feedback** with toast notifications

### 🛠️ **Developer Experience**

- **TypeScript** for type safety and better development
- **Component Library** with reusable UI components
- **Custom Hooks** for common functionality
- **Code Quality** with ESLint, Prettier, and Husky
- **Performance Optimized** with lazy loading and code splitting

## 🏗️ Tech Stack

### Core Technologies

- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router DOM v7

### Key Libraries

- **State Management**: TanStack Query (React Query)
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **UI Components**: Custom design system
- **File Upload**: React Dropzone
- **Image Gallery**: Swiper & Fancybox

### Development Tools

- **Code Quality**: ESLint, Prettier
- **Git Hooks**: Husky, lint-staged
- **Type Checking**: TypeScript
- **Deployment**: GitHub Pages (gh-pages)

## 📁 Project Structure

```
src/
├── api/                           # API communication layer
│   ├── axiosClient.ts            # Axios instance configuration
│   ├── clients.ts                # HTTP client functions (GET, POST, etc.)
│   └── endpoints.ts              # API endpoint definitions & TanStack Query keys
│
├── assets/                        # Static assets
│
├── components/                    # Reusable components
│   ├── Layout/                   # Layout components (Header, Footer, etc.)
│   ├── Sections/                 # Page sections (ContactsSection, ShowcaseLayout)
│   ├── ui/                       # Basic UI components (Button, FormField, etc.)
│   └── index.ts                  # root barrel export for all components
│
├── config/                        # Configuration files
│
├── hooks/                         # Custom React hooks
│   ├── useCloudinaryUpload       # Cloudinary file upload
│   ├── usePhotos                 # Photo data fetching
│   ├── useCreateBooking          # Booking form submission
│   ├── useCurrentUser            # Admin authentication state
│   ├── useInfiniteScroll         # Infinite scroll functionality
│   ├── ... (20+ more hooks)
│   └── index.ts                  # barrel export (optional)
│
├── lib/                           # Utility libraries
│   ├── animations.ts             # Animation configurations
│   ├── cn.ts                     # Class name utilities (clsx + tailwind-merge)
│   └── index.ts                  # barrel export
│
├── pages/                         # Application pages
│   ├── Home/                     # Landing page
│   ├── Gallery/
│   ├── Services/
│   ├── ServiceDetails/
│   ├── Contacts/
│   ├── Terms/
│   ├── AdminLogin/
│   ├── AdminPanel/
│   ├── NotFound/
│   └── index.ts                   # root barrel export for all pages
│
├── router/                        # Routing configuration
│   ├── AppRoutes                 # Main router setup (uses routesConfig)
│   ├── PrivateRoutes             # Protected route wrapper
│   ├── routesConfig.ts           # Route definitions with lazy loading
│   └── index.ts                  # barrel export (AppRoutes, PrivateRoutes)
│
├── types/                         # TypeScript type definitions
│
├── utils/                         # Utility functions
│   ├── getErrorMessage.ts        # Error handling utilities
│   ├── getCloudinaryErrorMessage.ts # Cloudinary error handling
│   └── index.ts                  # barrel export
│
├── tests/                         # Testing utilities
│   ├── mocks/                    # Mock data and API handlers
│   ├── test-utils                # Custom render, wrappers, etc.
│   └── index.ts                  # exports mocks and test-utils
│
├── App.tsx                        # Root application component
└── main.tsx                       # Application entry point
```

## 🚀 Performance Optimizations

- **Code Splitting**: Lazy-loaded pages for faster initial load
- **Image Optimization**: Lazy loading and proper sizing
- **Bundle Analysis**: Optimized dependencies
- **Tree Shaking**: Unused code elimination
- **Caching**: React Query for API response caching
- **Memoization**: React.memo and useMemo for expensive computations

## 📊 Lighthouse Audit (Desktop)

Results from the latest run in **Chrome Guest mode** (no extensions, simulated desktop throttling):

| Category           | Score |
| ------------------ | ----- |
| **Performance**    | 97    |
| **Accessibility**  | 91    |
| **Best Practices** | 96    |
| **SEO**            | 100    |

### Core Web Vitals & Metrics

| Metric                             | Value | Assessment |
| ---------------------------------- | ----- | ---------- |
| **First Contentful Paint (FCP)**   | 0.8 s | Good       |
| **Largest Contentful Paint (LCP)** | 1.6 s | Good       |
| **Total Blocking Time (TBT)**      | 20 ms | Excellent  |
| **Cumulative Layout Shift (CLS)**  | 0.001 | Excellent  |
| **Speed Index (SI)**               | 1.0 s | Good       |

## ⚙️ Installation & Setup

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/AndriySt92/ka-photographer.git
cd ka-photographer

# 2. Set up environment variables
cp .env.example .env
# ⚠️ For local development, change VITE_BASE to "/" in the .env file
# (e.g., VITE_BASE=/)

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open in browser
# Navigate to http://localhost:5173
```

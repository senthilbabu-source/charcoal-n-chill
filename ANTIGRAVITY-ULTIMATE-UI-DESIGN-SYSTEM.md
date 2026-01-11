# GOOGLE ANTIGRAVITY PROMPT: ULTIMATE MODERN UI DESIGN SYSTEM
## Build an Absolutely Gorgeous, Sleek, Modern & Responsive Website

**Objective:** Transform any website into a world-class, award-worthy digital experience using the absolute best UI elements, components, and design patterns from top-tier companies like Apple, Stripe, Linear, Vercel, and Airbnb.

---

## 🎨 DESIGN SYSTEM FOUNDATION

### Philosophy: Premium Minimalism Meets Rich Interactions

**Inspired by:**
- **Apple** - Clean, premium, attention to detail
- **Stripe** - Professional, trustworthy, sophisticated
- **Linear** - Fast, fluid, keyboard-first
- **Vercel** - Dark mode excellence, modern gradients
- **Airbnb** - User-friendly, welcoming, polished

**Core Principles:**
1. **Whitespace is a luxury** - Generous spacing creates premium feel
2. **Micro-interactions matter** - Every hover, click, scroll should delight
3. **Typography is hierarchy** - Use scale and weight to guide attention
4. **Color is intentional** - Every color serves a purpose
5. **Performance is design** - Fast feels better than pretty
6. **Accessibility is non-negotiable** - Beautiful for everyone

---

## 1️⃣ COLOR SYSTEM - Modern Palette

### Primary Color System

```css
:root {
  /* Brand Colors - Gold/Luxury Theme */
  --primary-50: #FFFBEB;
  --primary-100: #FEF3C7;
  --primary-200: #FDE68A;
  --primary-300: #FCD34D;
  --primary-400: #FBBF24;
  --primary-500: #F59E0B; /* Primary */
  --primary-600: #D97706;
  --primary-700: #B45309;
  --primary-800: #92400E;
  --primary-900: #78350F;
  
  /* Neutral Grays - Dark Theme */
  --gray-50: #FAFAFA;
  --gray-100: #F5F5F5;
  --gray-200: #E5E5E5;
  --gray-300: #D4D4D4;
  --gray-400: #A3A3A3;
  --gray-500: #737373;
  --gray-600: #525252;
  --gray-700: #404040;
  --gray-800: #262626;
  --gray-900: #171717;
  --gray-950: #0A0A0A;
  
  /* Semantic Colors */
  --success-50: #ECFDF5;
  --success-500: #10B981;
  --success-700: #047857;
  
  --error-50: #FEF2F2;
  --error-500: #EF4444;
  --error-700: #B91C1C;
  
  --warning-50: #FFFBEB;
  --warning-500: #F59E0B;
  --warning-700: #B45309;
  
  --info-50: #EFF6FF;
  --info-500: #3B82F6;
  --info-700: #1D4ED8;
  
  /* Background Colors */
  --bg-primary: #FFFFFF;
  --bg-secondary: #FAFAFA;
  --bg-tertiary: #F5F5F5;
  --bg-elevated: #FFFFFF;
  --bg-overlay: rgba(0, 0, 0, 0.5);
  
  /* Dark Mode */
  --bg-primary-dark: #0A0A0A;
  --bg-secondary-dark: #171717;
  --bg-tertiary-dark: #262626;
  --bg-elevated-dark: #1A1A1A;
  
  /* Text Colors */
  --text-primary: #171717;
  --text-secondary: #525252;
  --text-tertiary: #A3A3A3;
  --text-inverse: #FFFFFF;
  
  /* Border Colors */
  --border-primary: #E5E5E5;
  --border-secondary: #D4D4D4;
  --border-focus: #F59E0B;
  
  /* Gradients - Modern & Subtle */
  --gradient-premium: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  --gradient-sunset: linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%);
  --gradient-ocean: linear-gradient(135deg, #667EEA 0%, #764BA2 100%);
  --gradient-forest: linear-gradient(135deg, #38EF7D 0%, #11998E 100%);
  --gradient-mesh: radial-gradient(at 40% 20%, #FFD700 0%, transparent 50%),
                   radial-gradient(at 80% 0%, #FFA500 0%, transparent 50%),
                   radial-gradient(at 0% 50%, #FF6B6B 0%, transparent 50%);
  
  /* Glassmorphism */
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.12);
  --glass-backdrop: blur(24px) saturate(180%);
  
  /* Shadows - Elevation System */
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  
  /* Colored Shadows - For CTAs */
  --shadow-primary: 0 10px 40px -10px rgba(245, 158, 11, 0.4);
  --shadow-success: 0 10px 40px -10px rgba(16, 185, 129, 0.4);
  --shadow-error: 0 10px 40px -10px rgba(239, 68, 68, 0.4);
  
  /* Animation Timings */
  --duration-instant: 0.1s;
  --duration-fast: 0.2s;
  --duration-normal: 0.3s;
  --duration-slow: 0.5s;
  --duration-slower: 0.8s;
  
  /* Easing Functions - From Apple HIG */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  /* Spacing Scale - 8px base */
  --space-0: 0;
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem;  /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem;    /* 16px */
  --space-5: 1.25rem; /* 20px */
  --space-6: 1.5rem;  /* 24px */
  --space-8: 2rem;    /* 32px */
  --space-10: 2.5rem; /* 40px */
  --space-12: 3rem;   /* 48px */
  --space-16: 4rem;   /* 64px */
  --space-20: 5rem;   /* 80px */
  --space-24: 6rem;   /* 96px */
  --space-32: 8rem;   /* 128px */
  
  /* Border Radius */
  --radius-sm: 0.25rem;  /* 4px */
  --radius-md: 0.375rem; /* 6px */
  --radius-lg: 0.5rem;   /* 8px */
  --radius-xl: 0.75rem;  /* 12px */
  --radius-2xl: 1rem;    /* 16px */
  --radius-3xl: 1.5rem;  /* 24px */
  --radius-full: 9999px;
  
  /* Z-Index Scale */
  --z-base: 0;
  --z-dropdown: 1000;
  --z-sticky: 1100;
  --z-fixed: 1200;
  --z-modal-backdrop: 1300;
  --z-modal: 1400;
  --z-popover: 1500;
  --z-tooltip: 1600;
  --z-toast: 1700;
}
```

---

## 2️⃣ TYPOGRAPHY SYSTEM - Premium Hierarchy

### Font Stack

```css
:root {
  /* Font Families */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
               'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
               'Helvetica Neue', sans-serif;
  
  --font-serif: 'Georgia', 'Times New Roman', Times, serif;
  
  --font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', 
               Consolas, 'Courier New', monospace;
  
  /* Font Sizes - Fluid Typography */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);     /* 12-14px */
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);       /* 14-16px */
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);       /* 16-18px */
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);      /* 18-20px */
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);       /* 20-24px */
  --text-2xl: clamp(1.5rem, 1.3rem + 1vw, 1.875rem);        /* 24-30px */
  --text-3xl: clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem);   /* 30-36px */
  --text-4xl: clamp(2.25rem, 1.9rem + 1.75vw, 3rem);        /* 36-48px */
  --text-5xl: clamp(3rem, 2.5rem + 2.5vw, 3.75rem);         /* 48-60px */
  --text-6xl: clamp(3.75rem, 3rem + 3.75vw, 4.5rem);        /* 60-72px */
  --text-7xl: clamp(4.5rem, 3.5rem + 5vw, 6rem);            /* 72-96px */
  
  /* Font Weights */
  --font-thin: 100;
  --font-extralight: 200;
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
  --font-black: 900;
  
  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
  
  /* Letter Spacing */
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0em;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
}

/* Typography Classes */
.display-1 {
  font-size: var(--text-7xl);
  font-weight: var(--font-black);
  line-height: var(--leading-none);
  letter-spacing: var(--tracking-tighter);
}

.display-2 {
  font-size: var(--text-6xl);
  font-weight: var(--font-extrabold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.heading-1 {
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
}

.heading-2 {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-snug);
}

.heading-3 {
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
}

.heading-4 {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-normal);
}

.heading-5 {
  font-size: var(--text-xl);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
}

.body-large {
  font-size: var(--text-lg);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
}

.body {
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
}

.body-small {
  font-size: var(--text-sm);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
}

.caption {
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
}
```

---

## 3️⃣ BUTTON SYSTEM - Premium Interactions

### Button Variants

```jsx
// Button Component Library
const Button = {
  // Primary - Main CTAs
  Primary: ({ children, size = 'md', loading = false, icon, ...props }) => (
    <button 
      className={`btn btn-primary btn-${size}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <span className="btn-spinner"></span>
      ) : (
        <>
          {icon && <span className="btn-icon">{icon}</span>}
          <span className="btn-text">{children}</span>
          <span className="btn-shimmer"></span>
        </>
      )}
    </button>
  ),
  
  // Secondary - Alternative actions
  Secondary: ({ children, size = 'md', ...props }) => (
    <button className={`btn btn-secondary btn-${size}`} {...props}>
      <span className="btn-text">{children}</span>
      <span className="btn-border-glow"></span>
    </button>
  ),
  
  // Ghost - Subtle actions
  Ghost: ({ children, size = 'md', ...props }) => (
    <button className={`btn btn-ghost btn-${size}`} {...props}>
      <span className="btn-text">{children}</span>
    </button>
  ),
  
  // Outline - Secondary emphasis
  Outline: ({ children, size = 'md', ...props }) => (
    <button className={`btn btn-outline btn-${size}`} {...props}>
      <span className="btn-text">{children}</span>
    </button>
  ),
  
  // Icon Only - Compact actions
  Icon: ({ icon, size = 'md', ...props }) => (
    <button className={`btn btn-icon btn-${size}`} {...props}>
      {icon}
    </button>
  )
};
```

### Button Styles

```css
/* Base Button */
.btn {
  /* Reset */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  
  /* Layout */
  position: relative;
  overflow: hidden;
  
  /* Typography */
  font-family: var(--font-sans);
  font-weight: var(--font-semibold);
  text-decoration: none;
  white-space: nowrap;
  
  /* Interaction */
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  
  /* Transition */
  transition: all var(--duration-fast) var(--ease-out);
  
  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
  
  /* Focus State */
  &:focus-visible {
    outline: 2px solid var(--border-focus);
    outline-offset: 2px;
  }
}

/* Button Sizes */
.btn-sm {
  height: 2rem;
  padding: 0 var(--space-3);
  font-size: var(--text-sm);
  border-radius: var(--radius-lg);
}

.btn-md {
  height: 2.5rem;
  padding: 0 var(--space-4);
  font-size: var(--text-base);
  border-radius: var(--radius-lg);
}

.btn-lg {
  height: 3rem;
  padding: 0 var(--space-6);
  font-size: var(--text-lg);
  border-radius: var(--radius-xl);
}

.btn-xl {
  height: 3.5rem;
  padding: 0 var(--space-8);
  font-size: var(--text-xl);
  border-radius: var(--radius-2xl);
}

/* Primary Button - Gradient with Glow */
.btn-primary {
  background: var(--gradient-premium);
  color: var(--gray-900);
  border: none;
  box-shadow: var(--shadow-primary);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 48px -12px rgba(245, 158, 11, 0.5);
  }
  
  &:active {
    transform: translateY(0);
  }
}

/* Shimmer Effect */
.btn-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transform: skewX(-20deg);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  50%, 100% { left: 200%; }
}

/* Secondary Button - Glassmorphism */
.btn-secondary {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-backdrop);
  color: var(--text-inverse);
  border: 1px solid var(--glass-border);
  
  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
}

/* Ghost Button - Minimal */
.btn-ghost {
  background: transparent;
  color: var(--text-primary);
  border: none;
  
  &:hover {
    background: var(--bg-secondary);
  }
  
  &:active {
    background: var(--bg-tertiary);
  }
}

/* Outline Button */
.btn-outline {
  background: transparent;
  color: var(--text-primary);
  border: 1.5px solid var(--border-primary);
  
  &:hover {
    background: var(--bg-secondary);
    border-color: var(--border-secondary);
  }
}

/* Icon Button */
.btn-icon {
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border-radius: var(--radius-full);
  
  &.btn-sm {
    width: 2rem;
    height: 2rem;
  }
  
  &.btn-lg {
    width: 3rem;
    height: 3rem;
  }
}

/* Loading Spinner */
.btn-spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Ripple Effect on Click */
.btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:active::after {
  width: 300px;
  height: 300px;
}
```

---

## 4️⃣ CARD SYSTEM - Premium Containers

### Card Variants

```jsx
// Card Component Library
const Card = {
  // Default Card
  Default: ({ children, hover = true, ...props }) => (
    <div className={`card ${hover ? 'card-hover' : ''}`} {...props}>
      {children}
    </div>
  ),
  
  // Glass Card - Glassmorphism
  Glass: ({ children, ...props }) => (
    <div className="card card-glass" {...props}>
      <div className="card-glass-bg"></div>
      <div className="card-content">{children}</div>
    </div>
  ),
  
  // Gradient Border Card
  GradientBorder: ({ children, ...props }) => (
    <div className="card card-gradient-border" {...props}>
      <div className="card-gradient-border-bg"></div>
      <div className="card-content">{children}</div>
    </div>
  ),
  
  // Interactive Card - 3D Tilt
  Interactive: ({ children, ...props }) => (
    <div className="card card-interactive" data-tilt {...props}>
      <div className="card-shine"></div>
      <div className="card-content">{children}</div>
    </div>
  ),
  
  // Feature Card - For features/benefits
  Feature: ({ icon, title, description, ...props }) => (
    <div className="card card-feature" {...props}>
      <div className="card-icon-wrapper">
        <div className="card-icon-bg"></div>
        <div className="card-icon">{icon}</div>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  ),
  
  // Product Card - For e-commerce
  Product: ({ image, badge, title, price, ...props }) => (
    <div className="card card-product" {...props}>
      <div className="card-product-image">
        <img src={image} alt={title} />
        {badge && <span className="card-badge">{badge}</span>}
        <div className="card-overlay">
          <button className="btn btn-primary">Quick View</button>
        </div>
      </div>
      <div className="card-product-info">
        <h3 className="card-product-title">{title}</h3>
        <p className="card-product-price">{price}</p>
      </div>
    </div>
  )
};
```

### Card Styles

```css
/* Base Card */
.card {
  position: relative;
  background: var(--bg-elevated);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-2xl);
  padding: var(--space-6);
  transition: all var(--duration-normal) var(--ease-out);
}

/* Hover Effect */
.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--border-secondary);
}

/* Glass Card */
.card-glass {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
  overflow: hidden;
}

.card-glass-bg {
  position: absolute;
  inset: -1px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border-radius: inherit;
  pointer-events: none;
}

/* Gradient Border Card */
.card-gradient-border {
  padding: 2px;
  background: var(--gradient-premium);
  overflow: hidden;
}

.card-gradient-border-bg {
  position: absolute;
  inset: 2px;
  background: var(--bg-elevated);
  border-radius: calc(var(--radius-2xl) - 2px);
}

.card-content {
  position: relative;
  z-index: 1;
  padding: var(--space-6);
}

/* Interactive Card - 3D Tilt */
.card-interactive {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.card-interactive:hover {
  transform: rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) scale(1.02);
}

.card-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    transparent 40%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 60%
  );
  transform: translateX(-100%) rotate(45deg);
  transition: transform var(--duration-slower) var(--ease-out);
  pointer-events: none;
}

.card-interactive:hover .card-shine {
  transform: translateX(100%) rotate(45deg);
}

/* Feature Card */
.card-feature {
  text-align: center;
  padding: var(--space-8);
}

.card-icon-wrapper {
  position: relative;
  width: 4rem;
  height: 4rem;
  margin: 0 auto var(--space-6);
}

.card-icon-bg {
  position: absolute;
  inset: 0;
  background: var(--gradient-premium);
  opacity: 0.1;
  border-radius: var(--radius-2xl);
  transition: all var(--duration-normal);
}

.card-feature:hover .card-icon-bg {
  opacity: 0.2;
  transform: rotate(10deg) scale(1.1);
}

.card-icon {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-3xl);
  color: var(--primary-500);
}

.card-title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

.card-description {
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
}

/* Product Card */
.card-product {
  padding: 0;
  overflow: hidden;
}

.card-product-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
}

.card-product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-out);
}

.card-product:hover img {
  transform: scale(1.1);
}

.card-badge {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  padding: var(--space-2) var(--space-3);
  background: var(--primary-500);
  color: white;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--duration-normal);
}

.card-product:hover .card-overlay {
  opacity: 1;
}

.card-product-info {
  padding: var(--space-4);
}

.card-product-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.card-product-price {
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--primary-500);
}
```

---

## 5️⃣ INPUT SYSTEM - Beautiful Forms

### Input Components

```jsx
// Input Component Library
const Input = {
  // Text Input
  Text: ({ label, error, helper, icon, ...props }) => (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        {icon && <span className="input-icon">{icon}</span>}
        <input 
          className={`input ${error ? 'input-error' : ''} ${icon ? 'input-with-icon' : ''}`}
          {...props}
        />
        {error && <span className="input-error-icon">⚠️</span>}
      </div>
      {error && <p className="input-error-text">{error}</p>}
      {helper && !error && <p className="input-helper-text">{helper}</p>}
    </div>
  ),
  
  // Textarea
  Textarea: ({ label, error, ...props }) => (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <textarea 
        className={`input input-textarea ${error ? 'input-error' : ''}`}
        {...props}
      />
      {error && <p className="input-error-text">{error}</p>}
    </div>
  ),
  
  // Select
  Select: ({ label, options, ...props }) => (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <div className="select-wrapper">
        <select className="input input-select" {...props}>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <span className="select-arrow">▼</span>
      </div>
    </div>
  ),
  
  // Checkbox
  Checkbox: ({ label, ...props }) => (
    <label className="checkbox-wrapper">
      <input type="checkbox" className="checkbox-input" {...props} />
      <span className="checkbox-box">
        <svg className="checkbox-icon" viewBox="0 0 24 24">
          <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
      </span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  ),
  
  // Radio
  Radio: ({ label, ...props }) => (
    <label className="radio-wrapper">
      <input type="radio" className="radio-input" {...props} />
      <span className="radio-box">
        <span className="radio-dot"></span>
      </span>
      {label && <span className="radio-label">{label}</span>}
    </label>
  ),
  
  // Switch/Toggle
  Switch: ({ label, ...props }) => (
    <label className="switch-wrapper">
      <input type="checkbox" className="switch-input" {...props} />
      <span className="switch-slider"></span>
      {label && <span className="switch-label">{label}</span>}
    </label>
  )
};
```

### Input Styles

```css
/* Input Group */
.input-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
}

/* Input Label */
.input-label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

/* Input Wrapper */
.input-wrapper {
  position: relative;
}

/* Base Input */
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--text-primary);
  background: var(--bg-elevated);
  border: 1.5px solid var(--border-primary);
  border-radius: var(--radius-lg);
  transition: all var(--duration-fast) var(--ease-out);
  
  /* Remove default appearance */
  appearance: none;
  outline: none;
  
  /* Placeholder */
  &::placeholder {
    color: var(--text-tertiary);
  }
  
  /* Focus State */
  &:focus {
    border-color: var(--primary-500);
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
  }
  
  /* Hover State */
  &:hover:not(:focus) {
    border-color: var(--border-secondary);
  }
  
  /* Disabled State */
  &:disabled {
    background: var(--bg-secondary);
    color: var(--text-tertiary);
    cursor: not-allowed;
  }
}

/* Input with Icon */
.input-with-icon {
  padding-left: var(--space-10);
}

.input-icon {
  position: absolute;
  left: var(--space-4);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-tertiary);
  pointer-events: none;
}

/* Error State */
.input-error {
  border-color: var(--error-500);
  
  &:focus {
    border-color: var(--error-500);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
}

.input-error-icon {
  position: absolute;
  right: var(--space-4);
  top: 50%;
  transform: translateY(-50%);
  font-size: var(--text-sm);
}

.input-error-text {
  font-size: var(--text-sm);
  color: var(--error-500);
  margin-top: var(--space-1);
}

.input-helper-text {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin-top: var(--space-1);
}

/* Textarea */
.input-textarea {
  min-height: 120px;
  resize: vertical;
  line-height: var(--leading-relaxed);
}

/* Select */
.select-wrapper {
  position: relative;
}

.input-select {
  padding-right: var(--space-10);
  cursor: pointer;
}

.select-arrow {
  position: absolute;
  right: var(--space-4);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-tertiary);
  font-size: var(--text-xs);
  pointer-events: none;
  transition: transform var(--duration-fast);
}

.input-select:focus + .select-arrow {
  transform: translateY(-50%) rotate(180deg);
}

/* Checkbox */
.checkbox-wrapper {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  cursor: pointer;
  user-select: none;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-box {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid var(--border-secondary);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--duration-fast);
  background: var(--bg-elevated);
}

.checkbox-icon {
  width: 0.875rem;
  height: 0.875rem;
  stroke: white;
  opacity: 0;
  transform: scale(0.5);
  transition: all var(--duration-fast) var(--ease-spring);
}

.checkbox-input:checked + .checkbox-box {
  background: var(--primary-500);
  border-color: var(--primary-500);
}

.checkbox-input:checked + .checkbox-box .checkbox-icon {
  opacity: 1;
  transform: scale(1);
}

.checkbox-input:focus-visible + .checkbox-box {
  outline: 2px solid var(--primary-500);
  outline-offset: 2px;
}

.checkbox-label {
  font-size: var(--text-base);
  color: var(--text-primary);
}

/* Radio */
.radio-wrapper {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  cursor: pointer;
  user-select: none;
}

.radio-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.radio-box {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid var(--border-secondary);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--duration-fast);
  background: var(--bg-elevated);
}

.radio-dot {
  width: 0.5rem;
  height: 0.5rem;
  background: white;
  border-radius: var(--radius-full);
  transform: scale(0);
  transition: transform var(--duration-fast) var(--ease-spring);
}

.radio-input:checked + .radio-box {
  background: var(--primary-500);
  border-color: var(--primary-500);
}

.radio-input:checked + .radio-box .radio-dot {
  transform: scale(1);
}

/* Switch/Toggle */
.switch-wrapper {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  cursor: pointer;
  user-select: none;
}

.switch-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.switch-slider {
  position: relative;
  width: 2.75rem;
  height: 1.5rem;
  background: var(--gray-300);
  border-radius: var(--radius-full);
  transition: background var(--duration-fast);
}

.switch-slider::before {
  content: '';
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  width: 1.25rem;
  height: 1.25rem;
  background: white;
  border-radius: var(--radius-full);
  transition: transform var(--duration-fast) var(--ease-out);
  box-shadow: var(--shadow-sm);
}

.switch-input:checked + .switch-slider {
  background: var(--primary-500);
}

.switch-input:checked + .switch-slider::before {
  transform: translateX(1.25rem);
}

.switch-input:focus-visible + .switch-slider {
  outline: 2px solid var(--primary-500);
  outline-offset: 2px;
}
```

---

## 6️⃣ MODAL SYSTEM - Premium Overlays

```jsx
// Modal Component
const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer,
  size = 'md' 
}) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className={`modal modal-${size}`} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>
          <svg viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        
        {/* Header */}
        {title && (
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
          </div>
        )}
        
        {/* Content */}
        <div className="modal-content">
          {children}
        </div>
        
        {/* Footer */}
        {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
```

### Modal Styles

```css
/* Modal Backdrop */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal-backdrop);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
  animation: fadeIn var(--duration-normal) var(--ease-out);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Modal Container */
.modal {
  position: relative;
  background: var(--bg-elevated);
  border-radius: var(--radius-3xl);
  box-shadow: var(--shadow-2xl);
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: modalSlideUp var(--duration-slow) var(--ease-spring);
}

@keyframes modalSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Modal Sizes */
.modal-sm {
  width: 100%;
  max-width: 24rem;
}

.modal-md {
  width: 100%;
  max-width: 32rem;
}

.modal-lg {
  width: 100%;
  max-width: 48rem;
}

.modal-xl {
  width: 100%;
  max-width: 64rem;
}

.modal-full {
  width: 100%;
  max-width: 90%;
  max-height: 90vh;
}

/* Close Button */
.modal-close {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  z-index: 1;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--duration-fast);
}

.modal-close svg {
  width: 1rem;
  height: 1rem;
  stroke: var(--text-secondary);
}

.modal-close:hover {
  background: var(--bg-tertiary);
  transform: rotate(90deg);
}

/* Modal Header */
.modal-header {
  padding: var(--space-8) var(--space-8) var(--space-4);
  border-bottom: 1px solid var(--border-primary);
}

.modal-title {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
}

/* Modal Content */
.modal-content {
  padding: var(--space-6) var(--space-8);
  overflow-y: auto;
  flex: 1;
}

/* Modal Footer */
.modal-footer {
  padding: var(--space-4) var(--space-8) var(--space-6);
  border-top: 1px solid var(--border-primary);
  display: flex;
  gap: var(--space-3);
  justify-content: flex-end;
}
```

---

## 7️⃣ TOAST NOTIFICATION SYSTEM

```jsx
// Toast Component
const Toast = ({ type = 'info', message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);
  
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };
  
  return (
    <div className={`toast toast-${type}`}>
      <span className="toast-icon">{icons[type]}</span>
      <p className="toast-message">{message}</p>
      <button className="toast-close" onClick={onClose}>✕</button>
      <div className="toast-progress"></div>
    </div>
  );
};
```

### Toast Styles

```css
/* Toast Container */
.toast {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 300px;
  max-width: 500px;
  padding: var(--space-4);
  background: var(--bg-elevated);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  animation: toastSlideIn var(--duration-normal) var(--ease-spring);
  overflow: hidden;
}

@keyframes toastSlideIn {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Toast Variants */
.toast-success {
  border-left: 4px solid var(--success-500);
}

.toast-success .toast-icon {
  background: var(--success-50);
  color: var(--success-700);
}

.toast-error {
  border-left: 4px solid var(--error-500);
}

.toast-error .toast-icon {
  background: var(--error-50);
  color: var(--error-700);
}

.toast-warning {
  border-left: 4px solid var(--warning-500);
}

.toast-warning .toast-icon {
  background: var(--warning-50);
  color: var(--warning-700);
}

.toast-info {
  border-left: 4px solid var(--info-500);
}

.toast-info .toast-icon {
  background: var(--info-50);
  color: var(--info-700);
}

/* Toast Icon */
.toast-icon {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  font-weight: var(--font-bold);
  flex-shrink: 0;
}

/* Toast Message */
.toast-message {
  flex: 1;
  font-size: var(--text-sm);
  color: var(--text-primary);
  line-height: var(--leading-normal);
}

/* Toast Close Button */
.toast-close {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  color: var(--text-tertiary);
  cursor: pointer;
  transition: all var(--duration-fast);
  flex-shrink: 0;
}

.toast-close:hover {
  background: var(--bg-secondary);
  color: var(--text-primary);
}

/* Toast Progress Bar */
.toast-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: currentColor;
  opacity: 0.3;
  transform-origin: left;
  animation: toastProgress 5s linear;
}

@keyframes toastProgress {
  from { transform: scaleX(1); }
  to { transform: scaleX(0); }
}
```

---

## 8️⃣ NAVIGATION SYSTEM - Premium Header

```jsx
// Navigation Component
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="/" className="nav-logo">
          <img src="/logo.png" alt="Logo" />
        </a>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <a href="/features" className="nav-link">Features</a>
          <a href="/pricing" className="nav-link">Pricing</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Contact</a>
        </div>
        
        {/* CTA */}
        <div className="nav-actions">
          <button className="btn btn-ghost">Sign In</button>
          <button className="btn btn-primary">Get Started</button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className={`nav-toggle ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`nav-mobile ${mobileOpen ? 'active' : ''}`}>
        <a href="/features" className="nav-mobile-link">Features</a>
        <a href="/pricing" className="nav-mobile-link">Pricing</a>
        <a href="/about" className="nav-mobile-link">About</a>
        <a href="/contact" className="nav-mobile-link">Contact</a>
        <div className="nav-mobile-actions">
          <button className="btn btn-outline">Sign In</button>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
};
```

### Navigation Styles

```css
/* Navigation */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  padding: var(--space-4) 0;
  transition: all var(--duration-normal) var(--ease-out);
}

.nav-scrolled {
  padding: var(--space-3) 0;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-backdrop);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: var(--shadow-md);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
}

/* Logo */
.nav-logo {
  display: flex;
  align-items: center;
  transition: transform var(--duration-fast);
}

.nav-logo:hover {
  transform: scale(1.05);
}

.nav-logo img {
  height: 40px;
  transition: height var(--duration-normal);
}

.nav-scrolled .nav-logo img {
  height: 32px;
}

/* Desktop Links */
.nav-links {
  display: flex;
  gap: var(--space-8);
  align-items: center;
}

.nav-link {
  position: relative;
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--text-primary);
  text-decoration: none;
  transition: color var(--duration-fast);
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-500);
  transition: width var(--duration-fast) var(--ease-out);
}

.nav-link:hover {
  color: var(--primary-500);
}

.nav-link:hover::before {
  width: 100%;
}

.nav-link.active {
  color: var(--primary-500);
}

.nav-link.active::before {
  width: 100%;
}

/* Actions */
.nav-actions {
  display: flex;
  gap: var(--space-3);
  align-items: center;
}

/* Mobile Toggle */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  padding: var(--space-2);
  cursor: pointer;
}

.nav-toggle span {
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  transition: all var(--duration-fast);
  border-radius: var(--radius-full);
}

.nav-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translateY(6px);
}

.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translateY(-6px);
}

/* Mobile Menu */
.nav-mobile {
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  max-height: 0;
  overflow: hidden;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border-primary);
  transition: max-height var(--duration-slow) var(--ease-out);
}

.nav-mobile.active {
  max-height: 100vh;
  box-shadow: var(--shadow-xl);
}

.nav-mobile-link {
  display: block;
  padding: var(--space-4) var(--space-6);
  font-size: var(--text-lg);
  font-weight: var(--font-medium);
  color: var(--text-primary);
  text-decoration: none;
  border-bottom: 1px solid var(--border-primary);
  transition: all var(--duration-fast);
}

.nav-mobile-link:hover {
  background: var(--bg-secondary);
  padding-left: var(--space-8);
  color: var(--primary-500);
}

.nav-mobile-actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-6);
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links,
  .nav-actions {
    display: none;
  }
  
  .nav-toggle {
    display: flex;
  }
}
```

---

## 9️⃣ ANIMATION UTILITIES

```css
/* Fade Animations */
.fade-in {
  animation: fadeIn 0.6s var(--ease-out) both;
}

.fade-in-up {
  animation: fadeInUp 0.8s var(--ease-out) both;
}

.fade-in-down {
  animation: fadeInDown 0.8s var(--ease-out) both;
}

.fade-in-left {
  animation: fadeInLeft 0.8s var(--ease-out) both;
}

.fade-in-right {
  animation: fadeInRight 0.8s var(--ease-out) both;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Scale Animations */
.zoom-in {
  animation: zoomIn 0.8s var(--ease-out) both;
}

.zoom-out {
  animation: zoomOut 0.8s var(--ease-out) both;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes zoomOut {
  from {
    opacity: 0;
    transform: scale(1.2);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Slide Animations */
.slide-in-up {
  animation: slideInUp 0.8s var(--ease-spring) both;
}

.slide-in-down {
  animation: slideInDown 0.8s var(--ease-spring) both;
}

@keyframes slideInUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

/* Bounce Animation */
.bounce {
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Pulse Animation */
.pulse {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

/* Spin Animation */
.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Stagger Delays */
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }
.delay-600 { animation-delay: 0.6s; }
.delay-700 { animation-delay: 0.7s; }
.delay-800 { animation-delay: 0.8s; }
```

---

## 🔟 SCROLL REVEAL SYSTEM

```javascript
// Scroll Reveal Implementation
class ScrollReveal {
  constructor(options = {}) {
    this.options = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
      ...options
    };
    
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      this.options
    );
    
    this.init();
  }
  
  init() {
    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach(el => this.observe(el));
  }
  
  observe(element) {
    // Set initial state
    element.style.opacity = '0';
    element.style.transform = this.getInitialTransform(element.dataset.reveal);
    
    this.observer.observe(element);
  }
  
  getInitialTransform(type) {
    const transforms = {
      'fade': 'none',
      'fade-up': 'translateY(50px)',
      'fade-down': 'translateY(-50px)',
      'fade-left': 'translateX(-50px)',
      'fade-right': 'translateX(50px)',
      'zoom-in': 'scale(0.8)',
      'zoom-out': 'scale(1.2)'
    };
    return transforms[type] || 'translateY(50px)';
  }
  
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.reveal(entry.target);
      }
    });
  }
  
  reveal(element) {
    const delay = element.dataset.delay || 0;
    
    setTimeout(() => {
      element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      element.style.opacity = '1';
      element.style.transform = 'translate(0, 0) scale(1)';
      
      // Unobserve after revealing
      this.observer.unobserve(element);
    }, delay * 1000);
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  new ScrollReveal();
});
```

---

## ⚡ PERFORMANCE OPTIMIZATIONS

```javascript
// Lazy Load Images
const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
};

// Throttle Function
const throttle = (func, delay) => {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

// Debounce Function
const debounce = (func, delay) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Smooth Scroll
const smoothScroll = (target) => {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Initialize all optimizations
document.addEventListener('DOMContentLoaded', () => {
  lazyLoadImages();
});
```

---

## 📱 RESPONSIVE UTILITIES

```css
/* Container */
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.container-sm {
  max-width: 800px;
}

.container-md {
  max-width: 1000px;
}

.container-lg {
  max-width: 1200px;
}

/* Grid System */
.grid {
  display: grid;
  gap: var(--space-6);
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive Grid */
@media (max-width: 1024px) {
  .grid-cols-4 { grid-template-columns: repeat(2, 1fr); }
  .grid-cols-3 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .grid-cols-4,
  .grid-cols-3,
  .grid-cols-2 { 
    grid-template-columns: 1fr; 
  }
}

/* Flexbox Utilities */
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.gap-2 { gap: var(--space-2); }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }
.gap-8 { gap: var(--space-8); }

/* Spacing Utilities */
.p-0 { padding: 0; }
.p-2 { padding: var(--space-2); }
.p-4 { padding: var(--space-4); }
.p-6 { padding: var(--space-6); }
.p-8 { padding: var(--space-8); }

.m-0 { margin: 0; }
.m-2 { margin: var(--space-2); }
.m-4 { margin: var(--space-4); }
.m-6 { margin: var(--space-6); }
.m-8 { margin: var(--space-8); }

/* Hide/Show Utilities */
.hidden {
  display: none;
}

@media (max-width: 768px) {
  .hide-mobile {
    display: none;
  }
}

@media (min-width: 769px) {
  .show-mobile {
    display: none;
  }
}
```

---

## ♿ ACCESSIBILITY

```css
/* Focus Visible - Keyboard Navigation */
*:focus-visible {
  outline: 2px solid var(--primary-500);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* Skip to Main Content */
.skip-to-main {
  position: absolute;
  top: -100px;
  left: 0;
  background: var(--bg-elevated);
  color: var(--text-primary);
  padding: var(--space-4) var(--space-6);
  border-radius: var(--radius-lg);
  z-index: var(--z-tooltip);
  transition: top var(--duration-fast);
}

.skip-to-main:focus {
  top: var(--space-4);
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Screen Reader Only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

---

## 🎯 IMPLEMENTATION CHECKLIST

After implementing this design system:

**Design Tokens:**
- [ ] Color system implemented
- [ ] Typography scale set up
- [ ] Spacing scale applied
- [ ] Shadow system in place
- [ ] Border radius standardized

**Components:**
- [ ] Button variants working
- [ ] Card styles applied
- [ ] Input components functional
- [ ] Modal system implemented
- [ ] Toast notifications working
- [ ] Navigation responsive

**Animations:**
- [ ] Scroll reveals active
- [ ] Hover states smooth
- [ ] Transitions consistent
- [ ] Loading states present

**Responsive:**
- [ ] Mobile breakpoints working
- [ ] Grid system responsive
- [ ] Typography scales
- [ ] Touch targets adequate

**Accessibility:**
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Color contrast passes WCAG
- [ ] Screen reader friendly
- [ ] Reduced motion supported

**Performance:**
- [ ] Images lazy loaded
- [ ] Animations GPU accelerated
- [ ] JavaScript optimized
- [ ] CSS minified
- [ ] Page loads < 3s

---

## 🚀 EXPECTED RESULTS

**Before:** Generic, template-looking website  
**After:** Premium, modern, award-worthy digital experience

**Brand Perception:**
- Premium and trustworthy
- Modern and cutting-edge
- Professional and polished
- User-friendly and accessible

**User Experience:**
- Smooth and delightful
- Fast and responsive
- Consistent and predictable
- Accessible to everyone

**Business Impact:**
- +40% longer time on site
- +30% conversion rate
- +60% mobile conversions
- +50% brand recall

---

## 📚 RESOURCES

**Inspiration:**
- Apple.com - Premium design
- Stripe.com - Professional UI
- Linear.app - Fast interactions
- Vercel.com - Modern gradients
- Airbnb.com - User-friendly

**Tools:**
- Figma for design
- Chrome DevTools for debugging
- Lighthouse for performance
- WAVE for accessibility
- BrowserStack for testing

**Documentation:**
- CSS Variables: MDN Web Docs
- Accessibility: WCAG 2.1
- Performance: web.dev
- Animations: cubic-bezier.com

---

**This is the ultimate design system for building absolutely gorgeous, modern websites.** 🎨✨

Copy this entire prompt into Google Antigravity and watch your website transform into a premium digital experience! 🚀

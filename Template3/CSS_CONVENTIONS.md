# CSS CONVENTIONS & STYLE GUIDE

## 📋 Overview

This document defines consistent CSS patterns, naming conventions, and organization standards for the Sneaker Hub project.

---

## 🎯 Naming Conventions

### Class Naming Pattern

Use a **modified BEM (Block Element Modifier)** convention:

```
.component-name          /* Block: Main container */
.component-name-item     /* Element: Child component */
.component--variant      /* Modifier: State/variant */
.component-name__item    /* Alternative Element syntax */
```

### Real Examples

```css
/* Block */
.product-card {}          /* Main product card container */
.product-grid {}          /* Grid wrapper */

/* Elements */
.product-card-copy {}     /* Text content section */
.product-card-image {}    /* Image wrapper */
.brand-marquee-track {}   /* Marquee animation track */

/* Modifiers */
.product-card--featured {} /* Featured product variant */
.btn--primary {}           /* Primary button state */
.btn--secondary {}         /* Secondary button state */
.nav-links a.active {}     /* Active navigation item */
```

### Utility Classes

Avoid utility-only classes. Instead, use semantic component names or CSS variables:

```css
/* ❌ DON'T: Generic utilities */
.flex { display: flex; }
.gap-1 { gap: 1rem; }
.text-sm { font-size: 0.9rem; }

/* ✅ DO: Semantic or grouped */
.section-header { /* Semantic grouping */ }
.product-copy { /* Component-specific */ }
```

---

## 📐 CSS File Structure

Every CSS file should follow this organization:

```css
/* ==========================================================================
   filename.css - CLEAR COMPONENT DESCRIPTION
   ========================================================================== */

/* 1. PRIMARY COMPONENT */
.component {
  /* Core layout, sizing, positioning */
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  
  /* Colors & typography */
  background: var(--surface);
  color: var(--text);
  font-size: 1rem;
  font-family: var(--font-body);
  
  /* Interaction states */
  transition: all 0.3s ease;
}

.component:hover {
  background: var(--accent-soft);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1);
}

/* 2. SUB-ELEMENTS */
.component-item {
  /* Specific sub-element styling */
}

.component-item strong {
  font-weight: 700;
  color: var(--accent);
}

/* 3. MODIFIERS & STATES */
.component--active {
  background: var(--accent);
  color: white;
}

.component:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* 4. ANIMATIONS */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 5. RESPONSIVE MEDIA QUERIES */
@media (max-width: 1060px) {
  .component {
    flex-direction: column;
    gap: 1rem;
  }
}

@media (max-width: 640px) {
  .component {
    padding: 1rem;
  }
}
```

### Section Order Priority

1. Main block (`.component`)
2. Elements/children (`.component-item`)
3. Modifiers/states (`.component--variant`, `:hover`, `:focus`)
4. Animations (`@keyframes`)
5. Media queries (tablet, mobile breakpoints)

---

## 🎨 CSS Variables Usage

### Colors

Always use variables for colors:

```css
/* ✅ DO */
.card {
  background: var(--surface);      /* White cards */
  color: var(--text);              /* Dark text */
  border: 1px solid var(--border); /* Accent borders */
}

.btn-primary {
  background: var(--accent);       /* Blue accent */
  color: white;
}

/* ❌ DON'T */
.card {
  background: #ffffff;
  color: #0f172a;
  border: 1px solid rgba(29, 99, 255, 0.08);
}
```

### Typography

Use font variables:

```css
/* ✅ DO */
h1 {
  font-family: var(--font-heading);  /* Montserrat */
  font-weight: 800;
  font-size: 3rem;
}

p {
  font-family: var(--font-body);     /* Poppins */
  font-weight: 400;
  font-size: 1rem;
}

/* ❌ DON'T */
h1 {
  font-family: "Montserrat", sans-serif;
}
```

### Available Variables

```css
/* Colors */
--bg                 /* Page background: #f6f9ff */
--surface            /* Cards/surfaces: #ffffff */
--surface-soft       /* Soft backgrounds: #edf3ff */
--text               /* Primary text: #0f172a */
--muted              /* Secondary text: #64748b */
--accent             /* Primary interactive: #1d63ff */
--accent-soft        /* Soft accent overlay */
--border             /* Border color: rgba(29, 99, 255, 0.08) */

/* Gradients */
--primary-gradient   /* Blue gradient for accents */
--secondary-gradient /* Light gradient for cards */
--blue-gradient      /* Deep blue gradient */
--gold-gradient      /* Gold/orange gradient */

/* Fonts */
--font-heading       /* Montserrat for headings */
--font-body          /* Poppins for body text */
```

---

## 🎯 Common Patterns

### Buttons

```css
.btn {
  /* Base button styles */
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--font-heading);
}

/* Primary variant */
.btn--primary {
  background: var(--accent);
  color: white;
  box-shadow: 0 4px 12px rgba(29, 99, 255, 0.25);
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(29, 99, 255, 0.35);
}

/* Secondary variant */
.btn--secondary {
  background: var(--accent-soft);
  color: var(--accent);
  border: 1px solid var(--border);
}

.btn--secondary:hover {
  background: rgba(29, 99, 255, 0.12);
  border-color: var(--accent);
}
```

### Cards with Hover Lift

```css
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1.8rem;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
}

.card:hover {
  transform: translateY(-8px);      /* Lift effect */
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);
  border-color: var(--accent);
}
```

### Responsive Grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

@media (max-width: 1060px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
```

### Image with Fixed Aspect Ratio

```css
.image-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 1.5rem;
}

.image-container img {
  width: 100%;
  height: 280px;
  object-fit: cover;        /* Maintains aspect ratio, crops excess */
  display: block;
  transition: transform 0.4s ease;
}

.image-container:hover img {
  transform: scale(1.05);   /* Subtle zoom on hover */
}
```

---

## 📱 Responsive Design Standards

### Breakpoints

```css
/* Mobile-first approach */

/* Desktop (default) */
.grid { grid-template-columns: repeat(3, 1fr); }

/* Tablet: max-width 1060px */
@media (max-width: 1060px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Mobile: max-width 640px */
@media (max-width: 640px) {
  .grid { grid-template-columns: 1fr; }
}
```

### Fluid Typography

Use `clamp()` for responsive font sizes:

```css
/* Fluid size between min (2rem) and max (4.75rem) */
h1 {
  font-size: clamp(2rem, 4vw, 4.75rem);
}

/* Usage in hero: scales with viewport */
.hero h1 {
  font-size: clamp(2.5rem, 4vw, 4.75rem);
  line-height: 1.1;
}
```

---

## ✨ Animation & Transitions

### Duration Standards

```css
/* Interaction feedback */
transition: all 0.2s ease;          /* Quick: hover states, small transforms */

/* Component transitions */
transition: all 0.3s ease;          /* Medium: card hovers, visibility changes */

/* Page animations */
animation: fadeIn 0.6s ease-out;    /* Longer: page load animations */
```

### Easing Functions

```css
/* Quick interactions */
transition: all 0.2s ease;

/* Smooth, natural motion */
transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

/* Gravity-like motion */
transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Keyframe Template

```css
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.element {
  animation: slideInUp 0.6s ease-out;
}
```

---

## 🔍 Code Quality Checklist

Before committing CSS:

- [ ] **No hardcoded colors** - All use CSS variables (except gradients)
- [ ] **Consistent indentation** - 2 spaces per level
- [ ] **Section comments** - `/* 1. SECTION NAME */` headers
- [ ] **Hover states defined** - All interactive elements have `:hover`
- [ ] **Responsive breakpoints** - Tested at 1060px and 640px
- [ ] **No duplicate styles** - Reuse selectors or create utilities
- [ ] **Proper class naming** - Semantic, not appearance-based
- [ ] **Comments for complex rules** - `/* What & why */`
- [ ] **Box-sizing border-box** - Included in base.css
- [ ] **Line-height defined** - For readability (1.5-1.8 for body text)

---

## 🚫 Anti-Patterns to Avoid

```css
/* ❌ AVOID: Too specific */
.container .row .column .card h3 { }

/* ✅ DO: Direct class */
.card h3 { }

/* ❌ AVOID: Hardcoded values */
.card { background: #ffffff; color: #0f172a; }

/* ✅ DO: Use variables */
.card { background: var(--surface); color: var(--text); }

/* ❌ AVOID: !important (except resets) */
.btn { background: red !important; }

/* ✅ DO: Higher specificity if needed */
.btn--primary { background: var(--accent); }

/* ❌ AVOID: Magic numbers */
.element { margin-left: 17px; }

/* ✅ DO: Use spacing scale */
.element { margin-left: 1rem; /* 8px base */ }

/* ❌ AVOID: Inline styles in CSS comments */
/* Color: #ff0000; Font: Arial; */

/* ✅ DO: Proper documentation */
/* Primary accent color - used for CTAs and highlights */
--accent: #1d63ff;
```

---

## 📝 Comment Examples

### File Header

```css
/* ==========================================================================
   product.css - PRODUCT CARDS & GRID LAYOUTS
   ========================================================================== */
```

### Section Header

```css
/* 1. PRODUCT GRID LAYOUT */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

/* 2. PRODUCT CARD */
.product-card {
  /* ... */
}

/* 3. RESPONSIVE ADJUSTMENTS */
@media (max-width: 640px) {
  /* ... */
}
```

### Complex Rules

```css
/* Create infinite marquee loop by duplicating track element */
.marquee-track {
  display: flex;
  gap: 1.5rem;
  animation: marquee-scroll 20s linear infinite;
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
```

---

## 🔄 Refactoring Guide

### When Moving Styles to Component CSS

1. Extract from `base.css`
2. Copy to specific component CSS file
3. Keep only base resets/globals in `base.css`
4. Update imports/dependencies
5. Test in DevTools

**Example**:

```css
/* base.css - KEEP: Global */
:root { /* ... variables ... */ }
* { box-sizing: border-box; }
body { /* base styles */ }

/* product.css - MOVE: Component-specific */
.product-card { /* ... */ }
.product-grid { /* ... */ }
```

---

## 🎓 Best Practices Summary

1. **Use CSS Variables** for all colors, fonts, spacing
2. **Semantic Naming** - class names explain purpose
3. **Mobile-First** - start with mobile, enhance for desktop
4. **Section Comments** - organize CSS into clear sections
5. **Consistent Spacing** - use 8px base unit multiples
6. **Meaningful Transitions** - not all elements need animations
7. **Test Responsively** - verify at all breakpoints
8. **Keep It DRY** - reuse component patterns
9. **Performance Matters** - minimize repaints/reflows
10. **Document Intent** - why a style exists, not just what

---

**Last Updated**: 2026 | **Version**: 1.0

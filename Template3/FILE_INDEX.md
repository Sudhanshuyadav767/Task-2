# PROJECT FILE INDEX & DOCUMENTATION MAP

## 📍 Complete Project Structure

```
Template3/
│
├── 📄 CORE FILES
│   ├── index.html                  ← ENTRY POINT - Dynamic component loader
│   ├── script.js                   ← Global JavaScript initialization
│   └── favicon.ico                 (optional brand icon)
│
├── 📁 Documentation (READ THESE!)
│   ├── ARCHITECTURE.md             ← Project overview, structure, design system
│   ├── CSS_CONVENTIONS.md          ← CSS patterns, naming, best practices
│   ├── QUICK_START.md              ← Developer quick reference guide
│   └── FILE_INDEX.md               ← This file
│
├── 📁 styles/ - Centralized Stylesheets
│   ├── base.css                    (600+ lines) Global variables, resets, typography
│   ├── header.css                  (100+ lines) Header/navigation component
│   ├── hero.css                    (100+ lines) Hero section styles
│   ├── brands.css                  (100+ lines) Brand marquee & brand cards
│   ├── products.css                (150+ lines) Products grid & categories
│   ├── gallery.css                 (100+ lines) Image gallery styles
│   └── footer.css                  (300+ lines) Footer, perks, newsletter
│
├── 📁 components/ - Reusable HTML Components (loaded via fetch)
│   ├── header.html                 Sticky navigation, logo, cart button
│   ├── hero.html                   Main value proposition, CTAs
│   ├── brand-marquee.html          Infinite scrolling brand logos
│   ├── categories.html             6-category grid showcase
│   ├── brands.html                 Featured brand spotlights (Nike, Adidas, Puma)
│   ├── trending.html               6 trending products with prices
│   ├── gallery.html                3-column image showcase
│   ├── content.html                Service features + perks + newsletter
│   └── footer.html                 Footer links + social media
│
├── 📁 Product_Images/ - Product Photography
│   └── 13 High-Quality JPG Images
│       ├── pexels-sriram-kodey-479684857-20748952.jpg
│       ├── pexels-oguz-kagan-cevik-*.jpg
│       ├── pexels-melvin-buezo-*.jpg
│       └── ... (13 total product images)
│
└── 📁 Logos/ - Brand Logo Assets
    └── 11 PNG Brand Logos
        ├── PhotoshopExtension_Image (8).png → (18).png
        └── ... (11 total brand logos)
```

---

## 📖 Documentation Map

| Document | Purpose | Read Time | Audience |
|----------|---------|-----------|----------|
| **ARCHITECTURE.md** | Project structure, components, design system | 15 min | Everyone |
| **CSS_CONVENTIONS.md** | CSS patterns, naming, best practices | 20 min | CSS developers |
| **QUICK_START.md** | Quick reference, common edits, troubleshooting | 10 min | Developers starting work |
| **FILE_INDEX.md** | This file - complete file directory | 5 min | Project overview |

---

## 🎯 File Purposes & Dependencies

### Entry Point (`index.html`)
**Purpose**: Main HTML document, component loader shell
**Loads**: All CSS files (7 total) and component HTML files (9 total)
**Depends On**: 
- `styles/base.css` (variables must load first)
- All 6 component CSS files
- All 9 component HTML files
**Key Elements**:
- Meta tags (SEO, viewport)
- Font loading (Google Fonts)
- CSS links
- Component placeholder divs
- Async component loader script

---

### Global Styles (`styles/base.css`)
**Purpose**: Foundation - all CSS variables, resets, typography, global utilities
**Size**: ~600 lines
**Contains**:
- `:root` CSS variables (colors, fonts, gradients)
- Box-sizing reset
- Typography scale
- Base element styling
- Keyframe animations (marquee, glow, etc.)
- `.container` utility class
- `.btn`, `.btn--primary`, `.btn--secondary` base styles
- Responsive breakpoints for global elements
**Dependencies**: None (foundational)
**Used By**: All other CSS files

---

### Component CSS Files

#### `styles/header.css` (~150 lines)
**Purpose**: Sticky header styling
**Contains**:
- `.topbar` (sticky container, glass morphism)
- `.header-inner` (flex layout)
- `.logo` (gradient text)
- `.nav-links` (capsule nav bar)
- `.icon-btn` (cart button)
- `.menu-toggle` (mobile hamburger)
- Responsive: Mobile nav hidden, hamburger shown at 960px
**Depends On**: `base.css` (variables)

#### `styles/hero.css` (~150 lines)
**Purpose**: Hero section styling
**Contains**:
- `.hero` (section container)
- `.hero-grid` (2-column layout: 1.25fr 1fr)
- `.hero-copy` (text content)
- `.eyebrow` (accent text)
- `.hero-actions` (CTA buttons)
- `.hero-stats` (stat badges)
- `.hero-image`, `.image-frame` (image wrapper)
- Responsive: Single column below 1060px
**Depends On**: `base.css`

#### `styles/brands.css` (~150 lines)
**Purpose**: Brand marquee and brand card styles
**Contains**:
- `.brand-marquee` (container)
- `.brand-marquee-track` (animated track)
- `.brand-logo` (individual logo card)
- `.brand-card` (spotlight card)
- `.brand-spotlight` (featured brands section)
- `@keyframes marquee-scroll` (infinite animation)
- Hover effects and transitions
**Depends On**: `base.css`, `script.js` for track duplication

#### `styles/products.css` (~200 lines)
**Purpose**: Product grid, category cards, product cards
**Contains**:
- `.product-grid` (3-column responsive)
- `.product-card` (card container)
- `.product-copy` (text content)
- `.link` (shop link with arrow)
- `.category-grid` (3x2 grid)
- `.category-card` (category card)
- `.section-header` (section header styling)
- Responsive grid adjustments
**Depends On**: `base.css`

#### `styles/gallery.css` (~100 lines)
**Purpose**: Image gallery display
**Contains**:
- `.image-gallery` (section)
- `.gallery-grid` (3-column grid)
- Image hover effects (scale + lift)
- Responsive: 2-col tablet, 1-col mobile
**Depends On**: `base.css`

#### `styles/footer.css` (~300 lines)
**Purpose**: Footer, perks, content sections, newsletter
**Contains**:
- `.footer` (footer section)
- `.footer-grid` (3-column layout)
- `.footer-links` (link groups)
- `.social-row` (social icons)
- `.content-grid` (3 content items)
- `.content-item` (individual content card)
- `.perks-grid` (4-column perks)
- `.perks-grid article` (perk card)
- `.review-banner` (rating section)
- `.review-banner-grid` (layout)
- `.newsletter` (newsletter section)
- `.newsletter-card` (signup card)
- `.newsletter-form`, `.newsletter-form input`
- Responsive adjustments for all layouts
**Depends On**: `base.css`

---

### Component HTML Files

All components follow pattern:
1. HTML comment header (purpose, layout, styling file)
2. `<section>` or `<article>` wrapper with ID
3. `.container` div for max-width constraint
4. Semantic HTML structure
5. Component-specific classes

#### `components/header.html` (~35 lines)
**Loaded By**: `index.html` → `#component-header`
**Styling**: `header.css`
**Contains**:
- Sticky header with logo
- Navigation links (Home, Brands, Categories, Trending, More)
- Shop Now CTA button
- Cart button with badge
- Mobile hamburger menu
**Dependencies**: `script.js` for mobile menu toggle, anchor links

#### `components/hero.html` (~30 lines)
**Loaded By**: `index.html` → `#component-hero`
**Styling**: `hero.css`
**Contains**:
- Headline + description
- Two CTA buttons (Trending Now, Browse Categories)
- Three stat badges (120+ Brands, 8000+ Styles, Free Shipping)
- Hero image placeholder
**Assets Used**: None (image commented out in current version)

#### `components/brand-marquee.html` (~20 lines)
**Loaded By**: `index.html` → `#component-brand-marquee`
**Styling**: `brands.css`
**Contains**:
- `.brand-marquee-track` with 11 brand logo `<img>` tags
- No copy, pure visual component
**Assets Used**: 11 PNG logos from `Logos/` folder
**JavaScript**: `script.js` duplicates track for infinite loop

#### `components/categories.html` (~80 lines)
**Loaded By**: `index.html` → `#component-categories`
**Styling**: `products.css`
**Contains**:
- Section header with eyebrow + h2
- 6 category cards (Running, Training, Basketball, Lifestyle, Casual, Kids)
- Each card has h3 + description
- SVG icons for each category
**Assets Used**: None (inline SVGs)

#### `components/brands.html` (~70 lines)
**Loaded By**: `index.html` → `#component-brands`
**Styling**: `brands.css`
**Contains**:
- Section header (Featured Brands)
- 3 brand spotlight cards (Nike, Adidas, Puma)
- Each: brand image + h3 + description
**Assets Used**: 3 product images from `Product_Images/` folder

#### `components/trending.html` (~80 lines)
**Loaded By**: `index.html` → `#component-trending`
**Styling**: `products.css`
**Contains**:
- Section header (Trending Now)
- 6 product cards: Nike Air Zoom, Adidas Ultraboost, Puma Fuse, Reebok Classic, New Balance 574, Jordan Retro
- Each: product image + title + price + shop link
**Assets Used**: 6 product images from `Product_Images/` folder

#### `components/gallery.html` (~40 lines)
**Loaded By**: `index.html` → `#component-gallery`
**Styling**: `gallery.css`
**Contains**:
- Section header (Gallery)
- 3-column grid with 3 product images
- Pure image showcase, minimal text
**Assets Used**: 3 product images from `Product_Images/` folder

#### `components/content.html` (~150 lines)
**Loaded By**: `index.html` → `#component-content`
**Styling**: `footer.css`
**Contains**:
1. Content section (3 items): Authentic Stock, Fast Delivery, Easy Exchange
2. Perks section (4 items): Trustworthy Sellers, Easy Returns, Authentic Guarantee, Customer Support
3. Review banner: 4.9/5 star rating + testimonial
4. Newsletter: Email signup form with submit button
**Assets Used**: None (text-based)

#### `components/footer.html` (~40 lines)
**Loaded By**: `index.html` → `#component-footer`
**Styling**: `footer.css`
**Contains**:
- Brand info (left column)
- Navigation links (center columns)
- Social media icons (right column)
- Copyright notice (bottom)
**Assets Used**: None

---

### JavaScript (`script.js`)
**Purpose**: Global initialization and event handling
**Loaded**: After all components inserted into DOM
**Contains**:
- `initNavigation()` - Smooth scroll, mobile menu toggle
- `initMarquee()` - Duplicates marquee track for infinite loop
- `DOMContentLoaded` event wrapper
**Dependencies**: All 9 component HTML files must be loaded first

---

### Asset Folders

#### `Product_Images/` (13 images)
**Used By**: Hero, Brands, Trending, Gallery components
**File Type**: JPG
**Typical Size**: 500KB-1MB each
**Resolution**: High-quality product photography

**Image List**:
1. `pexels-sriram-kodey-479684857-20748952.jpg` - Hero image
2-4. `pexels-oguz-kagan-cevik-*.jpg` (3 images) - Brand spotlight images
5-6. `pexels-melvin-buezo-*.jpg` (2 images) - Brand spotlight images
7-13. (6 additional product images) - Trending and gallery sections

#### `Logos/` (11 PNG files)
**Used By**: Brand Marquee component
**File Type**: PNG (transparent background)
**Size**: ~50KB each
**Naming**: `PhotoshopExtension_Image (8).png` through `(18).png`

---

## 🔗 Component Loading Flow

```
index.html (page load)
    ↓
Load 7 CSS files (parallel)
    ↓
Inline loader script starts
    ↓
fetch components/header.html → insert to #component-header
    ↓
fetch components/hero.html → insert to #component-hero
    ↓
fetch components/brand-marquee.html → insert to #component-brand-marquee
    ↓
... (remaining 6 components, sequential)
    ↓
All components inserted into DOM
    ↓
Load script.js
    ↓
DOMContentLoaded event fires
    ↓
initNavigation() + initMarquee() functions execute
    ↓
Page fully interactive
```

---

## 📊 File Statistics

| Category | Count | Total Lines |
|----------|-------|-------------|
| HTML Entry | 1 | ~60 lines |
| Component HTML | 9 | ~400 lines |
| CSS Files | 7 | ~1,600 lines |
| JavaScript | 1 | ~50 lines |
| Documentation | 4 | ~2,000 lines |
| **TOTAL** | **22 files** | **~4,110 lines** |

---

## 🎯 Quick Edit Guide

### To Add/Change...

| Item | File | Location |
|------|------|----------|
| Primary color | `styles/base.css` | Line: `:root { --accent: ... }` |
| Hero headline | `components/hero.html` | `<h1>` tag |
| Hero CTA button | `components/hero.html` | `.btn--primary` or `.btn--secondary` |
| Product card | `components/trending.html` | Copy existing `.product-card` |
| Category | `components/categories.html` | Copy existing `.category-card` |
| Brand logo | `components/brand-marquee.html` | Add `<img class="brand-logo" .../>` |
| Section header text | Any component | Update `.section-header` content |
| Footer link | `components/footer.html` | Add `<a>` to `.footer-links` |
| Social media link | `components/footer.html` | Add button to `.social-row` |

---

## ✅ Quality Checklist

### Before Publishing

- [ ] All 9 components load (F12 → Console, no 404s)
- [ ] No CSS errors (F12 → Console)
- [ ] Responsive tested at 640px and 1060px
- [ ] All images load correctly
- [ ] Links work (anchor navigation)
- [ ] Hover effects smooth
- [ ] Performance good (Lighthouse >80)
- [ ] Accessibility checks pass
- [ ] Mobile menu hamburger works
- [ ] Forms accessible (keyboard navigable)

---

## 🚀 Deployment Checklist

### Before Going Live

1. Test on real devices (mobile, tablet, desktop)
2. Verify all images compressed
3. Check all external URLs valid
4. Remove console.log() statements
5. Minify CSS/JS (optional, if performance issue)
6. Setup 301 redirects if domain changed
7. Configure analytics
8. Setup SSL certificate (HTTPS)
9. Run SEO audit
10. Test on 3+ browsers (Chrome, Firefox, Safari)

---

## 📝 Version History

- **v1.0** - Initial launch
  - Component-based architecture
  - 9 reusable components
  - Multi-brand ecommerce
  - Responsive design (desktop, tablet, mobile)
  - Smooth animations & glass morphism
  - 13 product images, 11 brand logos

---

## 🆘 Common Issues Reference

| Issue | Solution | File |
|-------|----------|------|
| Components not loading | Use HTTP server, not file:// | index.html |
| Styles broken | Clear cache (Ctrl+F5) | styles/* |
| Images not showing | Check paths, verify files exist | components/* |
| Mobile menu stuck | Check script.js loaded | script.js |
| Marquee stutters | Verify duplication working | script.js |
| Colors not matching design | Update CSS variables | base.css |

---

## 📞 Support Resources

- **Architecture Overview** → `ARCHITECTURE.md`
- **CSS Help** → `CSS_CONVENTIONS.md`
- **Quick Fixes** → `QUICK_START.md`
- **Browser DevTools** → Press F12
- **Responsive Testing** → F12 → Device Toolbar toggle

---

**Document Version**: 1.0 | **Last Updated**: 2026 | **Status**: ✅ Complete

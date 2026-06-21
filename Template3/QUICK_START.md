# QUICK START GUIDE - Developer Reference

## 🚀 Getting Started

### Project Setup

```bash
# 1. Open Terminal at Template3/
# 2. Start a local HTTP server
python -m http.server 8000
# OR: npx http-server
# OR: Use VS Code Live Server extension

# 3. Open http://localhost:8000 in browser
```

> ⚠️ **Important**: Must use HTTP server (not file://) due to fetch() API requirements

---

## 📂 File Navigation

### Main Entry Point
- **index.html** - Entry point, loads all 9 components via fetch

### Styles
```
styles/base.css         → Global variables, resets, typography
styles/header.css       → Header/nav styles
styles/hero.css         → Hero section
styles/brands.css       → Brand marquee + brand cards
styles/products.css     → Products grid + categories
styles/gallery.css      → Image gallery
styles/footer.css       → Footer + perks + newsletter
```

### Components
```
components/header.html          → Sticky navigation
components/hero.html            → Value prop section
components/brand-marquee.html   → Scrolling brand logos
components/categories.html      → 6 categories
components/brands.html          → Featured brands
components/trending.html        → Trending products
components/gallery.html         → Image showcase
components/content.html         → Perks + newsletter
components/footer.html          → Footer
```

### Assets
```
Product_Images/    → Product photos (13 images)
Logos/             → Brand logos (11 PNG files)
```

---

## 🎨 Common Edits

### Change Primary Color
Edit in `styles/base.css`:
```css
:root {
  --accent: #1d63ff;  /* Change this value */
}
```
All components automatically update via CSS variable inheritance.

### Add Product to Trending
Edit `components/trending.html`:
```html
<article class="product-card">
  <img src="Product_Images/your-image.jpg" alt="Product name" />
  <div class="product-copy">
    <h3>Nike Air Force 1</h3>
    <p>₹8,999</p>
    <a href="#" class="link">Shop now</a>
  </div>
</article>
```

### Add Brand to Marquee
Edit `components/brand-marquee.html`:
```html
<img class="brand-logo" src="Logos/new-brand.png" alt="Brand name" />
```

### Update Hero Section
Edit `components/hero.html`:
- Change headline: `<h1>Your new headline</h1>`
- Update description: `<p>Your text here</p>`
- Change CTA: `<a class="btn btn-primary" href="#...">Text</a>`

### Customize Header
Edit `components/header.html`:
- Logo text: `<span>Your Brand Name</span>`
- Nav links: Add/remove `<a href="#section-id">Link</a>`
- CTA button: Update button text

---

## 🧪 Testing Checklist

### Before Committing

```
✓ Tested on Desktop (1920px)
✓ Tested on Tablet (1024px, 1060px breakpoint)
✓ Tested on Mobile (375px, 640px breakpoint)
✓ No console errors (F12 → Console tab)
✓ All images load (F12 → Network tab)
✓ Hover effects work
✓ Navigation links functional
✓ Form inputs accessible
✓ Animations smooth
✓ Performance: Lighthouse >80
```

### Quick Mobile Test
Press `F12` → Click device toggle button → Select "iPhone 12"

---

## 🐛 Troubleshooting

### Components Not Loading
**Problem**: White/blank page
**Solution**: 
- Check console (F12) for 404 errors
- Verify using HTTP server (not file://)
- Check file paths in `index.html` match actual filenames
- Verify all 9 component files exist

### Styles Not Applied
**Problem**: Components look unstyled
**Solution**:
- Reload page (Ctrl+F5) to clear cache
- Check CSS file paths in index.html
- Verify `base.css` loaded first (variables need to be defined)
- Check DevTools → Styles to see which rules apply

### Images Not Showing
**Problem**: Broken image icons
**Solution**:
- Verify image files exist in `Product_Images/` or `Logos/`
- Check image file paths are relative to component HTML
- Try absolute path: `/Product_Images/filename.jpg`
- Check file extensions match: `.jpg`, `.png`, etc.

### Marquee Animation Stutters
**Problem**: Brand logos animation is choppy or has gaps
**Solution**:
- Open DevTools → check if JavaScript errors
- Verify `script.js` is loaded after components
- Check if `.brand-marquee-track` is being duplicated
- Inspect animation frame rate (should be smooth 60fps)

---

## 💻 VS Code Setup (Recommended)

### Extensions
```
1. Live Server
2. Prettier - Code formatter
3. CSS Peek
4. Thunder Client (testing APIs)
```

### Settings (settings.json)
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[html]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[css]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "editor.tabSize": 2,
  "editor.insertSpaces": true
}
```

### Keyboard Shortcuts
- **Alt+L** - Start Live Server (with extension)
- **Ctrl+Shift+F** - Format entire file
- **F12** - Open DevTools
- **Ctrl+F5** - Hard refresh (clear cache)

---

## 📊 Component Load Order

Components load in this sequence (see `index.html`):

```
1. Header (navigation)
2. Hero (main value prop)
3. Brand Marquee (scrolling logos)
4. Categories (6 categories)
5. Brands (featured brands)
6. Trending (6 products)
7. Gallery (image showcase)
8. Content (perks + newsletter)
9. Footer (footer)
10. script.js (initialization)
```

All sequential (one completes before next starts) to maintain dependency order.

---

## 🎯 CSS Editing Quick Reference

### Spacing (8px base unit)
```css
.element { gap: 1rem; }           /* 8px */
.element { padding: 1.5rem; }     /* 12px */
.element { margin: 2rem; }        /* 16px */
.element { padding: 3rem; }       /* 24px */
```

### Font Sizing
```css
.element { font-size: 0.9rem; }   /* Small: 14px */
.element { font-size: 1rem; }     /* Base: 16px */
.element { font-size: 1.25rem; }  /* Large: 20px */
.element { font-size: 1.5rem; }   /* XL: 24px */
```

### Common Transitions
```css
.element { transition: all 0.2s ease; }  /* Quick hover */
.element { transition: all 0.3s ease; }  /* Standard */
.element { transition: all 0.4s ease; }  /* Smooth animation */
```

### Hover Effects
```css
/* Lift effect */
.element:hover { transform: translateY(-8px); }

/* Scale */
.element:hover { transform: scale(1.05); }

/* Color change */
.element:hover { color: var(--accent); }

/* Multiple effects */
.element:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);
  border-color: var(--accent);
}
```

---

## 🔐 Don'ts (Common Mistakes)

```
❌ Don't hardcode colors instead of using CSS variables
❌ Don't skip responsive media queries
❌ Don't use file:// protocol - use HTTP server
❌ Don't forget alt text on images
❌ Don't make button text too long (breaks layout)
❌ Don't use inline styles when CSS file exists
❌ Don't forget aria-label on buttons
❌ Don't skip testing on mobile
❌ Don't commit without checking console for errors
❌ Don't modify base.css if component CSS exists
```

---

## ✅ Do's (Best Practices)

```
✅ Use CSS variables for all colors
✅ Mobile-first: design for mobile, enhance for desktop
✅ Test responsive at 640px and 1060px breakpoints
✅ Add comments explaining complex CSS
✅ Keep component CSS focused on one component
✅ Use semantic HTML: <section>, <article>, <header>, etc.
✅ Add aria-label to interactive elements
✅ Verify all images have alt text
✅ Use meaningful class names
✅ Keep Git commits small and focused
```

---

## 🔗 Useful Commands

### Terminal/Command Line

```bash
# Start local server (Python 3)
python -m http.server 8000

# Start local server (Node.js)
npx http-server

# Start local server (Ruby)
ruby -run -ehttpd . -p8000

# Open browser
# http://localhost:8000
```

### Browser DevTools (F12)

```
F12                  → Open DevTools
Ctrl+Shift+I         → DevTools alternate
Ctrl+Shift+K         → Open Console
Ctrl+Shift+C         → Element picker
Ctrl+Shift+M         → Toggle device toolbar (mobile)
Ctrl+Shift+E         → Open DevTools to Elements tab
Ctrl+F5              → Hard refresh (clear cache)
```

---

## 📚 File Change Template

### Adding New Product Image

1. **Add file** → `Product_Images/new-image.jpg`
2. **Update component** → `components/trending.html`
   ```html
   <article class="product-card">
     <img src="Product_Images/new-image.jpg" alt="Product Name" />
     ...
   </article>
   ```
3. **Test** → Refresh browser, verify image appears
4. **Commit** → Git commit with meaningful message

### Adding New Category

1. **Update component** → `components/categories.html`
   ```html
   <article class="category-card">
     <h3>Category Name</h3>
     <p>Description text</p>
   </article>
   ```
2. **Test** → Refresh, verify responsive layout
3. **Commit** → Git commit

---

## 🎓 Learning Path

1. **Start here** → Read `ARCHITECTURE.md` (10 min)
2. **Understand CSS** → Read `CSS_CONVENTIONS.md` (15 min)
3. **Modify colors** → Change `--accent` in `base.css`
4. **Add product** → Add card to `components/trending.html`
5. **Test responsive** → Resize browser to tablet/mobile
6. **Deploy** → Upload files to hosting service

---

## 🆘 Getting Help

### Documentation Files
- **ARCHITECTURE.md** - Project structure & components
- **CSS_CONVENTIONS.md** - CSS patterns & standards
- **index.html** - Component loader system
- **script.js** - JavaScript initialization

### Common Questions

**Q: How do I change the hero image?**
A: Edit `components/hero.html`, change img src path

**Q: Where are the product images stored?**
A: `Product_Images/` folder (13 images)

**Q: How do I add a new category?**
A: Edit `components/categories.html`, add new `.category-card`

**Q: Why is my page loading blank?**
A: Use HTTP server (not file://), check console for errors

**Q: How do I make the site mobile-friendly?**
A: Already responsive! Test at 640px and 1060px breakpoints

---

**Version**: 1.0 | **Last Updated**: 2026 | **Status**: ✅ Production Ready

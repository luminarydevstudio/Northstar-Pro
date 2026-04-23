# Northstar Pro — Premium Service Business Landing Page

A professional, production-ready landing page template built for service
businesses — electricians, plumbers, renovators, HVAC, agencies, consultants,
local professionals, and anyone who sells a service and needs a clean, fast,
conversion-focused web presence.

**No frameworks. No build step. No dependencies.** Just open `index.html`.

---

## Features

- Fully responsive — looks perfect on mobile, tablet, desktop
- Dark mode & light mode with automatic system preference + remembered choice
- Smooth scroll animations (IntersectionObserver, zero libraries)
- Sticky header with frosted-glass scroll effect
- Full-screen mobile navigation
- Floating call-to-action button
- Professional multi-column footer with About Us section
- SEO-ready (meta tags, Open Graph, Twitter Cards, canonical URL)
- Clean semantic HTML5 and WCAG-friendly structure
- Fast — single CSS file, single JS file, no external dependencies except Google Fonts

---

## Project Structure

```
.
├── index.html       Main page markup
├── styles.css       Design system + all component styles
├── script.js        Theme toggle, scroll effects, mobile menu, animations
├── serve.js         Optional local preview server (Node.js)
├── favicon.svg      Brand icon
└── README.md        This file
```

---

## Quick Start

### Option 1 — Open directly
Double-click `index.html`. The site will open in your default browser.

### Option 2 — Local server (recommended)
If you have Node.js installed:

```bash
node serve.js
```

Then open [http://localhost:5500](http://localhost:5500).

---

## How to Customize

### 1. Brand name & logo
Open `index.html` and search for `Northstar` — replace with your business name.
The logo mark letter lives in `<span class="logo__mark">N</span>`.

### 2. Phone number
Search `+15551234567` (the `tel:` link format) and `+1 (555) 123-4567` (the
display format). Replace both with your real number. Appears in:
- Hero "Call the Owner" button
- Contact section
- Footer contact list
- Floating call button
- WhatsApp link (`wa.me/15551234567`)

### 3. Email address
Search `owner@northstarpro.com` and replace it.

### 4. Services
Each service is an `<article class="service-card">` inside the `#services`
section. Change the icon SVG, the `<h3>` title, and the `<p>` description.
To add a service, duplicate one card. To remove one, delete it.

### 5. About Us paragraph
Inside `<footer>`, find `<p class="footer__about">` and replace with your own
company story.

### 6. Hero stats
In the `.hero__stats` block, change the 4 numbers and labels.

### 7. Colors
Open `styles.css` — the design tokens are at the very top inside `:root` and
`[data-theme="dark"]`. Change `--accent` to your brand color and the entire
site updates.

### 8. Meta tags (SEO)
Edit `<title>`, `<meta name="description">`, and the Open Graph tags in the
`<head>` of `index.html`.

---

## Deploying

This site is pure static HTML/CSS/JS. Deploy it anywhere:

- **Netlify**: drag the folder into the Netlify dashboard
- **Vercel**: `vercel` in the project folder
- **GitHub Pages**: push to a repo, enable Pages
- **Cloudflare Pages**: connect the repo
- **Traditional hosting**: upload the files via FTP

---

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS custom properties,
CSS Grid, and IntersectionObserver — all supported in every browser released
in the last 5+ years.

---

## License

Commercial — includes rights to use on one client project per license.
See your purchase agreement for full terms.

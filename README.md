# Agency Website

A React + Vite + Tailwind CSS website for a web dev / AI automation agency serving
restaurants, dentists, gyms, salons, clinics, law firms and real estate businesses.

Built with the free stack: React, Vite, Tailwind CSS, deployed on Cloudflare Pages
from GitHub. Hosting cost: $0.

## Before you launch — rename and personalize

The site ships with placeholder details you should replace:

- **Brand name** — currently "Signal". Find/replace it in `src/components/Nav.jsx`
  and `src/components/Footer.jsx`.
- **Contact links** — `src/components/Footer.jsx` has placeholder email, LinkedIn,
  GitHub and WhatsApp links. Update the `LINKS` array.
- **Contact form backend** — `src/components/Contact.jsx` currently fakes a
  successful submission. Wire it to a real backend, e.g. [Formspree](https://formspree.io)
  (free tier): create a form, grab your endpoint, and uncomment/replace the `fetch`
  call in `handleSubmit`.
- **Portfolio** — `src/components/Portfolio.jsx` has one "live" restaurant project
  and four "Coming Soon" cards. Swap in real screenshots/links as you finish more.
- **Pricing, copy, FAQ** — adjust numbers and wording in `src/components/Pricing.jsx`
  and `src/components/FAQ.jsx` to match your actual offer.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Deploy: GitHub → Cloudflare Pages

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/agency-website.git
   git push -u origin main
   ```

2. **Connect Cloudflare Pages**
   - Go to the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
     **Connect to Git**.
   - Select this repository.
   - Build settings:
     - **Framework preset:** Vite
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
   - Click **Save and Deploy**.

3. **Live URL**
   Cloudflare gives you a free `youragency.pages.dev` URL immediately. Every push
   to `main` redeploys automatically. When you're ready, buy a domain and attach
   it in the Pages project's **Custom domains** tab.

## Tech stack

- React 19 + Vite
- Tailwind CSS 3
- [lucide-react](https://lucide.dev) for icons
- No backend required — the contact form needs a form service (see above) to
  actually deliver messages

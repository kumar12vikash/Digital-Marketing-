# Forma Studio — Design Agency Homepage

A modern, responsive design-agency homepage built with **Next.js 14 (App Router)** and **Tailwind CSS**, created as a Next.js Developer Internship task submission.

## Tech Stack

- **Next.js 14** (App Router, functional components only)
- **React 18**
- **Tailwind CSS** (utility-first styling, dark mode via `class` strategy)
- **lucide-react** (icons)
- **next/font** (Google Fonts: Fraunces + Inter, self-hosted/optimized by Next.js)
- **next/image** (optimized portfolio thumbnails)

## Folder Structure

```
forma-studio/
├── app/
│   ├── layout.js        # Root layout, fonts, SEO metadata, dark-mode flash fix
│   ├── page.js          # Assembles all sections
│   └── globals.css      # Tailwind directives + base styles
├── components/
│   ├── Header.js        # Sticky nav, mobile menu, theme toggle
│   ├── Hero.js           # Hero section
│   ├── Services.js       # 4 service cards
│   ├── Portfolio.js      # 6 project cards (grid + hover overlay)
│   ├── Contact.js        # Contact form with validation + success state
│   ├── Footer.js          # Footer
│   └── ThemeToggle.js     # Dark/light mode toggle button
├── public/                # Static assets (currently empty — using remote placeholder images)
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
└── package.json
```

## Setup Instructions (run locally)

**Requirements:** Node.js 18.17 or newer, and npm.

1. Unzip this project and open a terminal in the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build locally:
```bash
npm run build
npm run start
```

## Deploying (Vercel — recommended)

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and click **Add New → Project**.
3. Import your repository. Vercel auto-detects Next.js — no extra configuration needed.
4. Click **Deploy**. You'll get a live URL in about a minute.

## Assumptions & Additional Features

- Portfolio and hero images use [picsum.photos](https://picsum.photos) seeded placeholder images (configured via `next.config.js` `images.remotePatterns`) since no real client images were provided. Swap the `seed` values or `src` URLs in `components/Portfolio.js` for real project images.
- The contact form validates required fields and email format on the client, then simulates a submit (with a loading state and success message). There is no backend yet — to make it functional, wire the `handleSubmit` function in `components/Contact.js` to an API route, or a service like Formspree/EmailJS.
- Dark mode toggle is implemented with a small inline script (in `app/layout.js`) that reads the saved preference before the page paints, avoiding a light/dark flash on load, plus a toggle button that persists the choice in `localStorage`.
- SEO metadata (title, description, keywords, Open Graph tags) is set in `app/layout.js` using the Next.js Metadata API.
- All sections are separate, reusable functional components with no class components, matching the task's technical requirements.

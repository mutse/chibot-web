# Chibot Web

Official landing page for [Chibot AI](https://github.com/mutse/chibot) — a cross-platform AI chat app with multi-provider support (OpenAI, Google Gemini, Claude), streaming responses, text-to-image generation and web search.

Built with Next.js 15 (App Router), React 19, Tailwind CSS 4 and i18next, with UI translations in 23 languages.

## Getting Started

```bash
npm install
npm run dev      # dev server with Turbopack → http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Project Structure

```
src/
  app/
    page.js        # landing page (client component, assembles sections)
    layout.js      # root layout + SEO metadata
    favicon.ico
    globals.css
  components/      # Navigation, Hero, Features, Product, About, Contact, CTA, Footer,
                   # AnimatedBackground, LanguageToggle
  i18n/
    index.js       # i18next setup: static locale imports, browser language detection
    locales/       # 23 language files (en, zh, zh-TW, zh-HK, ja, ko, fr, de, de-CH, ...)
public/
  logo.png         # site logo (256px)
  og-image.png     # Open Graph share image (1200x630)
  screenshot-*.jpg # product screenshots
  robots.txt
  sitemap.xml
```

## Internationalization

- Language detection order: `localStorage` → browser → `<html>` tag, cached in `localStorage`.
- All 23 locale files are bundled statically and registered at init — no async loading race.
- Missing translations fall back to English.
- `<html lang>` is kept in sync with the active UI language.
- Language list lives in `src/i18n/index.js` (`supportedLanguages`) and the display list in `src/components/LanguageToggle.js` — keep them in sync.

## Deployment

The site is a static single page. Production domain: https://chibot.mutse.top (see `src/app/layout.js`, `public/robots.txt`, `public/sitemap.xml` — update all three if the domain changes).

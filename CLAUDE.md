# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 15 application for Chibot AI's landing page with internationalization support. It uses React 19, Tailwind CSS 4, and i18next for multi-language support.

## Development Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture
This is a Next.js App Router application with the following structure:

### Page Structure
- `src/app/page.js` - Main landing page component (client component, imports i18n config)
- `src/app/layout.js` - Root layout with Geist font configuration and SEO metadata
- Page is client-rendered ('use client') because of i18next; layout stays a server component so `metadata` works

### Core Components (`src/components/`)
- Landing page sections: Hero, Features, Product, About, Contact, CTA, Footer
- Navigation with language switching
- AnimatedBackground for visual effects
- All components are exported via `index.js` for clean imports

### Internationalization System
The app supports 23 languages: English (en), Irish (ga), Chinese Simplified (zh), Japanese (ja), French (fr), German (de), Chinese Traditional (zh-TW), Chinese Traditional Hong Kong (zh-HK), Italian (it), Spanish (es), Dutch (nl), German Swiss (de-CH), Malay (ms), Singapore English (en-SG), Greek (el), Polish (pl), Turkish (tr), US English (en-US), Russian (ru), Hindi (hi), Brazilian Portuguese (pt-BR), Korean (ko), Swedish (sv).

Key i18n files:
- `src/i18n/index.js` - Main i18n configuration: locale files are statically imported and registered in `resources` at init (no async loading race)
- `src/i18n/locales/` - Language files for all 23 supported languages
- `src/components/LanguageToggle.js` - Language selector (native `<select>`); display list must stay in sync with `supportedLanguages`

The i18n system uses:
- Browser language detection with localStorage persistence (order: localStorage → navigator → htmlTag)
- No forced `lng`: detected language applies, with prefix fallback (e.g. zh-CN → zh) then English
- Fallback to English for missing translations
- `<html lang>` synced to the active UI language via `languageChanged`
- `changeLanguage()` exported from `src/i18n/index.js` validates against `supportedLanguages`

### Key Dependencies
- Next.js 15 with React 19
- i18next ecosystem for internationalization
- Tailwind CSS 4 for styling
- Lucide React for icons

## Notes
- Images use `next/image` (`Navigation`/`Footer` logo, `Product` screenshots)
- SEO metadata lives in `src/app/layout.js`; production domain constant also appears in `public/robots.txt` and `public/sitemap.xml` — update all three together
- Contact phone number in `src/components/Contact.js` is a placeholder

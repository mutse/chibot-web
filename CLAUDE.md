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
- `src/app/page.js` - Main landing page component that imports and uses i18n configuration
- `src/app/layout.js` - Root layout with Geist font configuration
- Uses client-side rendering ('use client') for i18n functionality

### Core Components (`src/components/`)
- Landing page sections: Hero, Features, Product, About, CTA, Contact, Footer
- Navigation with language switching
- AnimatedBackground for visual effects
- All components are exported via `index.js` for clean imports

### Internationalization System
The app supports 19 languages: English (en), Irish (ga), Chinese Simplified (zh), Japanese (ja), French (fr), German (de), Chinese Traditional (zh-TW), Italian (it), Spanish (es), Dutch (nl), German Swiss (de-CH), Malay (ms), Singapore English (en-SG), Greek (el), Polish (pl), Turkish (tr), US English (en-US), Russian (ru), and Hindi (hi).

Key i18n files:
- `src/i18n/index.js` - Main i18n configuration with dynamic language loading and pre-loading of all supported languages
- `src/i18n/locales/` - Language files for all 19 supported languages
- `src/hooks/useLanguage.js` - Language switching hook with RTL support detection
- `src/components/LanguageSwitcher.jsx` - Language selector component
- `src/components/LanguageToggle.js` - Alternative language toggle component

The i18n system uses:
- Browser language detection with localStorage persistence
- Dynamic language resource loading with error handling
- Pre-loading of all language resources on app initialization
- Fallback to English for missing translations
- Support for RTL language detection

### Key Dependencies
- Next.js 15 with React 19
- i18next ecosystem for internationalization
- Tailwind CSS 4 for styling
- Lucide React for icons

## Language Configuration
- Default language: English (forced in i18n config)
- Language detection: localStorage → browser → HTML tag
- Language switching updates localStorage and UI immediately
- All supported languages are pre-loaded on app initialization for performance
- Language resources are loaded dynamically with error handling and fallback support
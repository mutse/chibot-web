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

### Core Components (`src/components/`)
- Landing page sections: Hero, Features, Product, About, CTA, Contact
- Navigation with language switching
- AnimatedBackground for visual effects
- All components are exported via `index.js`

### Internationalization System
The app supports 6 languages: English (en), Chinese Simplified (zh), Japanese (ja), French (fr), German (de), and Chinese Traditional (zh-TW).

Key i18n files:
- `src/i18n/index.js` - Main i18n configuration with dynamic language loading
- `src/i18n/locales/` - Language files (en.js, zh.js, ja.js, fr.js, de.js, zh-TW.js)
- `src/hooks/useLanguage.js` - Language switching hook
- `src/components/LanguageSwitcher.jsx` - Language selector component

The i18n system uses:
- Browser language detection with localStorage persistence
- Dynamic language resource loading
- Fallback to English for missing translations

### Key Dependencies
- Next.js 15 with React 19
- i18next ecosystem for internationalization
- Tailwind CSS 4 for styling
- Lucide React for icons

## Language Configuration
- Default language: English
- Language detection: localStorage → browser → HTML tag
- Language switching updates localStorage and UI immediately
- All supported languages are pre-loaded on app initialization
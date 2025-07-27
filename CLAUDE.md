# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KanjiMaster is a Next.js 15 application for learning Japanese kanji systematically. It provides a comprehensive database of 2,136 Joyo kanji organized by school grade levels (1-6, 8) and JLPT levels (N1-N5).

## Common Development Commands

### Development
```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Package Management
The project uses pnpm with workspace configuration. Dependencies are managed through `pnpm-lock.yaml`.

## Architecture and Structure

### Core Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **UI Components**: Radix UI primitives via shadcn/ui
- **Fonts**: Geist (sans/mono) + Noto Serif JP for kanji
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

### Directory Structure
- `/app/` - Next.js App Router pages and layouts
  - `_components/` - Shared components (Header, Footer, KanjiWords)
  - Route-based pages: `/grades/[grades]/`, `/kanji/[kanji]/`, `/jlpt/[jlpt]/`, etc.
- `/src/` - Source code
  - `components/ui/` - shadcn/ui components
  - `features/` - Feature-specific logic (dataFetch.tsx)
  - `hooks/` - React hooks
  - `lib/` - Utilities and configurations
  - `fonts/` - Custom font files

### Data Architecture
The application fetches kanji data from `kanjiapi.dev` API:
- **Grade-based**: `/v1/kanji/grade-{1-6,8}`
- **JLPT-based**: `/v1/kanji/jlpt-{1-5}`
- **Individual kanji**: `/v1/kanji/{kanji}` for detailed information
- **Words**: `/v1/words/{kanji}` for usage examples
- **Readings**: `/v1/reading/{reading}` for reverse lookup

### Key Components and Features
- Dynamic routes for kanji details with metadata generation
- Responsive grid layouts for kanji browsing
- Custom font loading for Japanese characters
- SEO optimization with OpenGraph and Twitter meta tags
- Error boundaries and loading states
- Breadcrumb navigation

### Component Patterns
- Server components for data fetching (default in App Router)
- Client components marked with 'use client' when needed
- Consistent card-based layouts using shadcn/ui
- Badge components for categorization (grade, JLPT, readings)
- Suspense boundaries for progressive loading

### Styling Approach
- Tailwind utility classes with custom CSS variables
- shadcn/ui component library configuration in `components.json`
- Custom kanji font class: `font-kanji`
- Responsive design with mobile-first approach
- Color coding for different reading types (kun/on/nanori)

### API Integration
All external API calls are centralized in `src/features/dataFetch.tsx` with proper error handling and TypeScript types.

### SEO and Metadata
Comprehensive metadata generation for all pages including structured OpenGraph data, canonical URLs, and dynamic titles based on content.
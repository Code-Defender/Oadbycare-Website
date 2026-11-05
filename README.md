# Oadby Care — Production-Grade Web Application

A modern, accessible, and resilient website for **Oadby Care**, providing person-centred home and specialist care services across Leicestershire. Built with React 19, TypeScript, Tailwind CSS v4, and Vite.

---

## Architecture Overview

The project is structured according to professional software engineering standards with strict separation of concerns, clean component contracts, and defense-in-depth error handling:

```
src/
├── components/
│   ├── common/             # Reusable UI primitives (Button, Card, Badge, Input, Textarea)
│   ├── feedback/           # Resilience & recovery components (ErrorBoundary)
│   ├── layout/             # Structural elements (Navbar with emergency bar, Footer with CQC status)
│   └── sections/           # High-cohesion domain sections
│       ├── Hero.tsx        # Value proposition, trust badges, emergency CTA
│       ├── ServicesSection # 6 specialized care tiers with inquiry matching
│       ├── WhyChooseUs.tsx # CQC compliance, DBS vetting, local coordination
│       ├── ProcessSection  # 4-step care arrangement journey
│       ├── Testimonials    # Verified client family reviews
│       └── ContactSection  # Interactive care assessment booking with live validation
├── config/
│   └── site.ts             # Authoritative single source of truth (contacts, navigation, CQC)
├── hooks/                  # Custom lifecycle & UX hooks
├── pages/
│   └── HomePage.tsx        # Primary landing page orchestration
├── services/
│   └── inquiryService.ts   # Decoupled submission API client with graceful fallback
├── test/
│   └── setup.ts            # Vitest + @testing-library/jest-dom setup
├── types/
│   └── index.ts            # Domain contracts & strict TypeScript interfaces
├── utils/
│   ├── cn.ts               # Tailwind class merger (clsx + tailwind-merge)
│   └── validators.ts       # Robust client-side validation logic
├── App.tsx                 # Root application wrapper with ErrorBoundary
├── index.css               # Tailwind CSS v4 directives & accessible theme defaults
└── main.tsx                # Application bootstrap
```

---

## Features & Standards Compliance

- **Accessibility (WCAG 2.1 AA):**
  - Skip-to-main-content landmark for screen reader and keyboard accessibility.
  - Visible focus rings (`focus-visible:ring-2`) on all interactive controls.
  - Explicit ARIA attributes (`aria-invalid`, `aria-describedby`, `aria-label`).
- **Resilience & Fault Tolerance:**
  - `ErrorBoundary` wraps the UI tree, preventing runtime crashes from blanking the screen and offering a graceful page reload and telephone fallback.
- **Form Security & Validation:**
  - Strict client-side validation (`validators.ts`) preventing malformed inputs, verifying UK telephone formats, and ensuring GDPR privacy consent.
  - Decoupled API service layer (`inquiryService.ts`) with deterministic reference IDs.
- **Design System:**
  - Tailwind CSS v4 with bespoke healthcare color palette (calming deep teal, warm neutrals, emergency accents).

---

## Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| **`npm run dev`** | `vite` | Starts local development server with Hot Module Replacement (HMR). |
| **`npm run build`** | `tsc -b && vite build` | Type-checks project references and compiles optimized production bundle into `dist/`. |
| **`npm run test`** | `vitest run` | Runs unit and component test suites headlessly. |
| **`npm run test:watch`** | `vitest` | Runs tests in interactive watch mode for TDD. |
| **`npm run lint`** | `oxlint` | Runs fast code quality and React compiler compliance checks. |
| **`npm run preview`** | `vite preview` | Previews the compiled production build locally. |

---

## Environment Variables

Copy `.env.example` to `.env.local` to override runtime variables:

```bash
cp .env.example .env.local
```

| Variable | Description |
| :--- | :--- |
| `VITE_APP_NAME` | Website brand name (`Oadby Care`). |
| `VITE_SUPPORT_PHONE` | Primary office inquiry phone number. |
| `VITE_EMERGENCY_PHONE` | 24/7 emergency coordinator telephone number. |
| `VITE_SUPPORT_EMAIL` | Office contact email. |
| `VITE_API_BASE_URL` | Optional backend API base URL for inquiry persistence. |

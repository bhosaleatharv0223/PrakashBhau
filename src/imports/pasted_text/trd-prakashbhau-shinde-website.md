This Technical Requirements Document (TRD) translates the approved Product Requirements Document
(PRD) for the Prakashbhau Shinde / Sarvatmak Maharudra Parivar Trust website into concrete engineering
specifications. It defines the technology stack, component architecture, data flow, non-functional requirements,
and delivery structure for the React-based front end.
TECHNICAL REQUIREMENTS DOCUMENT
1.1 Purpose
To give engineers an unambiguous, buildable specification: what components exist, how they are structured,
what each page must render, and which technical constraints (performance, accessibility, localization) apply
throughout.
1.2 Scope
l Single-page application (SPA) built with React, styled with plain CSS using a shared design-token
stylesheet.
l Eight primary routes: Home, About Us, Services, Gallery, Achievements, Social Works, Maharudra Parivar
(Trust), Contact Us.
l Bilingual content support: English and Marathi (Devanagari script), with correct glyph shaping in-browser.
l Responsive layout for desktop, tablet, and mobile breakpoints.
l Static content delivery in v1.0 — no backend database is assumed unless noted in Section 6.
1.3 Assumptions & Open Items
Official Website — React Front-End Implementation
This TRD is derived from the previously delivered PRD and component list. Content copy, exact brand color
values, hosting provider, and final image assets were not confirmed at time of writing and are marked [TBD]
where relevant. Please review flagged items before development sign-off.
Version 1.0  |  Prepared: July 2026
Status: Draft for Review
Technical Requirements Document Prakashbhau Shinde Website
Confidential — Draft Page 2
2. System Architecture
2.1 Technology Stack
Framework React 18 (functional components + Hooks)
Routing react-router-dom v6 — client-side routing, one route per page
Styling Plain CSS3 with a shared tokens.css file (colors, spacing, typography
variables); no CSS-in-JS
Build tool Vite (recommended) or Create React App — bundling, dev server, production
build
State management Local component state via useState/useContext; no external state library
required for v1.0
Forms Contact form uses controlled inputs; submission handler is a stubbed API call
[TBD backend]
Fonts Noto Sans / Noto Sans Devanagari (or equivalent) loaded via @font-face for
correct Marathi rendering
Hosting/Deploy Static hosting (Netlify/Vercel/GitHub Pages) — [TBD final choice]
2.2 High-Level Component Tree
The application root renders a persistent Header and Footer around a routed content area:
App
  nn Header (nav + logo + language toggle)
  nn Routes
  n  nn / fi HomePage
  n  nn /about fi AboutUsPage
  n  nn /services fi ServicesPage
  n  nn /gallery fi GalleryPage
  n  nn /achievements fi AchievementsPage
  n  nn /social-works fi SocialWorksPage
  n  nn /maharudra-parivar fi MaharudraParivarPage
  n  nn /contact fi ContactUsPage
  nn Footer (trust address, social links, copyright)
2.3 Global Design Tokens (tokens.css)
All pages consume a single token file so visual identity stays consistent across the site. Actual hex values below
are placeholders pending brand guideline confirmation [TBD].--color-primary #7A1F1F (maroon — placeholder)--color-accent #D4A017 (gold — placeholder)--color-bg #F6F1EC (warm off-white)--color-text #2B2B2B
Technical Requirements Document
Prakashbhau Shinde Website--font-latin--font-devanagari--spacing-unit
'Noto Sans', sans-serif
'Noto Sans Devanagari', sans-serif
8px base scale (8/16/24/32/48/64)--radius-default
6px
Confidential — Draft
Page 3
Technical Requirements Document
Prakashbhau Shinde Website
3. Page & Component Specifications
3.1 HomePage
l Hero section with trust name, tagline, and background image [TBD asset].
l Quick-navigation cards linking to About, Services, and Maharudra Parivar.
l Highlights strip summarizing recent achievements/social works (max 3 items, pulled from shared data).
l Call-to-action button routing to Contact Us.
3.2 AboutUsPage
l Biography section for Prakashbhau Shinde with photo and Marathi/English text blocks.
l Timeline or milestone list component (reusable across About and Achievements).
l Mission/vision statement block.
3.3 ServicesPage
l Grid of service cards (icon, title, short description).
l Each card is data-driven from a local services.js array — no hardcoded JSX per card.
3.4 GalleryPage
l Responsive image grid with lightbox/modal viewer on click.
l Lazy-loading for images below the fold to protect performance budget (Section 4.2).
l Category filter (optional v1.1) [TBD priority].
3.5 AchievementsPage
l Chronological list/timeline of awards and recognitions.
l Reuses the Timeline component defined in About Us.
3.6 SocialWorksPage
l Card-based layout describing social initiatives, each with image + description.
l Optional stats strip (e.g., number of beneficiaries) if data is confirmed [TBD].
3.7 MaharudraParivarPage
l Dedicated trust profile page: history, registration details, governing members.
l Devanagari trust name and any legal/registration text must use the font-shaping approach in Section 5.1 to
avoid conjunct rendering errors.
3.8 ContactUsPage
l Controlled form: Name, Email, Phone, Message fields with client-side validation.
l Embedded map component (trust address) [TBD — Google Maps embed or static image].
l Submission currently posts to a stub handler; real endpoint pending backend decision (Section 6).
Confidential — Draft
Page 4
Technical Requirements Document
Prakashbhau Shinde Website
4. Non-Functional Requirements
4.1 Responsiveness
Mobile
Tablet
< 600px — single-column layout, collapsible nav (hamburger menu)
600–1024px — two-column grids where applicable
Desktop
4.2 Performance
> 1024px — full multi-column layout, max content width 1200px
l Target Largest Contentful Paint (LCP) under 2.5s on a simulated 4G connection.
l Images served in modern formats (WebP) with defined width/height to prevent layout shift.
l Route-based code splitting (React.lazy + Suspense) recommended once page count grows.
4.3 Accessibility
l Semantic HTML landmarks (header, nav, main, footer) on every page.
l All images require alt text in both English and Marathi where content is bilingual.
l Color contrast for primary/accent tokens must meet WCAG AA (verify once final palette is set).
4.4 Browser Support
Latest two versions of Chrome, Firefox, Safari, and Edge; graceful degradation on older mobile browsers
common in the target region.
Confidential — Draft
Page 5
Technical Requirements Document
Prakashbhau Shinde Website
5. Localization & Devanagari Text Handling
5.1 Why This Section Exists
During PDF generation of the earlier PRD, the ReportLab canvas renderer displayed Marathi conjunct
consonants incorrectly (e.g. 'nnnnn' rendered as 'nnn') because it does not perform complex-script text
shaping. This does not affect the React website itself — browsers handle Devanagari shaping natively — but it
is documented here so the same class of bug is checked for anywhere text is rendered outside a standard
browser context (PDF export features, canvas-based image generation, server-side image rendering, etc.).
5.2 Requirements for the Web App
l Load a Devanagari-capable webfont (e.g. Noto Sans Devanagari) via @font-face; do not rely on system font
fallback alone.
l Store bilingual copy as data (e.g. { en: '...', mr: '...' }) rather than hardcoding language per component, to
support a future language toggle.
l QA pass: visually verify every Marathi string with conjuncts (e.g. names, trust title) renders correctly in at
least two browsers before sign-off.
Confidential — Draft
Page 6
Technical Requirements Document
Prakashbhau Shinde Website
6. Open Items & Next Steps
The following require decisions before or during implementation. None of these block starting front-end
scaffolding, but all must close before production launch.
Backend for Contact form
Hosting provider
Final brand palette
Content source
Image assets
Static form service (e.g. Formspree) vs. custom API — [TBD]
Netlify / Vercel / other — [TBD]
Confirm exact hex values with client — [TBD]
Final English + Marathi copy for all 8 pages — [TBD]
Final photography for Hero, Gallery, Social Works — [TBD]
Analytics
Google Analytics / Plausible — decision pending — [TBD]
Prepared as a technical follow-on to the approved PRD. Please review flagged [TBD] items and confirm before development is
marked complete.
Confidential — Draf
# Prime Citation — AEO Agency Site Launch Package

## Mission
Transform the current `primecitation.com` site from a clone of Starbloom's Apex Signal Agency page into a **standalone, authoritative AEO agency brand** that earns citations from AI systems and trust from human visitors.

## Current State
- Domain: primecitation.com (live on Vercel, DNS pointed, SSL pending)
- GitHub: `StarbloomConsultingHub/primecitation.com`
- Stack: Astro 6 + Tailwind CSS 4 + Vercel adapter
- Current content: Cloned from starbloomconsulting.com/apex-signal-agency with rebranded colors (navy/gold)
- Build time: 2.93s, zero errors

## What Needs to Be Done

### 1. Grok Rewrite the Copy
Feed the existing Apex Signal copy to Grok and have it rewrite for Prime Citation's standalone voice. Key shifts:
- Remove all Starbloom references
- Position Prime Citation as its own AEO authority, not a sub-brand
- Sharpen the value prop: "Make your clients citable by AI"
- Preserve the Founders Circle pricing ($797/mo → $1,399/mo)
- Keep white-label positioning intact
- Add Darren's personal bio as the founder/operator behind it
- Add links to GitHub (StarbloomConsultingHub), Darren's Medium articles, any socials

### 2. Technical SEO / AEO / EEAT Package
- [ ] **JSON-LD structured data** — inject these schemas:
  - `Organization` (Prime Citation)
  - `Product` (the AEO report subscription)
  - `FAQ` (the 5 questions from the page)
  - `WebSite` with searchAction
  - `Person` (Darren Kelly — founder, operator bio)
  - `BreadcrumbList` for navigation
- [ ] **llms.txt** — create `/public/llms.txt` for AI crawlers to discover pages + summary
- [ ] **robots.txt** — ensure AEO-friendly directives (allow all, point to sitemap)
- [ ] **Wikidata entity** — consider creating a Wikidata item for Prime Citation, link from page
- [ ] **Social links** — footer/nav: GitHub, Medium, LinkedIn, X
- [ ] **Author schema** — mark Darren as author/owner of the site
- [ ] **OG / Twitter cards** — already in Layout.astro, ensure the image exists

### 3. Blog / Insights Section
- [ ] Create `/src/pages/blog/` directory
- [ ] Single landing page at `/blog` with a featured article card for Darren's Medium article
- [ ] Link to Medium article (need URL from Darren)
- [ ] Can expand to more articles later — keep it simple for now
- [ ] Blog layout inherits from main Layout.astro

### 4. Design Polish
- [ ] Review Grok's design suggestions vs current navy/gold layout
- [ ] Add Darren's logo if one exists
- [ ] Ensure the contact/CTA flow is clear (Stripe link needs actual Stripe product URL)
- [ ] Responsive test
- [ ] Footer: "A Kelly Green Holdings company"

## Credentials / Access
- **Vercel:** darren@starbloomconsulting.com
- **GitHub:** StarbloomConsultingHub org
- **Namecheap:** Darren has access
- **Stripe:** need product URL for the subscribe button
- **Medium:** Darren's Medium handle needed

## Where to Pick Up
1. ~~Feed to Grok: rewritten copy, JSON-LD blocks, llms.txt content, blog section plan~~ ✅ Done
2. ~~Build blog skeleton and insert structured data~~ ✅ Done
3. ~~Wire in social links and Darren's bio~~ ✅ Done
4. ~~Push to GitHub~~ ✅ Done (committed and pushed, Vercel auto-deploys)

## What's Left
1. **Grok rewrite the copy** — Rewrite `src/pages/index.astro` copy to remove all Starbloom references, sharpen value prop, add Darren's bio section
2. **Logo** — Need a Prime Citation logo (use Grok Imagine prompt below)
3. **Stripe product URL** — Wire in actual Stripe product URL to subscribe buttons
4. **Branding direction** — Decide if you want the current navy/gold or different palette before Grok rewrite
5. **LinkedIn company page** — @Starbloom_AI handle used for X; prime-citation LinkedIn page may need creation

## Grok Imagine Logo Prompt
```
Design a minimalist wordmark logo for "PRIME CITATION" in bold gold (#e6b800) on a dark navy (#0a1628) background. Clean, authoritative, professional. No icon needed. Think legal/consulting firm meets tech agency. Simple and memorable.
```

## What Was Done This Session (2026-06-04)
- ✅ 7 JSON-LD schemas injected: Organization, WebSite, Product, FAQPage, BreadcrumbList, Person (Darren)
- ✅ `/blog` landing page created with featured Medium article
- ✅ `public/llms.txt` created for AI crawlers
- ✅ OG default image generated and placed at `public/og-default.jpg`
- ✅ Social links in footer: GitHub, Medium, X, LinkedIn (same handles as existing)
- ✅ Footer says "A Kelly Green Holdings company"
- ✅ Clean build (2.93s, zero errors)
- ✅ `dist/` and `.vercel/` removed from git tracking
- ✅ Pushed to GitHub — Vercel auto-deploys

## Important Rules
- **No hyphens in sales copy** — use em dashes, parentheses, or rephrase
- **Cannabis is private** — never surfaced publicly
- **No Starbloom branding** on the Prime Citation site
- **AEO-first** — the site should be optimized for AI crawlers, not just humans

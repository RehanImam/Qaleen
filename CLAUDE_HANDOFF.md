# Qaleen Bhaiya — Redesign Handoff

> Purpose: let a fresh Claude Code session continue this brand-preserving redesign **without re-auditing**. Steps 1 (audit) and 2 (plan) are DONE and approved. Step 3 (implementation) is NOT started. Read this file first, then go straight to implementation on the user's "OK".
> Last updated by the audit/planning session. **No code has been changed yet this project — the redesign has not begun.**

---

## 0. TL;DR for the next session
- **Task:** Premium brand-preserving redesign of an existing handmade-rug e-commerce site.
- **Skills to load first:** `redesign-existing-projects` (workflow) and `design-taste-frontend` (a.k.a. "tasteskill v2" — the **authoritative** source of design rules; its Section 11 = redesign protocol, Section 14 = pre-flight). The user has designated tasteskill v2 as source of truth. Do NOT apply minimalist-ui, industrial-brutalist-ui, image-to-code, imagegen-frontend-web, or other visual-style skills unless the user explicitly asks.
- **Mode:** Redesign — **Preserve brand**, with two user-approved deviations: (a) a deliberate colour-palette redesign, (b) a conversion-architecture correction (cart rebrand only this round).
- **Status gate:** The user gates each step with an explicit "OK". Do not start editing until they say OK to Step 3.
- **Golden rule:** Do not introduce generic AI patterns. Preserve brand identity, IA, routes, nav labels. Zero em-dashes in visible text.

---

## 1. Project facts
- **Location:** `C:\Users\ahmed\OneDrive\Desktop\Qaleen`
- **Stack:** Create React App (`react-scripts@5.0.1`), **React 19.2**, **Tailwind CSS v3.4** (`tailwind.config.js` has empty `theme.extend`, `plugins: []`). No TypeScript. No Next.js. No React Router.
- **Run:** `npm start` → dev server at **http://localhost:3000**. Build: `npm run build`.
- **Routing:** Hand-rolled. `src/App.js` reads `window.location.pathname` → a `currentPage` string; `navigateTo(page, params)` uses `history.pushState`. Routes: `/`, `/shop`, `/custom`, `/project`, `/blog`, `/productDetail`. Query params used on `/project` and `/blog` (`?category=&page=&article=`).
- **Data:** `src/data/products.js` (MAIN_GROUPS, SUB_CATEGORIES, PRODUCTS), `src/data/megaMenuData.js` (CARPET + PRAYER MAT mega menus; artworks/custom/project/blog registered `null`), `src/data/blogPosts.js` (~6 posts). ProjectPage has ~34 projects inline.
- **Git:** branch `main`. **There are ~17 pre-existing uncommitted modified files** (App.js + most components + megaMenuData) that predate this work; the working tree is what the running site serves. Treat the working tree as the baseline. Commit/push only when the user asks; attribution lines: commits end with `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`, PRs end with `🤖 Generated with [Claude Code](https://claude.com/claude-code)`.
- **Fonts:** none loaded — Tailwind defaults only (`font-serif`=Georgia, `font-sans`=system, `font-mono`=default).

---

## 2. Component / file map (roles)
| File | Role | Notes for redesign |
|---|---|---|
| `src/App.js` | Router + cart/filter state + home page assembly | Hero JSX lives here (inline `<section>`); large commented-out legacy block at top. |
| `src/components/Navbar.jsx` | Header, mega-menu triggers, mobile drawer, search, announcement bar | Uses `window.addEventListener('scroll')`. Nav labels are SEO-locked. |
| `src/components/MegaMenu.jsx` | Desktop mega-menu panel | Uses `animate-in`/`slide-in-*` = **no-op** (plugin not installed). |
| `src/components/Categories.jsx` | Home: 4 category tiles | eyebrow + centered "Word *italic*" header + IO fade-up. |
| `src/components/LifestyleBanner.jsx` | Home: full-bleed lifestyle banner | Good asymmetric section. |
| `src/components/Bestsellers.jsx` | Home + reused in BlogArticle "Shop the Look" | 4 ProductCards. |
| `src/components/ValueProps.jsx` | Home: 3 numbered promises | `bg-[#f4ebe1]`. |
| `src/components/InstagramFeed.jsx` | Home: 4 IG tiles | External IG links. |
| `src/components/NewsletterBand.jsx` | Home: oxblood CTA band | `bg-[#5c0612]`. |
| `src/components/ProductCard.jsx` | Shared product card (hover cross-fade, dots, quick-add) | Signature interaction — preserve. |
| `src/components/ShopView.jsx` | `/shop` toolbar + grid + empty state | Transparent-select "Sort by". |
| `src/components/FilterSidebar.jsx` | Slide-in filter drawer (price slider, chips, colour swatches, size) | Strong UX; `animate-in` no-op. |
| `src/components/ProductDetail.jsx` | `/productDetail` sticky gallery + accordions + reviews + related | Shows same image 5×; review has em-dash. |
| `src/components/CartDrawer.jsx` | Cart | **Currently "Order via WhatsApp" as the ONLY checkout — must be rebranded to standard commerce (see §5 Lever 5).** Uses emerald-600, default `rounded`, emoji `✕`, no animation. |
| `src/components/CustomPage.jsx` | `/custom` bespoke | WhatsApp consultation flow — KEEP. Has section-number eyebrows, STEP labels, `scale-102/103` no-op classes. |
| `src/components/ProjectPage.jsx` | `/project` portfolio + lightbox | ~34 projects; ~30 titles use `" — Location"` (em-dash). Emoji `✦ →`. |
| `src/components/BlogMain.jsx` / `BlogList.jsx` / `BlogArticle.jsx` | `/blog` journal | **Visual outlier**: cool `gray-*` body, bright gold `#d4af37`, `green-600` CTA. Bring into brand system. |
| `src/components/Breadcrumb.jsx` | Breadcrumb strip | Labels are content. |
| `src/index.css` | Tailwind directives + luxury range-slider + scrollbar | Good place for CSS variables/tokens. |
| `public/index.html` | CRA default `<title>React App</title>`, default meta/favicon | SEO gaps — flagged, needs approval to change. |

---

## 3. Approved decisions (locked)

### Palette: **"Madder & Ivory"** (user-selected)
Define as tokens (CSS variables in `index.css` and/or `tailwind.config.js` extend). Default light; make tokens dark-ready but ship light.
| Token | Value | Use |
|---|---|---|
| `--accent` | `#5C0612` oxblood | **PRESERVED brand identity** — all primary CTAs/actions, active states |
| `--accent-hover` | ~`#73101E` | hover |
| `--accent-press` | ~`#48040D` | active/pressed |
| `--accent-wash` | `rgba(92,6,18,0.08)` | tint backgrounds |
| `--bg` | `#F7F5F0` ivory | page background (replaces `#faf8f5`) |
| `--surface` | `#EFEBE2` | ONE elevated surface tint (replaces the 4 mismatched creams) |
| `--ink` | `#221A17` | text + dark sections (footer) |
| `--muted` | `#6F655C` warm taupe | secondary text |
| `--line` | ~`#E2DCD1` | borders/hairlines |
| `--gold` | `#A97C43` antique brass | ONE metallic — eyebrows/hairlines/detail ONLY, never a second loud accent |
| `--wa-green` | e.g. `#128C7E` | semantic WhatsApp green — **Custom/Bespoke only** |

Rules: ONE gold (collapse the current 5: `#9b6828 #b89047 #d4af37 #e2b86b amber-*`). ONE neutral family (kill cool `gray-*`, use warm/taupe everywhere). Oxblood is the only action accent (Color Consistency Lock).

### Checkout scope: **"Cart polish only for now"**
- Rebrand `CartDrawer.jsx` to standard e-commerce: replace "Order via WhatsApp" with a proper **"Proceed to Checkout"** action styled to brand (oxblood). Keep it honest — **no fake payment**, no real transaction. Do NOT build checkout/address/payment/confirmation pages this round.
- **Conversion model (per user):** Carpet / Prayer Mat / Artworks = standard commerce (Browse → Product → Add to Cart → Cart → [future] Checkout → Payment → Confirmation). **Custom/Bespoke KEEPS WhatsApp** consultation flow (Service/Project discovery → Consultation → WhatsApp). Do NOT route standard products through WhatsApp.

---

## 4. Preservation guardrails (do NOT change without explicit user approval)
- URL structure / routes / slugs.
- Primary nav labels: `CARPET · PRAYER MAT · ARTWORKS · CUSTOM · PROJECTS · BLOG`.
- Form field names/order.
- Brand logo/wordmark identity ("Qaleen *Bhaiya*" serif + italic; oxblood "Bhaiya").
- Legal copy (footer © and Privacy/Terms links).
- Important SEO H1/H2 headings (e.g. "Shop by Category", "Our Bestsellers", "The Qaleen Journal", "Our Projects", "Custom, Made for You"), breadcrumb labels, blog category labels.
- Existing anchor ids (`#how-it-works`, footer `#shipping/#returns/#contact/#faqs/#privacy/#terms`).
- Title/meta/favicon SEO fixes are **flagged-only** until separately approved (see §7).

---

## 5. The 7 modernisation levers (priority order) — What / Why / Preserves
1. **Colour recalibration + deliberate palette redesign** (§3 Madder & Ivory). Why: biggest consistency failure + de-AI. Preserves: oxblood identity, warm/light feel.
2. **Typography refresh.** Self-host a refined display **serif** (heritage-justified; NOT Fraunces/Instrument Serif) + a clean **sans** for body/UI; add 500/600 weights, tabular figures for prices, tightened display tracking. Why: default fonts are the flattest thing. Preserves: "Word *italic-word*" headline device + serif voice + wordmark.
3. **Spacing, rhythm & shape system.** Fix the large empty band between hero and first content; standardise section padding scale; define ONE radius scale (currently sharp/xs/sm/full/`rounded` mixed); align vertical rhythm. Preserves: airy editorial density.
4. **Consistency locks & de-slop pass.** Ration eyebrows to ≤1 per 3 sections; remove section-number eyebrows (`01 · BESPOKE WEAVING`), `STEP 1–4` labels, decorative status dots, emoji UI (`✕ ✦ → ↓`); **remove all visible em-dashes**; unify grays; fix no-op code; resolve dead links/states. Preserves: content, copy voice, SEO headings.
5. **Conversion architecture correction** (cart polish only — §3). Preserves: WhatsApp for Custom, cart state, product data, form-field intent.
6. **Motion layer (consistency, not escalation).** Replace dead `animate-in` transitions with working ones; add `prefers-reduced-motion`; consistent scroll-reveal. Preserves: restrained fade-up (MOTION_INTENSITY ~4→5).
7. **Hero & key-section recomposition (targeted).** Break monotone centered rhythm with ≥4 layout families on home; recompose CartDrawer to brand; tighten Product Detail; bring Blog back into the brand system. Preserves: existing hero + product-card interactions.

Suggested implementation order: 1→2 (tokens + type foundation) first, then 3→4→5→6→7, verifying pages as you go.

---

## 6. Concrete defect inventory (so you don't re-audit)
**Cross-page consistency (highest impact):**
- Blog uses cool `gray-*`, bright gold `#d4af37`, `green-600` CTA, `#EFE6D8` panel → reads like a different site. Rest of site uses warm `stone-*` + ochre.
- Warm vs cool gray mixed across pages (`stone-*` vs `gray-*`).
- 5 unharmonised golds; 3 ad-hoc greens/ambers (emerald-600, green-600, amber-500).
- 4 near-identical cream section tints; mixed radii.

**AI/slop tells:**
- Eyebrow on nearly every section (home + all subpages) — way over the ≤1-per-3 budget.
- Section-number eyebrows in CustomPage: `01 · BESPOKE WEAVING`, `02 · ARCHIVAL FRAMING`, `03 · SPATIAL ARCHITECTURE`.
- `STEP 1–4` labels + numbered circles (CustomPage process).
- Decorative status dots in hero/eyebrow pills (Custom, Project).
- Emoji as UI: `✕` (CartDrawer), `✦`,`→`,`↓` (Project/Custom). Replace with icon set (Phosphor/HugeIcons/Radix/Tabler — install if used).
- 3 consecutive image+text service banners on Custom (zigzag cap = 2).

**Em-dashes in VISIBLE text (must all go — Step 4 blocker):**
- `src/data/blogPosts.js`: body paragraphs ("fibers—such as", "center—by placing", "nature—roots", `"abrash"—subtle`).
- `src/components/ProductDetail.jsx`: review "craftsmanship — the colours".
- `src/components/CustomPage.jsx`: WhatsApp msgs ("carpet — could", "frame — could"), FAQ "7–10 business days" (en-dash).
- `src/components/ProjectPage.jsx`: ~30 project titles `"… — Location"` + WhatsApp messages + "newly installed pieces —". (Titles are content; em-dash→comma/hyphen is required by the skill — apply, but note titles are SEO-ish, keep wording otherwise identical.)
- `src/components/Navbar.jsx`: em-dashes are in code comments only (not visible) — ignore.

**Layout / spacing:**
- Big empty band on load: `h-screen` hero (should be `min-h-[100dvh]`) + `py-32` + fade start.
- Home = monotone centered eyebrow→serif-headline rhythm; needs layout variety.
- CartDrawer unstyled vs rest (default `rounded`, `font-bold` Georgia, no animation).

**Dead / broken / no-op:**
- Footer `#…` anchors, product "TRY IN YOUR SPACE", Wishlist/Account icons → non-functional (either wire, disable visually, or leave as-is per approval — anchors are SEO, don't remove ids).
- `animate-in`/`slide-in-*` classes = no-ops (tailwindcss-animate not installed). Either install the plugin or replace with real transitions/Tailwind keyframes.
- Invalid classes `scale-102`/`scale-103` in CustomPage = no-ops (use a real scale or arbitrary `scale-[1.02]`).

**Code/perf:**
- Multiple `window.addEventListener('scroll')` (Navbar etc.) — prefer IntersectionObserver (already used elsewhere) where feasible.
- ProductDetail shows same image 5×; hero borrows external competitor CDN photo (`jrc2021` = Jaipur Rugs); all imagery is Unsplash/hotlinked.

---

## 7. SEO baseline (flagged — needs explicit approval before changing)
- `public/index.html`: `<title>React App</title>`, `description="Web site created using create-react-app"`, `theme-color #000000`, **default CRA favicon**, no OG/Twitter/canonical/structured-data/sitemap/robots.
- CSR-only (no SSR/prerender) → crawlers get empty `#root` until JS runs; no per-route meta.
- **`/productDetail` is not deep-linkable**: URL carries no product id, so a direct hit/refresh renders blank (`selectedProduct` is null). UX + SEO gap.
- Preserve nav labels, page H1/H2s, breadcrumb/blog-category labels, anchor ids.

---

## 8. Dial targets (preserve-mode)
Current site ≈ DESIGN_VARIANCE 4 / MOTION_INTENSITY 4 / VISUAL_DENSITY 3.
Targets ≈ **VARIANCE 5 (match+), MOTION 5 (+1), DENSITY 3 (match)**. Evolve, don't escalate. No scroll-hijack/parallax/physics.

---

## 9. Verification notes
- View the running site at http://localhost:3000 (`npm start`). Review **page by page + responsive** (desktop + mobile ~375px). Nav collapses to hamburger `< md` (already implemented).
- **Known tooling gotcha:** in-app browser screenshots can return **blank frames when the app window is backgrounded** (page stops painting). The DOM is still correct — verify via `read_page` / `get_page_text` / JS-measured geometry, or ask the user to bring the window forward. Images load fine (all 18 home images confirmed loading from Unsplash/cloudfront).

---

## 10. Step 4 audits to run at the END of implementation (all must PASS; any Fail blocks completion)
1. **Em-dash audit** — grep visible strings for `—`/`–`; must be zero. (`grep -rn "[—–]" src` — ignore code-comment-only hits in Navbar/App.)
2. **Pre-Flight Check** — tasteskill Section 14 full matrix.
3. **Preservation audit** — list every URL, nav label, form field, anchor changed; must be empty unless the user approved it.
4. **Brand fidelity audit** — confirm oxblood `#5C0612` accent, serif wordmark, warm/light identity survived.
5. **Responsive audit** — desktop + mobile breakpoints correct.
6. **Link/navigation audit** — nav + important links still work.
If any audit fails, fix and rerun until it passes before declaring done.

---

## 11. Hard "do NOT" list
- Do NOT migrate frameworks or add a backend/payment integration this round (checkout deferred).
- Do NOT change routes, nav labels, form fields, logo, legal, SEO headings, or anchor ids without explicit approval.
- Do NOT route standard products (Carpet/Prayer Mat/Artworks) through WhatsApp checkout.
- Do NOT introduce a second loud accent (gold stays a quiet metallic; oxblood is the only action colour).
- Do NOT use em-dashes anywhere visible.
- Do NOT apply other visual-style skills (minimalist/brutalist/etc.) unless the user asks.
- Do NOT reach for the generic AI beige+brass premium-consumer default — the chosen palette (Madder & Ivory) is the intentional alternative.

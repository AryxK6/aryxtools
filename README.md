# ARYX Tools

100+ free online tools, free Next.js website. 10 tools live, ready for Vercel.

## Kya ban chuka hai (Phase 1, 10 tools)

1. Word Counter
2. Case Converter
3. JSON Formatter
4. Password Generator
5. Color Picker
6. Percentage Calculator
7. Age Calculator
8. QR Code Generator
9. Unit Converter
10. Lorem Ipsum Generator

Har tool page mein:
- Fully functional widget (sab client-side, no backend needed)
- 1000+ word SEO article (humanized, tool-specific)
- Related tools section (internal linking)
- Mobile-responsive layout

Static pages: About, Contact, Privacy Policy, Terms of Service, Disclaimer
(AdSense approval ke liye zaroori).

SEO: `sitemap.xml` aur `robots.txt` auto-generate hote hain
(`app/sitemap.ts`, `app/robots.ts`).

## Vercel pe deploy kaise karna hai

### Option 1: GitHub se (recommended)

1. Is project ko GitHub repo mein push karo:
   ```
   cd aryxtools
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. vercel.com pe jao, "Add New Project" karo.
3. Apni GitHub repo import karo. Vercel khud detect kar lega ye Next.js
   project hai, koi config change nahi karni.
4. "Deploy" click karo. 2-3 minute mein live ho jayega.

### Option 2: Vercel CLI se (direct, bina GitHub ke)

```
npm install -g vercel
cd aryxtools
vercel
```
Prompts follow karo, free hosting mil jayegi turant.

## Domain connect karna (jab final ho)

Vercel dashboard mein: Project > Settings > Domains > apna domain add karo,
phir Vercel ke diye DNS records apne domain registrar mein daal do.

## AdSense Auto Ads activate karna

`app/layout.tsx` mein ye line dhoondo:

```ts
const ADSENSE_PUBLISHER_ID = "ca-pub-XXXXXXXXXXXXXXXX";
```

AdSense approval milne ke baad, `ca-pub-XXXXXXXXXXXXXXXX` ko apni real
publisher ID se replace kar dena. Auto ads khud-ba-khud poori site pe ad
placements decide kar lenge, koi manual ad slot code add karne ki zaroorat
nahi.

## Naya tool add karna (future, jab next batch banana ho)

1. `lib/tools-config.ts` mein naya entry add karo (`tools` array mein)
2. `components/tools/[ToolName].tsx` mein widget component banao
3. `content/articles/[tool-slug].tsx` mein article likho (humanizer skill se)
4. `lib/tool-components.tsx` aur `lib/tool-articles.tsx` mein registry
   entries add karo

Baaki sab (routing, sidebar count, sitemap, category page) automatically
update ho jata hai, kyunki sab kuch us central config se generate hota hai.

## Local development

```
npm install
npm run dev
```
http://localhost:3000 pe khulega.

## Build verify karna

```
npm run build
```
Agar ye bina error ke complete ho jaye, Vercel pe deployment guaranteed
successful hogi.

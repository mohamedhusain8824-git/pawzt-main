# Pawzy Universal + FAQ + Blogs Routed

Routes:

- `/` Home
- `/services` Services
- `/faq` FAQ
- `/blogs` Blogs / uploaded blog-service pages

Header and footer are universal. The navbar is no longer sticky, so it scrolls away with the page.

Run:

```powershell
npm config set registry https://registry.npmjs.org/
npm install
npm run dev
```

If the extracted ZIP creates one folder inside another, run the commands only in the folder that contains `package.json`.

## SEO metadata added

This build includes static fallback metadata in `index.html` and route-wise dynamic metadata in `src/components/MetaManager.jsx` for `/`, `/services`, `/faq`, and `/blogs`.

Update `SITE_URL` inside `src/components/MetaManager.jsx`, plus the canonical/Open Graph URLs in `index.html`, `public/robots.txt`, and `public/sitemap.xml` if the final deployed domain is different from `https://pawzy.com`.

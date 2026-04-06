# Thomas Argo Portfolio

React + Vite portfolio rebuilt from the legacy static site in [`old-site/`](./old-site). The app uses React Router for navigation and is configured for Vercel deployment.

## Routes

- `/`
- `/projects`
- `/models`
- `/websites`
- `/apps`
- `/contact`

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Notes

- Static portfolio media lives in [`public/portfolio`](./public/portfolio).
- SPA rewrites for Vercel are configured in [`vercel.json`](./vercel.json).
- The original source site remains untouched in [`old-site/`](./old-site).

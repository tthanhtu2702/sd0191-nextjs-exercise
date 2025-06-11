## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
next dev
```

## Directory structure (Next.js 15+ App Router, with /app directory)

Project root:
```bash
app
├── public/
│   └── css, fonts, images, js, media
├── page.tsx				(Home page)
├── layout.tsx				(Login page)
├── login/
│	└── page.tsx
├── admin/
│	└── page.tsx			(Admin dashboard)
├── about/
│	└── page.tsx			(About page)
├── contact/
│	└── page.tsx			(Contact page)
├── category/		
│	└── page.tsx			(Category listing)
├── style-guide/
│	└── page.tsx			(Style Guide page)
├── article/
│	│── single-standard		(Article page)
│	│	└── page.tsx
│	│── single-audio
│	│	└── page.tsx
│	│── single-video
│	│	└── page.tsx
│	└── single-gallery
│		└── page.tsx
├── api/
│	│── news
│	│	└── route.tsx		(GET news)
│	└── login
│		└── route.tsx		(POST login)
...
```
## Simulated API routes
1. GET news (/app/api/news/route.ts)
2. POST login (/app/api/login/route.ts)
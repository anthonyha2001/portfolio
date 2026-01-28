# Premium Portfolio Website

A modern, high-performance portfolio website built with Next.js 14, designed to position you as a premium web developer and convert visitors into high-value client inquiries.

## Project Overview

This portfolio website showcases your work, services, and expertise with a focus on:
- **Premium positioning** - Establish yourself as a high-end expert
- **Business-focused messaging** - Emphasize ROI and results over technical details
- **Conversion optimization** - Clear CTAs and streamlined user experience
- **Performance** - Fast loading times and smooth animations
- **Professional design** - Clean, spacious layouts with attention to detail

## Tech Stack

### Core
- **Next.js 14** - App Router with React Server Components
- **TypeScript** - Strict type safety throughout
- **Tailwind CSS v4** - Utility-first styling with custom design tokens
- **Framer Motion** - Smooth animations and transitions

### Forms & Validation
- **React Hook Form** - Performant form handling
- **Zod** - Type-safe schema validation
- **@hookform/resolvers** - Zod integration for React Hook Form

### Email Service
- **Resend** - Transactional email delivery

### Development Tools
- **ESLint** - Code linting with Next.js config
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixes

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Resend account (for email functionality)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-v2
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your values:
```env
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Linting

Run ESLint to check for code issues:
```bash
npm run lint
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key from Resend for email service | Yes (for quote form) |
| `NEXT_PUBLIC_SITE_URL` | Your site's URL (e.g., `https://anthonyhasrouny.com`) | Yes (for absolute URLs) |

See `.env.example` for the template.

## Deployment (Vercel)

### Pre-deployment Checklist

1. **Build locally** to check for errors:
```bash
npm run build
```

2. **Test production build**:
```bash
npm start
```

3. **Set environment variables** in Vercel dashboard:
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`

### Deploy to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Configure environment variables in the Vercel dashboard
4. Deploy

Vercel will automatically:
- Detect Next.js
- Run `npm run build`
- Deploy your site with optimal settings

### Post-deployment

- [ ] Test all pages on live site
- [ ] Test form submissions
- [ ] Check performance (Lighthouse)
- [ ] Verify SSL certificate
- [ ] Test on multiple devices

## Project Structure

```
portfolio-v2/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── portfolio/           # Portfolio pages
│   │   ├── [slug]/         # Dynamic project pages
│   │   └── page.tsx        # Portfolio listing
│   ├── quote/              # Quote request page
│   ├── services/           # Services page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
│
├── components/              # React components
│   ├── forms/              # Form components
│   │   └── QuoteForm.tsx   # Quote request form
│   ├── home/               # Homepage components
│   │   ├── FeaturedWork.tsx
│   │   ├── Hero.tsx
│   │   └── ValueProps.tsx
│   ├── layout/             # Layout components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── PageTransition.tsx
│   ├── portfolio/          # Portfolio components
│   │   ├── CaseStudy.tsx
│   │   └── ProjectCard.tsx
│   ├── services/           # Service components
│   │   └── ServiceCard.tsx
│   └── ui/                 # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       └── Section.tsx
│
├── data/                    # Data files
│   ├── projects.ts         # Project data
│   └── services.ts         # Service data
│
├── public/                  # Static assets
│   ├── images/             # Image files
│   │   └── projects/      # Project images
│   └── IMAGES_README.md    # Image requirements
│
├── .env.example            # Environment variable template
├── .env.local              # Local environment variables (gitignored)
├── .gitignore              # Git ignore rules
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Key Features

### Pages
- **Homepage** - Hero section, value propositions, featured work, CTA
- **Services** - Service offerings with detailed descriptions
- **Portfolio** - Project showcase with case studies
- **About** - Professional background and process
- **Quote** - Contact form for project inquiries

### Components
- **Reusable UI** - Button, Card, Container, Section components
- **Form handling** - Validated quote request form
- **Animations** - Scroll-triggered fade-ins with Framer Motion
- **Responsive design** - Mobile-first, works on all devices

### Design System
- **Colors**: Primary navy (#1a202c), Accent gold (#d4af37)
- **Typography**: Inter (body), Playfair Display (headings)
- **Spacing**: Consistent scale for premium feel
- **Animations**: Subtle, professional transitions

## Customization

### Update Your Information

1. **Name/Brand**: Replace "[Your Name]" in:
   - `app/layout.tsx` (metadata)
   - `components/layout/Header.tsx` (logo)
   - `components/layout/Footer.tsx` (copyright)
   - All page metadata files

2. **Contact Info**: Update in `components/layout/Footer.tsx`:
   - Email address
   - Social media links (GitHub, LinkedIn)

3. **Projects**: Edit `data/projects.ts` with your actual projects

4. **Services**: Edit `data/services.ts` with your service offerings

5. **Images**: Add images to `public/` directory (see `public/IMAGES_README.md`)

## Performance

- **Image Optimization** - Next.js Image component with automatic optimization
- **Code Splitting** - Automatic with Next.js App Router
- **Static Generation** - Portfolio pages pre-rendered at build time
- **Font Optimization** - Google Fonts with `display: swap`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Support

For issues or questions, please open an issue in the repository.


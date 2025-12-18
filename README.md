# Fitztar Fitness App Landing Page

A modern, production-ready landing page for Fitztar fitness app built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✨ **Modern UI/UX** - Beautiful gradient hero section with animations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Next.js 14 App Router** - Latest Next.js features with server components
- 🎨 **Tailwind CSS** - Utility-first styling with custom theme
- 📝 **Contact Form** - Validated form with React Hook Form + Zod
- 📧 **Email Integration** - Serverless API route with Resend for email delivery
- 🔒 **TypeScript** - Full type safety across the application
- ✅ **Form Validation** - Client and server-side validation
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- 🚦 **Production Ready** - Error handling, loading states, success messages

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Email Service:** Resend
- **Icons:** Lucide React

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager
- Resend account for email functionality (free tier available)

### Installation

1. **Install dependencies:**

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

2. **Set up environment variables:**

Create a \`.env.local\` file in the root directory:

\`\`\`env
# Resend API Key (Get from https://resend.com/api-keys)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Email Configuration
EMAIL_FROM=onboarding@yourdomain.com
EMAIL_TO=your-email@example.com

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

3. **Run the development server:**

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Service Setup (Resend)

### Step 1: Create Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### Step 2: Get API Key

1. Navigate to **API Keys** in the dashboard
2. Click **Create API Key**
3. Give it a name (e.g., "Fitztar Production")
4. Copy the API key and add it to your \`.env.local\` file

### Step 3: Configure Domain (Production)

**For development:** Use the default \`onboarding@resend.dev\` sender

**For production:**
1. Add your domain in Resend dashboard
2. Add DNS records as instructed
3. Verify domain
4. Update \`EMAIL_FROM\` in your environment variables

### Alternative: Using SendGrid

If you prefer SendGrid:

1. Install SendGrid package:
\`\`\`bash
npm install @sendgrid/mail
\`\`\`

2. Update \`src/app/api/contact/route.ts\` with SendGrid implementation

## 📁 Project Structure

\`\`\`
fitztar_web_app/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts          # API route for form submission
│   │   ├── globals.css                # Global styles
│   │   ├── layout.tsx                 # Root layout with metadata
│   │   └── page.tsx                   # Home page
│   ├── components/
│   │   ├── Hero.tsx                   # Hero section
│   │   ├── Features.tsx               # Features grid
│   │   ├── ContactForm.tsx            # Contact form with validation
│   │   └── Footer.tsx                 # Footer component
│   └── lib/
│       ├── validations.ts             # Zod schemas
│       └── utils.ts                   # Utility functions
├── public/                            # Static assets
├── .env.local.example                 # Environment variables template
├── .eslintrc.json                     # ESLint configuration
├── .gitignore                         # Git ignore rules
├── next.config.mjs                    # Next.js configuration
├── package.json                       # Dependencies and scripts
├── postcss.config.mjs                 # PostCSS configuration
├── tailwind.config.ts                 # Tailwind CSS configuration
└── tsconfig.json                      # TypeScript configuration
\`\`\`

## 🎨 Customization

### Colors

Edit [tailwind.config.ts](tailwind.config.ts) to customize the color scheme:

\`\`\`typescript
theme: {
  extend: {
    colors: {
      primary: { /* Your primary colors */ },
      accent: { /* Your accent colors */ },
    },
  },
}
\`\`\`

### Content

- **Hero Section:** Edit [src/components/Hero.tsx](src/components/Hero.tsx)
- **Features:** Edit [src/components/Features.tsx](src/components/Features.tsx)
- **Form Fields:** Edit [src/components/ContactForm.tsx](src/components/ContactForm.tsx)
- **Footer:** Edit [src/components/Footer.tsx](src/components/Footer.tsx)

### Metadata

Update SEO metadata in [src/app/layout.tsx](src/app/layout.tsx):

\`\`\`typescript
export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Your description',
  // ...
};
\`\`\`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Environment Variables in Production

Don't forget to add these in your hosting platform:
- \`RESEND_API_KEY\`
- \`EMAIL_FROM\`
- \`EMAIL_TO\`
- \`NEXT_PUBLIC_APP_URL\`

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## 📝 Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run start\` - Start production server
- \`npm run lint\` - Run ESLint
- \`npm run type-check\` - Run TypeScript compiler check

## 🔒 Security Best Practices

✅ Environment variables for sensitive data  
✅ Server-side form validation  
✅ Rate limiting (consider adding rate-limit middleware)  
✅ CORS protection  
✅ XSS protection via React  
✅ SQL injection protection (N/A - no database)

## 🐛 Troubleshooting

### Form not sending emails

1. Check \`RESEND_API_KEY\` is set correctly
2. Verify \`EMAIL_TO\` is configured
3. Check Resend dashboard for delivery status
4. Review browser console and terminal for errors

### TypeScript errors

Run type checking:
\`\`\`bash
npm run type-check
\`\`\`

### Styling issues

Clear Next.js cache:
\`\`\`bash
rm -rf .next
npm run dev
\`\`\`

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📞 Support

For questions or support, contact us at hello@fitztar.com

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
\`\`\`

# Setup Instructions

Follow these steps to get your Fitztar landing page up and running:

## Quick Start

### 1. Install Dependencies

Open a terminal in the project directory and run:

\`\`\`bash
npm install
\`\`\`

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- Resend
- Lucide React (icons)

### 2. Configure Environment Variables

1. Copy the example environment file:
   \`\`\`bash
   copy .env.local.example .env.local
   \`\`\`

2. Open \`.env.local\` and update the values:

   \`\`\`env
   # Get your API key from https://resend.com/api-keys
   RESEND_API_KEY=re_your_actual_api_key_here
   
   # Your domain email (for production) or use onboarding@resend.dev for testing
   EMAIL_FROM=onboarding@resend.dev
   
   # Where form submissions should be sent
   EMAIL_TO=youremail@example.com
   
   # Your app URL
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   \`\`\`

### 3. Get Resend API Key

1. Go to **https://resend.com**
2. Sign up for a free account
3. Navigate to **API Keys** → **Create API Key**
4. Copy the key and paste it into your \`.env.local\` file
5. For testing, you can use \`onboarding@resend.dev\` as the sender
6. For production, add and verify your own domain in Resend

### 4. Start Development Server

\`\`\`bash
npm run dev
\`\`\`

The application will be available at **http://localhost:3000**

### 5. Test the Contact Form

1. Navigate to the contact form section
2. Fill in all required fields
3. Submit the form
4. Check the email address you configured in \`EMAIL_TO\`
5. You should receive a professionally formatted email

## Production Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-github-repo-url
   git push -u origin main
   \`\`\`

2. Go to **https://vercel.com/new**
3. Import your GitHub repository
4. Add environment variables:
   - \`RESEND_API_KEY\`
   - \`EMAIL_FROM\`
   - \`EMAIL_TO\`
   - \`NEXT_PUBLIC_APP_URL\`
5. Click Deploy
6. Your site will be live in minutes!

### Custom Domain Setup (Resend)

For production, set up your own sending domain:

1. Go to Resend dashboard → **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., yourdomain.com)
4. Add the provided DNS records to your domain registrar
5. Wait for verification (usually 24-48 hours)
6. Update \`EMAIL_FROM\` to use your domain (e.g., hello@yourdomain.com)

## Customization Guide

### Update Branding

1. **Colors:** Edit [tailwind.config.ts](tailwind.config.ts)
2. **Company Name:** Search and replace "Fitztar" across all files
3. **Content:** Update text in component files

### Modify Form Fields

Edit [src/lib/validations.ts](src/lib/validations.ts) to add/remove fields:

\`\`\`typescript
export const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  // Add new fields here
});
\`\`\`

Then update [src/components/ContactForm.tsx](src/components/ContactForm.tsx) to include the UI for new fields.

## Common Issues

### Port 3000 already in use

Run on a different port:
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Email not sending

- Verify \`RESEND_API_KEY\` is correct
- Check Resend dashboard for logs
- Ensure \`EMAIL_TO\` is set
- Review terminal for error messages

### TypeScript errors

\`\`\`bash
npm run type-check
\`\`\`

## Need Help?

- **Resend Documentation:** https://resend.com/docs
- **Next.js Documentation:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs

---

Happy coding! 🚀
\`\`\`

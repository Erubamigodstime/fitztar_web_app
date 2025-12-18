# Font Setup Instructions

## Required Font Files

This project uses **Creato Display** font with the following specifications:

### Font Weights & Sizes
- **Bold (700)**: Used for headings - 48px on desktop, 32px on mobile
- **Regular (400)**: Used for body text - 16px on desktop, 14px on mobile

### Required Files

You need to add the following font files to the `src/fonts/` directory:

1. `CreatoDisplay-Bold.woff2` (Weight: 700)
2. `CreatoDisplay-Bold.woff` (Weight: 700, fallback)
3. `CreatoDisplay-Regular.woff2` (Weight: 400)
4. `CreatoDisplay-Regular.woff` (Weight: 400, fallback)

## Where to Get Creato Display

Creato Display is a premium font. You can obtain it from:
- Official font distributors
- Your existing design assets
- Licensed font libraries

## Alternative Fonts (If Creato Display is unavailable)

If you don't have access to Creato Display, you can use these free alternatives:

### Option 1: Poppins (Google Fonts)
```typescript
// In src/app/layout.tsx
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  weight: ['400', '700'],
  subsets: ['latin'], 
  variable: '--font-creato'
});
```

### Option 2: Montserrat (Google Fonts)
```typescript
// In src/app/layout.tsx
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ 
  weight: ['400', '700'],
  subsets: ['latin'], 
  variable: '--font-creato'
});
```

## Responsive Font Classes

The project uses custom Tailwind classes for responsive typography:

### Headings
- Mobile: `text-heading` (32px, weight 700)
- Desktop: `md:text-heading-lg` (48px, weight 700)

### Body Text
- Mobile: `text-body` (14px, weight 400)
- Desktop: `md:text-body-lg` (16px, weight 400)

### Usage Example
```tsx
<h1 className="text-heading md:text-heading-lg font-bold">
  Your Heading
</h1>

<p className="text-body md:text-body-lg">
  Your paragraph text
</p>
```

## Font Loading Strategy

The font is configured with:
- `display: 'swap'` for better performance
- `fallback` to system fonts
- Automatic optimization via Next.js
- WOFF2 format for best compression

## Troubleshooting

### Fonts not loading?
1. Ensure font files are in `src/fonts/` directory
2. Check file names match exactly (case-sensitive)
3. Clear Next.js cache: `rm -rf .next` and restart dev server
4. Verify WOFF2 files are valid

### Using alternative fonts?
1. Remove local font import from `layout.tsx`
2. Import Google Font instead
3. Update the font variable name accordingly
4. Restart development server

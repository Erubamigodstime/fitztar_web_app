# Public Assets

This folder contains static assets that are served directly by Next.js.

## Usage

Files in this directory are served at the root path `/`. For example:

- `public/logo.png` → Available at `/logo.png`
- `public/images/hero.jpg` → Available at `/images/hero.jpg`

## Best Practices

1. **Images**: Store your images in the `/public` folder or `/public/images` subfolder
2. **Optimization**: Use Next.js `Image` component for automatic optimization
3. **File naming**: Use lowercase with hyphens (e.g., `hero-image.jpg`)
4. **Formats**: Prefer modern formats like WebP or AVIF for better performance

## Example Usage in Components

```tsx
import Image from 'next/image';

<Image 
  src="/images/logo.png" 
  alt="Logo" 
  width={200} 
  height={100} 
/>
```

Or with regular HTML:

```tsx
<img src="/images/hero.jpg" alt="Hero" />
```

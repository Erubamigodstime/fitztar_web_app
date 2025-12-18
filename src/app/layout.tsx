import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import ScrollToTop from '@/components/ui/ScrollToTop';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const creatoDisplay = localFont({
  src: [
    {
      path: '../fonts/CreatoDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/CreatoDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-creato',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Fitztar - Transform Your Fitness Journey',
  description: 'Join thousands who achieved their fitness goals with personalized training plans, nutrition guidance, and expert coaching.',
  keywords: 'fitness, workout, training, nutrition, health, wellness',
  authors: [{ name: 'Fitztar' }],
  openGraph: {
    title: 'Fitztar - Transform Your Fitness Journey',
    description: 'Join thousands who achieved their fitness goals',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${creatoDisplay.variable} ${inter.variable}`}>
      <body className="antialiased font-creato">
        {children}
        <ScrollToTop />
        </body>
    </html>
  );
}

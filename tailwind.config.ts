import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
      },
      fontFamily: {
        sans: ['var(--font-creato)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        creato: ['var(--font-creato)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Mobile-first responsive sizes
        'heading': ['2rem', { lineHeight: '1.2', fontWeight: '700' }], // 32px mobile
        'heading-lg': ['3rem', { lineHeight: '1.1', fontWeight: '700' }], // 64px desktop
        'heading-xl': ['4rem', { lineHeight: '1.1', fontWeight: '700' }], // 72px
        'heading-2xl': ['5rem', { lineHeight: '1.05', fontWeight: '700' }], // 80px
        'heading-3xl': ['6rem', { lineHeight: '1', fontWeight: '700' }], // 96px
        'body': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }], // 14px mobile
        'body-lg': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px desktop
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

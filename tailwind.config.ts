import type { Config } from "tailwindcss"

const baseFontSize = 10

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      spacing: {'navigation-height': 'var(--navigation-height)'},
      fontSize: {
        xs: [
          `${(16 * 0.75) / baseFontSize}rem`, /* 12px */
          {
            lineHeight: `${(16 * 1) / baseFontSize}rem` /* 16px */,
          },
        ],
        sm: [
          `${(16 * 0.875) / baseFontSize}rem`, /* 14px */
          {
            lineHeight: `${(16 * 1.25) / baseFontSize}rem` /* 20px */,
          },
        ],
        md: [
          `${(16 * 1) / baseFontSize}rem`, /* 16px */
          {
            lineHeight: `${(16 * 1.5) / baseFontSize}rem` /* 24px */,
          },
        ],
        lg: [
          `${(16 * 1.125) / baseFontSize}rem`, /* 18px */
          {
            lineHeight: `${(16 * 1.75) / baseFontSize}rem` /* 28px */,
          },
        ],
        xl: [
          `${(16 * 1.25) / baseFontSize}rem`, /* 20px */
          {
            lineHeight: `${(16 * 1.75) / baseFontSize}rem` /* 28px */,
          },
        ],
        "2xl": [
          `${(16 * 1.5) / baseFontSize}rem`, /* 24px */
          {
            lineHeight: `${(16 * 2) / baseFontSize}rem` /* 32px */,
          },
        ],
        "3xl": [
          `${(16 * 1.875) / baseFontSize}rem`, /* 30px */
          {
            lineHeight: `${(16 * 2.25) / baseFontSize}rem` /* 36px */,
          },
        ],
        "4xl": [
          `${(16 * 2.25) / baseFontSize}rem`, /* 36px */
          {
            lineHeight: `${(16 * 2.5) / baseFontSize}rem` /* 40px */,
          },
        ],
        "5xl": [
          `${(16 * 3) / baseFontSize}rem`, /* 48px */
          {
            lineHeight: `${(16 * 3) / baseFontSize}rem`,
          },
        ],
        "6xl": [
          `${(16 * 3.75) / baseFontSize}rem`, /* 60px */
          {
            lineHeight: `${(16 * 3.75) / baseFontSize}rem`,
          },
        ],
        "7xl": [
          `${(16 * 4.5) / baseFontSize}rem`, /* 72px */
          {
            lineHeight: `${(16 * 4.5) / baseFontSize}rem`,
          },
        ],
        "8xl": [
          `${(16 * 6) / baseFontSize}rem`, /* 96px */
          {
            lineHeight: `${(16 * 6) / baseFontSize}rem`,
          },
        ],
        "9xl": [
          `${(16 * 8) / baseFontSize}rem`, /* 128px */
          {
            lineHeight: `${(16 * 8) / baseFontSize}rem`,
          },
        ],
      },
      colors: {
        brand: '#606BCC',
        'brand-select': '#6F7AEA',
        border: "hsl(var(--border))",
        grey: '#858699',
        'grey-dark': '#222326',
        'primary-text': '#f7f8f8',
        'secondary-text': '#b4bcd0',
        'transparent-white': 'rgba(255,255,255,0.12)',
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
        background: '#0A052A',
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    
      backgroundImage: {
        'page-gradient':
          'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),transparent)',
        'hero-gradient':
          'radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)',
        'hero-glow':
          'conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36,0,255) 0deg, rgb(0,135,255) 67.5deg, rgb(108,39,157) 198.75deg, rgb(24,38,163) 251.25deg, rgb(54,103,196) 301.88deg, rgb(105,30,255) 360deg)',
        'radial-gradient':
          'radial-gradient(circle at bottom center,var(--color),transparent 70%)',
        'glass-gradient':
          'linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 100%)',
        'glass2-gradient':
          'linear-gradient(rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.2) 100%)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up':{
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)'}
        },
        'image-rotate': {
          '0%': { transform: 'rotateX(25deg)' },
          '25%': { transform: 'rotateX(25deg) scale(0.9)' },
          '60%': { transform: 'none' },
          '100%': { transform: 'none' },
        },
        'image-glow': {
          '0%': {
            opacity: '0',
            'animation-timing-function': 'cubic-bezier(0.74, 0.25, 0.76, 1)',
          },
          '10%': {
            opacity: '1',
            'animation-timing-function': 'cubic-bezier(0.12, 0.01, 0.08, 0.99)',
          },
          '100%': {
            opacity: '0.2',
          },
        },
        'sketch-lines': {
          '0%': { strokeDashoffset: '1' },
          '55%': { strokeDashoffset: '0' },
          '99%': { strokeDashoffset: '0' },
          '100%': { visibility: 'hidden' },
        },
        zap: {
          '0%, 9%, 11%, 100%': {
            fill: 'transparent',
          },
          '10%': {
            fill: 'white',
          },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'fade-in':
        'fade-in 1000ms var(--animation-delay, 0ms) ease-in-out forwards',
        'fade-in-up': 'fade-in-up 1000ms var(--animation-delay, 0ms) ease-in-out forwards',
        'image-rotate': 'image-rotate 1400ms ease forwards',
        'image-glow': 'image-glow 4100ms 600ms ease-out forwards',
        'sketch-lines': 'sketch-lines 1200ms ease-out forwards',
        zap: 'zap 2250ms calc(var(--index)*20ms) infinite linear',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
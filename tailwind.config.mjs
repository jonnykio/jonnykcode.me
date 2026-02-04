import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        ink: {
          DEFAULT: '#000000',
          paper: '#ffffff',
          dim: '#262626',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        brutalist: '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutalist-hover': '2px 2px 0px 0px rgba(0,0,0,1)',
        'brutalist-dark': '4px 4px 0px 0px rgba(255,255,255,1)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '75ch',
            color: '#000000',
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
            },
            code: {
              backgroundColor: '#f3f4f6',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            a: {
              color: '#000000',
              textDecoration: 'underline',
              textDecorationThickness: '2px',
              textUnderlineOffset: '4px',
              '&:hover': {
                backgroundColor: '#000000',
                color: '#ffffff',
              },
            },
          },
        },
        invert: {
          css: {
            color: '#ffffff',
            'h1, h2, h3, h4': {
              color: '#ffffff',
            },
            a: {
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#ffffff',
                color: '#000000',
              },
            },
            code: {
              backgroundColor: '#1f2937',
              color: '#ffffff',
            },
          },
        },
      }),
    },
  },
  plugins: [
    typography,
  ],
}

/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#b9e6fe',
            300: '#7cd3fd',
            400: '#36bffa',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.primary.800'), // Accessible AAA
              '&:hover': {
                color: theme('colors.primary.900'),
              },
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.100'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.300'),
              },
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

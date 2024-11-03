import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      en: ['Google Sans Display', 'sans-serif'],
    },
    colors: {
      gdsc: {
        Blue: {
          900: '#3842AD',
          700: '#3F74E0',
          500: '#4295FF',
          300: '#6DB5FF',
          100: '#BFDEFF',
        },
        Green: {
          800: '#1F843C',
          600: '#34A853',
          400: '#5CC275',
          200: '#A2DBAE',
          50: '#E7F6EB',
        },
        Yellow: {
          800: '#F9AB00',
          600: '#FADB1F',
          400: '#F7EE4A',
          200: '#FCF699',
          50: '#FEFEE6',
        },
        Red: {
          900: '#AD211C',
          700: '#C9312E',
          500: '#EA4435',
          300: '#DD7271',
          100: '#FCCCD1',
        },
        Black: {
          DEFAULT: '#111',
        },
        Grey: {
          800: '#506067',
          600: '#6F8A94',
          400: '#91AAB4',
          200: '#C1CFD4',
        },
        White: {
          DEFAULT: '#FFF',
        },
      },
      transparent: 'transparent',
    },
    fontSize: {
      72: '4.5rem',
      48: '3rem',
      32: '2rem',
      24: '1.5rem',
      18: '1.125rem',
      16: '1rem',
      14: '0.875rem',
      12: '0.75rem',
    },
    extend: {
      screens: {
        mobile: { max: '480px' },
      },
      spacing: {
        content: '90rem',
      },
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(-50%) translateY(0)', opacity: '0' },
          '100%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
          '100%': { transform: 'translateX(0) translateY(-267px)', opacity: '0' },
        },
        'spin-sequence': {
          '0%': { transform: 'rotate(0deg)' },
          '16%': { transform: 'rotate(120deg)' },
          '24%': { transform: 'rotate(120deg)' },
          '40%': { transform: 'rotate(240deg)' },
          '48%': { transform: 'rotate(240deg)' },
          '64%': { transform: 'rotate(120deg)' },
          '72%': { transform: 'rotate(120deg)' },
          '88%': { transform: 'rotate(0deg)' },
          '96%': { transform: 'rotate(0deg)' },
        },
        resize: {
          '0%': { borderRadius: '0px 0px 0px 0px' },
          '7.5%': { height: '70%', borderRadius: '0px 0px 100px 100px' },
          '50%': { height: '70%', borderRadius: '0px 0px 100px 100px' },
          '57.5%': { height: '100%', borderRadius: '0px 0px 0px 0px' },
          '100%': { borderRadius: '0px 0px 0px 0px' },
        },
        rounded: {
          '0%': { borderRadius: '9999px 9999px 9999px 9999px' },
          '7.5%': { borderRadius: '9999px 0 9999px 0' },
          '50%': { borderRadius: '9999px 0 9999px 0' },
          '57.5%': { borderRadius: '9999px 9999px 9999px 9999px' },
          '100%': { borderRadius: '9999px 9999px 9999px 9999px' },
        },
      },
      animation: {
        'content-in': 'slide-right 1s ease-in-out',
        'content-in-slow': 'slide-right 1.5s ease-in-out',
        'content-in-more-slow': 'slide-right 1.7s ease-in-out',
        'content-out': 'slide-up 0.4s ease-in forwards',
        'gdsc-spin': 'spin-sequence 8s cubic-bezier(0.65, 0.05, 0.36, 1) infinite',
        'gdsc-resize': 'resize 3s ease-in-out infinite',
        'gdsc-rounded': 'rounded 4s ease-in-out infinite',
      },
    },
  },
  plugins: [
    ({ addUtilities }: any) => {
      addUtilities({
        '.text-H_EN': {
          '@apply font-en font-bold': {},
          lineHeight: '160%',
        },
        '.text-H1_EN': {
          '@apply text-H_EN text-72': {},
        },
        '.text-H2_EN': {
          '@apply text-H_EN text-48': {},
        },
        '.text-H3_EN': {
          '@apply text-H_EN text-32': {},
        },
        '.text-H4_EN': {
          '@apply text-H_EN text-24': {},
        },
        '.text-H5_EN': {
          '@apply text-H_EN text-18': {},
        },

        '.text-P_EN': {
          '@apply font-en font-normal': {},
          lineHeight: '180%',
        },
        '.text-P1_EN': {
          '@apply text-P_EN text-24': {},
        },
        '.text-P2_EN': {
          '@apply text-P_EN text-18': {},
        },
        '.text-P3_EN': {
          '@apply text-P_EN text-16': {},
        },
        '.text-P4_EN': {
          '@apply text-P_EN text-14': {},
        },
        '.text-P5_EN': {
          '@apply text-P_EN text-12': {},
        },

        '.text-H_KR': {
          '@apply font-semibold': {},
          lineHeight: '160%',
        },
        '.text-H1_KR': {
          '@apply text-H_KR text-72': {},
        },
        '.text-H2_KR': {
          '@apply text-H_KR text-48': {},
        },
        '.text-H3_KR': {
          '@apply text-H_KR text-32': {},
        },
        '.text-H4_KR': {
          '@apply text-H_KR text-24': {},
        },
        '.text-H5_KR': {
          '@apply text-H_KR text-18': {},
        },

        '.text-P_KR': {
          '@apply font-normal': {},
          lineHeight: '180%',
        },
        '.text-P1_KR': {
          '@apply text-P_KR text-24': {},
        },
        '.text-P2_KR': {
          '@apply text-P_KR text-18': {},
        },
        '.text-P3_KR': {
          '@apply text-P_KR text-16': {},
        },
        '.text-P4_KR': {
          '@apply text-P_KR text-14': {},
        },
        '.text-P5_KR': {
          '@apply text-P_KR text-12': {},
        },
      });
    },
  ],
};
export default config;

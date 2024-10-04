import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      en: ['Google Sans Display', 'sans-serif'],
      noto: ['Noto Sans', 'sans-serif'],
    },
    colors: {
      gdsc: {
        Blue: {
          900: '#3743AD',
          800: '#3C63CD',
          700: '#3F75E0',
          600: '#4287F4',
          500: '#4296FF',
          400: '#53A5FF',
          300: '#6EB6FF',
          200: '#96CBFF',
          100: '#BFDEFF',
          50: '#E4F2FF',
        },
        Green: {
          900: '#096529',
          800: '#1F843C',
          700: '#299647',
          600: '#34A853',
          500: '#3DB75D',
          400: '#5CC275',
          300: '#7BCE8E',
          200: '#A2DBAE',
          100: '#C6E9CD',
          50: '#E7F6EB',
        },
        Yellow: {
          900: '#F88000',
          800: '#F9AA00',
          700: '#F9C312',
          600: '#FADB1F',
          500: '#F4E91E',
          400: '#F7EE4A',
          300: '#FAF26E',
          200: '#FCF699',
          100: '#FDFAC2',
          50: '#FEFEE6',
        },
        Red: {
          900: '#AD211C',
          800: '#BC2B27',
          700: '#C9312E',
          600: '#DB3B34',
          500: '#EA4435',
          400: '#E6534E',
          300: '#DD7271',
          200: '#E99998',
          100: '#FCCCD1',
          50: '#FEEBED',
        },
        Black: {
          DEFAULT: '#000000',
        },
        Grey: {
          900: '#3E4A4F',
          800: '#506067',
          700: '#5F747C',
          600: '#6F8A94',
          500: '#7C9BA6',
          400: '#91AAB4',
          300: '#A7BBC3',
          200: '#C1CFD4',
          100: '#DAE2E5',
          50: '#F1F3F4',
        },
        White: {
          DEFAULT: '#FFFFFF',
        },
      },
      transparent: 'transparent',
    },
    fontSize: {
      120: '7.5rem',
      72: '4.5rem',
      48: '3rem',
      32: '2rem',
      24: '1.5rem',
      18: '1.125rem',
      16: '1rem',
      14: '0.875rem',
      12: '0.75rem',
    },
    fontWeight: {
      bold: '700',
      regular: '400',
    },
    extend: {
      spacing: {
        content: '90rem',
      },
      leading: {
        '120': '120%',
        '140': '140%',
        '160': '160%',
        '180': '180%',
      },
      tracking: {
        '0': '0%',
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
      
        // Display Styles
        '.text-display-l': {
        '@apply font-en font-bold text-120 leading-120 tracking-0': {},
      },
      '.text-display-m': {
        '@apply font-en font-bold text-72 leading-140 tracking-0': {},
      },
      '.text-display-s': {
        '@apply font-en font-bold text-48 leading-140 tracking-0': {},
      },
      // Title Styles
      '.text-title-l': {
        '@apply font-en font-bold text-32 leading-160 tracking-0': {},
      },
      '.text-title-m': {
        '@apply font-en font-regular text-24 leading-160 tracking-0': {},
      },
      '.text-title-s': {
        '@apply font-en font-regular text-18 leading-160 tracking-0': {}, 
      },
      // Paragraph Styles
      '.text-paragraph-l': {
        '@apply font-noto font-regular text-24 leading-180 tracking-0': {}, 
      },
      '.text-paragraph-m': {
        '@apply font-noto font-regular text-18 leading-180 tracking-0': {}, 
      },
      '.text-paragraph-s': {
        '@apply font-noto font-regular text-16 leading-180 tracking-0': {}, 
      },
      // Caption Styles
      '.text-caption-l': {
        '@apply font-noto font-regular text-14 leading-180 tracking-0': {}, 
      },
      '.text-caption-s': {
        '@apply font-noto font-regular text-12 leading-180 tracking-0': {}, 
      },
      });
    },
  ],
};
export default config;

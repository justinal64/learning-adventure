/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0A2463',
          blue: '#3B82F6',
        },
        secondary: {
          green: '#166534',
          forest: '#054A29',
        },
        accent: {
          red: '#B91C1C',
          purple: '#5B21B6',
        },
        success: {
          DEFAULT: '#10B981',
          dark: '#065F46',
          light: '#D1FAE5',
        },
        warning: {
          DEFAULT: '#F59E0B',
          dark: '#B45309',
          light: '#FEF3C7',
        },
        error: {
          DEFAULT: '#EF4444',
          dark: '#B91C1C',
          light: '#FEE2E2',
        },
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideDown: 'slideDown 0.3s ease-out',
        bounce: 'bounce 2s infinite ease-in-out',
        scaleUp: 'scaleUp 0.4s ease-out',
      },
      lineHeight: {
        body: '1.5',
        heading: '1.2',
      },
    },
  },
  plugins: [],
};
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '18inch': '1728px'
      },
      extend: {
        animation: {
          'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
          'blink': 'blink 4s ease-in-out infinite',
          'smile': 'smile 2s ease-in-out infinite',
          'wave-left': 'wave-left 2s ease-in-out infinite',
          'wave-right': 'wave-right 2s ease-in-out infinite 0.5s',
          'step': 'step 1.5s ease-in-out infinite',
          'spin-slow': 'spin 15s linear infinite',
        },
        keyframes: {
          'bounce-slow': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-8px)' },
          },
          'blink': {
            '0%, 90%, 100%': { transform: 'scaleY(0)' },
            '5%, 85%': { transform: 'scaleY(1)' },
          },
          'smile': {
            '0%, 100%': { transform: 'translateX(-50%) scaleX(1)' },
            '50%': { transform: 'translateX(-50%) scaleX(1.2)' },
          },
          'wave-left': {
            '0%, 100%': { transform: 'rotate(0deg)' },
            '25%': { transform: 'rotate(-20deg)' },
            '75%': { transform: 'rotate(15deg)' },
          },
          'wave-right': {
            '0%, 100%': { transform: 'rotate(0deg)' },
            '25%': { transform: 'rotate(20deg)' },
            '75%': { transform: 'rotate(-15deg)' },
          },
          'step': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-3px)' },
          },
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  }
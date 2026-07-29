/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F1F4F2",
        ink: {
          DEFAULT: "#10161C",
          dark: "#0A0F14",
        },
        teal: {
          DEFAULT: "#0E6E5E",
          dark: "#0A4F44",
          light: "#12876F",
        },
        coral: {
          DEFAULT: "#FF5A36",
          dark: "#E2451F",
        },
        amber: "#FFC145",
        slate: {
          soft: "#6B7680",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      boxShadow: {
        'premium': '0 4px 24px -4px rgba(0,0,0,0.08), 0 2px 8px -2px rgba(0,0,0,0.04)',
        'premium-lg': '0 8px 40px -8px rgba(0,0,0,0.12), 0 4px 16px -4px rgba(0,0,0,0.06)',
        'elevated': '0 20px 60px -12px rgba(0,0,0,0.15), 0 8px 24px -8px rgba(0,0,0,0.08)',
        'floating': '0 32px 80px -16px rgba(0,0,0,0.18), 0 12px 32px -8px rgba(0,0,0,0.1)',
        'glow-teal': '0 0 40px -8px rgba(14,110,94,0.3)',
        'glow-coral': '0 0 40px -8px rgba(255,90,54,0.3)',
        'inner-light': 'inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 1px rgba(0,0,0,0.04)',
      },
      backdropBlur: {
        '2xl': '40px',
        '3xl': '64px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'gradient-rotate': 'gradientRotate 8s linear infinite',
        'grain': 'grain 0.5s steps(1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        gradientRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -2%)' },
          '20%': { transform: 'translate(2%, 2%)' },
          '30%': { transform: 'translate(-1%, 1%)' },
          '40%': { transform: 'translate(1%, -1%)' },
          '50%': { transform: 'translate(-2%, 2%)' },
          '60%': { transform: 'translate(2%, -2%)' },
          '70%': { transform: 'translate(-1%, -1%)' },
          '80%': { transform: 'translate(1%, 1%)' },
          '90%': { transform: 'translate(-2%, -2%)' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

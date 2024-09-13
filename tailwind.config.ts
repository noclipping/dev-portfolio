import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        expand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        collapse: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        }
      },
      animation: {
        'expand-horizontal': 'expand 3s ease-out forwards', // Create an animation with timing
        'collapse-horizontal': 'collapse 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
};
export default config;

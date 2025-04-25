import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue-world': ['var(--font-neue-world)'],
        'neue-montreal': ['var(--font-neue-montreal)'],
        'geist': ['var(--font-geist)'],
        'geist-mono': ['var(--font-geist-mono)'],
        'manrope': ['var(--font-manrope)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

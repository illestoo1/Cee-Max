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
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e2c06a",
        },
        cblack: "#0c0c0c",
        cdark: "#141414",
        cpanel: "#1a1a1a",
        cborder: "#2a2a2a",
        cwhite: "#f0ece4",
        cmuted: "#888888",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        barlow: ["var(--font-barlow)", "sans-serif"],
        condensed: ["var(--font-barlow-condensed)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

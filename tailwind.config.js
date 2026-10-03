/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background & Surfaces (Cream Earthy)
        background: "#fff8f5",
        surface: "#fff8f5",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#faf2ee",
        "surface-container": "#f4ece8",
        "surface-container-high": "#eee7e3",
        "surface-container-highest": "#e9e1dd",

        // Terracotta (Primary Accent & Button)
        primary: "#781f00",
        "primary-container": "#9a3412",
        "on-primary": "#ffffff",
        "primary-fixed": "#ffdbd1",
        "on-primary-fixed": "#3a0a00",

        // Mustard / Amber (Secondary Accent & Badges)
        secondary: "#805600",
        "secondary-container": "#feb63c",
        "on-secondary": "#ffffff",
        "secondary-fixed": "#ffddb0",
        "on-secondary-fixed": "#281800",

        // Outlines & Typography Tones
        "on-surface": "#1e1b19",
        "on-surface-variant": "#57423c",
        outline: "#8b716a",
        "outline-variant": "#dec0b7",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        headline: ["Syne", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "brutal-sm": "2px 2px 0px #1e1b19",
        brutal: "3px 3px 0px #1e1b19",
        "brutal-primary": "3px 3px 0px #9a3412",
        "brutal-secondary": "3px 3px 0px #805600",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // Dark background color
        secondary: "#ffffff", // Text and card borders
        border: "#444444", // Card border color (similar to OpenAI's)
      },
      fontFamily: {
        sans: ["Söhne", "Helvetica", "Arial", "sans-serif"], // OpenAI's fonts
        serif: ["Signifier", "serif"],
      },
    },
  },

  plugins: [],
} satisfies Config;

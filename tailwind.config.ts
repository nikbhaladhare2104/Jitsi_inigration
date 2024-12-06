// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // OpenAI's primary black
        secondary: "#ffffff", // OpenAI's white for backgrounds
      },
      fontFamily: {
        sans: ["Söhne", "Helvetica", "Arial", "sans-serif"], // OpenAI's fonts
        serif: ["Signifier", "serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animations"), // Add smooth animations support
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "280px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
      },
      boxShadow: {
        "3xl": "0 80px 90px -5px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-grey": "#F1F1F1",
      },
      fontFamily: {
        "calibri": ["Calibri", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(227, 181, 34, 0.25) 0%, rgba(0, 0, 0, 0) 13.66%)",
      },
    },
  },
  plugins: [],
};

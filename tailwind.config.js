/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8F43EE",
        background: "#3A3442",
        nav: "#28272A",
      },
      boxShadow: {
        primaryHover: "0px 0px 20px 10px rgb(143, 67, 238, 0.5)",
        cursor: "0px 0px 40px 40px #8F43EE",
      },
    },
  },
  plugins: [],
};

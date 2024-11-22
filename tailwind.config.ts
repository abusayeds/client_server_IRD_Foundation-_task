/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyfont: ["Poppins", "sans-serif"],
        titlefont: ["Montserrat", "sans-serif"],
      },

      colors: {
        bodyColor: "#E2E2E2",
        bodyPrimaryColor: "#FFFFFF",
        balckcolor: "#393939",
        primarycolor: "#1FA45B",
        grayColor: "#868868",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

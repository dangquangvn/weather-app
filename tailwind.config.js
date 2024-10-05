import { addDynamicIconSelectors } from "@iconify/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      tight: "-.015rem",
    },
    extend: { height: { "hafl-screen": "50vh" } },
  },
  plugins: [addDynamicIconSelectors()],
};

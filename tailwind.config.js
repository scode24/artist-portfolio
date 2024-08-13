/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      glass: "backdrop-blur-2xl bg-opacity-5 shadow-2xl ring-1 ring-black/5",
    },
  },
  plugins: [],
};

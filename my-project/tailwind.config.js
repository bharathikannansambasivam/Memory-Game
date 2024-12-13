/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transform: {
        "rotate-y-90": "rotateY(90deg)",
        "rotate-y-0": "rotateY(0deg)",
      },
    },
  },
  plugins: [],
};

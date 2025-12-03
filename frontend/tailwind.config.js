import daisyui from "daisyui"

/**@type {import('tailwindcss').Config} */
export default{
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    // include both 'dark' and 'forest' so we can apply a dark theme
    themes : ["dark", "forest"],
  },
}
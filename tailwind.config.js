import primeui from "tailwindcss-primeui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{vue,js,ts}"
  ],
  plugins: [
    require("primeui")
  ]
}

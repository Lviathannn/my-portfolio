/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   darkMode: ["class"],
   theme: {
      extend: {
         animation: {
            bouncefast: "bounce .75s infinite",
         },
      },
   },
   plugins: [],
};

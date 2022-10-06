/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         animation: {
            bouncefast: "bounce .75s infinite",
         },
      },
   },
   plugins: [],
};

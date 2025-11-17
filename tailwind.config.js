/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ligikaudsed toonid sinu südame järgi
        brand: {
          dark: "#024059",  // tumedam türkiissinine
          mid: "#038C8C",   // türkiis
          light: "#46C5FF", // helesinine
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agl: {
          yellow: "#F4B400",      // Amarillo construcción
          blue: "#003E7E",        // Azul corporativo
          gray: "#757575",        // Gris industrial
          black: "#0F0F0F",       // Negro técnico
          "gray-light": "#F3F4F6" // Fondo clarito
        },
      },
      fontFamily: {
        // Para textos generales
        sans: ["Montserrat", "system-ui", "sans-serif"],
        // Para títulos
        headings: ["Montserrat", "system-ui", "sans-serif"],
        // Para fichas técnicas si usas Exo 2
        technical: ["'Exo 2'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

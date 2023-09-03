import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/code_bytes/",
  plugins: [react()],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
});

// // @type {import('tailwindcss').Config}
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#092635",
        secondary: "#9EC8B9",
      },
      fontFamily: {
        ugs: ["Ultimate Gear"],
        hacked: ["HACKED"],
        gear: ['"Ultimate Gear Slant"', "sans-serif"],
      },
      keyframes: {
        glitch: {
          "0%": {
            boxShadow:
              "1.5px 1.5px 3px #ff0000, -1.5px -1.5px 3px #00ffff, 1px -1px 3px #ff00ff, -1px 1px 3px #ffff00",
          },
          "25%": {
            boxShadow:
              "2px -1px 3px #ff0000, -2px 1px 3px #00ffff, 1.5px -1.5px 3px #ff00ff, -1.5px 1.5px 3px #ffff00",
          },
          "50%": {
            boxShadow:
              "1px 2px 3px #ff0000, -1px -2px 3px #00ffff, 2px -2px 3px #ff00ff, -2px 2px 3px #ffff00",
          },
          "75%": {
            boxShadow:
              "3px -0.5px 3px #ff0000, -3px 0.5px 3px #00ffff, 0.5px -3px 3px #ff00ff, -0.5px 3px 3px #ffff00",
          },
          "100%": {
            boxShadow:
              "1.5px 1.5px 3px #ff0000, -1.5px -1.5px 3px #00ffff, 1px -1px 3px #ff00ff, -1px 1px 3px #ffff00",
          },
        },
      },
      animation: {
        glitch: "glitch 2s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

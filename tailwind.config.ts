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
        primary: "#ff671f",
        secondary: "#1a1719",
      },
      fontFamily: {
        ugs: ["var(--font-ugs)"],
      },
    },
  },
  plugins: [],
} satisfies Config;

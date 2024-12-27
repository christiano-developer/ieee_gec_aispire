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
      },
    },
  },
  plugins: [],
} satisfies Config;

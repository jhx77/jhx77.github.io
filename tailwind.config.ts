import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,md}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#070A12",
        panel: "#0E1422",
        line: "rgba(148, 163, 184, 0.18)",
        mint: "#6EE7B7",
        cyan: "#67E8F9",
        gold: "#F8D66D"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(103, 232, 249, 0.14)",
        card: "0 18px 50px rgba(2, 6, 23, 0.18)"
      }
    }
  },
  plugins: []
} satisfies Config;

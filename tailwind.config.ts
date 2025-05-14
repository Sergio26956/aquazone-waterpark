import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#38BDF8",
      },
      animation: {
        pulseGlow: "pulse-glow 2s infinite",
        fadeInUp: "fadeInUp 0.8s ease forwards",
      },
    },
  },
  plugins: [],
}

export default config

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Deep night-meditation navy — primary dark surface
        navy: {
          950: "#080C18",
          900: "#0B1120",
          800: "#131B33",
          700: "#1C2748",
          600: "#293761",
        },
        // Temple gold — divinity / premium accent
        gold: {
          200: "#F3E3AE",
          300: "#E8C766",
          400: "#DCB13C",
          500: "#C9A227",
          600: "#A9821C",
        },
        // Marigold-saffron — the offering-flower accent, warmer & more
        // saturated than the generic AI terracotta default
        saffron: {
          400: "#F0854A",
          500: "#E8600E",
          600: "#C24E0A",
        },
        // Warm cream — light-mode surface
        cream: {
          50: "#FAF6EE",
          100: "#F3ECDC",
          200: "#E8DBC0",
        },
        ink: {
          900: "#1B1710",
          700: "#3A342A",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
        data: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(232,199,102,0.15), transparent 60%)",
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(201,162,39,0.8), transparent)",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(201,162,39,0.35)",
        card: "0 20px 60px -20px rgba(8,12,24,0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 60s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

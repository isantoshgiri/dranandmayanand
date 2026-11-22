import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./sections/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#251B17", gold: "#B27A2B", parchment: "#F8F5EF", sand: "#E8DED0" },
      fontFamily: { display: ["var(--font-cormorant)", "serif"], body: ["var(--font-inter)", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;

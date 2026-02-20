import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/config/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        outlet: {
          bg: "var(--bg)",
          surface: "var(--surface)",
          surface2: "var(--surface2)",
          text: "var(--text)",
          muted: "var(--muted)",
          accent: "var(--accent)",
          accent2: "var(--accent2)",
          accent3: "var(--accent3)",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

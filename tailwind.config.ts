import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      spacing: {
        '200': '37.5rem', 
        '158': '25rem', 
        '159': '37.5rem', 
        '163': '37.5rem', 
        '165': '37.5rem',
        '96': '37.5rem', 
        '38': '37.5rem'
      },
    },
  },
  plugins: [],
};

export default config;


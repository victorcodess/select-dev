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
      },
      boxShadow: {
        btn:
          "0px 2px 8px 0px rgba(0, 0, 0, 0.16), 0px 1px 0px 0px #0088C5, inset 1px 1px 0px 0px rgba(255, 255, 255, 0.30)",
      },
    },
  },
  plugins: [],
} satisfies Config;

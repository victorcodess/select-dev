import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        btn: "0px 2px 8px 0px rgba(0, 0, 0, 0.16), 0px 1px 0px 0px #0088C5, inset 1px 1px 0px 0px rgba(255, 255, 255, 0.30)",
        pill: "0px 1px 0px 0px rgba(0, 0, 0, 0.70), 0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset;",
        card: "0px 0px 0px 1px #000, 0px 0px 10px 0px rgba(0, 0, 0, 0.70)",
      },
      backgroundImage: {
        "pill-radial":
          "radial-gradient(88.41% 100% at 49.87% 0%, #3A3F5C 0%, #18182C 57.5%)",
        "hero-radial":
          "radial-gradient(45.2% 47.6% at 50% 100%, #00C0FF 10%, #0B0C15 100%)",
        "hero-radial-2":
          "radial-gradient(85.6% 38.7% at 50% 94.7%, rgba(11, 12, 21, 0.16) 0%, #0B0C15 100%)",
        "testimonial-linear":
          "linear-gradient(180deg, #0B0C15 0%, #0B0C1500 35%, #0B0C1500 65%, #0B0C15 100%);",
      },
    },
  },
  plugins: [],
} satisfies Config;

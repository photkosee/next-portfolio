import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fadein": {
          "0%" : {
            opacity: "0",
          },
          "5%" : {
            opacity: "0",
          },
          "100%" : {
            opacity: "1",
          }
        },
        "orbit": {
          "0%": { transform: "rotate(0deg)" },
          "8%": { transform: "rotate(-5deg)" },
          "18.66%": { transform: "rotate(98deg)" },
          "25%": { transform: "rotate(90deg)" },
          "26.5%": { transform: "rotate(90deg)" },
          "33%": { transform: "rotate(85deg)" },
          "41.666%": { transform: "rotate(188deg)" },
          "48%": { transform: "rotate(180deg)" },
          "50%": { transform: "rotate(180deg)" },
          "58%": { transform: "rotate(175deg)" },
          "66.666%": { transform: "rotate(278deg)" },
          "73%": { transform: "rotate(270deg)" },
          "75%": { transform: "rotate(270deg)" },
          "83%": { transform: "rotate(265deg)" },
          "91.666%": { transform: "rotate(368deg)" },
          "98%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "rotate": {
          "0%": { transform: "rotate(0deg)" },
          "8%": { transform: "rotate(5deg)" },
          "18.66%": { transform: "rotate(-98deg)" },
          "25%": { transform: "rotate(-90deg)" },
          "26.5%": { transform: "rotate(-90deg)" },
          "33%": { transform: "rotate(-85deg)" },
          "41.666%": { transform: "rotate(8deg)" },
          "48%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(0deg)" },
          "58%": { transform: "rotate(0deg)" },
          "66.666%": { transform: "rotate(0deg)" },
          "73%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(0deg)" },
          "83%": { transform: "rotate(0deg)" },
          "91.666%": { transform: "rotate(0deg)" },
          "98%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(-35%)" },
          to: { transform: "translateX(100%)" },
        },
        "jump": {
          "0%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-50px)"
          },
          "100%": {
            transform: "translateY(0)"
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadein": "fadein 2.2s",
        "orbit": "orbit 16s ease-in-out infinite",
        "rotate": "rotate 16s ease-in-out infinite",
        "infinite-scroll": "infinite-scroll 5.5s linear infinite",
        "mini-infinite-scroll": "infinite-scroll 7s linear infinite",
        "jump": "jump 0.7s ease-in-out"
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config

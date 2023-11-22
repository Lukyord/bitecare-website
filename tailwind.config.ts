/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      colors: {
        //BiteCare Colors
        bc_primary: "#549B51",
        bc_inverse_primary: "#9DD67D",
        bc_primary_container: "#CBE4CB",

        bc_black: "#072100",
        bc_grey: "#74796D",

        //Shadcn Colors
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        psl: ["var(--font-psl)"],
        hel_rounded: ["var(--font-helveltica-rounded)"],
      },
      boxShadow: {
        bc_small: "4px 4px 6px 0px rgba(0, 0, 0, 0.25)",
      },
      fontSize: {
        h0: ["700px", { lineHeight: "normal", letterSpacing: "0" }],
        h1: ["150px", { lineHeight: "70%", letterSpacing: "0" }],
        h2: ["96px", { lineHeight: "80%", letterSpacing: "0" }],
        h3: ["48px", { lineHeight: "80%", letterSpacing: "0" }],
        paragraph: ["24px", { lineHeight: "100%", letterSpacing: "0.72px" }],
        subtitle: ["16px", { lineHeight: "90%", letterSpacing: "0.64px" }],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

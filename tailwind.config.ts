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
      screens: {
        xs: "430px",
        "2xl": "1400px",
        desktop: "1920px",
      },
      colors: {
        //BiteCare Colors
        "bc-primary": "#549B51",
        "bc-inverse-primary": "#9DD67D",
        "bc-primary-container": "#CBE4CB",

        "bc-black": "#072100",
        "bc-grey": "#74796D",

        "bc-surface-container": "#D2CFCC",
        "bc-surface": "#E6EBE8",

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
        "full-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "full-rotate": "full-rotate 35s linear infinite",
      },
      fontFamily: {
        psl: ["var(--font-psl)"],
        hel_rounded: ["var(--font-helveltica-rounded)"],
        noto: ["var(--font-noto)"],
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

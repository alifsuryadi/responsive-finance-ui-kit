import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Dashboard specific colors
        "sidebar-bg": "hsl(var(--sidebar-bg))",
        "sidebar-foreground": "hsl(var(--sidebar-foreground))",
        "sidebar-active": "hsl(var(--sidebar-active))",
        "sidebar-active-foreground": "hsl(var(--sidebar-active-foreground))",
        "sidebar-muted": "hsl(var(--sidebar-muted))",

        "header-bg": "hsl(var(--header-bg))",
        "header-border": "hsl(var(--header-border))",

        "text-primary": "hsl(var(--text-primary))",
        "text-secondary": "hsl(var(--text-secondary))",
        "text-muted": "hsl(var(--text-muted))",

        "input-bg": "hsl(var(--input-bg))",
        "input-border": "hsl(var(--input-border))",
        "input-focus": "hsl(var(--input-focus))",

        "progress-success": "hsl(var(--progress-success))",
        "progress-warning": "hsl(var(--progress-warning))",
        "progress-danger": "hsl(var(--progress-danger))",
        "progress-bg": "hsl(var(--progress-bg))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          border: "hsl(var(--card-border))",
        },
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        danger: "hsl(var(--danger))",
        info: "hsl(var(--info))",

        "button-secondary": "hsl(var(--button-secondary))",
        "button-secondary-foreground":
          "hsl(var(--button-secondary-foreground))",
        "button-success": "hsl(var(--button-success))",
        "button-success-foreground": "hsl(var(--button-success-foreground))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

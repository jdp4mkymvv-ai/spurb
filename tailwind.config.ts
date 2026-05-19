import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(242, 111, 37, 0.26), transparent 30%), radial-gradient(circle at 20% 30%, rgba(80, 174, 92, 0.24), transparent 34%), linear-gradient(135deg, rgba(12, 20, 35, 0.98), rgba(5, 9, 17, 0.98))"
      },
      boxShadow: {
        halo: "0 24px 80px rgba(242, 111, 37, 0.18)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"]
      }
    }
  },
  plugins: []
};

export default config;

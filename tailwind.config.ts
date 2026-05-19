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
          "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(124,58,237,0.25), transparent), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(109,40,217,0.15), transparent), linear-gradient(180deg, #0d0d0d, #0a0a0a)"
      },
      boxShadow: {
        halo: "0 30px 80px rgba(124, 58, 237, 0.22)",
        "violet-sm": "0 0 20px rgba(124, 58, 237, 0.15)"
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

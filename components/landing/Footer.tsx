const links = [
  { label: "À propos", href: "#about" },
  { label: "CGU", href: "#cgu" },
  { label: "Confidentialité", href: "#privacy" },
  { label: "Contact", href: "#contact" }
];

export function Footer() {
  return (
    <footer className="section-shell mt-28 border-t border-white/8 pb-12 pt-10">
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-sm font-bold text-white">
            S
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-white">Spurb</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="transition hover:text-white/75">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-sm text-white/25">
          © 2025 Spurb — L&apos;IA qui fait travailler vos biens
        </p>
      </div>
    </footer>
  );
}

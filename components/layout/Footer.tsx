import Link from "next/link";

const footerLinks = {
  rubriques: [
    { href: "/analyses", label: "Analyses" },
    { href: "/marche", label: "Marché" },
    { href: "/investir", label: "Investir" },
    { href: "/exploiter", label: "Exploiter" },
    { href: "/reglementation", label: "Réglementation" },
    { href: "/outils", label: "Outils" },
  ],
  categoriess: [
    { href: "/analyses?categorie=investissement", label: "Investissement" },
    { href: "/analyses?categorie=marche", label: "Marché" },
    { href: "/analyses?categorie=rentabilite", label: "Rentabilité" },
    { href: "/analyses?categorie=reglementation", label: "Réglementation" },
    { href: "/analyses?categorie=exploitation", label: "Exploitation" },
    { href: "/analyses?categorie=etudes-de-cas", label: "Études de cas" },
  ],
  apropos: [
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
    { href: "/newsletter", label: "Newsletter" },
    { href: "/ebook", label: "Ebook gratuit" },
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Politique de confidentialité" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="text-white font-bold text-sm">Observatoire du Stockage</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Le média francophone de référence dédié au marché du stockage, à l'investissement et à l'optimisation des espaces.
            </p>
            <Link
              href="/newsletter"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
            >
              S'inscrire à la newsletter
            </Link>
          </div>

          {/* Rubriques */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Rubriques</h3>
            <ul className="space-y-2.5">
              {footerLinks.rubriques.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Catégories */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Catégories</h3>
            <ul className="space-y-2.5">
              {footerLinks.categoriess.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* À propos */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">À propos</h3>
            <ul className="space-y-2.5">
              {footerLinks.apropos.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Observatoire du Stockage. Tous droits réservés.
          </p>
          <p className="text-xs text-slate-500 text-center">
            Les contenus publiés sont à titre informatif et ne constituent pas un conseil en investissement.
          </p>
        </div>
      </div>
    </footer>
  );
}

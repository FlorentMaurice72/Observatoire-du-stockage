import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GestionPark — Application de gestion de boxes et garages en location",
  alternates: { canonical: "https://observatoire-du-stockage.fr/outils/gestion-locative" },
  description:
    "GestionPark centralise la gestion de vos boxes de stockage en location : loyers, impayés, locataires, documents et rentabilité — sans Excel ni agence.",
};

const features = [
  {
    num: "01",
    titre: "Tableau de bord multi-biens",
    detail:
      "Taux d'occupation, loyers encaissés, impayés, locataires actifs : tous vos indicateurs sur un seul écran. Rentabilité par bien affichée sur 12 mois glissants.",
    img: "/gestionpark/gp-08.webp",
    alt: "Tableau de bord GestionPark — taux d'occupation et loyers encaissés",
  },
  {
    num: "02",
    titre: "Import CSV bancaire",
    detail:
      "Importez votre relevé bancaire (toutes banques FR). GestionPark identifie automatiquement chaque paiement et l'affecte au bon locataire en 5 étapes guidées.",
    img: "/gestionpark/gp-07.webp",
    alt: "Import CSV bancaire — workflow en 5 étapes",
  },
  {
    num: "03",
    titre: "Suivi des paiements & relances",
    detail:
      "Visualisez en temps réel l'état de chaque loyer : encaissé, en attente ou impayé. Envoyez une relance email ou générez un avis de loyer en un clic.",
    img: "/gestionpark/gp-06.webp",
    alt: "Suivi des paiements mensuels et relances locataires",
  },
  {
    num: "04",
    titre: "Fiches locataires & documents",
    detail:
      "Centralisez baux, pièces justificatives et quittances par locataire. Les quittances PDF sont générées automatiquement après chaque paiement enregistré.",
    img: "/gestionpark/gp-03.webp",
    alt: "Fiches locataires et documents — quittances automatiques",
  },
  {
    num: "05",
    titre: "Révision de loyer IRL",
    detail:
      "GestionPark calcule automatiquement la révision annuelle selon l'indice IRL en vigueur et génère la notification à envoyer à chaque locataire concerné.",
    img: "/gestionpark/gp-02.webp",
    alt: "Révision de loyer IRL automatique",
  },
  {
    num: "06",
    titre: "Rentabilité & statistiques",
    detail:
      "Analysez loyers, charges et vacance sur 12 mois pour chaque bien. La formule Pro ajoute les statistiques avancées, l'export CSV et les rapports détaillés.",
    img: "/gestionpark/gp-13.webp",
    alt: "Statistiques de rentabilité et graphiques 12 mois",
  },
];

const essentielFeatures = [
  "Jusqu'à 30 boxes",
  "Multi-biens / multi-bâtiments",
  "Tableau de bord et KPIs",
  "Import CSV bancaire (toutes banques FR)",
  "Détection des impayés",
  "Relances par email/SMS",
  "Fiches locataires complètes",
  "Quittances PDF automatiques",
  "Révision IRL automatique",
  "Historique complet des locations",
  "Graphiques 12 mois",
  "Support par email",
];

const proFeatures = [
  "Boxes illimitées",
  "Tout de l'Essentiel, plus :",
  "Connexion bancaire DSP2 automatique",
  "Rapprochement automatique",
  "Relances automatiques programmées",
  "Statistiques avancées et rapports",
  "Support prioritaire",
  "Onboarding personnalisé",
];

const faq = [
  {
    q: "Est-ce vraiment gratuit au départ ?",
    a: "Oui. L'essai dure 14 jours, sans carte bancaire ni engagement. Toutes les fonctionnalités de la formule choisie sont accessibles pendant la période d'essai.",
  },
  {
    q: "Combien de boxes puis-je gérer ?",
    a: "La formule Essentiel prend en charge jusqu'à 30 boxes. La formule Pro est illimitée, adaptée aux parcs de grande taille ou multi-bâtiments.",
  },
  {
    q: "Mon relevé bancaire est-il compatible ?",
    a: "L'import CSV fonctionne avec toutes les banques françaises. La formule Pro ajoute la connexion DSP2 directe (synchronisation automatique sans export manuel).",
  },
  {
    q: "Puis-je gérer plusieurs bâtiments ou sites ?",
    a: "Oui. GestionPark est conçu pour les propriétaires multi-biens : chaque bâtiment a son propre suivi, et le tableau de bord consolide l'ensemble.",
  },
  {
    q: "Comment sont gérées les quittances ?",
    a: "Les quittances PDF sont générées automatiquement après chaque paiement enregistré. Elles peuvent être envoyées par email directement depuis l'interface.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "L'hébergement est en Europe, les échanges sont chiffrés (HTTPS) et une sauvegarde quotidienne est effectuée. Vos données vous appartiennent.",
  },
  {
    q: "Puis-je annuler à tout moment ?",
    a: "Sans engagement. L'abonnement annuel peut être interrompu à tout moment. Aucun frais de résiliation n'est appliqué.",
  },
];

export default function GestionLocativePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100 py-12 md:py-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-slate-600">Accueil</Link>
            <span>›</span>
            <Link href="/outils" className="hover:text-slate-600">Outils</Link>
            <span>›</span>
            <span className="text-slate-600">Gestion locative</span>
          </nav>

          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-700 bg-teal-50 border border-teal-100 px-3 py-1 rounded-full mb-5">
            Spécialiste boxs de stockage
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-[#1a1a2e] leading-tight mb-5">
            Gérez vos boxes de stockage.<br className="hidden md:block" />
            <span className="text-[#1e3a5f]">En toute autonomie.</span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Suivez vos locations, paiements, locataires et biens depuis un seul tableau de bord. Sans agence, sans Excel.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#162d4a] transition-colors text-sm"
            >
              Être notifié du lancement
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <span className="text-xs text-slate-400 sm:text-sm">
              14 jours d'essai gratuit · Sans carte bancaire
            </span>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { val: "88 %", label: "Taux d'occupation moyen" },
              { val: "Zéro", label: "Excel requis" },
              { val: "14 j", label: "D'essai gratuit" },
              { val: "DSP2", label: "Connexion bancaire (Pro)" },
            ].map((s) => (
              <div key={s.label} className="bg-[#f8f9fa] rounded-xl border border-slate-100 py-4 px-3 text-center">
                <p className="text-xl font-bold text-[#1e3a5f]">{s.val}</p>
                <p className="text-xs text-slate-500 mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problème / Solution */}
      <section className="bg-[#f8f9fa] border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a1a2e] text-center mb-10">
            Pourquoi les propriétaires de boxes choisissent GestionPark
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Problème */}
            <div className="bg-white rounded-2xl border border-red-100 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-700 text-sm">Beaucoup de boxes = beaucoup de gestion</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Retrouver qui paie par locataire devient chronophage",
                  "Identifier quelle box appartient à qui en temps réel",
                  "Importer et rapprocher les relevés bancaires manuellement",
                  "Générer chaque quittance à la main chaque mois",
                  "Gérer les révisions IRL sans outil dédié",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1 text-red-300 flex-shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-white rounded-2xl border border-teal-100 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-700 text-sm">Centralisez et automatisez</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Tableau de bord multi-biens en temps réel",
                  "Import CSV bancaire avec matching automatique",
                  "Relances configurables par locataire",
                  "Quittances et documents générés automatiquement",
                  "Historique complet de chaque location",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1 text-teal-500 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Aperçu du tableau de bord */}
      <section className="bg-white border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 text-center mb-4">
            Aperçu du tableau de bord
          </p>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            <Image
              src="/gestionpark/gp-09.webp"
              alt="Tableau de bord GestionPark — vue d'ensemble"
              width={2000}
              height={1830}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="bg-[#f8f9fa] border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a1a2e] text-center mb-2">
            Conçu pour les loueurs de boxes
          </h2>
          <p className="text-sm text-slate-500 text-center mb-10">
            Des outils adaptés à la gestion de multiples unités de stockage.
          </p>

          <div className="space-y-10">
            {features.map((f, i) => (
              <div
                key={f.num}
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2 block">
                    {f.num}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-[#1a1a2e] mb-3">{f.titre}</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">{f.detail}</p>
                </div>
                <div className="flex-1 min-w-0 w-full">
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                    <Image
                      src={f.img}
                      alt={f.alt}
                      width={2000}
                      height={1314}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="bg-white border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a1a2e] mb-2">
            Vos boxes se gèrent tout seuls
          </h2>
          <p className="text-sm text-slate-500 mb-10">Démarrez en quelques minutes.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "1",
                t: "Créez votre compte",
                d: "Inscription en 2 minutes, sans carte bancaire. 14 jours d'essai complet inclus.",
              },
              {
                n: "2",
                t: "Ajoutez vos biens et boxes",
                d: "Renseignez vos biens, vos unités de stockage et vos locataires actuels.",
              },
              {
                n: "3",
                t: "Gérez depuis le tableau de bord",
                d: "Importez vos relevés, suivez les paiements et pilotez votre parc en temps réel.",
              },
            ].map((step) => (
              <div key={step.n} className="relative p-6 rounded-2xl border border-slate-100 bg-[#f8f9fa] text-left">
                <div className="w-10 h-10 rounded-full bg-[#1e3a5f] text-white font-bold text-sm flex items-center justify-center mb-4">
                  {step.n}
                </div>
                <h3 className="font-bold text-[#1a1a2e] text-sm mb-2">{step.t}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie captures */}
      <section className="bg-[#f8f9fa] border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-[#1a1a2e] text-center mb-8">
            L'interface en détail
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { img: "/gestionpark/gp-05.webp", label: "Mes biens immobiliers" },
              { img: "/gestionpark/gp-04.webp", label: "Vue multi-biens" },
              { img: "/gestionpark/gp-14.webp", label: "Connexion & sécurité" },
              { img: "/gestionpark/gp-15.webp", label: "Compte démo accessible" },
              { img: "/gestionpark/gp-11.webp", label: "Dashboard — vue 1" },
              { img: "/gestionpark/gp-12.webp", label: "Dashboard — vue 2" },
            ].map((item) => (
              <div key={item.img} className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src={item.img}
                  alt={`GestionPark — ${item.label}`}
                  width={1239}
                  height={2000}
                  className="w-full h-auto"
                />
                <p className="text-xs text-slate-500 text-center py-2 bg-white border-t border-slate-100">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="bg-white border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a1a2e] text-center mb-2">
            Choisissez votre formule
          </h2>
          <p className="text-sm text-slate-500 text-center mb-10">
            14 jours gratuits pour tout tester. Aucun prélèvement aujourd'hui.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Essentiel */}
            <div className="rounded-2xl border border-slate-200 p-6 md:p-8 bg-[#f8f9fa]">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">Essentiel</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-bold text-[#1a1a2e]">99 €</span>
                <span className="text-sm text-slate-500">/an</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">soit 8,25 €/mois · 20 € économisés vs mensuel</p>
              <ul className="space-y-2.5 mb-8">
                {essentielFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/newsletter"
                className="block text-center bg-white border border-[#1e3a5f] text-[#1e3a5f] font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Commencer gratuitement
              </Link>
              <p className="text-xs text-slate-400 text-center mt-2">14 jours gratuits · Sans engagement</p>
            </div>

            {/* Pro */}
            <div className="rounded-2xl border-2 border-[#1e3a5f] p-6 md:p-8 bg-[#1e3a5f] text-white relative">
              <span className="absolute top-4 right-4 text-xs font-bold bg-white text-[#1e3a5f] px-3 py-1 rounded-full">
                Recommandé
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-1">Pro</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-bold text-white">249 €</span>
                <span className="text-sm text-blue-300">/an</span>
              </div>
              <p className="text-sm text-blue-300 mb-6">soit 20,75 €/mois · 50 € économisés vs mensuel</p>
              <ul className="space-y-2.5 mb-8">
                {proFeatures.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${f.startsWith("Tout de") ? "text-blue-300 font-semibold" : "text-blue-100"}`}>
                    {!f.startsWith("Tout de") && (
                      <svg className="w-4 h-4 text-teal-300 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/newsletter"
                className="block text-center bg-white text-[#1e3a5f] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Commencer gratuitement
              </Link>
              <p className="text-xs text-blue-300 text-center mt-2">14 jours gratuits · Sans engagement</p>
            </div>
          </div>

          {/* Garanties */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "🔓", t: "Sans engagement", d: "Résiliez à tout moment, sans frais." },
              { icon: "🔒", t: "Données sécurisées", d: "Hébergement Europe, HTTPS, sauvegarde quotidienne." },
              { icon: "💬", t: "Support réactif", d: "Réponse sous 24 h par email pour tous les plans." },
            ].map((g) => (
              <div key={g.t} className="flex items-start gap-3 p-4 rounded-xl bg-[#f8f9fa] border border-slate-100">
                <span className="text-xl">{g.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a2e]">{g.t}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{g.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif détaillé */}
      <section className="bg-[#f8f9fa] border-b border-slate-100 py-12 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-bold text-[#1a1a2e] text-center mb-2">Comparatif détaillé</h2>
          <p className="text-sm text-slate-500 text-center mb-8">Tout ce qui est inclus dans chaque plan.</p>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-3 px-4 text-slate-500 font-medium text-xs uppercase tracking-wider">Fonctionnalité</th>
                  <th className="text-center py-3 px-4 text-[#1a1a2e] font-bold text-xs">Essentiel<br /><span className="font-normal text-slate-400">99€/an</span></th>
                  <th className="text-center py-3 px-4 text-[#1e3a5f] font-bold text-xs bg-blue-50">Pro<br /><span className="font-normal text-blue-400">249€/an</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { section: "GESTION DES BIENS" },
                  { f: "Nombre de boxes", e: "Jusqu'à 30", p: "Illimité" },
                  { f: "Multi-biens / multi-bâtiments", e: true, p: true },
                  { f: "Tableau de bord et KPIs", e: true, p: true },
                  { f: "Rentabilité par bien", e: true, p: true },
                  { section: "PAIEMENTS ET LOYERS" },
                  { f: "Suivi des paiements mensuels", e: true, p: true },
                  { f: "Import CSV bancaire", e: true, p: true },
                  { f: "Connexion bancaire DSP2", e: false, p: true },
                  { f: "Rapprochement automatique", e: false, p: true },
                  { f: "Détection des impayés", e: true, p: true },
                  { f: "Relances par email/SMS", e: true, p: true },
                  { f: "Relances automatiques programmées", e: false, p: true },
                  { section: "LOCATAIRES ET DOCUMENTS" },
                  { f: "Fiches locataires complètes", e: true, p: true },
                  { f: "Quittances PDF automatiques", e: true, p: true },
                  { f: "Envoi email des quittances", e: true, p: true },
                  { f: "Révision IRL automatique", e: true, p: true },
                  { f: "Stockage de documents (baux, pièces)", e: true, p: true },
                  { section: "STATISTIQUES" },
                  { f: "Graphiques 12 mois", e: true, p: true },
                  { f: "Export CSV des données", e: true, p: true },
                  { f: "Statistiques avancées et rapports", e: false, p: true },
                  { section: "SUPPORT" },
                  { f: "Support par email", e: true, p: true },
                  { f: "Support prioritaire", e: false, p: true },
                  { f: "Onboarding personnalisé", e: false, p: true },
                ].map((row, i) => {
                  if ("section" in row) {
                    return (
                      <tr key={row.section} className="bg-slate-50 border-t border-b border-slate-100">
                        <td colSpan={3} className="py-2 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {row.section}
                        </td>
                      </tr>
                    );
                  }
                  const Check = () => (
                    <svg className="w-4 h-4 text-teal-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  );
                  const Cross = () => <span className="text-slate-200 text-lg leading-none block text-center">—</span>;
                  return (
                    <tr key={row.f} className={`border-t border-slate-50 ${i % 2 === 0 ? "" : "bg-slate-50/50"}`}>
                      <td className="py-2.5 px-4 text-slate-700 text-xs">{row.f}</td>
                      <td className="py-2.5 px-4 text-center text-xs">
                        {typeof row.e === "boolean" ? (row.e ? <Check /> : <Cross />) : <span className="text-slate-600">{row.e}</span>}
                      </td>
                      <td className="py-2.5 px-4 text-center text-xs bg-blue-50/40">
                        {typeof row.p === "boolean" ? (row.p ? <Check /> : <Cross />) : <span className="font-semibold text-[#1e3a5f]">{row.p}</span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-[#1a1a2e] text-center mb-2">Questions fréquentes</h2>
          <p className="text-sm text-slate-500 text-center mb-8">Tout ce que vous voulez savoir avant de démarrer.</p>
          <div className="space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="group bg-[#f8f9fa] rounded-xl border border-slate-100 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-semibold text-sm text-[#1a1a2e] hover:bg-slate-50 transition-colors">
                  {item.q}
                  <svg className="w-4 h-4 text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#1e3a5f] py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à automatiser la gestion de vos boxes ?
          </h2>
          <p className="text-blue-200 text-base leading-relaxed mb-8">
            GestionPark est en cours de déploiement. Inscrivez-vous pour être notifié en priorité à l'ouverture des accès.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-2 bg-white text-[#1e3a5f] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
          >
            Être notifié du lancement
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="mt-4 text-blue-300 text-xs">Aucun spam. Désabonnement possible à tout moment.</p>
        </div>
      </section>

      {/* Note éditoriale */}
      <section className="bg-white py-6 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xs text-slate-400 text-center leading-relaxed">
            GestionPark est présenté ici à titre informatif. L'Observatoire du Stockage n'émet aucune garantie de résultats. Données d'hébergement et conditions d'utilisation disponibles auprès de l'éditeur. Tarifs susceptibles d'évoluer.
          </p>
        </div>
      </section>
    </>
  );
}

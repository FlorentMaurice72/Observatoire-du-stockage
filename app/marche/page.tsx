import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import ArticleCard from "@/components/ui/ArticleCard";
import NewsletterBlock from "@/components/ui/NewsletterBlock";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Marché du stockage en France — tendances, analyses locales et données",
  alternates: { canonical: "https://observatoire-du-stockage.fr/marche" },
  description:
    "Comprendre le marché français des espaces de stockage : tendances, dynamiques sectorielles, analyses locales par ville et département.",
};

const tendances = [
  {
    icon: "🏙️",
    title: "Densification urbaine et besoin de stockage",
    description:
      "La réduction de la surface habitable en zones tendues génère un besoin de stockage extérieur croissant, notamment pour les ménages en mobilité.",
  },
  {
    icon: "🛍️",
    title: "E-commerce et logistique du dernier kilomètre",
    description:
      "La croissance du commerce en ligne crée des besoins de stockage intermédiaire, notamment pour les TPE et indépendants.",
  },
  {
    icon: "🔄",
    title: "Économie circulaire et déstockage",
    description:
      "Les pratiques de vente d'occasion et de réutilisation génèrent de nouveaux flux de stockage temporaire.",
  },
  {
    icon: "🏗️",
    title: "Structuration du secteur",
    description:
      "Des acteurs professionnels du self-storage se développent sur le territoire, modifiant progressivement l'environnement concurrentiel.",
  },
];

const donneesSurveiller = [
  "Évolution du parc de garages et caves disponibles à la location dans les grandes villes",
  "Taux d'occupation des plateformes de self-storage professionnelles",
  "Prix moyens observés par segment et par zone géographique",
  "Volume des transactions sur les lots de garages en dehors des actifs résidentiels",
  "Dynamique démographique et mobilité résidentielle par bassin de vie",
  "Développement des zones d'activité et besoins de stockage des TPE/PME",
];

export default function MarchePage() {
  const articles = getArticlesByCategory("marche");

  return (
    <>
      <section className="bg-white border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Marché"
            title="Comprendre le marché du stockage en France"
            description="Panorama sectoriel, tendances structurelles, dynamiques locales et méthodes d'analyse pour appréhender le marché des espaces de stockage avec rigueur."
          />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#f8f9fa] py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-4">Un secteur à analyser avec méthode</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Le marché des espaces de stockage recouvre des réalités très diverses : caves et boxs en pied d'immeuble, garages individuels ou en lot, containers de stockage, entrepôts de petite surface, plateformes de self-storage professionnelles. Ces actifs n'évoluent pas de manière homogène et leur dynamique dépend fortement de la géographie locale.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Analyser ce marché implique de distinguer l'offre existante de la demande locative réelle, d'identifier les évolutions structurelles (démographie, mobilité, e-commerce) et d'évaluer la concurrence locale avant de tirer des conclusions sur le potentiel d'un secteur.
            </p>
          </div>
        </div>
      </section>

      {/* Tendances */}
      <section className="bg-white py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Tendances à suivre"
            title="Les dynamiques structurelles du secteur"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {tendances.map((t) => (
              <div key={t.title} className="bg-[#f8f9fa] rounded-xl border border-slate-100 p-6">
                <div className="text-2xl mb-3">{t.icon}</div>
                <h3 className="font-bold text-[#1a1a2e] mb-2">{t.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analyses locales placeholder */}
      <section className="bg-[#f8f9fa] py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Analyses locales"
            title="Décryptage des marchés par ville et département"
            description="Les analyses locales permettront d'identifier les zones à fort potentiel, les marchés saturés et les opportunités géographiques. Cette rubrique est en cours de constitution."
          />
          <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-10 text-center">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="font-bold text-[#1a1a2e] text-lg mb-2">Carte des analyses locales — à venir</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
              Des analyses par ville et département seront publiées progressivement. Elles couvriront la demande locative, l'offre existante, les niveaux de prix observés et les perspectives.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["Paris", "Lyon", "Marseille", "Bordeaux", "Nantes", "Toulouse", "Lille", "Strasbourg"].map((ville) => (
                <span key={ville} className="text-xs px-3 py-1.5 bg-slate-100 text-slate-500 rounded-full border border-slate-200">
                  {ville} — à venir
                </span>
              ))}
            </div>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 text-sm font-semibold bg-[#1e3a5f] text-white px-5 py-2.5 rounded-lg hover:bg-[#162d4a] transition-colors"
            >
              Être prévenu des publications
            </Link>
          </div>
        </div>
      </section>

      {/* Données à surveiller */}
      <section className="bg-white py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <SectionHeader
                label="Indicateurs"
                title="Les données à surveiller"
                description="Pour analyser rigoureusement un marché local du stockage, certains indicateurs sont particulièrement pertinents à suivre."
              />
              <ul className="space-y-3">
                {donneesSurveiller.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader
                label="Méthode"
                title="Notre approche d'analyse"
              />
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  L'Observatoire s'appuie sur une méthodologie rigoureuse pour ses analyses de marché. Nous croisons plusieurs sources — données publiques, observations terrain, annonces locatives, données de transaction — pour construire une image cohérente de chaque marché local.
                </p>
                <p>
                  Nous ne publions pas de données chiffrées sans source identifiable. Lorsqu'une donnée est incertaine ou difficile à vérifier, nous le mentionnons explicitement et préférons décrire des tendances plutôt qu'avancer des chiffres précis non fiables.
                </p>
                <p>
                  Cette approche peut sembler prudente. Elle est néanmoins indispensable pour construire une référence fiable dans un secteur où les données publiques sont encore rares.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions fréquentes */}
      <section className="bg-white py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeader
              label="Questions fréquentes"
              title="Ce que les investisseurs cherchent à comprendre"
            />
            <div className="space-y-5">
              {[
                {
                  q: "Comment mesurer la demande locative dans une zone donnée ?",
                  a: "Il n'existe pas de base de données publique consolidée sur la demande locative d'espaces de stockage. Les méthodes pratiques incluent l'observation des annonces de location existantes (durée de mise en ligne, fréquence des nouvelles annonces), les échanges avec des agents immobiliers locaux, et la consultation des délais de rotation sur les lots existants. Une vacance faible et un délai de relocation court sont des signaux positifs, mais ils ne préjugent pas des tendances futures.",
                },
                {
                  q: "Existe-t-il des données de prix de transaction sur les garages et boxs ?",
                  a: "Les données publiques sur les transactions immobilières (DVF — Demandes de valeurs foncières, disponibles sur data.gouv.fr) incluent des transactions sur des biens de type « dépendances » et « places de stationnement ». Ces données sont parcellaires et ne distinguent pas toujours les types d'actifs. Elles peuvent néanmoins servir de point de référence indicatif pour certains secteurs géographiques.",
                },
                {
                  q: "La croissance du self-storage professionnel menace-t-elle les garages individuels ?",
                  a: "Les deux marchés s'adressent à des segments de demande partiellement différents. Le self-storage professionnel offre des services complémentaires (flexibilité, sécurité, accessibilité) qui peuvent attirer certains clients. Dans les zones où ces acteurs sont bien implantés, la concurrence peut peser sur le niveau des loyers pratiqués. Dans les zones peu couvertes, les garages individuels répondent à une demande de stockage de proximité qui reste structurelle.",
                },
                {
                  q: "Vaut-il mieux investir en zone urbaine ou en zone périphérique ?",
                  a: "Il n'y a pas de réponse universelle. Les zones urbaines denses offrent généralement une demande locative plus visible et un risque de vacance moindre, mais les prix d'acquisition y sont souvent plus élevés. Les zones périphériques peuvent présenter des rendements bruts apparemment supérieurs, mais la demande peut y être plus fragile et la revente plus difficile. Chaque projet doit être analysé selon les paramètres locaux spécifiques.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-[#f8f9fa] rounded-xl border border-slate-100 p-5">
                  <h3 className="font-bold text-[#1a1a2e] text-sm mb-2">→ {q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA outil */}
      <section className="bg-[#f8f9fa] py-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="text-4xl shrink-0">📐</div>
            <div className="flex-1">
              <h2 className="font-bold text-[#1a1a2e] text-lg mb-1">Guide d'analyse d'un projet</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Une grille d'évaluation structurée sur 6 dimensions — localisation, demande locative, état du bien, copropriété, financier, risques — pour analyser méthodiquement un projet d'acquisition.
              </p>
            </div>
            <Link
              href="/outils/guide-analyse-projet"
              className="shrink-0 inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#162d4a] transition-colors"
            >
              Accéder au guide
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles */}
      {articles.length > 0 && (
        <section className="bg-white py-12 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Analyses de marché publiées</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <NewsletterBlock />
    </>
  );
}

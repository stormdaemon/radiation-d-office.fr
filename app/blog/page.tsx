import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "../JsonLd";
import { blogArticles } from "./articles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://radiation-office.fr";
const logoUrl = "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1777312270/logo_boal2e.png";

export const metadata: Metadata = {
  title: "Blog radiation d'office RCS, RNE, M2, P2 et Kbis",
  description:
    "Guides SEO et pratiques sur la radiation d'office : société radiée, rapport de radiation, formulaire M2, P2, RCS, RNE, Kbis et juge commis.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog radiation d'office RCS | radiation-office.fr",
    description:
      "Articles pratiques pour comprendre une radiation d'office et préparer la bonne démarche administrative.",
    url: "/blog",
    type: "website",
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog radiation-office.fr",
  url: `${siteUrl}/blog`,
  description:
    "Guides pratiques sur la radiation d'office, le rapport de radiation, le RCS, le RNE, les formulaires M2 et P2.",
  blogPost: blogArticles.map((article) => ({
    "@type": "BlogPosting",
    headline: article.title,
    url: `${siteUrl}/blog/${article.slug}`,
    datePublished: article.publishedAt,
  })),
};

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={blogJsonLd} />
      <header aria-label="Navigation principale">
        <div className="shell nav legal-nav">
          <Link className="brand" href="/" aria-label="radiation-office.fr accueil">
            <span className="brand-mark" aria-hidden="true">
              <Image src={logoUrl} alt="" width={38} height={38} priority />
            </span>
            <span>radiation-office.fr</span>
          </Link>
          <a className="btn phone compact" href="tel:+33171681538">
            <span>01 71 68 15 38</span>
            <small>Numéro Azur non surtaxé</small>
          </a>
        </div>
      </header>

      <main>
        <section className="blog-hero">
          <div className="shell blog-hero-grid">
            <div>
              <p className="eyebrow">Blog radiation d'office</p>
              <h1>RCS, RNE, Kbis radié : les guides qui évitent les mauvais dépôts</h1>
              <p className="lead">
                Des articles directs, sourcés et pensés pour les dirigeants qui doivent comprendre vite une radiation
                d'office, choisir entre M2, P2 ou juge commis, et éviter les allers-retours avec le greffe.
              </p>
              <div className="hero-actions">
                <a className="btn" href="tel:+33171681538">
                  <span>Appeler le 01 71 68 15 38</span>
                  <small>Numéro Azur non surtaxé</small>
                </a>
                <Link className="btn secondary" href="/#contact">
                  Diagnostic en ligne
                </Link>
              </div>
            </div>
            <aside className="blog-index-panel" aria-label="Angles SEO du blog">
              <strong>10 guides</strong>
              <span>radiation d'office, rapport, M2, P2, RCS, RNE, Kbis, siège social, bénéficiaires effectifs.</span>
            </aside>
          </div>
        </section>

        <section aria-labelledby="articles-title">
          <div className="shell">
            <div className="section-title">
              <h2 id="articles-title">Tous les articles</h2>
              <p>Chaque page cible une intention de recherche précise et renvoie vers les démarches utiles.</p>
            </div>
            <div className="blog-card-grid">
              {blogArticles.map((article) => (
                <article className="blog-card" key={article.slug}>
                  <div className="blog-card-meta">
                    <span>{article.category}</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <h3>
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p>{article.description}</p>
                  <div className="blog-keyword">Mot-clé : {article.keyword}</div>
                  <Link className="blog-card-link" href={`/blog/${article.slug}`}>
                    Lire le guide
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

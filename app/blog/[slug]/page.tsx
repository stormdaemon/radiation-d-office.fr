import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "../../JsonLd";
import { blogArticles, blogSources, getBlogArticle, getRelatedArticles } from "../articles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://radiation-office.fr";
const logoUrl = "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1777312270/logo_boal2e.png";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/blog/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      tags: [article.keyword, article.category, "radiation d'office", "RCS", "RNE"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function BlogArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(article);
  const articleUrl = `${siteUrl}/blog/${article.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Organization",
      name: "FIDESLEG",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "radiation-office.fr",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    keywords: [article.keyword, "radiation d'office", "RCS", "RNE", "rapport de radiation d'office"],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <header aria-label="Navigation principale">
        <div className="shell nav legal-nav">
          <Link className="brand" href="/" aria-label="radiation-office.fr accueil">
            <span className="brand-mark" aria-hidden="true">
              <Image src={logoUrl} alt="" width={38} height={38} priority />
            </span>
            <span>radiation-office.fr</span>
          </Link>
          <Link className="btn secondary compact" href="/blog">
            Blog
          </Link>
          <a className="btn phone compact" href="tel:+33171681538">
            <span>01 71 68 15 38</span>
            <small>Numéro Azur non surtaxé</small>
          </a>
        </div>
      </header>

      <main>
        <article>
          <section className="blog-article-hero">
            <div className="shell">
              <Link className="blog-back" href="/blog">
                ← Tous les guides
              </Link>
              <div className="blog-article-meta">
                <span>{article.category}</span>
                <span>{article.intent}</span>
                <span>{article.readingTime}</span>
              </div>
              <h1>{article.title}</h1>
              <p className="lead">{article.hero}</p>
            </div>
          </section>

          <section>
            <div className="shell blog-article-layout">
              <aside className="article-aside">
                <div className="article-sticky">
                  <span className="tag">À retenir</span>
                  <ul>
                    {article.takeaways.map((takeaway) => (
                      <li key={takeaway}>{takeaway}</li>
                    ))}
                  </ul>
                  <a className="btn phone" href="tel:+33171681538">
                    <span>01 71 68 15 38</span>
                    <small>Numéro Azur non surtaxé</small>
                  </a>
                </div>
              </aside>

              <div className="article-body">
                {article.sections.map((section) => (
                  <section className="article-section" key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets ? (
                      <ul>
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}

                <section className="article-faq" aria-labelledby="article-faq-title">
                  <h2 id="article-faq-title">Questions fréquentes</h2>
                  {article.faq.map((item) => (
                    <div className="article-faq-item" key={item.question}>
                      <h3>{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </section>

                <section className="article-cta" aria-label="Diagnostic radiation d'office">
                  <h2>Vous voulez éviter le mauvais dépôt ?</h2>
                  <p>
                    On qualifie le motif, le registre concerné et la voie utile : M2, P2 ou juge commis à la
                    surveillance du RCS.
                  </p>
                  <div className="hero-actions">
                    <a className="btn" href="tel:+33171681538">
                      <span>Appeler le 01 71 68 15 38</span>
                      <small>Numéro Azur non surtaxé</small>
                    </a>
                    <Link className="btn secondary" href="/#contact">
                      Demander un diagnostic
                    </Link>
                  </div>
                </section>

                <section className="article-related" aria-labelledby="related-title">
                  <h2 id="related-title">À lire ensuite</h2>
                  <div className="related-grid">
                    {related.map((relatedArticle) => (
                      <Link className="related-card" href={`/blog/${relatedArticle.slug}`} key={relatedArticle.slug}>
                        <span>{relatedArticle.category}</span>
                        <strong>{relatedArticle.title}</strong>
                      </Link>
                    ))}
                  </div>
                </section>

                <section className="article-sources" aria-labelledby="sources-title">
                  <h2 id="sources-title">Sources publiques</h2>
                  <ul>
                    {blogSources.map((source) => (
                      <li key={source.href}>
                        <a href={source.href}>{source.label}</a>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

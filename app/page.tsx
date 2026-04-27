import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { FaqAccordion } from "./FaqAccordion";
import { JsonLd } from "./JsonLd";

export const dynamic = "force-dynamic";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://radiation-office.fr";
const phoneDisplay = "01 71 68 15 38";
const phoneHref = "tel:+33171681538";
const phoneLabel = "Numéro Azur non surtaxé";
const phonePrice = "Service gratuit + prix d'un appel";
const logoUrl = "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1777312270/logo_boal2e.png";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "radiation-office.fr",
  url: siteUrl,
  telephone: "+33171681538",
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  serviceType: "Accompagnement administratif en rapport de radiation d'office RCS",
  knowsAbout: [
    "radiation d'office",
    "rapport de radiation d'office",
    "suppression de mention de radiation d'office",
    "RCS",
    "Registre national des entreprises",
    "formulaire M2",
    "formulaire P2",
    "juge commis à la surveillance du RCS",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diagnostic de radiation d'office RCS",
  provider: {
    "@type": "Organization",
    name: "radiation-office.fr",
    url: siteUrl,
  },
  areaServed: "FR",
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Dirigeants, entrepreneurs individuels et sociétés radiées d'office",
  },
  description:
    "Analyse du motif de radiation d'office, préparation des pièces de régularisation et orientation vers la demande de rapport, le guichet des formalités ou la requête au juge commis.",
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
  ],
};

const faqItems = [
  {
    question: "Que veut dire radiation d'office au RCS ?",
    answer:
      "Une radiation d'office est une mention inscrite sans demande volontaire de l'entreprise, généralement après une situation non régularisée : cessation totale d'activité, siège problématique, formalité manquante ou bénéficiaires effectifs non conformes.",
  },
  {
    question: "Peut-on annuler une radiation d'office ?",
    answer:
      "Selon le motif et le délai, il est possible de demander le rapport de la radiation d'office ou la suppression de la mention. Le dossier doit d'abord montrer que la cause de la radiation a été corrigée.",
  },
  {
    question: "Quelle différence entre levée, rapport et suppression de radiation d'office ?",
    answer:
      "“Levée de radiation” est une expression courante. Les formulations administratives les plus précises sont “rapport d'une radiation d'office” pour les formulaires M2 ou P2, et “suppression de la mention de radiation d'office” lorsqu'une requête au juge commis à la surveillance du RCS est nécessaire.",
  },
  {
    question: "Quel formulaire utiliser pour une demande de rapport de radiation d'office ?",
    answer:
      "Pour une société, la démarche passe par le formulaire M2. Pour une personne physique ou entreprise individuelle, elle passe par le formulaire P2. Le bon choix dépend de la forme de l'entreprise et du registre concerné.",
  },
  {
    question: "Quand faut-il saisir le juge commis à la surveillance du RCS ?",
    answer:
      "La requête au juge commis peut être pertinente lorsqu'il faut demander la suppression de la mention de radiation d'office ou contester une situation au registre. Infogreffe cite un délai pratique de six mois à compter de la mention de radiation d'office au RCS.",
  },
  {
    question: "Une société radiée d'office perd-elle sa personnalité morale ?",
    answer:
      "Infogreffe précise que la mention de radiation d'office est une mesure administrative et que la société ne perd pas automatiquement sa personnalité morale. Le traitement dépend toutefois du dossier, des délais et des pièces disponibles.",
  },
  {
    question: "La radiation d'office du RCS touche-t-elle aussi le RNE ?",
    answer:
      "Dans plusieurs cas, la radiation d'office au RCS est portée au Registre national des entreprises, voire vaut radiation au RNE. C'est pour cela que le diagnostic doit regarder RCS et RNE ensemble.",
  },
  {
    question: "Combien de temps prend une levée de radiation d'office ?",
    answer:
      "Il n'y a pas de délai fiable sans examiner le motif, le greffe compétent, les pièces et l'éventuelle nécessité d'une requête. La priorité est de déposer un dossier complet, cohérent et régularisé.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />

      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <header aria-label="Navigation principale">
        <div className="shell nav">
          <input className="nav-toggle" type="checkbox" id="nav-toggle" aria-label="Ouvrir le menu" />
          <div className="nav-top">
            <a className="brand" href="#" aria-label="radiation-office.fr accueil">
              <span className="brand-mark" aria-hidden="true">
                <Image src={logoUrl} alt="" width={38} height={38} priority />
              </span>
              <span>radiation-office.fr</span>
            </a>
            <label className="menu-button" htmlFor="nav-toggle">
              <span className="sr-only">Menu</span>
              <span className="menu-icon" aria-hidden="true" />
            </label>
          </div>
          <nav className="nav-links" aria-label="Sections">
            <a href="#motifs">Motifs</a>
            <a href="#methode">Méthode</a>
            <a href="#pieces">Pièces</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Diagnostic</a>
            <a className="nav-phone" href={phoneHref}>
              Numéro Azur
            </a>
          </nav>
        </div>
      </header>

      <main id="contenu">
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div>
              <p className="eyebrow">Rapport de radiation d'office</p>
              <h1 id="hero-title">radiation-office.fr</h1>
              <p className="lead">
                Votre société ou entreprise individuelle a été radiée d'office ? On lit le motif, on remet le
                dossier au propre, puis on prépare la demande adaptée : greffe, guichet des formalités ou requête
                au juge commis à la surveillance du RCS.
              </p>
              <div className="hero-actions" aria-label="Actions principales">
                <a className="btn" href="#contact">
                  Vérifier mon cas
                </a>
                <a className="btn secondary" href="#methode">
                  Voir la méthode
                </a>
                <a className="btn phone" href={phoneHref} aria-label={`Appeler radiation-office.fr au ${phoneDisplay}`}>
                  <span>{phoneDisplay}</span>
                  <small>{phoneLabel}</small>
                </a>
              </div>
              <p className="phone-reassurance">{phonePrice}</p>
              <div className="fact-row" aria-label="Repères clés">
                <div className="fact">
                  <strong>3 mois</strong>
                  <span>peuvent suffire après certaines mentions de cessation non régularisées.</span>
                </div>
                <div className="fact">
                  <strong>6 mois</strong>
                  <span>délai pratique cité pour demander la suppression au juge commis.</span>
                </div>
                <div className="fact">
                  <strong>RCS + RNE</strong>
                  <span>la radiation d'office peut toucher les deux registres.</span>
                </div>
              </div>
            </div>

            <aside className="notice-visual" aria-label="Illustration d'un avis de radiation d'office">
              <div className="notice-sheet">
                <div className="doc-top">
                  <span>Registre</span>
                  <span className="stamp">Radié</span>
                </div>
                <div className="doc-lines" aria-hidden="true">
                  <div className="doc-line" />
                  <div className="doc-line" />
                  <div className="doc-line short" />
                  <div className="doc-line" />
                </div>
                <p className="doc-warning">
                  Le bon réflexe : identifier le motif exact avant de déposer un formulaire. Une demande mal ciblée
                  fait perdre du temps.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="motifs" aria-labelledby="motifs-title">
          <div className="shell">
            <div className="section-title">
              <h2 id="motifs-title">Pourquoi le greffe radie d'office</h2>
              <p>
                Une radiation d'office n'a pas une seule cause. Le bon angle SEO comme le bon angle dossier consiste
                à qualifier le motif : siège, cessation, bénéficiaires effectifs, RCS ou RNE.
              </p>
            </div>
            <div className="grid-3">
              <article className="tile">
                <span className="tag">Sommeil</span>
                <h3>Cessation totale d'activité</h3>
                <p>
                  Une société mise en sommeil peut être radiée d'office si aucune reprise n'est inscrite après les
                  délais prévus.
                </p>
              </article>
              <article className="tile">
                <span className="tag">Adresse</span>
                <h3>Siège ou courrier non régularisé</h3>
                <p>
                  Une adresse qui ne tient plus, un courrier non reçu, une mention portée au registre : le dossier
                  doit prouver la correction.
                </p>
              </article>
              <article className="tile">
                <span className="tag">Conformité</span>
                <h3>Bénéficiaires effectifs</h3>
                <p>
                  Depuis 2025, une société qui ne déclare pas ou ne met pas en conformité ses bénéficiaires effectifs
                  peut être radiée d'office.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="methode" className="contrast-band" aria-labelledby="methode-title">
          <div className="shell">
            <div className="section-title">
              <h2 id="methode-title">Une méthode courte, vérifiable</h2>
              <p>Chaque étape produit une preuve ou une décision utile. Pas de dossier envoyé au hasard.</p>
            </div>
            <div className="process">
              <article className="step">
                <div className="step-main">
                  <h3>Lire l'extrait et le motif</h3>
                  <p>On repère la date de mention, le fondement probable et le registre concerné.</p>
                </div>
                <div className="step-meta">
                  <p>Sortie : diagnostic RCS / RNE.</p>
                </div>
              </article>
              <article className="step">
                <div className="step-main">
                  <h3>Régulariser la situation</h3>
                  <p>
                    Transfert de siège, justificatif d'adresse, reprise d'activité, bénéficiaires effectifs, cessation
                    réelle : on traite la cause.
                  </p>
                </div>
                <div className="step-meta">
                  <p>Sortie : pièces datées et cohérentes.</p>
                </div>
              </article>
              <article className="step">
                <div className="step-main">
                  <h3>Déposer la bonne demande</h3>
                  <p>
                    M2 pour une société, P2 pour une entreprise individuelle, ou requête au juge commis quand le
                    dossier l'exige.
                  </p>
                </div>
                <div className="step-meta">
                  <p>Sortie : demande de rapport exploitable.</p>
                </div>
              </article>
            </div>
            <div className="method-cta" aria-label="Contact rapide">
              <p>Besoin de savoir si votre dossier passe par M2, P2 ou le juge commis ?</p>
              <a className="btn light" href={phoneHref} aria-label={`Appeler maintenant au ${phoneDisplay}`}>
                <span>Appeler le {phoneDisplay}</span>
                <small>{phoneLabel}</small>
              </a>
            </div>
          </div>
        </section>

        <section id="pieces" aria-labelledby="pieces-title">
          <div className="shell split">
            <div>
              <div className="section-title">
                <h2 id="pieces-title">La checklist qui évite les allers-retours</h2>
                <p>Le greffe regarde des faits, des dates et des justificatifs. La forme compte autant que le fond.</p>
              </div>
              <div className="checklist">
                <ul>
                  <li>Extrait Kbis, Sirene ou preuve de la mention de radiation d'office.</li>
                  <li>Date de radiation et date de la première alerte ou LRAR reçue.</li>
                  <li>Justificatif de siège en validité, ou décision de transfert de siège.</li>
                  <li>Formulaire M2 ou P2 renseigné avec la demande de rapport en observations.</li>
                  <li>Pouvoir original si le signataire n'est pas le représentant légal.</li>
                  <li>Pièces de régularisation via le guichet des formalités si nécessaire.</li>
                </ul>
              </div>
            </div>

            <div className="contact-stack">
              <ContactForm />
              <aside className="phone-card" aria-label="Contact par téléphone">
                <span className="tag">Réponse rapide</span>
                <h2>Parler à quelqu'un</h2>
                <p>Pour une radiation récente, un extrait confus ou une urgence greffe, appelez directement.</p>
                <a className="btn" href={phoneHref} aria-label={`Appeler radiation-office.fr au ${phoneDisplay}`}>
                  <span>{phoneDisplay}</span>
                  <small>{phoneLabel}</small>
                </a>
                <p className="phone-price">{phonePrice}</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="seo-section" aria-labelledby="seo-title">
          <div className="shell seo-grid">
            <div>
              <p className="eyebrow">Termes officiels</p>
              <h2 id="seo-title">Radiation d'office, rapport, levée : ne pas mélanger</h2>
            </div>
            <div className="seo-copy">
              <p>
                Dans les recherches, les dirigeants tapent souvent “levée de radiation d'office”, “annuler radiation
                RCS”, “société radiée d'office que faire” ou “réactiver Kbis radié”. Administrativement, les termes
                les plus précis sont “rapport d'une radiation d'office” et “suppression de la mention de radiation
                d'office”.
              </p>
              <p>
                La page vise donc les intentions de recherche urgentes sans promettre une réouverture automatique :
                comprendre le motif, corriger la situation, puis déposer le formulaire ou la requête adaptée.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section" aria-labelledby="faq-title">
          <div className="shell">
            <div className="section-title">
              <h2 id="faq-title">Questions fréquentes sur la radiation d'office</h2>
              <p>
                Les réponses courtes pour qualifier vite le dossier, avec les termes que les greffes et les sources
                officielles utilisent réellement.
              </p>
            </div>
            <FaqAccordion items={faqItems} />
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-grid">
          <div>
            <a className="brand" href="#" aria-label="radiation-office.fr accueil bas de page">
              <span className="brand-mark" aria-hidden="true">
                <Image src={logoUrl} alt="" width={38} height={38} />
              </span>
              <span>radiation-office.fr</span>
            </a>
            <p className="microcopy">Sources publiques vérifiées le 27 avril 2026. Service édité par FIDESLEG.</p>
            <p className="footer-phone">
              Diagnostic téléphone, {phoneLabel.toLowerCase()} :{" "}
              <a href={phoneHref} aria-label={`Appeler radiation-office.fr au ${phoneDisplay}`}>
                {phoneDisplay}
              </a>
              <span>{phonePrice}</span>
            </p>
          </div>
          <div className="sources" aria-label="Sources officielles et pratiques">
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/politique-confidentialite">Politique de confidentialité</a>
            <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F24023">Service-Public</a>
            <a href="https://entreprendre.service-public.gouv.fr/vosdroits/R66233">M2 société</a>
            <a href="https://entreprendre.service-public.gouv.fr/vosdroits/R66234">P2 personne physique</a>
            <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000026251191/">R123-130</a>
            <a href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006257531/2013-07-23">R123-136</a>
            <a href="https://www.infogreffe.fr/guide-des-formalites/fond--referes--requetes/saisir-le-president-du-tribunal/requete-au-juge-commis-a-la-surveillance-du-rcs">
              Infogreffe
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

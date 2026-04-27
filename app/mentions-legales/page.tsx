import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const logoUrl = "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1777312270/logo_boal2e.png";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de radiation-office.fr : éditeur, responsable de publication, hébergement, propriété intellectuelle et contact.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function LegalNoticePage() {
  return (
    <>
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

      <main className="legal-page">
        <section>
          <div className="shell legal-content">
            <p className="eyebrow">Informations légales</p>
            <h1>Mentions légales</h1>
            <p className="lead">
              Les informations ci-dessous sont établies à partir de l'attestation d'immatriculation RNE FIDESLEG
              datée du 27 avril 2026 et des informations publiques de l'hébergeur.
            </p>

            <article className="legal-block">
              <h2>Éditeur du site</h2>
              <dl>
                <div>
                  <dt>Dénomination</dt>
                  <dd>FIDESLEG</dd>
                </div>
                <div>
                  <dt>Forme juridique</dt>
                  <dd>SASU, société par actions simplifiée unipersonnelle</dd>
                </div>
                <div>
                  <dt>SIREN</dt>
                  <dd>889 430 229</dd>
                </div>
                <div>
                  <dt>SIRET du siège</dt>
                  <dd>889 430 229 00035</dd>
                </div>
                <div>
                  <dt>Capital social</dt>
                  <dd>1 000 EUR</dd>
                </div>
                <div>
                  <dt>Code APE</dt>
                  <dd>7022Z - Conseil pour les affaires et autres conseils de gestion</dd>
                </div>
                <div>
                  <dt>Siège social</dt>
                  <dd>42 rue Decamps, 75016 Paris, France</dd>
                </div>
              </dl>
            </article>

            <article className="legal-block">
              <h2>Direction de la publication</h2>
              <p>Le directeur de la publication est Armnius Samuel-Marc, président de SAS.</p>
            </article>

            <article className="legal-block">
              <h2>Contact</h2>
              <p>
                Téléphone :{" "}
                <a href="tel:+33171681538">01 71 68 15 38</a> - Numéro Azur non surtaxé, service gratuit + prix
                d'un appel.
              </p>
              <p>
                Pour toute demande relative au site, utilisez le formulaire de diagnostic ou le numéro affiché sur la
                page d'accueil.
              </p>
            </article>

            <article className="legal-block">
              <h2>Hébergement</h2>
              <p>
                Le site est hébergé par Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, États-Unis.
              </p>
            </article>

            <article className="legal-block">
              <h2>Propriété intellectuelle</h2>
              <p>
                Les contenus, textes, éléments graphiques et structure du site sont protégés par le droit applicable.
                Toute reproduction ou réutilisation non autorisée est interdite, sauf exception légale.
              </p>
            </article>

            <article className="legal-block">
              <h2>Responsabilité</h2>
              <p>
                radiation-office.fr fournit une information et un accompagnement administratif. Les contenus du site ne
                constituent pas une garantie de résultat, ni un conseil juridique individualisé sans analyse du dossier.
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const logoUrl = "https://res.cloudinary.com/dgjsq5fnl/image/upload/v1777312270/logo_boal2e.png";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de radiation-office.fr : données collectées, finalités, Formspree, Netlify, durée de conservation et droits RGPD.",
  alternates: {
    canonical: "/politique-confidentialite",
  },
};

export default function PrivacyPolicyPage() {
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
            <p className="eyebrow">Données personnelles</p>
            <h1>Politique de confidentialité</h1>
            <p className="lead">
              Cette politique explique comment radiation-office.fr traite les données transmises via le formulaire de
              diagnostic et les échanges liés à une demande de rapport de radiation d'office.
            </p>

            <article className="legal-block">
              <h2>Responsable du traitement</h2>
              <p>
                Le responsable du traitement est FIDESLEG, SASU immatriculée sous le SIREN 889 430 229, située 42 rue
                Decamps, 75016 Paris, France.
              </p>
            </article>

            <article className="legal-block">
              <h2>Données collectées</h2>
              <p>
                Le formulaire peut collecter la forme de l'entreprise, une date approximative de radiation, une adresse
                e-mail de réponse et le contenu libre transmis par l'utilisateur. Il est recommandé de ne pas envoyer de
                données sensibles inutiles.
              </p>
            </article>

            <article className="legal-block">
              <h2>Finalités</h2>
              <p>
                Les données sont utilisées pour qualifier la demande, répondre au contact, préparer une checklist de
                pièces et orienter le dossier vers la démarche adaptée : formulaire M2, formulaire P2, guichet des
                formalités ou requête au juge commis à la surveillance du RCS.
              </p>
            </article>

            <article className="legal-block">
              <h2>Base légale</h2>
              <p>
                Le traitement repose sur l'intérêt légitime de répondre à une demande entrante et, lorsque la demande
                vise une prestation, sur les mesures précontractuelles demandées par la personne concernée.
              </p>
            </article>

            <article className="legal-block">
              <h2>Sous-traitants</h2>
              <p>
                Le site utilise Formspree pour la transmission du formulaire et Netlify pour l'hébergement et le
                déploiement du site. Ces prestataires peuvent traiter des données techniques nécessaires au service.
              </p>
            </article>

            <article className="legal-block">
              <h2>Durée de conservation</h2>
              <p>
                Les demandes entrantes sont conservées le temps nécessaire à leur traitement, puis archivées ou
                supprimées selon les obligations applicables et la relation commerciale éventuelle.
              </p>
            </article>

            <article className="legal-block">
              <h2>Droits des personnes</h2>
              <p>
                Vous pouvez demander l'accès, la rectification, l'effacement, la limitation ou l'opposition au
                traitement de vos données. Vous pouvez aussi introduire une réclamation auprès de la CNIL.
              </p>
            </article>

            <article className="legal-block">
              <h2>Contact confidentialité</h2>
              <p>
                Pour exercer vos droits, contactez FIDESLEG via le formulaire du site ou par téléphone au{" "}
                <a href="tel:+33171681538">01 71 68 15 38</a>, numéro Azur non surtaxé.
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

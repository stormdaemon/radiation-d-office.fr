"use client";

import { useForm, ValidationError } from "@formspree/react";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "mwvadvzg";

export function ContactForm() {
  const [state, handleSubmit] = useForm(formId);

  return (
    <form id="contact" className="form-box" aria-labelledby="contact-title" onSubmit={handleSubmit}>
      <h2 id="contact-title">Premier diagnostic</h2>
      <p>
        Décrivez la mention de radiation d'office. Le retour se concentre sur le motif, les pièces et la
        voie utile : greffe, guichet des formalités ou juge commis à la surveillance du RCS.
      </p>

      <div className="field">
        <label htmlFor="forme">Forme de l'entreprise</label>
        <select id="forme" name="forme" required>
          <option>Société</option>
          <option>Entreprise individuelle</option>
          <option>Micro-entreprise</option>
          <option>Je ne sais pas</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="date">Date approximative de radiation</label>
        <input id="date" name="date" type="text" autoComplete="off" placeholder="Ex. février 2026" required />
        <ValidationError prefix="Date" field="date" errors={state.errors} />
      </div>

      <div className="field">
        <label htmlFor="email">E-mail de réponse</label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="vous@entreprise.fr" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="field">
        <label htmlFor="motif">Ce que dit le courrier ou l'extrait</label>
        <textarea
          id="motif"
          name="motif"
          placeholder="Copiez le motif, sans données sensibles inutiles."
          required
        />
        <ValidationError prefix="Message" field="motif" errors={state.errors} />
      </div>

      <input type="hidden" name="source" value="radiation-office.fr" />

      {state.succeeded ? (
        <p className="form-success" role="status">
          Message reçu. Le dossier peut maintenant être qualifié.
        </p>
      ) : (
        <button className="btn" type="submit" disabled={state.submitting}>
          {state.submitting ? "Envoi en cours..." : "Recevoir la checklist"}
        </button>
      )}

      <p className="microcopy">
        Aucune promesse automatique : une radiation d'office se traite selon son motif, ses délais et les pièces
        disponibles.
      </p>
    </form>
  );
}

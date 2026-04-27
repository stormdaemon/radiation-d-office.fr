# SEO / Semantique - radiation-office.fr

Date : 27 avril 2026.
Stack cible : Next.js 16.2.x, App Router, rendu SSR force sur `/`.

## Objectif SEO

Positionner une page claire sur les intentions urgentes autour de la radiation d'office d'une entreprise en France, sans promettre de resultat juridique automatique.

## Requetes coeur

- radiation d'office
- radiation d'office RCS
- societe radiee d'office que faire
- entreprise radiee d'office
- rapport de radiation d'office
- demande de rapport radiation d'office
- levee de radiation d'office
- annuler une radiation d'office
- suppression mention radiation d'office
- juge commis surveillance RCS radiation
- formulaire M2 rapport radiation d'office
- formulaire P2 rapport radiation d'office
- radiation d'office RNE
- Kbis radie d'office

## Entites et vocabulaire officiel

- Registre du commerce et des societes / RCS
- Registre national des entreprises / RNE
- greffe du tribunal de commerce
- greffier
- juge commis a la surveillance du RCS
- rapport d'une radiation d'office
- suppression de la mention de radiation d'office
- formulaire M2 / Cerfa 11682*07
- formulaire P2 / Cerfa 11678*08
- cessation totale d'activite
- mise en sommeil
- siege social
- beneficiaires effectifs
- guichet des formalites des entreprises

## Intentions de recherche

1. Urgence / diagnostic
   - "ma societe est radiee d'office"
   - "Kbis radie d'office"
   - "radiation d'office que faire"

2. Demarche administrative
   - "demande rapport radiation d'office"
   - "formulaire M2 radiation d'office"
   - "formulaire P2 radiation d'office"

3. Recours / contestation
   - "juge commis radiation d'office"
   - "suppression mention radiation d'office"
   - "annuler radiation d'office RCS"

4. Causes
   - "radiation d'office cessation activite"
   - "beneficiaires effectifs radiation RCS"
   - "siege social radiation d'office"

## Decisions techniques SEO

- App Router Next.js 16.2.4.
- `app/page.tsx` force en SSR avec `export const dynamic = "force-dynamic"`.
- Metadata API dans `app/layout.tsx`.
- `app/robots.ts` et `app/sitemap.ts` natifs Next.
- JSON-LD rendu cote serveur dans le HTML initial.
- Schema retenu : `ProfessionalService`, `Service`, `BreadcrumbList`, `FAQPage`.
- FAQ visible en HTML SSR pour couvrir la longue traine et les formulations utilisateur. Attention : Google limite l'affichage enrichi FAQ aux sites gouvernementaux ou sante faisant autorite ; le balisage peut donc etre ignore comme rich result, mais reste coherent avec le contenu visible.
- Formulaire Formspree isole en composant client pour conserver le reste de la page en rendu serveur.

## FAQ a couvrir

- Que veut dire radiation d'office au RCS ?
- Peut-on annuler une radiation d'office ?
- Quelle difference entre levee, rapport et suppression de radiation d'office ?
- Quel formulaire utiliser pour une demande de rapport de radiation d'office ?
- Quand faut-il saisir le juge commis a la surveillance du RCS ?
- Une societe radiee d'office perd-elle sa personnalite morale ?
- La radiation d'office du RCS touche-t-elle aussi le RNE ?
- Combien de temps prend une levee de radiation d'office ?

## Angle copywriting

Promesse principale :
"Votre entreprise a ete radiee d'office ? On identifie le motif, on regularise le dossier et on prepare la bonne demande."

Promesses a eviter :
- "reactivation garantie"
- "Kbis recupere en 24h"
- "annulation automatique"
- confusion avec un site officiel

Formulations utiles :
- "rapport de radiation d'office"
- "suppression de la mention de radiation d'office"
- "juge commis a la surveillance du RCS"
- "regulariser la situation avant de deposer"

## Sources

- Next.js 16.2 release : https://nextjs.org/blog/next-16-2
- Next.js Metadata API : https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- Next.js sitemap metadata file : https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- Google Search Central, SSR / dynamic rendering : https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering
- Google Search Central, structured data generated with JavaScript / SSR : https://developers.google.com/search/docs/appearance/structured-data/generate-structured-data-with-javascript
- Google Search Central, Organization structured data : https://developers.google.com/search/docs/appearance/structured-data/organization
- Google Search Central, LocalBusiness structured data : https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google Search Central, FAQPage limitations : https://developers.google.com/search/docs/appearance/structured-data/faqpage
- Service-Public, formulaire M2 rapport radiation d'office : https://entreprendre.service-public.gouv.fr/vosdroits/R66233
- Service-Public, creation / modification / cessation, rapport radiation d'office : https://entreprendre.service-public.gouv.fr/vosdroits/F24023
- Service-Public, beneficiaires effectifs et radiation d'office : https://entreprendre.service-public.gouv.fr/actualites/A18464
- Legifrance, Code de commerce R123-130 : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000026251191/
- Infogreffe, requete au juge commis a la surveillance du RCS : https://www.infogreffe.fr/guide-des-formalites/fond--referes--requetes/saisir-le-president-du-tribunal/requete-au-juge-commis-a-la-surveillance-du-rcs

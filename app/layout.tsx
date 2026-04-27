import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://radiation-office.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "radiation-office.fr | Rapport de radiation d'office RCS",
    template: "%s | radiation-office.fr",
  },
  description:
    "Votre entreprise a ete radiee d'office ? Diagnostic du motif RCS/RNE, regularisation du dossier, formulaire M2 ou P2, et requete au juge commis si necessaire.",
  applicationName: "radiation-office.fr",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "radiation-office.fr",
    title: "Rapport de radiation d'office RCS | radiation-office.fr",
    description:
      "Comprendre une radiation d'office, regulariser le dossier et preparer la bonne demande au greffe ou au juge commis a la surveillance du RCS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapport de radiation d'office RCS | radiation-office.fr",
    description:
      "Diagnostic et accompagnement administratif pour entreprises radiees d'office du RCS/RNE.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbfaf6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

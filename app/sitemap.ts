import type { MetadataRoute } from "next";
import { blogArticles } from "./blog/articles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://radiation-office.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-04-27"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date("2026-04-28"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/mentions-legales`,
      lastModified: new Date("2026-04-28"),
      changeFrequency: "yearly",
      priority: 0.25,
    },
    {
      url: `${siteUrl}/politique-confidentialite`,
      lastModified: new Date("2026-04-28"),
      changeFrequency: "yearly",
      priority: 0.25,
    },
    ...blogArticles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
  ];
}

import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/content";

const SITE = "https://nakshjoshi.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: SITE, lastModified: now, priority: 1 },
    { url: `${SITE}/work`, lastModified: now, priority: 0.8 },
    { url: `${SITE}/about`, lastModified: now, priority: 0.6 },
    ...caseStudies.map((c) => ({
      url: `${SITE}/work/${c.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}

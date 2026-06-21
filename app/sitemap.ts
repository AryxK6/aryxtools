import type { MetadataRoute } from "next";
import { tools, categories, staticPages } from "@/lib/tools-config";

// Update this once the final domain is set.
const BASE_URL = "https://aryxtools.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolUrls = tools.map((tool) => ({
    url: `${BASE_URL}/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryUrls = categories.map((cat) => ({
    url: `${BASE_URL}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const pageUrls = staticPages.map((page) => ({
    url: `${BASE_URL}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...toolUrls,
    ...categoryUrls,
    ...pageUrls,
  ];
}

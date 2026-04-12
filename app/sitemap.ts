import type { MetadataRoute } from "next";

const BASE = "https://wavebrainbot.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/blog/por-que-responder-rapido`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/obrigado`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}

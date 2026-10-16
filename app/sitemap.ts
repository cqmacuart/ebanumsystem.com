import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const ROUTES: { path: string; changeFrequency: "monthly" | "yearly"; priority: number }[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/work", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, ...rest }) => ({ url: absoluteUrl(path), lastModified, ...rest }));
}

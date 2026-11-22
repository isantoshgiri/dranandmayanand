import type { MetadataRoute } from "next";
import { pages } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://anandmayanand.org";
  return ["", ...Object.keys(pages), "donation", "privacy", "terms"].map((path) => ({ url: `${base}/${path}`, lastModified: new Date() }));
}

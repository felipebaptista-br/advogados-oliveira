import type { MetadataRoute } from "next"

import { buildSiteUrl } from "@/lib/seo"

const routes = ["/", "/about", "/blogs-and-articles", "/team", "/contact"]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: buildSiteUrl(route).toString(),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }))
}

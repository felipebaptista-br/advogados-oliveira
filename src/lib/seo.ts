import type { Metadata } from "next"

export const siteConfig = {
  name: "Advogados Oliveira",
  description:
    "Escritório de advocacia especializado em direito civil, empresarial e trabalhista, com atendimento estratégico e personalizado.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.advogadosoliveira.com.br",
  ogImage: "/images/tribunal-federal.png",
  locale: "pt_BR",
}

type MetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function buildPageMetadata({ title, description, path, keywords = [] }: MetadataInput): Metadata {
  const canonicalUrl = new URL(path, siteConfig.url)
  const imageUrl = new URL(siteConfig.ogImage, siteConfig.url)

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export function buildSiteUrl(pathname = "/"): URL {
  return new URL(pathname, siteConfig.url)
}

import { cn } from "@/lib/utils"
import { JSX } from "react"
import type { Metadata } from "next"
import { buildPageMetadata, siteConfig } from "@/lib/seo"
import { blogContents } from "@/lib/blog-content"
import { ScrollArea } from "@/components/ui/scroll-area"
import BlogsArticlesGrid from "@/components/layout/blogs-articles-grid"

const BLOGS_CONTENT = {
  metadata: {
    title: "Blogs e Artigos Jurídicos | Advogados Oliveira",
    description:
      "Leia conteúdos jurídicos sobre direito civil, empresarial e trabalhista produzidos pelo Advogados Oliveira.",
    keywords: ["blog jurídico", "artigos jurídicos", "direito civil", "direito empresarial", "direito trabalhista"],
  },
  hero: {
    eyebrow: "Conteúdo jurídico para leitura rápida e prática",
    title: "Blogs e Artigos Jurídicos",
    description:
      "Conteúdos relevantes para consulta, prevenção e estratégia, com detalhamento completo em cards e diálogo.",
    sectionTitle: "Ambiente de Leitura",
    sectionDescription:
      "Cada card abre um Alert Dialog com detalhamento completo, insights práticos e tags para navegação futura.",
  },
  labels: {
    sectionEyebrow: "Mapeamento de conteúdo",
  },
} as const

const blogsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: BLOGS_CONTENT.metadata.title,
  description: BLOGS_CONTENT.metadata.description,
  url: `${siteConfig.url}/blogs-and-articles`,
  about: {
    "@type": "LegalService",
    name: siteConfig.name,
    url: siteConfig.url,
  },
}

export const metadata: Metadata = buildPageMetadata({
  title: BLOGS_CONTENT.metadata.title,
  description: BLOGS_CONTENT.metadata.description,
  path: "/blogs-and-articles",
  keywords: [...BLOGS_CONTENT.metadata.keywords],
})

export default async function BlogsAndArticles(): Promise<JSX.Element> {
  return (
    <main className={cn("min-h-[calc(100vh-80px)]")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogsJsonLd) }} />
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_35%),linear-gradient(135deg,rgb(2,44,34),rgb(6,78,59)_60%,rgb(4,120,87))] px-6 py-20 text-white md:px-12 xl:px-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 text-center">
          <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-emerald-50/90 backdrop-blur-sm">
            <span className="size-2 rounded-full bg-emerald-300" />
            {BLOGS_CONTENT.hero.eyebrow}
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">
            {BLOGS_CONTENT.hero.title}
          </h1>

          <p className="mx-auto max-w-3xl text-pretty text-base leading-7 text-emerald-50/80 md:text-lg">
            {BLOGS_CONTENT.hero.description}
          </p>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:px-12 xl:px-20">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-800 dark:text-emerald-300">{BLOGS_CONTENT.labels.sectionEyebrow}</p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
                {BLOGS_CONTENT.hero.sectionTitle}
              </h2>
            </div>
          </div>
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
            {BLOGS_CONTENT.hero.sectionDescription}
          </p>
          <ScrollArea className="rounded-[min(var(--radius-4xl),24px)] border border-foreground/5 bg-background/60 p-1 shadow-sm md:border-0 md:bg-transparent md:p-0 md:shadow-none">
            <BlogsArticlesGrid contents={blogContents} />
          </ScrollArea>
        </div>
      </section>
    </main>
  )
}
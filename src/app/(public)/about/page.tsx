import type { Metadata } from "next"
import { JSX } from "react"
import { buildPageMetadata, siteConfig } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BriefcaseBusiness, Scale, ShieldCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ABOUT_CONTENT = {
  metadata: {
    title: "Sobre o Escritório | Advogados Oliveira",
    description:
      "Conheça a história, a atuação e a filosofia de trabalho do Advogados Oliveira.",
    keywords: ["sobre o escritório", "advogados oliveira", "história do escritório"],
  },
  hero: {
    badges: ["Sobre o escritório", "Advocacia estratégica", "Atendimento próximo"],
    title: "Advocacia com foco em estratégia, previsibilidade e confiança.",
    lead:
      "O Advogados Oliveira atua de forma próxima ao cliente, com análise técnica, linguagem clara e atuação voltada à prevenção de riscos, resolução de conflitos e defesa de interesses em temas cíveis, empresariais e trabalhistas.",
    highlightCards: [
      {
        title: "Leitura institucional",
        description:
          "Uma apresentação visual mais forte, com imagem de fundo e faixas de destaque que valorizam a marca do escritório.",
      },
      {
        title: "Posicionamento",
        description:
          "Conteúdo claro, visual impactante e estrutura pensada para transmitir confiança logo no primeiro olhar.",
      },
    ],
    featureRow: [
      {
        icon: "Scale",
        title: "Direito cível e empresarial",
        description: "Atuação preventiva e contenciosa.",
      },
      {
        icon: "BriefcaseBusiness",
        title: "Estratégia e clareza",
        description: "Análise objetiva para decisões seguras.",
      },
      {
        icon: "ShieldCheck",
        title: "Atendimento próximo",
        description: "Comunicação direta e acompanhamento real.",
      },
    ],
  },
  cards: [
    {
      image: "/images/justice-scale.png",
      imageAlt: "Escala da justiça",
      label: "Atuação técnica",
      icon: "Scale",
      title: "Atuação técnica",
      description:
        "Construímos soluções jurídicas com análise de documentos, riscos e cenários práticos, sempre buscando respostas objetivas e seguras.",
    },
    {
      image: "/images/courthouse.png",
      imageAlt: "Prédio do tribunal",
      label: "Visão estratégica",
      icon: "BriefcaseBusiness",
      title: "Visão estratégica",
      description:
        "Acompanhamos negociações, contratos e disputas com uma leitura voltada ao impacto jurídico e ao efeito para a operação do cliente.",
    },
    {
      image: "/images/handshake.png",
      imageAlt: "Aperto de mãos simbolizando parceria",
      label: "Atendimento próximo",
      icon: "Users",
      title: "Atendimento próximo",
      description:
        "Priorizamos comunicação clara, acompanhamento consistente e alinhamento permanente com as necessidades de cada cliente.",
    },
  ],
  purpose: {
    label: "Nosso propósito",
    title: "Tornar o jurídico mais claro, útil e alinhado ao dia a dia do cliente.",
    description:
      "Nosso trabalho é estruturado para reduzir ruídos, organizar decisões e apoiar a empresa ou a pessoa física em momentos de prevenção, negociação e conflito. Mais do que responder ao problema imediato, buscamos criar base para decisões melhores no médio e longo prazo.",
  },
  commitments: {
    title: "Compromissos do escritório",
    items: [
      "Linguagem clara, sem excesso de juridiquês desnecessário.",
      "Estratégia construída com base em risco real e evidência.",
      "Postura ética, técnica e orientada a resultado.",
      "Resposta compatível com a urgência e a complexidade do caso.",
    ],
    cta: {
      label: "Fale com o escritório",
      href: "/contact",
    },
  },
} as const

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: ABOUT_CONTENT.metadata.title,
  description: ABOUT_CONTENT.metadata.description,
  url: `${siteConfig.url}/about`,
  mainEntity: {
    "@type": "LegalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    areaServed: "BR",
    serviceType: ["Direito Civil", "Direito Empresarial", "Direito Trabalhista"],
  },
}

export const metadata: Metadata = buildPageMetadata({
  title: ABOUT_CONTENT.metadata.title,
  description: ABOUT_CONTENT.metadata.description,
  path: "/about",
  keywords: [...ABOUT_CONTENT.metadata.keywords, "direito cível", "direito empresarial", "direito trabalhista"],
})

const iconMap = {
  Scale,
  BriefcaseBusiness,
  ShieldCheck,
  Users,
} as const

export default async function About(): Promise<JSX.Element> {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.34),transparent_32%),radial-gradient(circle_at_right,rgba(6,78,59,0.28),transparent_30%),linear-gradient(135deg,rgb(2,44,34),rgb(6,78,59)_55%,rgb(4,120,87))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.82),rgba(2,6,23,0.18)_52%,transparent)]" />
        <div className="relative mx-auto flex max-w-360 flex-col gap-10 px-6 py-14 md:px-12 xl:px-20 xl:py-16">
          <div className="flex flex-wrap gap-3">
            {ABOUT_CONTENT.hero.badges.map((badge) => (
              <div
                key={badge}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-emerald-50/90 backdrop-blur-md"
              >
                {badge}
              </div>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl text-white">
              <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl xl:text-6xl">
                {ABOUT_CONTENT.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/80 md:text-lg">
                {ABOUT_CONTENT.hero.lead}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {ABOUT_CONTENT.hero.highlightCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[min(var(--radius-4xl),24px)] border border-white/10 bg-white/10 p-5 text-white shadow-xl backdrop-blur-md"
                >
                  <p className="text-sm font-medium text-emerald-100/90">{card.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 rounded-[min(var(--radius-4xl),24px)] border border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur-md md:grid-cols-3">
            {ABOUT_CONTENT.hero.featureRow.map((feature) => {
              const FeatureIcon = iconMap[feature.icon]

              return (
                <div key={feature.title} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
                  <FeatureIcon className="size-5 shrink-0 text-emerald-200" />
                  <div>
                    <p className="text-sm font-semibold">{feature.title}</p>
                    <p className="text-xs text-white/70">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 xl:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {ABOUT_CONTENT.cards.map((card) => {
            const CardIcon = iconMap[card.icon]

            return (
              <Card key={card.title} className="group overflow-hidden border-white/10 bg-card/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-emerald-950/80 via-emerald-950/35 to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-white backdrop-blur-md">
                    {card.label}
                  </div>
                </div>
                <CardHeader className="space-y-4 pb-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-950/5 text-emerald-900 dark:bg-white/5 dark:text-emerald-50">
                    <CardIcon className="size-5" />
                  </div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">{card.description}</CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="px-6 pb-16 md:px-12 xl:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[min(var(--radius-4xl),24px)] border border-foreground/5 bg-muted/25 p-8 shadow-sm dark:border-white/5 dark:bg-white/5">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-800 dark:text-emerald-300">{ABOUT_CONTENT.purpose.label}</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">{ABOUT_CONTENT.purpose.title}</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">{ABOUT_CONTENT.purpose.description}</p>
          </div>

          <div className="rounded-[min(var(--radius-4xl),24px)] border border-emerald-900/10 bg-emerald-950/5 p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-3 text-emerald-900 dark:text-emerald-50">
              <ShieldCheck className="size-5" />
              <h2 className="text-2xl font-semibold">{ABOUT_CONTENT.commitments.title}</h2>
            </div>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
              {ABOUT_CONTENT.commitments.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href={ABOUT_CONTENT.commitments.cta.href}>
                <Button className="rounded-2xl bg-emerald-900 px-5 text-white hover:bg-emerald-800">
                  {ABOUT_CONTENT.commitments.cta.label}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
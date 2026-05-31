import { cn } from "@/lib/utils"
import { JSX } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, BadgeCheck, Users, BriefcaseBusiness, Scale, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { buildPageMetadata, siteConfig } from "@/lib/seo"

const TEAM_CONTENT = {
  metadata: {
    title: "Equipe | Advogados Oliveira",
    description:
      "Conheça a equipe do Advogados Oliveira e a experiência por trás do atendimento jurídico.",
    keywords: ["equipe jurídica", "advogados", "profissionais do direito"],
  },
  hero: {
    title: "Equipe preparada para atuar com visão técnica e atendimento próximo.",
    description:
      "Profissionais alinhados para atender com clareza, estratégia e foco em resultados sustentáveis.",
    eyebrow: "Equipe e método",
    highlights: [
      "Atuação consultiva e contenciosa",
      "Comunicação clara com o cliente",
      "Processos internos organizados",
    ],
  },
  metrics: [
    { value: "3", label: "frentes principais de atuação" },
    { value: "100%", label: "foco em clareza e previsibilidade" },
    { value: "1", label: "time integrado para cada caso" },
  ],
  members: [
    {
      name: "Atuação consultiva",
      role: "Prevenção e organização",
      image: "/images/law-books.png",
      description: "Leitura de cenários, suporte estratégico e organização de documentos e riscos.",
    },
    {
      name: "Atuação empresarial",
      role: "Negociação e contratos",
      image: "/images/contract-signing.png",
      description: "Apoio em acordos, redação contratual e proteção de interesses empresariais.",
    },
    {
      name: "Atuação contenciosa",
      role: "Defesa e acompanhamento",
      image: "/images/courthouse.png",
      description: "Atuação em conflitos com leitura técnica e acompanhamento próximo do cliente.",
    },
  ],
  labels: {
    methodSectionEyebrow: "Metodologia",
    methodSectionTitle: "Como conduzimos cada caso",
    methodFinalTitle: "Entrega final",
    methodFinalDescription: "Clareza para decidir, estratégia para agir e acompanhamento para evoluir com segurança.",
    methodCards: [
      {
        title: "Diagnóstico inicial",
        description: "Mapeamento dos fatos, documentos e riscos para definir a linha de atuação.",
      },
      {
        title: "Estratégia jurídica",
        description: "Construção do caminho mais eficiente com base em probabilidade, custo e impacto.",
      },
      {
        title: "Acompanhamento contínuo",
        description: "Atualizações objetivas e comunicação próxima durante toda a evolução do caso.",
      },
    ],
    memberSectionTitle: "Atendimento alinhado ao caso e ao cliente",
    memberSectionDescription:
      "A equipe trabalha de forma integrada para entregar clareza, segurança e resposta adequada à complexidade de cada demanda.",
    methodBannerEyebrow: "Método do escritório",
    methodBannerDescription:
      "Atuação orientada por diagnóstico, estratégia e acompanhamento contínuo, com uma equipe que trabalha em bloco, não em silos.",
  },
} as const

const teamJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: TEAM_CONTENT.metadata.title,
  description: TEAM_CONTENT.metadata.description,
  url: `${siteConfig.url}/team`,
  mainEntity: {
    "@type": "LegalService",
    name: siteConfig.name,
    url: siteConfig.url,
  },
}

export const metadata: Metadata = buildPageMetadata({
  title: TEAM_CONTENT.metadata.title,
  description: TEAM_CONTENT.metadata.description,
  path: "/team",
  keywords: [...TEAM_CONTENT.metadata.keywords],
})

export default async function Team(): Promise<JSX.Element> {
  return (
    <main className={cn("min-h-[calc(100vh-80px)] bg-[#071712] text-white")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }} />

      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_28%),linear-gradient(135deg,rgb(1,20,16),rgb(2,44,34)_50%,rgb(6,78,59))] px-6 py-16 md:px-12 xl:px-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05),transparent_20%,transparent_80%,rgba(255,255,255,0.04))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-200/90">{TEAM_CONTENT.hero.eyebrow}</p>
            <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">{TEAM_CONTENT.hero.title}</h1>
            <p className="max-w-2xl text-pretty text-base leading-7 text-white/80 md:text-lg">{TEAM_CONTENT.hero.description}</p>

            <div className="grid gap-3 sm:grid-cols-2">
              {TEAM_CONTENT.hero.highlights.map((item) => (
                <div key={item} className="rounded-[min(var(--radius-4xl),24px)] border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/80 backdrop-blur-md">
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="rounded-2xl bg-white px-5 text-emerald-950 hover:bg-white/90">
                  Falar com a equipe
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_CONTENT.metrics.map((metric) => (
              <div key={metric.label} className="rounded-[min(var(--radius-4xl),24px)] border border-white/10 bg-white/10 p-5 text-center shadow-xl backdrop-blur-md">
                <p className="text-4xl font-semibold text-emerald-100">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/75">{metric.label}</p>
              </div>
            ))}
            <div className="sm:col-span-2 lg:col-span-3 overflow-hidden rounded-[min(var(--radius-4xl),28px)] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-md">
              <div className="relative h-72">
                <Image src="/images/law-firm-sign.png" alt="Sinalização do escritório" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-linear-to-t from-emerald-950/90 via-emerald-950/35 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-100/90">{TEAM_CONTENT.labels.methodBannerEyebrow}</p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">{TEAM_CONTENT.labels.methodBannerDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 xl:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[min(var(--radius-4xl),28px)] border border-white/10 bg-white/5 p-6 text-white shadow-xl backdrop-blur-md md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-200/90">{TEAM_CONTENT.labels.methodSectionEyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold">{TEAM_CONTENT.labels.methodSectionTitle}</h2>
            <div className="mt-6 space-y-4">
              {TEAM_CONTENT.labels.methodCards.map((step, index) => (
                <div key={step.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-emerald-200/10 text-sm font-semibold text-emerald-100">
                    0{index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-white">{step.title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4">
              <div className="flex items-center gap-2 text-emerald-100">
                <Sparkles className="size-4" />
                <span className="text-sm font-medium uppercase tracking-[0.22em]">{TEAM_CONTENT.labels.methodFinalTitle}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/75">{TEAM_CONTENT.labels.methodFinalDescription}</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_CONTENT.members.map((member) => {
              const MemberIcon = member.name.includes("consultiva") ? Scale : member.name.includes("empresarial") ? BriefcaseBusiness : Users

              return (
                <Card key={member.name} className="group overflow-hidden border-white/10 bg-card/95 text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-linear-to-t from-emerald-950/80 via-emerald-950/35 to-transparent" />
                    <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-white backdrop-blur-md">
                      {member.role}
                    </div>
                  </div>
                  <CardHeader className="space-y-3 pb-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-950/5 text-emerald-900 dark:bg-white/5 dark:text-emerald-50">
                      <MemberIcon className="size-5" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-6 text-muted-foreground">{member.description}</CardContent>
                </Card>
              )
            })}

            <div className="sm:col-span-2 lg:col-span-3 rounded-[min(var(--radius-4xl),24px)] border border-emerald-900/10 bg-emerald-950/5 p-6 text-foreground shadow-sm md:p-8 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3 text-emerald-400 dark:text-emerald-50">
                <BadgeCheck className="size-5" />
                <h2 className="text-2xl font-semibold">{TEAM_CONTENT.labels.memberSectionTitle}</h2>
              </div>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-white md:text-base">
                {TEAM_CONTENT.labels.memberSectionDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
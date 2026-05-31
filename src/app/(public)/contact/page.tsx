import { cn } from "@/lib/utils"
import { JSX } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Mail, MapPinned, Phone, MessageCircle } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { buildPageMetadata, siteConfig } from "@/lib/seo"
import ContactForm from "@/components/layout/contact-form"

const CONTACT_CONTENT = {
  metadata: {
    title: "Contato | Advogados Oliveira",
    description:
      "Entre em contato com o Advogados Oliveira para agendar uma consulta e receber orientação jurídica.",
    keywords: ["contato advogado", "agendar consulta", "escritório de advocacia"],
  },
  hero: {
    title: "Contato",
  },
  recipientEmail: "contato@advogadosoliveira.com.br",
  form: {
    eyebrow: "Formulário de contato",
    title: "Envie sua mensagem",
    description: "Preencha os campos abaixo e o e-mail será preparado automaticamente para envio.",
    submitLabel: "Enviar para e-mail",
    submittingLabel: "Preparando envio...",
    successMessage: "Seu aplicativo de e-mail será aberto com a mensagem pronta para envio.",
    placeholders: {
      fullName: "Seu nome",
      email: "voce@exemplo.com",
      phone: "(11) 99999-9999",
      subject: "Escolha um assunto",
      message: "Conte o contexto, prazos e o que você precisa resolver.",
    },
    labels: {
      fullName: "Nome completo",
      email: "E-mail",
      phone: "Telefone",
      subject: "Assunto",
      message: "Mensagem",
    },
  },
  subjectOptions: ["Consulta jurídica", "Contrato", "Cobrança", "Trabalhista", "Outro"] as const,
  contacts: [
    { icon: Phone, title: "Telefone", value: "(11) 99469-6985", href: "tel:+5511994696985" },
    { icon: MessageCircle, title: "WhatsApp", value: "(11) 98582-8589", href: "https://wa.me/5511985828589" },
    {
      icon: MapPinned,
      title: "Endereço",
      value: "Avenida Paulista, São Paulo - SP",
      href: "https://www.google.com/maps/search/?api=1&query=Avenida+Paulista+Sao+Paulo+SP",
    },
    { icon: Mail, title: "Linktree", value: "linktr.ee/escritorioadvogadosoliveira", href: "https://linktr.ee/escritorioadvogadosoliveira" },
  ],
} as const

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: CONTACT_CONTENT.metadata.title,
  description: CONTACT_CONTENT.metadata.description,
  url: `${siteConfig.url}/contact`,
  mainEntity: {
    "@type": "LegalService",
    name: siteConfig.name,
    url: siteConfig.url,
  },
}

export const metadata: Metadata = buildPageMetadata({
  title: CONTACT_CONTENT.metadata.title,
  description: CONTACT_CONTENT.metadata.description,
  path: "/contact",
  keywords: [...CONTACT_CONTENT.metadata.keywords]
})

export default async function Contact(): Promise<JSX.Element> {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const mapCenter = "Avenida Paulista, Sao Paulo, SP"
  const mapImageUrl = googleMapsApiKey
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(mapCenter)}&zoom=16&size=1200x560&scale=2&maptype=roadmap&markers=color:0x10b981%7C${encodeURIComponent(mapCenter)}&style=feature:poi|visibility:off&key=${googleMapsApiKey}`
    : null

  return (
    <main className={cn("min-h-[calc(100vh-80px)] bg-background")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />

      <section className="flex min-h-[calc(100vh-80px)] items-center px-6 py-12 md:px-12 xl:px-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6">
          <div className="w-full">
            <ContactForm
              recipientEmail={CONTACT_CONTENT.recipientEmail}
              subjectOptions={CONTACT_CONTENT.subjectOptions}
              content={CONTACT_CONTENT.form}
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 xl:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {CONTACT_CONTENT.contacts.map((contact) => {
            const ContactIcon = contact.icon

            return (
              <Card key={contact.title} className="border-white/10 bg-card/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10">
                <CardHeader className="space-y-4 pb-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-950/5 text-emerald-900 dark:bg-white/5 dark:text-emerald-50">
                    <ContactIcon className="size-5" />
                  </div>
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  <Link href={contact.href} className="break-words hover:text-emerald-900 hover:underline dark:hover:text-emerald-300">
                    {contact.value}
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </main>
  )
}
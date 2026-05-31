import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { JSX } from "react"
import { cn } from "@/lib/utils"
import { buildPageMetadata } from "@/lib/seo"
import Link from "next/link"

export const contentText = {
  title: "Excelência Jurídica para Resultados de Sucesso",
  description: "No Escritório de Advocacia Oliveira, nossa missão é fornecer serviços jurídicos de alta qualidade, combinando experiência, dedicação e uma abordagem personalizada para alcançar os melhores resultados para nossos clientes.",
  button: "Começar agora"
}

export const metadata: Metadata = buildPageMetadata({
  title: "Advogados Oliveira | Direito Civil, Empresarial e Trabalhista",
  description: contentText.description,
  path: "/",
  keywords: ["advogado", "escritório de advocacia", "direito civil", "direito empresarial", "direito trabalhista"],
})

export default function Home(): JSX.Element {
  return (
    <div className={cn(
      "flex min-h-[calc(100vh-80px)] w-full flex-col lg:h-[calc(100vh-80px)] lg:flex-row"
    )}>
      <div className={cn(
        "w-full lg:w-1/2"
      )}>
        <div className="flex h-full flex-col items-start justify-center px-6 py-12 sm:px-8 md:px-12 lg:px-28 lg:py-0">
          <h1 className={cn(
            "text-start text-4xl font-normal leading-snug text-emerald-900 md:text-5xl dark:text-white"
          )}>
            {contentText.title}
          </h1>
          <p className={cn(
            "mt-6 text-start text-base dark:text-white/80"
          )}>
            {contentText.description}
          </p>
          <Link href="/contact" className="mt-8 w-full sm:w-auto">
            <Button
              variant="default"
              className={cn(
                "h-12 w-full sm:w-70",
                "bg-emerald-900"
              )}
            >
              {contentText.button}
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
      <div className={cn(
        "relative h-72 w-full overflow-hidden sm:h-96 lg:h-full lg:w-1/2"
      )}>
        <Image
          src="/images/tribunal-federal.png"
          alt="Imagem do Tribunal Federal"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-emerald-500/20 mix-blend-multiply" />
      </div>
    </div>
  )
}
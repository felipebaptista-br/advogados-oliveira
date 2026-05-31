import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JSX } from "react"
import { cn } from "@/lib/utils"

export const contentText = {
  title: "Excelência Jurídica para Resultados de Sucesso",
  description: "No Escritório de Advocacia Oliveira, nossa missão é fornecer serviços jurídicos de alta qualidade, combinando experiência, dedicação e uma abordagem personalizada para alcançar os melhores resultados para nossos clientes.",
  button: "Começar agora"
}

export default function Home(): JSX.Element {
  return (
    <div className={cn(
      "w-full h-[calc(100vh-80px)] flex items-center justify-center"
    )}>
      <div className={cn(
        "w-1/2 flex flex-col items-start justify-self-center px-28"
      )}>
        <h1 className={cn(
          "text-5xl text-start font-normal text-emerald-900 dark:text-white",
          "leading-snug"
        )}>
          {contentText.title}
        </h1>
        <p className={cn(
          "text-base text-start mt-6 dark:text-white/80"
        )}>
          {contentText.description}
        </p>
        <Button
          variant="default"
          className={cn(
            "w-70 h-12 mt-8",
            "bg-emerald-900"
          )}
        >
          {contentText.button}
          <ArrowRight className="ml-2" />
        </Button>
      </div>
      <div className={cn(
        "relative w-1/2 h-full overflow-hidden"
      )}>
        <Image
          src="/images/tribunal-federal.png"
          alt="Bandeira em frente ao tribunal"
          fill
          className="object-cover"
          sizes="50vw"
          priority
        />
        <div className="absolute inset-0 bg-emerald-500/20 mix-blend-multiply" />
      </div>
    </div>
  )
}

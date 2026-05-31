import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef, JSX, ReactNode } from "react"
import Link from "next/link"
import { ModeSelect } from "../ui/mode-select"
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react"

const currentYear = new Date().getFullYear()

interface FooterParams extends ComponentPropsWithoutRef<"footer"> {
  children?: ReactNode
  className?: string
}

export default function Footer({ children, className, ...props }: FooterParams): JSX.Element {
  return (
    <FooterProvider
      className={className}
      {...props}
    >
      <div className="mx-auto flex w-full flex-col gap-14 p-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <FooterColumn className="gap-6">
            <div className="space-y-4">
              <p className="max-w-md text-sm leading-7 text-emerald-50/78">
                Atuação jurídica com estratégia, clareza e atenção pessoal em cada etapa do processo.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                <Scale className="mb-3 size-5 text-emerald-100" />
                <p className="text-sm font-medium text-white">Defesa técnica</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                <ShieldCheck className="mb-3 size-5 text-emerald-100" />
                <p className="text-sm font-medium text-white">Atendimento seguro</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                <Users className="mb-3 size-5 text-emerald-100" />
                <p className="text-sm font-medium text-white">Relação próxima</p>
              </div>
            </div>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>Escritório</FooterHeading>
            <FooterLink href="/">Página inicial</FooterLink>
            <FooterLink href="/about">Sobre o escritório</FooterLink>
            <FooterLink href="/blogs-and-articles">Blogs e artigos</FooterLink>
            <FooterLink href="/team">Equipe</FooterLink>
            <FooterLink href="/contact">Contato</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>Áreas de atuação</FooterHeading>
            <FooterText>Direito Civil</FooterText>
            <FooterText>Direito Empresarial</FooterText>
            <FooterText>Direito Trabalhista</FooterText>
            <FooterText>Consultoria preventiva</FooterText>
            <FooterText>Contencioso estratégico</FooterText>
          </FooterColumn>

          <FooterColumn className="gap-5">
            <FooterHeading>Contato</FooterHeading>
            <FooterContact icon={<MapPin className="size-4" />}>
              Avenida Central, 245, Sala 08, Centro
            </FooterContact>
            <FooterContact icon={<Phone className="size-4" />}>
              (11) 4000-1234
            </FooterContact>
            <FooterContact icon={<Mail className="size-4" />}>
              contato@advogadosoliveira.com.br
            </FooterContact>
            <FooterContact icon={<Clock3 className="size-4" />}>
              Seg a Sex, das 9h às 18h
            </FooterContact>
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-4 text-sm text-emerald-50/65 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-5">
            <FooterLink href="/contact" className="text-emerald-50/65 hover:text-white">
              Agendar consulta
            </FooterLink>
            <FooterLink href="/about" className="text-emerald-50/65 hover:text-white">
              Conhecer o escritório
            </FooterLink>
          </div>
          <div className="flex items-center gap-3 text-emerald-50/72">
            <span className="text-sm">Tema</span>
            <ModeSelect />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-20 py-6 text-center text-sm text-emerald-50/65">
        © {currentYear} Advogados Oliveira. Todos os direitos reservados.
      </div>
      {children}
    </FooterProvider>
  )
}

interface FooterProviderParams extends ComponentPropsWithoutRef<"footer"> {
  children?: ReactNode
  className?: string
}

export function FooterProvider({ children, className, ...props }: FooterProviderParams): JSX.Element {
  return (
    <footer
      className={cn(
        className,
        "w-full bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.15),_transparent_28%),linear-gradient(135deg,_rgb(2,44,34),_rgb(6,78,59)_55%,_rgb(4,120,87))]"
      )}
      {...props}
    >
      {children}
    </footer>
  )
}

interface FooterColumnParams extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode
}

export function FooterColumn({ children, className, ...props }: FooterColumnParams): JSX.Element {
  return (
    <div
      className={cn(
        "flex h-auto w-auto flex-col items-start gap-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface FooterLinkParams extends ComponentPropsWithoutRef<typeof Link> {
  children?: ReactNode
  className?: string
}

export function FooterLink({ children, className, ...props }: FooterLinkParams): JSX.Element {
  return (
    <Link
      className={cn(
        "inline-flex items-center gap-2 text-sm text-emerald-50/72 transition-colors duration-300 hover:text-white",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight className="size-3.5 opacity-70" />
    </Link>
  )
}

interface FooterHeadingParams extends ComponentPropsWithoutRef<"h2"> {
  children?: ReactNode
}

export function FooterHeading({ children, className, ...props }: FooterHeadingParams): JSX.Element {
  return (
    <h2
      className={cn(
        "mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-100",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

interface FooterTextParams extends ComponentPropsWithoutRef<"p"> {
  children?: ReactNode
}

export function FooterText({ children, className, ...props }: FooterTextParams): JSX.Element {
  return (
    <p
      className={cn(
        "text-sm text-emerald-50/72",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

interface FooterContactParams extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode
  icon: ReactNode
}

export function FooterContact({ children, icon, className, ...props }: FooterContactParams): JSX.Element {
  return (
    <div
      className={cn(
        "flex items-start gap-3 text-sm text-emerald-50/78",
        className
      )}
      {...props}
    >
      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/8 text-emerald-100">
        {icon}
      </span>
      <span className="leading-6">{children}</span>
    </div>
  )
}
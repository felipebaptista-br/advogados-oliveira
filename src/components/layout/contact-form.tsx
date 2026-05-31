"use client"

import * as React from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Loader2, Mail, MessageSquareText, Phone, Send, Sparkles, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const contactSchema = z.object({
  fullName: z.string().min(3, "Informe seu nome completo."),
  email: z.string().email("Informe um e-mail válido."),
  phone: z.string().optional().or(z.literal("")),
  subject: z.enum(["Consulta jurídica", "Contrato", "Cobrança", "Trabalhista", "Outro"]),
  message: z.string().min(20, "Escreva uma mensagem com mais detalhes."),
})

type ContactFormValues = z.infer<typeof contactSchema>

interface ContactFormProps {
  recipientEmail: string
  subjectOptions: readonly ContactFormValues["subject"][]
  content: {
    eyebrow: string
    title: string
    description: string
    submitLabel: string
    submittingLabel: string
    successMessage: string
    placeholders: {
      fullName: string
      email: string
      phone: string
      subject: string
      message: string
    }
    labels: {
      fullName: string
      email: string
      phone: string
      subject: string
      message: string
    }
  }
}

export default function ContactForm({ recipientEmail, subjectOptions, content }: ContactFormProps) {
  const [sentMessage, setSentMessage] = React.useState<string | null>(null)

  const { register, handleSubmit, watch, setValue, reset, formState } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: subjectOptions[0],
      message: "",
    },
  })

  const subject = watch("subject")

  async function onSubmit(values: ContactFormValues) {
    const body = [
      `Nome: ${values.fullName}`,
      `E-mail: ${values.email}`,
      `Telefone: ${values.phone || "Não informado"}`,
      `Assunto: ${values.subject}`,
      "",
      values.message,
    ].join("\n")

    const mailto = `mailto:${recipientEmail}?subject=${encodeURIComponent(`Contato site | ${values.subject} | ${values.fullName}`)}&body=${encodeURIComponent(body)}`

    setSentMessage(content.successMessage)
    window.location.href = mailto
    reset({
      fullName: "",
      email: "",
      phone: "",
      subject: subjectOptions[0],
      message: "",
    })
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="mb-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-800 dark:text-emerald-300">{content.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-semibold text-foreground">{content.title}</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{content.description}</p>
      </div>

      <form className="grid gap-4 rounded-[min(var(--radius-4xl),28px)] border border-foreground/5 bg-card/80 p-6 shadow-sm backdrop-blur-sm md:p-8" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid gap-2">
          <Label htmlFor="fullName" className="text-sm font-medium text-foreground/90">
            <User className="size-4 text-emerald-900 dark:text-emerald-300" />
            {content.labels.fullName}
          </Label>
          <div className="relative">
            <User className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="fullName" placeholder={content.placeholders.fullName} className="pl-9" aria-invalid={!!formState.errors.fullName} {...register("fullName")} />
          </div>
          {formState.errors.fullName ? <p className="text-sm text-destructive">{formState.errors.fullName.message}</p> : null}
        </div>

        <div className="grid gap-2 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground/90">
              <Mail className="size-4 text-emerald-900 dark:text-emerald-300" />
              {content.labels.email}
            </Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="email" type="email" placeholder={content.placeholders.email} className="pl-9" aria-invalid={!!formState.errors.email} {...register("email")} />
            </div>
            {formState.errors.email ? <p className="text-sm text-destructive">{formState.errors.email.message}</p> : null}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone" className="text-sm font-medium text-foreground/90">
              <Phone className="size-4 text-emerald-900 dark:text-emerald-300" />
              {content.labels.phone}
            </Label>
            <div className="relative">
              <Phone className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="phone" placeholder={content.placeholders.phone} className="pl-9" aria-invalid={!!formState.errors.phone} {...register("phone")} />
            </div>
            {formState.errors.phone ? <p className="text-sm text-destructive">{formState.errors.phone.message}</p> : null}
          </div>
        </div>

        <div className="grid gap-2">
          <Label className="text-sm font-medium text-foreground/90">
            <Sparkles className="size-4 text-emerald-900 dark:text-emerald-300" />
            {content.labels.subject}
          </Label>
          <Select value={subject} onValueChange={(value) => setValue("subject", value as ContactFormValues["subject"], { shouldValidate: true })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={content.placeholders.subject} />
            </SelectTrigger>
            <SelectContent>
              {subjectOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {formState.errors.subject ? <p className="text-sm text-destructive">{formState.errors.subject.message}</p> : null}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message" className="text-sm font-medium text-foreground/90">
            <MessageSquareText className="size-4 text-emerald-900 dark:text-emerald-300" />
            {content.labels.message}
          </Label>
          <div className="relative">
            <MessageSquareText className="pointer-events-none absolute top-3 left-3 size-4 text-muted-foreground" />
            <Textarea
              id="message"
              rows={7}
              placeholder={content.placeholders.message}
              className="pl-9 pt-3"
              aria-invalid={!!formState.errors.message}
              {...register("message")}
            />
          </div>
          {formState.errors.message ? <p className="text-sm text-destructive">{formState.errors.message.message}</p> : null}
        </div>

        {sentMessage ? (
          <div className="rounded-2xl border border-emerald-900/10 bg-emerald-950/5 px-4 py-3 text-sm text-emerald-900 dark:border-white/10 dark:bg-white/5 dark:text-emerald-100">
            {sentMessage}
          </div>
        ) : null}

        <Button
          type="submit"
          className="mt-2 w-full rounded-2xl bg-emerald-900 px-5 py-3 text-white shadow-sm shadow-emerald-950/10 hover:bg-emerald-800"
          disabled={formState.isSubmitting || !formState.isValid}
        >
          {formState.isSubmitting ? <Loader2 className="mr-2 size-4 animate-spin" /> : <Send className="mr-2 size-4" />}
          {formState.isSubmitting ? content.submittingLabel : content.submitLabel}
        </Button>
      </form>
    </div>
  )
}
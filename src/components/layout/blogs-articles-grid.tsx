"use client"

import { JSX } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { BlogContent } from "@/lib/blog-content"
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  FileText,
  Sparkles,
  Scale,
  Landmark,
  ShieldCheck,
} from "lucide-react"

interface BlogsArticlesGridProps {
  contents: BlogContent[]
}

function getContentIcon(type: BlogContent["type"]) {
  return type === "article" ? FileText : Sparkles
}

function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString))
}

export default function BlogsArticlesGrid({ contents }: BlogsArticlesGridProps): JSX.Element {
  return (
    <div className="grid gap-6 py-10 md:grid-cols-2 xl:grid-cols-3">
      {contents.map((content, index) => {
        const ContentIcon = getContentIcon(content.type)
        const palette = [
          "from-emerald-950 via-emerald-900 to-emerald-800",
          "from-slate-950 via-slate-900 to-emerald-900",
          "from-teal-950 via-emerald-900 to-teal-800",
          "from-zinc-950 via-zinc-900 to-emerald-900",
        ][index % 4]

        return (
          <AlertDialog key={content.id}>
            <Card className="group relative h-full overflow-hidden border-white/10 bg-card/95 p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10 dark:bg-card/90">
              <div className={cn("h-2 w-full bg-linear-to-r", palette)} />

              <CardHeader className="gap-4 px-6 pt-6">
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="outline" className="border-emerald-900/10 bg-emerald-950/5 text-emerald-900 dark:border-white/10 dark:bg-white/5 dark:text-emerald-50">
                    {content.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="size-3.5" />
                    <span>{formatDate(content.publishedAt)}</span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="max-w-88 text-balance text-xl font-semibold leading-tight text-foreground">
                      {content.title}
                    </CardTitle>
                    <CardDescription className="max-w-100 text-pretty text-sm leading-6 text-muted-foreground">
                      {content.preview}
                    </CardDescription>
                  </div>

                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-emerald-900/10 bg-emerald-950/5 text-emerald-900 dark:border-white/10 dark:bg-white/5 dark:text-emerald-50">
                    <ContentIcon className="size-5" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 px-6">
                <div className="grid grid-cols-2 gap-3 rounded-3xl border border-foreground/5 bg-muted/35 p-4 dark:border-white/5 dark:bg-white/5">
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Clock3 className="size-4 text-emerald-700 dark:text-emerald-300" />
                    <span>{content.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Landmark className="size-4 text-emerald-700 dark:text-emerald-300" />
                    <span>{content.author}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {content.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="ghost" className="rounded-full bg-emerald-950/5 text-emerald-900 dark:bg-white/5 dark:text-emerald-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="mt-auto px-6 pb-6 pt-2">
                <AlertDialogTrigger asChild>
                  <Button
                    variant="default"
                    className="w-full justify-between rounded-2xl bg-emerald-900 px-5 py-3 text-white transition-all duration-300 hover:bg-emerald-800"
                  >
                    <span>Ler detalhamento</span>
                    <ArrowRight className="size-4" />
                  </Button>
                </AlertDialogTrigger>
              </CardFooter>

            </Card>

            <AlertDialogContent className="max-h-[calc(100vh-2rem)] max-w-3xl overflow-hidden border-white/10 bg-popover/98 p-0 backdrop-blur-xl">
              <div className="flex max-h-[calc(100vh-2rem)] flex-col">
                <AlertDialogHeader className="px-6 pt-6">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-emerald-900 text-white hover:bg-emerald-800">
                      {content.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{formatDate(content.publishedAt)} • {content.readTime}</span>
                  </div>
                  <AlertDialogTitle className="text-2xl leading-tight text-pretty">
                    {content.title}
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-base leading-7 text-pretty">
                    {content.preview}
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <ScrollArea className="min-h-0 flex-1 px-6">
                  <div className="space-y-5 pb-6 pt-2 text-sm leading-7 text-foreground/85">
                    {content.content.split("\n\n").map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    <div className="rounded-3xl border border-emerald-900/10 bg-emerald-950/5 p-5 dark:border-white/10 dark:bg-white/5">
                      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                        <ShieldCheck className="size-4 text-emerald-700 dark:text-emerald-300" />
                        Pontos práticos desta leitura
                      </div>
                      <ul className="space-y-2">
                        {content.insights.map((insight) => (
                          <li key={insight} className="flex gap-2">
                            <Scale className="mt-1 size-4 shrink-0 text-emerald-700 dark:text-emerald-300" />
                            <span>{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollArea>

                <AlertDialogFooter className="border-t border-white/10 px-6 py-5 dark:border-white/5">
                  <AlertDialogCancel className="rounded-2xl border-emerald-900/10 bg-background hover:bg-muted">
                    Fechar
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        )
      })}
    </div>
  )
}
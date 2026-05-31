"use client"

import { JSX } from "react"
import { useTheme } from "next-themes"
import { Monitor, MoonStar, SunMedium } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

type ThemeMode = "light" | "dark" | "system"

const options: Array<{
  value: ThemeMode
  label: string
  icon: typeof SunMedium
}> = [
  { value: "light", label: "Modo claro", icon: SunMedium },
  { value: "dark", label: "Modo escuro", icon: MoonStar },
  { value: "system", label: "Sistema", icon: Monitor },
]

export function ModeSelect(): JSX.Element {
  const { theme, setTheme } = useTheme()
  const selectedValue = (theme as ThemeMode | undefined) ?? "system"
  const selectedOption = options.find((option) => option.value === selectedValue) ?? options[2]
  const SelectedIcon = selectedOption.icon

  return (
    <Select value={selectedValue} onValueChange={(value) => setTheme(value as ThemeMode)}>
      <SelectTrigger
        className={cn(
          "h-10 min-w-44 rounded-full border border-white/12 bg-white/6 px-4 text-emerald-50 shadow-none",
          "backdrop-blur-md transition-colors duration-300 hover:bg-white/10 focus-visible:border-white/20 focus-visible:ring-white/15",
          "data-placeholder:text-emerald-50/72 [&_svg]:text-emerald-100"
        )}
      >
        <SelectValue>
          <span className="flex items-center gap-2">
            <SelectedIcon className="size-4" />
            <span>{selectedOption.label}</span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="rounded-3xl border border-emerald-950/10 bg-white/96 text-emerald-950 shadow-2xl ring-1 ring-emerald-950/8 backdrop-blur-xl dark:border-white/10 dark:bg-emerald-950/96 dark:text-emerald-50 dark:ring-white/8">
        {options.map((option) => {
          const Icon = option.icon
          return (
            <SelectItem
              key={option.value}
              value={option.value}
              className="rounded-2xl px-3 py-2 text-emerald-900 focus:bg-emerald-950/6 focus:text-emerald-950 dark:text-emerald-50 dark:focus:bg-white/10 dark:focus:text-white"
            >
              <span className="flex items-center gap-2">
                <Icon className="size-4 text-emerald-700 dark:text-emerald-100" />
                <span>{option.label}</span>
              </span>
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
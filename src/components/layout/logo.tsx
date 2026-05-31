import React, { ComponentPropsWithoutRef, JSX } from "react"
import { LibraryBig } from "lucide-react"
import { cn } from "@/lib/utils"

const name: string = "oliveira"

type LogoSizes = "sm" | "md" | "lg"

interface LogoParams extends ComponentPropsWithoutRef<"h1"> {
  size?: LogoSizes
  className?: string
}

export default function Logo({ size = "md", className, ...props }: LogoParams): JSX.Element {
  return (
    <h1
      className={cn(
        className,
        size === "sm" && "text-lg",
        size === "md" && "text-xl",
        size === "lg" && "text-3xl",
        "font-semibold uppercase tracking-widest text-transparent bg-clip-text flex items-center gap-1.5",
        "bg-emerald-900 dark:bg-emerald-400"
      )}
      {...props}
    >
      <LibraryBig
        size={size === "sm" ? 15 : size === "md" ? 20 : 30}
        className="text-emerald-900 dark:text-emerald-400"
      />
      {name}
    </h1>
  )
}
"use client"

import { JSX } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Check, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { NavLink } from "./navbar-links"

interface NavBarMobileMenuProps {
  links: NavLink[]
  initialPathname: string
}

function normalizePathname(pathname: string): string {
  if (pathname === "/") return "/"
  return pathname.replace(/\/+$/, "")
}

export default function NavBarMobileMenu({ links, initialPathname }: NavBarMobileMenuProps): JSX.Element {
  const pathname = usePathname()
  const currentPathname = normalizePathname(pathname ?? initialPathname)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-10 text-emerald-900 hover:bg-emerald-900 hover:text-white dark:text-white dark:hover:bg-emerald-950"
          aria-label="Abrir menu de navegação"
        >
          <Menu className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="w-64 min-w-64 p-2">
        {links.map((link) => {
          const isActive = currentPathname === normalizePathname(link.href)

          return (
            <DropdownMenuItem
              key={link.href}
              asChild
              className={cn(
                "rounded-xl px-3 py-2 text-sm",
                isActive && "bg-emerald-900 text-white focus:bg-emerald-900 focus:text-white dark:bg-emerald-800 dark:focus:bg-emerald-800"
              )}
            >
              <Link href={link.href} aria-current={isActive ? "page" : undefined} className="flex items-center justify-between gap-3">
                <span>{link.label}</span>
                {isActive ? <Check className="size-4" /> : null}
              </Link>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
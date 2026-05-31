"use client"
import { ComponentPropsWithoutRef, JSX } from "react"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export interface NavLink {
  href: string
  label: string
}

interface NavBarLinksParams {
  links: NavLink[]
  initialPathname: string
}

function normalizePathname(pathname: string): string {
  if (pathname === "/") return "/"
  return pathname.replace(/\/+$/, "")
}

interface NavBarLinkParams extends ComponentPropsWithoutRef<"a"> {
  href: string
  label: string
  isActive?: boolean
}

function NavBarLink({ href, label, isActive = false, ...props }: NavBarLinkParams): JSX.Element {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      {...props}
    >
      <Button
        variant="ghost"
        className={cn(
          "h-10 whitespace-nowrap px-4 text-sm font-normal transition-colors duration-300 hover:bg-emerald-900 hover:text-white text-emerald-900 dark:text-white dark:hover:bg-emerald-950 dark:hover:text-white",
          isActive && "border-transparent border-b-2 border-b-emerald-900 dark:border-b-emerald-400"
        )}
      >
        {label}
      </Button>
    </Link>
  )
}

export default function NavBarLinks({ links, initialPathname }: NavBarLinksParams): JSX.Element {
  const pathname = usePathname()
  const currentPathname = normalizePathname(pathname ?? initialPathname)

  return (
    <>
      {links.map((link) => (
        <NavBarLink
          key={link.href}
          href={link.href}
          label={link.label}
          isActive={currentPathname === normalizePathname(link.href)}
        />
      ))}
    </>
  )
}

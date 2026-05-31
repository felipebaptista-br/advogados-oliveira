import { ComponentPropsWithoutRef, JSX, ReactNode } from "react"
import { headers } from "next/headers"
import { cn } from "@/lib/utils"
import Logo from "./logo"
import NavBarLinks, { NavLink } from "./navbar-links"
import NavBarMobileMenu from "./navbar-mobile-menu"

interface NavParams extends ComponentPropsWithoutRef<"nav"> {
  children?: ReactNode
  className?: string
}

function normalizePathname(pathname: string): string {
  if (pathname === "/") return "/"
  return pathname.replace(/\/+$/, "")
}

const NAV_LINKS: NavLink[] = [
  {
    href: "/",
    label: "Página Inicial"
  },
  {
    href: "/about",
    label: "Sobre o Escritório"
  },
  {
    href: "/blogs-and-articles",
    label: "Blogs e Artigos"
  },
  {
    href: "/team",
    label: "Equipe"
  },
  {
    href: "/contact",
    label: "Contato"
  }
]

export default async function NavBar({ ...props }: NavParams): Promise<JSX.Element> {
  const requestHeaders = await headers()
  const currentPathname = normalizePathname(requestHeaders.get("x-pathname") ?? "/")

  return (
    <NavBarProvider
      {...props}
    >
      <Logo />
      <div
        className={cn(
          "h-full w-auto flex items-center"
        )}
      >
        <div className="hidden h-full items-center gap-2 lg:flex">
          <NavBarLinks links={NAV_LINKS} initialPathname={currentPathname} />
        </div>
        <div className="flex items-center lg:hidden">
          <NavBarMobileMenu links={NAV_LINKS} initialPathname={currentPathname} />
        </div>
      </div>
    </NavBarProvider>
  )
}

export function NavBarProvider({ children, className, ...props }: NavParams): JSX.Element {
  return (
    <nav
      className={cn(
        className,
        "fixed z-50 top-0 left-0 right-0 h-20 w-full px-4 sm:px-6 md:px-10 lg:px-20 flex items-center justify-between",
        "bg-white dark:bg-zinc-950"
      )}
      {...props}
    >
      {children}
    </nav>
  )
}

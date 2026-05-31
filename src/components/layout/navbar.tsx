import { ComponentPropsWithoutRef, JSX, ReactNode } from "react"
import { headers } from "next/headers"
import { cn } from "@/lib/utils"
import Logo from "./logo"
import NavBarLinks, { NavLink } from "./navbar-links"

interface NavParams extends ComponentPropsWithoutRef<"nav"> {
  children?: ReactNode
  className?: string
}

function normalizePathname(pathname: string): string {
  if (pathname === "/") return "/"
  return pathname.replace(/\/+$/, "")
}

export default async function NavBar({ ...props }: NavParams): Promise<JSX.Element> {
  const requestHeaders = await headers()
  const currentPathname = normalizePathname(requestHeaders.get("x-pathname") ?? "/")

  const links: NavLink[] = [{
    href: "/",
    label: "Página Inicial"
  }, {
    href: "/about",
    label: "Sobre o Escritório"
  }, {
    href: "/blogs-and-articles",
    label: "Blogs e Artigos"
  }, {
    href: "/team",
    label: "Equipe"
  }, {
    href: "/contact",
    label: "Contato"
  }]

  return (
    <NavBarProvider
      {...props}
    >
      <Logo />
      <div
        className={cn(
          "w-auto h-full flex items-center gap-4"
        )}
      >
        <NavBarLinks links={links} initialPathname={currentPathname} />
      </div>
    </NavBarProvider>
  )
}

export function NavBarProvider({ children, className, ...props }: NavParams): JSX.Element {
  return (
    <nav
      className={cn(
        className,
        "fixed z-50 top-0 left-0 right-0 w-screen h-20 px-20 flex items-center justify-between",
        "bg-white dark:bg-zinc-950"
      )}
      {...props}
    >
      {children}
    </nav>
  )
}

"use client"

import * as React from "react"

type ThemeMode = "light" | "dark" | "system"

type ResolvedTheme = "light" | "dark"

type ThemeContextValue = {
  theme: ThemeMode
  resolvedTheme: ResolvedTheme
  setTheme: (theme: ThemeMode) => void
}

const THEME_STORAGE_KEY = "theme"

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") {
    return "light"
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function resolveTheme(theme: ThemeMode): ResolvedTheme {
  if (theme === "system") {
    return getSystemTheme()
  }

  return theme
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<"div">) {
  const [theme, setThemeState] = React.useState<ThemeMode>("system")
  const [resolvedTheme, setResolvedTheme] = React.useState<ResolvedTheme>("light")

  React.useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null
    const initialTheme: ThemeMode = storedTheme ?? "system"

    setThemeState(initialTheme)
    setResolvedTheme(resolveTheme(initialTheme))
  }, [])

  React.useEffect(() => {
    const nextResolvedTheme = resolveTheme(theme)
    setResolvedTheme(nextResolvedTheme)

    document.documentElement.classList.toggle("dark", nextResolvedTheme === "dark")
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)

    if (theme !== "system") {
      return
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      const currentResolvedTheme = getSystemTheme()
      setResolvedTheme(currentResolvedTheme)
      document.documentElement.classList.toggle("dark", currentResolvedTheme === "dark")
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme: setThemeState,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}
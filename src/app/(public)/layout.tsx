import { Geist, Geist_Mono, Roboto, Roboto_Slab } from "next/font/google"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { ScrollArea } from "@/components/ui/scroll-area"
import "../globals.css"
import NavBar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"

const robotoSlabHeading = Roboto_Slab({ subsets: ['latin'], variable: '--font-heading' })

const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Advogados Oliveira",
  description: "Advogados Oliveira é um escritório de advocacia especializado em direito civil, empresarial e trabalhista, oferecendo soluções jurídicas personalizadas para nossos clientes. Com uma equipe experiente e dedicada, estamos comprometidos em fornecer serviços jurídicos de alta qualidade e resultados eficazes."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "font-sans",
        "antialiased",
        roboto.variable,
        geistMono.variable,
        geistSans.variable,
        robotoSlabHeading.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollArea className="w-full h-full">
            <NavBar />
            <div className="w-full h-full flex-1 pt-20">
              {children}
            </div>
            <Footer />
          </ScrollArea>
        </ThemeProvider>
      </body>
    </html>
  );
}

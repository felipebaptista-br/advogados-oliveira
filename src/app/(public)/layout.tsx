import { Geist, Geist_Mono, Roboto, Roboto_Slab } from "next/font/google"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { ScrollArea } from "@/components/ui/scroll-area"
import "../globals.css"
import NavBar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/lib/seo"

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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "advocacia",
    "direito civil",
    "direito empresarial",
    "direito trabalhista",
    "escritório de advocacia",
    "consultoria jurídica",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
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
        <ThemeProvider>
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

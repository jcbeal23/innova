import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "🚀 Innovación Tech Consulting | 💡 Expertos en Transformación Digital",
  description:
    "🔍 Consultoría especializada en innovación tecnológica. Transformamos empresas con soluciones digitales avanzadas para impulsar su crecimiento y competitividad.",
  keywords:
    "innovación tecnológica, consultoría digital, transformación digital, big data, desarrollo software, aplicaciones móviles, inteligencia artificial, blockchain",
  openGraph: {
    title: "🚀 Innovación Tech Consulting | 💡 Expertos en Transformación Digital",
    description:
      "🔍 Consultoría especializada en innovación tecnológica. Transformamos empresas con soluciones digitales avanzadas.",
    siteName: "Innovación Tech Consulting",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        width: 2070,
        height: 1380,
        alt: "Innovación Tech Consulting - Soluciones tecnológicas avanzadas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🚀 Innovación Tech Consulting | 💡 Expertos en Transformación Digital",
    description: "🔍 Consultoría especializada en innovación tecnológica para empresas líderes.",
    images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"],
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
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Innovación Tech Consulting" }],
  generator: "Next.js",
  applicationName: "Innovación Tech Consulting",
  referrer: "origin-when-cross-origin",
  creator: "Innovación Tech Consulting",
  publisher: "Innovación Tech Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Search Console Verification - Añadir tu código real cuando lo tengas */}
        <meta name="google-site-verification" content="tu-codigo-de-verificacion" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

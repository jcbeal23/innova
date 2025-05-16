import Link from "next/link"
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import BlogPreview from "@/components/blog-preview"
import ServicesSection from "@/components/services-section"
import HeroSection from "@/components/hero-section"
import Script from "next/script"

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="font-bold text-xl">
                🚀 Innovación Tech Consulting
              </Link>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link href="#servicios" className="text-sm font-medium transition-colors hover:text-primary">
                🛠️ Servicios
              </Link>
              <Link href="#nosotros" className="text-sm font-medium transition-colors hover:text-primary">
                👥 Nosotros
              </Link>
              <Link href="#blog" className="text-sm font-medium transition-colors hover:text-primary">
                📝 Blog
              </Link>
              <Link href="#contacto" className="text-sm font-medium transition-colors hover:text-primary">
                📞 Contacto
              </Link>
            </nav>
            <Button asChild className="hidden md:inline-flex">
              <Link href="#contacto">📩 Contáctanos</Link>
            </Button>
          </div>
        </header>
        <main className="flex-1">
          <HeroSection />

          <section id="propuesta" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Nuestra Propuesta
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    💡 Innovación Tecnológica a tu Alcance
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Transformamos ideas en soluciones tecnológicas que impulsan el crecimiento de tu negocio y te
                    posicionan como líder en tu sector.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="rounded-full bg-primary/10 p-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">🏆 Experiencia Comprobada</h3>
                  <p className="text-center text-muted-foreground">
                    Más de 10 años transformando empresas a través de la tecnología con resultados excepcionales.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="rounded-full bg-primary/10 p-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">🎯 Soluciones Personalizadas</h3>
                  <p className="text-center text-muted-foreground">
                    Desarrollamos estrategias adaptadas a las necesidades específicas de tu empresa para maximizar
                    resultados.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="rounded-full bg-primary/10 p-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">🔍 Tecnología de Vanguardia</h3>
                  <p className="text-center text-muted-foreground">
                    Implementamos las últimas tendencias tecnológicas para maximizar resultados y mantener tu
                    competitividad.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <ServicesSection />

          <BlogPreview />

          <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    📱 ¿Listo para transformar tu negocio?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos y
                    superar a tu competencia.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    🗓️ Agendar una Consulta
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    📊 Ver Casos de Éxito
                  </Link>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <Phone className="mt-1 h-5 w-5 text-primary" />
                    <div className="grid gap-1">
                      <h3 className="text-base font-medium">📞 Teléfono</h3>
                      <p className="text-sm text-muted-foreground">+34 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="mt-1 h-5 w-5 text-primary" />
                    <div className="grid gap-1">
                      <h3 className="text-base font-medium">✉️ Email</h3>
                      <p className="text-sm text-muted-foreground">contacto@innovaciontech.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <div className="grid gap-1">
                      <h3 className="text-base font-medium">📍 Ubicación</h3>
                      <p className="text-sm text-muted-foreground">Calle Innovación 123, Madrid</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </section>
        </main>
        <footer className="w-full border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 Innovación Tech Consulting. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                📄 Términos
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                🔒 Privacidad
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                🍪 Cookies
              </Link>
            </div>
          </div>
        </footer>

        {/* Datos estructurados para SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Innovación Tech Consulting",
              description:
                "Consultoría de innovación tecnológica especializada en transformación digital, big data, desarrollo de software y aplicaciones móviles.",
              logo: "/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle Innovación 123",
                addressLocality: "Madrid",
                postalCode: "28001",
                addressCountry: "ES",
              },
              telephone: "+34123456789",
              email: "contacto@innovaciontech.com",
              openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00",
              sameAs: [
                "https://www.facebook.com/innovaciontech",
                "https://www.linkedin.com/company/innovaciontech",
                "https://twitter.com/innovaciontech",
              ],
              priceRange: "€€€",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 40.4168,
                  longitude: -3.7038,
                },
                geoRadius: "50000",
              },
              // Añadido para mejorar la indexación en Google
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "/",
              },
              // Añadido para mejorar la indexación en Google
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Innovación Tecnológica",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Transformación Digital",
                      description:
                        "Implementamos estrategias para digitalizar procesos y optimizar operaciones empresariales.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Big Data & Analytics",
                      description: "Convertimos datos en insights accionables para la toma de decisiones estratégicas.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Desarrollo de Software",
                      description:
                        "Creamos soluciones personalizadas que se adaptan a las necesidades específicas de tu negocio.",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Sitemap para Google */}
        <Script
          id="google-sitemap"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                // Crear un sitemap dinámico para Google
                const sitemapData = {
                  hostname: window.location.origin,
                  urls: [
                    { url: '/', changefreq: 'weekly', priority: 1.0 },
                    { url: '/servicios', changefreq: 'monthly', priority: 0.8 },
                    { url: '/blog', changefreq: 'weekly', priority: 0.7 },
                    { url: '/contacto', changefreq: 'monthly', priority: 0.6 },
                    { url: '/nosotros', changefreq: 'monthly', priority: 0.5 }
                  ]
                };
                
                // Esto es solo para fines de depuración, en producción usarías un archivo sitemap.xml real
                console.log('Sitemap data ready for Google indexing:', sitemapData);
              }
            `,
          }}
        />
      </div>
    </>
  )
}

"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const blogPosts = [
    {
      title: "🤖 La Inteligencia Artificial en la Industria Moderna",
      description:
        "Descubre cómo la IA está transformando los procesos industriales y optimizando la producción en diversos sectores empresariales.",
      date: "12 Abril, 2024",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "🔗 Blockchain: Más Allá de las Criptomonedas",
      description:
        "Aplicaciones prácticas de la tecnología blockchain en diferentes sectores empresariales y cómo está revolucionando la seguridad de datos.",
      date: "5 Abril, 2024",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "🏠 El Futuro del Trabajo Remoto",
      description:
        "Herramientas y estrategias para implementar un modelo de trabajo híbrido exitoso que aumente la productividad y satisfacción laboral.",
      date: "28 Marzo, 2024",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Blog Corporativo
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">📝 Últimas Publicaciones</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mantente al día con las últimas tendencias en innovación tecnológica y descubre insights valiosos para tu
              negocio.
            </p>
          </div>
        </div>
        <div ref={ref} className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                  },
                },
              }}
            >
              <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.alt || `Imagen ilustrativa para el artículo: ${post.title}`}
                  width={post.imageWidth || 600}
                  height={post.imageHeight || 338}
                  className="aspect-video w-full object-cover"
                />
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-1">{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="line-clamp-2 text-muted-foreground">{post.description}</p>
                </CardContent>
                <CardFooter className="p-4">
                  <Button asChild variant="ghost" className="w-full justify-center gap-1">
                    <Link href="#">
                      Leer más <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href="#">
              Ver todas las publicaciones <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

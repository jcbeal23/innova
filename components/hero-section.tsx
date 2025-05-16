"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2" ref={ref}>
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                initial="hidden"
                animate={mainControls}
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25 } },
                }}
              >
                🚀 Transformamos el Futuro con Innovación Tecnológica
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                initial="hidden"
                animate={mainControls}
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
                }}
              >
                Somos expertos en consultoría tecnológica, ayudando a empresas a implementar soluciones innovadoras que
                impulsan su crecimiento y competitividad en la era digital.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial="hidden"
              animate={mainControls}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.75 } },
              }}
            >
              <Button asChild size="lg">
                <Link href="#contacto">
                  Solicitar Consultoría <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#servicios">Explorar Servicios</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              alt="Equipo de Innovación Tech Consulting trabajando en soluciones tecnológicas avanzadas"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg"
              height="550"
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
              width="800"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

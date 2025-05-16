"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Code, Database, LineChart, Smartphone, Zap, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()
  const imageRef = useRef(null)
  const imageControls = useAnimation()
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
    if (isImageInView) {
      imageControls.start("visible")
    }
  }, [isInView, controls, isImageInView, imageControls])

  const services = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "⚡ Transformación Digital",
      description: "Implementamos estrategias para digitalizar procesos y optimizar operaciones empresariales.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "📊 Big Data & Analytics",
      description: "Convertimos datos en insights accionables para la toma de decisiones estratégicas.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "💻 Desarrollo de Software",
      description: "Creamos soluciones personalizadas que se adaptan a las necesidades específicas de tu negocio.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "📱 Aplicaciones Móviles",
      description:
        "Desarrollamos apps intuitivas y funcionales para iOS y Android con experiencias de usuario excepcionales.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "📈 Consultoría Estratégica",
      description: "Asesoramos en la implementación de tecnologías emergentes para maximizar resultados y ROI.",
    },
  ]

  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Nuestros Servicios
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">🛠️ Soluciones Tecnológicas Integrales</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos un amplio catálogo de servicios diseñados para impulsar la innovación en tu empresa y mantenerte
              a la vanguardia del mercado.
            </p>
          </div>
        </div>
        <div ref={ref} className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
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
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="rounded-full bg-primary/10 p-2">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8 items-center" ref={imageRef}>
          <motion.div
            initial="hidden"
            animate={imageControls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">🔧 Tecnología que Transforma Negocios</h3>
            <p className="text-muted-foreground">
              Nuestro equipo de expertos trabaja con las últimas tecnologías para ofrecer soluciones que marcan la
              diferencia en tu industria y te posicionan como líder del sector.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>✅ Soluciones escalables y adaptables</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>✅ Tecnologías de vanguardia</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>✅ Enfoque centrado en resultados</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={imageControls}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
              alt="Equipo de tecnología de Innovación Tech Consulting colaborando en proyectos innovadores"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

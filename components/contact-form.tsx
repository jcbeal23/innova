"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Formulario enviado",
      description: "Nos pondremos en contacto contigo a la brevedad.",
    })

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-lg border bg-card p-6 shadow-sm"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre completo</Label>
          <Input
            id="name"
            name="name"
            placeholder="Tu nombre"
            required
            value={formData.name}
            onChange={handleChange}
            aria-label="Nombre completo"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            name="email"
            placeholder="tu@email.com"
            required
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-label="Correo electrónico"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Empresa</Label>
          <Input
            id="company"
            name="company"
            placeholder="Nombre de tu empresa"
            value={formData.company}
            onChange={handleChange}
            aria-label="Nombre de la empresa"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="¿Cómo podemos ayudarte?"
            required
            className="min-h-[120px]"
            value={formData.message}
            onChange={handleChange}
            aria-label="Mensaje de consulta"
          />
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "📨 Enviar mensaje"}
        </Button>
      </form>
    </motion.div>
  )
}

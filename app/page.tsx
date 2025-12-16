"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import About from "@/components/about"
import Footer from "@/components/footer"
import ImageSlider from "@/components/image-slider"
import Partners from "@/components/partners"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ImageSlider />
      <Projects />
      <About />
      <Partners />
      <Footer />
    </main>
  )
}

"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "Community",
    subtitle: "Building a thriving tech community",
    image: "/home/1.jpg",
  },
  {
    title: "Innovation",
    subtitle: "Creating groundbreaking projects",
    image: "/home/4.jpg",
  },
  {
    title: "Learning",
    subtitle: "Sharing knowledge and expertise",
    image: "/home/3.jpg",
  },
]

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="py-20 bg-card/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Slider Container */}
          <div className="relative h-96 lg:h-150  md:h-96 sm:h-96 rounded-2xl overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">{slide.title}</h3>
                    <p className="text-gray-200">{slide.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-accent/20 hover:bg-accent/40 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-accent" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-accent/20 hover:bg-accent/40 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-accent" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-8 bg-accent" : "w-2 bg-accent/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

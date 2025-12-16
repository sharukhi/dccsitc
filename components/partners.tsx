"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const partners = [

  { id: 1, name: "bsrs", image: "/partners/bsrs.png" },
  { id: 2, name: "mist", image: "/partners/mist.webp" },
  { id: 3, name: "nrc", image: "/partners/nrc.webp" },
  { id: 4, name: "wb", image: "/partners/wb.webp" },
  { id: 5, name: "acc", image: "/partners/acc.webp" },
]

export default function Partners() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [autoScroll, setAutoScroll] = useState(true)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)

    if (autoScroll && scrollContainerRef.current) {
      autoScrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current

          // Reset to start if at end
          if (scrollLeft >= scrollWidth - clientWidth - 10) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" })
          } else {
            scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" })
          }
        }
      }, 3000)
    }

    return () => {
      window.removeEventListener("resize", checkScroll)
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [autoScroll])

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setAutoScroll(false)
      setTimeout(() => {
        checkScroll()
        setAutoScroll(true)
      }, 500)
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Esteemed Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            DCCSIT Club has partnered with leading institutions and organizations in various fields and initiatives,
            promoting innovation, creativity, and excellence
          </p>
        </div>

        {/* Partner Carousel */}
        <div className="relative group">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-accent hover:bg-accent/90 transition-all p-2 rounded-full shadow-lg ${
              !canScrollLeft ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="w-6 h-6 text-accent-foreground" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-16"
          >
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex-shrink-0 w-56 h-40 bg-card border border-border rounded-lg flex flex-col items-center justify-center gap-4 hover:border-accent transition-colors cursor-pointer group/card"
              >
                <img src={partner.image} alt={partner.name} className="h-20" />
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-accent hover:bg-accent/90 transition-all p-2 rounded-full shadow-lg ${
              !canScrollRight ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            disabled={!canScrollRight}
          >
            <ChevronRight className="w-6 h-6 text-accent-foreground" />
          </button>
        </div>

        {/* Hide scrollbar with CSS */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  )
}

"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface Album {
  id: number
  title: string
  slug: string
  cover: string
  photoCount: number
  photos: string[]
}

export default function Gallery() {
  const [albums, setAlbums] = useState<Album[]>([])
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await import("@/data/gallery.json")
        setAlbums(data.albums || [])
      } catch (error) {
        console.error("Error loading gallery:", error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  const openAlbum = (album: Album) => {
    setSelectedAlbum(album)
    setCurrentPhotoIndex(0)
  }

  const closeAlbum = () => {
    setSelectedAlbum(null)
    setCurrentPhotoIndex(0)
  }

  const nextPhoto = () => {
    if (selectedAlbum) {
      setCurrentPhotoIndex((prev) => (prev + 1) % selectedAlbum.photos.length)
    }
  }

  const prevPhoto = () => {
    if (selectedAlbum) {
      setCurrentPhotoIndex((prev) => (prev - 1 + selectedAlbum.photos.length) % selectedAlbum.photos.length)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <p className="text-muted-foreground">Loading gallery...</p>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">

     
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-balance">Registrations are Closed</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're no longer accepting registrations for the current cycle. Stay tuned for future opportunities to join
            the Dhaka Commerce College Science & IT Club!
          </p>
        </div>  
      </section>
         

      <Footer />
    </main>
  )
}

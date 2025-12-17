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
      <section className="py-10 lg:py-50 md:py-35 sm:py-20 bg-gradient-to-b from-card/30 to-background">

     
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-balance">Page Under Maintenance</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We are currently working on updating this page. Please check back!
          </p>
        </div>  
      </section>
         {/*  
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-balance">Photo Gallery</h1>
            <p className="text-muted-foreground text-lg">Memories from our events and activities</p>
          </div>

     
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {albums.map((album) => (
              <div key={album.id} onClick={() => openAlbum(album)} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-video">
                  <img
                    src={album.cover || "/placeholder.svg"}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white text-sm font-semibold">{album.photoCount} Photos</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{album.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedAlbum && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            
            <button
              onClick={closeAlbum}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
              <img
                src={selectedAlbum.photos[currentPhotoIndex] || "/placeholder.svg"}
                alt={`Photo ${currentPhotoIndex + 1}`}
                className="w-full h-full object-cover"
              />

              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-accent/80 hover:bg-accent text-accent-foreground p-3 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-accent/80 hover:bg-accent text-accent-foreground p-3 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                {currentPhotoIndex + 1} / {selectedAlbum.photos.length}
              </div>
            </div>

            <div className="text-center mt-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{selectedAlbum.title}</h2>
              <p className="text-muted-foreground text-sm">
                Browse through {selectedAlbum.photos.length} photos from this event
              </p>
            </div>

            <div className="mt-6 flex gap-2 overflow-x-auto pb-2 px-2">
              {selectedAlbum.photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all border-2 ${
                    index === currentPhotoIndex
                      ? "border-accent scale-105"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={photo || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )} */}

      <Footer />
    </main>
  )
}

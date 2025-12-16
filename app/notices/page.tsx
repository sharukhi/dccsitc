"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, Pin, Search } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useMemo } from "react"

interface Notice {
  id: number
  slug: string
  title: string
  summary: string
  content: string
  date: string
  isPinned: boolean
  category: string
}

export default function Notices() {
  const [notices, setNotices] = useState<Notice[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await import("@/data/notices.json")
        setNotices(data.notices || [])
      } catch (error) {
        console.error("Error loading notices:", error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  const filteredNotices = useMemo(() => {
    let filtered = notices

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (n) =>
          n.title.toLowerCase().includes(query) ||
          n.summary.toLowerCase().includes(query) ||
          n.content.toLowerCase().includes(query),
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter((n) => n.category === selectedCategory)
    }

    return filtered
  }, [notices, searchQuery, selectedCategory])

  const pinnedNotices = filteredNotices.filter((n) => n.isPinned)
  const regularNotices = filteredNotices.filter((n) => !n.isPinned)

  const categories = Array.from(new Set(notices.map((n) => n.category)))

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Event: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      Workshop: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      Meetup: "bg-green-500/10 text-green-400 border-green-500/20",
      Project: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      Seminar: "bg-pink-500/10 text-pink-400 border-pink-500/20",
      Announcement: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    }
    return colors[category] || "bg-accent/10 text-accent border-accent/20"
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-muted-foreground">Loading notices...</p>
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">Notices & Updates</h1>
            <p className="text-muted-foreground text-lg">Stay informed about club events and announcements</p>
          </div>

          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search notices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === null
                    ? "bg-accent text-background"
                    : "bg-card border border-border text-foreground hover:border-accent"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-accent text-background"
                      : "bg-card border border-border text-foreground hover:border-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Pinned Notices */}
          {pinnedNotices.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Pin className="w-5 h-5 text-accent" />
                <h2 className="text-xl font-bold">Important Announcements</h2>
              </div>
              <div className="space-y-4 ">
                {pinnedNotices.map((notice) => (
                  <Link key={notice.id} href={`/notices/${notice.slug}`}>
                    <div className="bg-accent/5 mb-4 border-2 border-accent rounded-lg p-6 hover:bg-accent/10 transition-all cursor-pointer group">
                      <div className="flex items-start gap-4">
                        <Pin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                            {notice.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">{notice.summary}</p>
                          <div className="flex items-center gap-4 flex-wrap">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {notice.date}
                            </div>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(notice.category)}`}
                            >
                              {notice.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Regular Notices */}
          <div>
            <h2 className="text-xl font-bold mb-6">
              {searchQuery || selectedCategory ? "Search Results" : "All Notices"}
            </h2>
            {regularNotices.length === 0 ? (
              <div className="bg-card border border-border rounded-lg p-12 text-center">
                <p className="text-muted-foreground">No notices found matching your search.</p>
              </div>
            ) : (
              <div className="space-y-3 ">
                {regularNotices.map((notice) => (
                  <Link key={notice.id} href={`/notices/${notice.slug}`}>
                    <div className="bg-card mb-4 border border-border rounded-lg p-5 hover:border-accent transition-all group cursor-pointer">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                            {notice.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">{notice.summary}</p>
                          <div className="flex items-center gap-4 flex-wrap">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {notice.date}
                            </div>
                            <span
                              className={`px-2 py-1 rounded text-xs font-semibold border ${getCategoryColor(notice.category)}`}
                            >
                              {notice.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

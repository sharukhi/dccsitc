"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Award, Trophy, Star, Target } from "lucide-react"
import { useEffect, useState } from "react"

interface Achievement {
  id: number
  title: string
  description: string
  icon: string
  category: string
  date: string
}

const iconMap: Record<string, any> = {
  Trophy,
  Award,
  Star,
  Target,
}

export default function Achievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await import("@/data/achievements.json")
        setAchievements(data.achievements || [])
      } catch (error) {
        console.error("Error loading achievements:", error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <p className="text-muted-foreground">Loading achievements...</p>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const categories = Array.from(new Set(achievements.map((a) => a.category)))

  return (

    <main className="min-h-screen bg-background">
      <Header />

       {/* Achievements Grid */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-balance">Recent Achievements</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Celebrating the milestones and successes of DCC Science & IT Club
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => {
              const IconComponent = iconMap[achievement.icon] || Trophy
              return (
                <div
                  key={achievement.id}
                  className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-accent mb-1 uppercase">{achievement.category}</p>
                      <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-foreground">{achievement.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

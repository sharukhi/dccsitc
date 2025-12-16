"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Users, Target, Zap, BookOpen } from "lucide-react"

export default function AboutClub() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We foster creative thinking and encourage our members to explore new technologies and ideas.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive and collaborative environment where everyone can learn and grow together.",
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We strive for technical excellence in everything we do, from projects to events and initiatives.",
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Continuous learning and skill development is at the heart of our club's mission.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">About DCC Science & IT Club</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Empowering students to excel in science and technology through innovation, collaboration, and hands-on
              learning.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-accent">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Dhaka Commerce College Science & IT Club is dedicated to fostering innovation, collaboration, and
                technical excellence among students. We provide a platform for aspiring tech enthusiasts and innovators
                to explore cutting-edge technologies, work on real-world projects, and build a supportive community of
                learners.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to equip students with the skills, knowledge, and confidence needed to excel in the
                rapidly evolving world of science and technology.
              </p>
            </div>
            <div>
            
                <img className="bg-accent/10 border border-accent/20 rounded-xl" src="/home/dccsitc_group_photo.webp" alt=""  />
          
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-accent">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            We envision a thriving community of tech-savvy innovators who are passionate about solving real-world
            problems through technology. We aspire to be recognized as the leading tech club in Dhaka Commerce College,
            fostering excellence, creativity, and meaningful contributions to society. Our ultimate goal is to prepare
            our members for successful careers in technology while building lifelong professional networks.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 hover:border-accent transition-colors group"
                >
                  <div className="p-4 bg-accent/10 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-card/30 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">Organize Events</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">→</span>
                  <span>Hackathons and coding competitions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">→</span>
                  <span>Workshops and seminars on emerging technologies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">→</span>
                  <span>Monthly meetups and networking sessions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">→</span>
                  <span>Guest lectures from industry professionals</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">Build Projects</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">→</span>
                  <span>Collaborative technical projects</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">→</span>
                  <span>Research initiatives and innovation labs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">→</span>
                  <span>Mentorship programs for junior members</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">→</span>
                  <span>Career development and professional growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Whether you're a beginner passionate about technology or an experienced developer, there's a place for you
            in our club. Connect with like-minded individuals, learn new skills, and contribute to exciting projects
            that make a difference.
          </p>
          <a href="/join">
          <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 text-lg">
            Become a Member
          </button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

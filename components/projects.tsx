"use client"

import { BookOpen, Bot, Code2, Palette, Cog,  Award } from "lucide-react"

const projects = [
  {
    title: "Robotics",
    description:
      "Designing and building intelligent machines using electronics, mechanics, and hands-on engineering skills.",
    icon: Bot,
    color: "text-accent",
  },
  {
    title: "Programming",
    description:
      "Developing logical thinking and coding skills by building software, applications, and digital solutions.",
    icon: Code2,
    color: "text-blue-400",
  },
  {
    title: "Project Display",
    description:
      "Presenting innovative science and technology projects that demonstrate practical problem-solving and creativity.",
    icon: Cog,
    color: "text-purple-400",
  },
  {
    title: "Wall Magazine",
    description:
      "Showcasing creative science writing, tech insights, and innovative ideas through visual and written expression.",
    icon: Palette,
    color: "text-cyan-400",
  },
  {
    title: "Scrapbook",
    description: "Documenting scientific curiosity, experiments, and ideas in a creative and organized visual format.",
    icon: BookOpen,
    color: "text-green-400",
  },
  {
    title: "Olympiad",
    description: "Preparing students for competitive science and math challenges through practice, strategy, and problem-solving.",
    icon: Award,
    color: "text-pink-400",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Segments</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We focus on diverse technology areas to create a complete and collaborative learning ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

                <div className="relative z-10">
                  <Icon className={`w-10 h-10 mb-4 ${project.color}`} />
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

export default function About() {
  return (
    <section id="about" className="py-20 bg-card/30 border-t border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">About DCC Science & IT Club</h2>
            <p className="text-muted-foreground text-lg">
              Empowering the next generation of tech leaders and innovators
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-accent">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Dhaka Commerce College Science & IT Club is dedicated to fostering innovation, collaboration, and
                technical excellence. We provide students with opportunities to explore cutting-edge technologies, work
                on real-world projects, and build a supportive community of learners and innovators.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-accent">What We Do</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Host workshops and seminars on emerging technologies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Organize hackathons and coding competitions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Build collaborative projects and research initiatives</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Connect students with industry mentors and professionals</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're a beginner or an experienced developer, there's a place for you in our club. Connect with
              like-minded individuals, learn new skills, and contribute to exciting projects.
            </p>
            <a href="/join">
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200">
              Become a Member
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

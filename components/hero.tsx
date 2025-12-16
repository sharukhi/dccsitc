"use client"



export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-card/30 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up space-y-6">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <span className="text-accent text-sm font-medium">Welcome to DCC Science & IT Club</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-balance">
            Innovation, <span className="text-accent">Technology</span> & Learning
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            We connect students with cutting-edge science projects, IT initiatives, and a vibrant community of
            innovators at Dhaka Commerce College.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">


<a href="/join"><button  className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 shadow-lg hover:shadow-xl">
              Join the Community
            </button></a>
          
            
          </div>
        </div>
      </div>
    </section>
  )
}

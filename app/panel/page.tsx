import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { getPanelMembers } from "@/lib/json-loader"

export default async function PanelPage() {
  const members = await getPanelMembers()

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-balance">Meet Our Panel</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The dedicated leaders and coordinators driving the DCC Science & IT Club
            </p>
          </div>

          {/* Panel Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <Link key={member.id} href={`/panel/${member.slug}`}>
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300 group cursor-pointer h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-square bg-card/50">
                    <img
                      src={member.photo || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">{member.name}</h3>
                    <p className="text-accent font-semibold text-sm mb-4">{member.designation}</p>

                    {/* View Profile Button */}
                    <div className="text-accent text-sm font-semibold group-hover:gap-2 transition-all">
                      View Profile →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

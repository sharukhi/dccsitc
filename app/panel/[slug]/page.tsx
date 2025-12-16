import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Mail, Linkedin, Github, ArrowLeft } from "lucide-react"
import { getPanelMembers, getMemberBySlug } from "@/lib/json-loader"

export async function generateStaticParams() {
  const members = await getPanelMembers()
  return members.map((member) => ({
    slug: member.slug,
  }))
}

export default async function MemberProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = await getMemberBySlug(slug)

  if (!member) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Member not found</h1>
            <Link href="/panel" className="text-accent hover:underline">
              Back to Panel Members
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const allMembers = await getPanelMembers()
  const otherMembers = allMembers.filter((m) => m.slug !== slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Back Link */}
      <section className="py-6 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/panel" className="flex items-center gap-2 text-accent hover:gap-3 transition-all w-fit">
            <ArrowLeft className="w-5 h-5" />
            Back to Panel
          </Link>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <img
                  src={member.photo || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2">{member.name}</h1>
              <p className="text-2xl text-accent font-semibold mb-6">{member.designation}</p>

             {/*/<p className="text-muted-foreground leading-relaxed text-lg mb-8">{member.bio}</p>/*/}


              {/* Contact & Social */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Get in Touch</h3>
                <div className="space-y-3">
                  <a
                    href={`mailto:${member.contact}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    {member.contact}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Panel Members 
      <section className="py-20 bg-card/30 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Other Panel Members</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherMembers.map((m) => (
              <Link key={m.slug} href={`/panel/${m.slug}`}>
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-colors cursor-pointer group">
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      src={m.photo || "/placeholder.svg"}
                      alt={m.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{m.name}</h3>
                    <p className="text-sm text-accent">{m.designation}</p>
                  </div>
                </div>
              </Link>
            ))}
            <Link href="/panel">
              <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-accent transition-colors cursor-pointer flex items-center justify-center">
                <div>
                  <p className="text-muted-foreground">View all</p>
                  <p className="text-accent font-semibold mt-2">panel members →</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
*/}
      <Footer />
    </main>
  )
}

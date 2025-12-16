import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { getNotices } from "@/lib/json-loader"
import { Calendar, ArrowLeft, Tag } from "lucide-react"
import { parseMarkdown } from "@/lib/markdown-parser"

export async function generateStaticParams() {
  const notices = await getNotices()
  return notices.map((notice) => ({
    slug: notice.slug,
  }))
}

async function getNoticeBySlug(slug: string) {
  const notices = await getNotices()
  return notices.find((n) => n.slug === slug)
}

export default async function NoticeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const notice = await getNoticeBySlug(slug)

  if (!notice) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Notice not found</h1>
            <Link href="/notices" className="text-accent hover:underline">
              Back to Notices
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Event: "bg-blue-500/10 text-blue-400",
      Workshop: "bg-purple-500/10 text-purple-400",
      Meetup: "bg-green-500/10 text-green-400",
      Project: "bg-orange-500/10 text-orange-400",
      Seminar: "bg-pink-500/10 text-pink-400",
      Announcement: "bg-yellow-500/10 text-yellow-400",
    }
    return colors[category] || "bg-accent/10 text-accent"
  }

  const htmlContent = parseMarkdown(notice.content)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Back Link */}
      <section className="py-6 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/notices" className="flex items-center gap-2 text-accent hover:gap-3 transition-all w-fit">
            <ArrowLeft className="w-5 h-5" />
            Back to Notices
          </Link>
        </div>
      </section>

      {/* Notice Detail */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{notice.title}</h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-5 h-5" />
                {notice.date}
              </div>
              <span
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(notice.category)}`}
              >
                <Tag className="w-4 h-4" />
                {notice.category}
              </span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </section>

      <Footer />
    </main>
  )
}

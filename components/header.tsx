"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src="/logo.webp" alt="Logo" />
            </div>
            <span className="hidden sm:inline font-semibold text-foreground">DCC Science & IT Club</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/achievements" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Achievements
            </Link>
            <Link href="/notices" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Notices
            </Link>
            <Link href="/gallery" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Gallery
            </Link>
            <Link href="/panel" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Panel Members
            </Link>
            <Link href="/about-club" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/achievements" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Achievements
            </Link>
            <Link href="/notices" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Notices
            </Link>
            <Link href="/gallery" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Gallery
            </Link>
            <Link href="/panel" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Panel Members
            </Link>
            <Link href="/about-club" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

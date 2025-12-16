"use client"

import { Mail, Linkedin, Instagram, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">DCC Science & IT Club</h3>
            <p className="text-muted-foreground text-sm">
              Building a thriving ecosystem of innovation and technology at Dhaka Commerce College.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/notices" className="hover:text-accent transition-colors">
                  Notices
                </a>
              </li>
              <li>
                <a href="/about-club" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/panel" className="hover:text-accent transition-colors">
                  Panel Members
                </a>
              </li>
              <li>
                <a href="/notices" className="hover:text-accent transition-colors">
                Notices
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact & Social</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:dccsitc@gmail.com" className="hover:text-accent transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> dccsitc@gmail.com
              </a>
              <div className="flex gap-4">
                                <a href="https://www.facebook.com/dccsitc" className="hover:text-accent transition-colors" title="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/dccsitc" className="hover:text-accent transition-colors" title="GitHub">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/dccsitc" className="hover:text-accent transition-colors" title="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/dccsitc" className="hover:text-accent transition-colors" title="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dhaka Commerce College Science & IT Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'

interface HeaderProps {
  scrollY: number
}

export default function Header({ scrollY }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Collection', href: '#collection' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const isScrolled = scrollY > 50

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? '#0d3a2e' : 'transparent',
        borderBottom: isScrolled ? '2px solid #2a6854' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo with Refined Frame */}
        <div className="flex items-center gap-4">
          {/* Logo Container */}
          <div className="relative shrink-0">
            {/* Subtle gold glow */}
            <div className="absolute -inset-2 rounded-full bg-primary/20 blur-lg opacity-60" />

            {/* Refined gold border frame */}
            <div className="relative rounded-full p-[1.5px] bg-gradient-to-br from-primary to-primary/80 shadow-md shadow-primary/20">
              <div className="rounded-full bg-background p-0.5">
                <Image
                  src="/lily-co-logo.jpg"
                  alt="Lily & Co Logo"
                  width={64}
                  height={64}
                  className="h-12 w-12 rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <span className="text-sm font-semibold tracking-widest text-foreground">
            LILY & CO
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-light tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-6 py-2.5 bg-primary text-primary-foreground font-semibold tracking-wide text-sm hover:shadow-md hover:shadow-primary/40 transition-all duration-300 rounded">
            Shop Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6"
        >
          <span
            className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
          />
          <span
            className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
              }`}
          />
          <span
            className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-border animate-fade-in-down">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-light tracking-wide text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-2.5 bg-primary text-primary-foreground font-semibold tracking-wide text-sm hover:shadow-md hover:shadow-primary/40 transition-all rounded">
              Shop Now
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

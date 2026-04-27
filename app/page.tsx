'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedCollection from '@/components/FeaturedCollection'
import SignatureHighlight from '@/components/SignatureHighlight'
import BrandStory from '@/components/BrandStory'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider'
import DecorativeVines from '@/components/DecorativeVines'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ScrollAnimationProvider>
      <main className="bg-background relative">
        <DecorativeVines />
        <Header scrollY={scrollY} />
        <Hero />
        <FeaturedCollection />
        <SignatureHighlight />
        <BrandStory />
        <Testimonials />
        <Footer />
      </main>
    </ScrollAnimationProvider>
  )
}

'use client'

import { useEffect } from 'react'

export default function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all scroll animation elements
    const scrollElements = document.querySelectorAll(
      '.scroll-fade-in, .scroll-slide-in-left, .scroll-slide-in-right, .scroll-scale-in'
    )
    scrollElements.forEach((el) => observer.observe(el))

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return <>{children}</>
}

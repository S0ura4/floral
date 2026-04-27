'use client'

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: 'url(/collection-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0d3a2e',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.65) 100%)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="mb-6">
          <span
            className="font-light tracking-widest text-sm drop-shadow"
            style={{ color: '#c9a961', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
          >
            LUXURY CRAFTSMANSHIP
          </span>
        </div>

        <h1
          className="text-6xl md:text-8xl font-display font-semibold mb-6 tracking-tight drop-shadow-lg"
          style={{
            color: '#f5f1ed',
            textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)',
          }}
        >
          Timeless
          <br />
          <span style={{ color: '#c9a961' }}>Elegance</span>
        </h1>

        <p
          className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 drop-shadow"
          style={{ color: '#f5f1ed', textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}
        >
          Discover our curated collection of fine diamonds and exquisite jewelry pieces,
          crafted with precision and passion.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            style={{
              backgroundColor: '#c9a961',
              color: '#0d3a2e',
              padding: '16px 40px',
              fontSize: '16px',
              fontWeight: '700',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.08em',
            }}
          >
            Shop Now
          </button>
          <button
            style={{
              backgroundColor: 'rgba(0,0,0,0.25)',
              color: '#f5f1ed',
              padding: '16px 40px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '8px',
              border: '2px solid rgba(245,241,237,0.7)',
              cursor: 'pointer',
              letterSpacing: '0.05em',
              backdropFilter: 'blur(4px)',
            }}
          >
            Explore Collection
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="#c9a961" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

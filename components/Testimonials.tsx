"use client";

const testimonials = [
  {
    id: 1,
    quote:
      "The quality and elegance of my engagement ring exceeded all expectations. It&apos;s truly a masterpiece.",
    author: "Sarah Mitchell",
    title: "Bride",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Every detail is perfection. From the initial consultation to wearing the piece, the experience was exceptional.",
    author: "Michael Chen",
    title: "Private Collector",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The craftsmanship and care that goes into each piece is evident. Lily & Co represents true luxury.",
    author: "Emma Richardson",
    title: "Jewelry Connoisseur",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        backgroundColor: "#1a4d3e",
        minHeight: "60vh",
        width: "100%",
        paddingTop: "96px",
        paddingBottom: "96px",
        position: "relative",
        borderTop: "1px solid rgba(201,169,97,0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <span className="text-primary font-light tracking-widest text-sm">
            CLIENT VOICES
          </span>
          <h2 className="text-5xl md:text-6xl font-display font-semibold text-foreground mt-4">
            Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card p-8 rounded-sm scroll-fade-in"
              style={{
                border: "1px solid rgba(201,169,97,0.2)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-primary text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/75 font-light mb-6 leading-relaxed italic">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div>
                <p className="text-foreground font-serif font-light text-sm">
                  {testimonial.author}
                </p>
                <p className="text-foreground/70 font-light text-xs tracking-wide">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center scroll-fade-in">
          <p className="text-foreground/75 font-light mb-6">
            Join our community of satisfied clients
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wide text-sm hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 rounded">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

export default function SignatureHighlight() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 scroll-slide-in-left">
            <Image
              src="/ethereal-ring.jpg"
              alt="Signature Collection"
              fill
              className="object-cover rounded-sm"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 scroll-slide-in-right">
            <div>
              <span className="text-primary font-light tracking-widest text-sm">
                SIGNATURE COLLECTION
              </span>
              <h2 className="text-5xl md:text-6xl font-display font-semibold text-foreground mt-4">
                The Ethereal Series
              </h2>
            </div>

            <p className="text-foreground/75 font-light leading-relaxed max-w-md">
              Our most coveted collection features the finest clarity diamonds,
              each carefully selected and expertly cut to maximize brilliance.
              Every piece tells a story of exceptional craftsmanship and
              timeless beauty.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-primary" />
                <div>
                  <h3 className="text-foreground font-serif font-light mb-2">
                    Premium Materials
                  </h3>
                  <p className="text-foreground/70 text-sm font-light">
                    Ethically sourced diamonds and certified 18k gold
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-primary" />
                <div>
                  <h3 className="text-foreground font-serif font-light mb-2">
                    Master Craftsmanship
                  </h3>
                  <p className="text-foreground/70 text-sm font-light">
                    Handcrafted by award-winning artisans with decades of
                    experience
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 bg-primary" />
                <div>
                  <h3 className="text-foreground font-serif font-light mb-2">
                    Lifetime Guarantee
                  </h3>
                  <p className="text-foreground/70 text-sm font-light">
                    Full warranty and complimentary maintenance for life
                  </p>
                </div>
              </div>
            </div>

            <button className="px-8 py-3 bg-primary text-primary-foreground font-light tracking-wide text-sm hover:bg-primary/80 transition-colors duration-300 rounded">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

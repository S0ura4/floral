"use client";

export default function BrandStory() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#0a2d23",
        minHeight: "60vh",
        width: "100%",
        paddingTop: "96px",
        paddingBottom: "96px",
        position: "relative",
        borderTop: "1px solid rgba(201,169,97,0.2)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <span className="text-primary font-light tracking-widest text-sm">
            OUR STORY
          </span>
          <h2 className="text-5xl md:text-6xl font-display font-semibold text-foreground mt-4">
            About Lily & Co
          </h2>
        </div>

        {/* Story Content */}
        <div className="space-y-8 scroll-fade-in">
          <p className="text-lg font-light text-foreground/75 leading-relaxed">
            Lily & Co Nepal is dedicated to timeless elegance, blending modern
            craftsmanship with the brilliance of fine diamonds. Founded with a
            vision to celebrate life&apos;s most precious moments, our brand
            represents more than jewelry—it represents the artistry, passion,
            and precision that goes into every creation.
          </p>

          <p className="text-lg font-light text-foreground/75 leading-relaxed">
            Each piece in our collection is a testament to our commitment to
            excellence. We work exclusively with ethically sourced diamonds and
            premium materials, ensuring that your jewelry is not only beautiful
            but also responsible. Our master craftsmen bring decades of
            expertise to every detail, from initial design to the final polish.
          </p>

          <p className="text-lg font-light text-foreground/75 leading-relaxed">
            We believe that true luxury is timeless. Our designs transcend
            fleeting trends, offering pieces that will be cherished for
            generations. Whether it&apos;s a milestone moment or an everyday
            luxury, Lily & Co creates jewelry that becomes part of your personal
            story.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 scroll-fade-in">
          <div className="text-center scroll-scale-in">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-light text-xl">◆</span>
            </div>
            <h3 className="text-foreground font-serif font-light mb-2">
              Quality First
            </h3>
            <p className="text-foreground/70 font-light text-sm">
              Premium materials and meticulous attention to every detail
            </p>
          </div>

          <div className="text-center scroll-scale-in">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-light text-xl">✦</span>
            </div>
            <h3 className="text-foreground font-serif font-light mb-2">
              Ethical Source
            </h3>
            <p className="text-foreground/70 font-light text-sm">
              Responsibly sourced diamonds and sustainable practices
            </p>
          </div>

          <div className="text-center scroll-scale-in">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-light text-xl">✧</span>
            </div>
            <h3 className="text-foreground font-serif font-light mb-2">
              Timeless Design
            </h3>
            <p className="text-foreground/70 font-light text-sm">
              Pieces that transcend trends and become heirlooms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

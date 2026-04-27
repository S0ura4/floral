"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Ethereal Diamond Ring",
    category: "Rings",
    price: "$4,850",
    image: "/ethereal-ring.jpg",
    description: "Brilliant cut diamond with 18k gold setting",
  },
  {
    id: 2,
    name: "Noir Velvet Necklace",
    category: "Necklaces",
    price: "$3,200",
    image: "/noir-necklace.jpg",
    description: "Diamond pendant with delicate gold chain",
  },
  {
    id: 3,
    name: "Diamond Studs",
    category: "Earrings",
    price: "$2,400",
    image: "/diamond-studs.jpg",
    description: "Perfect pair of brilliant diamond earrings",
  },
];

export default function FeaturedCollection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="collection"
      style={{
        backgroundColor: "#0d3a2e",
        minHeight: "60vh",
        width: "100%",
        paddingTop: "96px",
        paddingBottom: "96px",
        position: "relative",
        borderTop: "1px solid rgba(201,169,97,0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center scroll-fade-in">
          <span className="text-primary font-light tracking-widest text-sm">
            CURATED PIECES
          </span>
          <h2 className="text-5xl md:text-6xl font-display font-semibold text-foreground mt-4 mb-4">
            Featured Collection
          </h2>
          <p className="text-foreground/70 font-light max-w-2xl mx-auto">
            Each piece is handpicked for its brilliance, quality, and timeless
            appeal.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group scroll-fade-in"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-96 bg-secondary rounded-sm overflow-hidden mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    hoveredId === product.id ? "scale-105" : "scale-100"
                  }`}
                />
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-primary font-light text-xs tracking-widest mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-lg font-serif font-light text-foreground">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-primary font-light text-sm whitespace-nowrap">
                    {product.price}
                  </p>
                </div>

                <p className="text-foreground/60 text-sm font-light">
                  {product.description}
                </p>

                <button className="mt-4 w-full py-2 border border-primary text-primary font-light tracking-wide text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 rounded">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All */}
        <div className="mt-16 text-center scroll-fade-in">
          <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wide text-sm hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 rounded">
            Browse Full Collection
          </button>
        </div>
      </div>
    </section>
  );
}

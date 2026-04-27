'use client'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-serif font-light text-primary">Lily & Co</h2>
              <span className="text-primary">✦</span>
            </div>
            <p className="text-foreground/70 font-light text-sm leading-relaxed max-w-xs">
              Timeless elegance, fine diamonds, and modern craftsmanship blended with timeless beauty from Nepal.
            </p>
          </div>

          {/* Collection */}
          <div>
            <h3 className="text-foreground font-light mb-6 text-sm tracking-wide">
              COLLECTION
            </h3>
            <ul className="space-y-3">
              {['Rings', 'Necklaces', 'Earrings', 'Bracelets'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-foreground/60 font-light text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-foreground font-light mb-6 text-sm tracking-wide">
              SUPPORT
            </h3>
            <ul className="space-y-3">
              {['Contact Us', 'Shipping Info', 'Returns', 'Care Guide'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-foreground/60 font-light text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-light mb-6 text-sm tracking-wide">
              CONTACT
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-foreground/70 font-light text-sm">
                  Thamel, Kathmandu
                </p>
                <p className="text-foreground/70 font-light text-sm">
                  Nepal
                </p>
              </div>
              <div>
                <a href="mailto:hello@lilyandco.com" className="text-foreground/70 font-light text-sm hover:text-primary transition-colors">
                  hello@lilyandco.com
                </a>
              </div>
              <div>
                <a href="tel:+977-1-4234567" className="text-foreground/70 font-light text-sm hover:text-primary transition-colors">
                  +977 1 423 4567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-foreground/60 font-light text-sm">
            © 2024 Lily & Co Nepal. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            {['Instagram', 'Facebook', 'Pinterest'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-foreground/60 font-light text-xs hover:text-primary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground/60 font-light text-xs hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

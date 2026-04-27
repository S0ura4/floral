'use client'

export default function DecorativeVines() {
  return (
    <>
      {/* Top left vine accent */}
      <svg
        className="absolute top-0 left-0 w-64 h-64 text-primary/10 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes floatVine1 {
              0%, 100% { opacity: 0.08; }
              50% { opacity: 0.12; }
            }
            .vine { animation: floatVine1 8s ease-in-out infinite; }
          `}</style>
        </defs>
        <path
          className="vine"
          d="M 20 180 Q 40 160, 50 120 T 80 40 Q 90 20, 100 10"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        <circle className="vine" cx="50" cy="120" r="2" fill="currentColor" />
        <circle className="vine" cx="80" cy="40" r="1.5" fill="currentColor" />
      </svg>

      {/* Bottom right vine accent */}
      <svg
        className="absolute bottom-0 right-0 w-72 h-72 text-primary/10 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes floatVine2 {
              0%, 100% { opacity: 0.08; }
              50% { opacity: 0.12; }
            }
            .vine2 { animation: floatVine2 10s ease-in-out infinite; }
          `}</style>
        </defs>
        <path
          className="vine2"
          d="M 180 20 Q 160 40, 150 80 T 120 160 Q 110 180, 100 190"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        <circle className="vine2" cx="150" cy="80" r="2" fill="currentColor" />
        <circle className="vine2" cx="120" cy="160" r="1.5" fill="currentColor" />
      </svg>

      {/* Center accent - floral element */}
      <svg
        className="absolute top-1/3 right-1/4 w-48 h-48 text-primary/5 pointer-events-none hidden md:block"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes floatFlower {
              0%, 100% { opacity: 0.05; transform: translateY(0px); }
              50% { opacity: 0.08; transform: translateY(-8px); }
            }
            .flower { animation: floatFlower 12s ease-in-out infinite; }
          `}</style>
        </defs>
        <g className="flower">
          <circle cx="50" cy="30" r="3" fill="currentColor" />
          <circle cx="65" cy="40" r="2.5" fill="currentColor" />
          <circle cx="35" cy="40" r="2.5" fill="currentColor" />
          <circle cx="60" cy="55" r="2" fill="currentColor" />
          <circle cx="40" cy="55" r="2" fill="currentColor" />
          <circle cx="50" cy="50" r="2.5" fill="currentColor" />
        </g>
      </svg>
    </>
  )
}

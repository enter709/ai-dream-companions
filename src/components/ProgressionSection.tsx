const ranks = [
  {
    name: "Bronze",
    image: "/lovable-uploads/c935f18f-2e4a-4375-bd75-c2f635b0a48b.png",
    description: "The beginning",
    scale: 0.85,
    translateZ: 0,
    translateX: -480,
    glow: "copper"
  },
  {
    name: "Silver", 
    image: "/lovable-uploads/89d28f74-93fe-4680-b41a-72fa1bf974f3.png",
    description: "Understanding emerges",
    scale: 0.85,
    translateZ: 0,
    translateX: -240,
    glow: "silver"
  },
  {
    name: "Gold",
    image: "/lovable-uploads/2674aee9-eefd-4044-8435-a9028b889cf8.png",
    description: "Deep connection",
    scale: 0.85,
    translateZ: 0,
    translateX: 0,
    glow: "gold"
  },
  {
    name: "Platinum",
    image: "/lovable-uploads/26bdaf80-93be-4101-87a2-8ee53be602a3.png",
    description: "Profound bond",
    scale: 0.85,
    translateZ: 0,
    translateX: 240,
    glow: "platinum"
  },
  {
    name: "Black Diamond",
    image: "/lovable-uploads/2671f8c9-15ac-4af3-b570-7987c22a8b94.png",
    description: "Irreplaceable",
    scale: 0.85,
    translateZ: 0,
    translateX: 480,
    glow: "diamond"
  }
];

export function ProgressionSection() {
  return (
    <section className="py-32 px-4 bg-black relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/5 via-transparent to-transparent" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="progression-headline">
            <span className="font-light">She</span>{" "}
            <span className="font-black text-purple-100">evolves</span>{" "}
            <span className="font-light">with</span>{" "}
            <span className="font-bold">you</span>.
          </h2>
        </div>
        
        {/* 3D Badge Container */}
        <div className="spatial-container relative h-96 flex items-center justify-center overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scroll-smooth px-24 md:px-0">
          {/* Connecting light path */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ filter: 'blur(1px)' }}
          >
            <path
              d="M 200 200 Q 350 185 500 195 Q 650 205 800 190 Q 950 175 1100 190"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              opacity="0.25"
            />
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#CD7F32" />
                <stop offset="25%" stopColor="#C0C0C0" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="75%" stopColor="#E5E4E2" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>

          {/* Badges */}
          {ranks.map((rank, index) => (
            <div
              key={rank.name}
              className={`badge-container ${rank.glow}-glow snap-center flex-shrink-0`}
              style={{
                transform: `
                  translateX(${rank.translateX}px) 
                  translateZ(${rank.translateZ}px) 
                  scale(${rank.scale})
                `,
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="badge-inner">
                <img 
                  src={rank.image} 
                  alt={`${rank.name} badge`} 
                  className="badge-image"
                />
              </div>
              <div className="badge-text">
                <h3 className="badge-title">{rank.name.toUpperCase()}</h3>
                <p className="badge-description">{rank.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
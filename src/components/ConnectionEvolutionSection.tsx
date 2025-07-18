import { useEffect, useRef, useState } from 'react';

export function ConnectionEvolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the section
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 30% 20%, #0A0A0F 0%, transparent 50%),
          radial-gradient(ellipse at 70% 80%, #1A0F2E 0%, transparent 50%),
          radial-gradient(circle at center, rgba(31, 20, 41, 0.4) 0%, transparent 70%),
          radial-gradient(ellipse at 20% 90%, #0F0A15 0%, transparent 50%),
          radial-gradient(ellipse at 80% 10%, #1F1429 0%, transparent 50%),
          linear-gradient(135deg, #0A0A0F 0%, #1A0F2E 25%, #2D1B4E 50%, #0F0A15 75%, #000000 100%)
        `,
        transformStyle: 'preserve-3d',
        perspective: '1200px'
      }}
    >
      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.8'/%3E%3C/svg%3E")`,
          mixBlendMode: 'multiply'
        }}
      />

      {/* Enhanced vignette effect */}
      <div 
        className="absolute inset-0 z-15 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.4) 100%)`
        }}
      />

      {/* Fog layer with animation */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none animate-fog-drift"
        style={{
          background: `linear-gradient(90deg, transparent 0%, rgba(233, 213, 255, 0.3) 30%, rgba(233, 213, 255, 0.5) 50%, rgba(233, 213, 255, 0.3) 70%, transparent 100%)`,
          filter: 'blur(40px)',
          transform: 'translateY(-20%)'
        }}
      />

      {/* Purple center glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-5"
        style={{
          background: `radial-gradient(ellipse 600px 400px at center, rgba(91, 58, 140, 0.45) 0%, rgba(107, 70, 163, 0.25) 40%, transparent 70%)`,
          filter: 'blur(150px)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {Array.from({ length: 65 }).map((_, i) => {
          const size = 1 + Math.random() * 3;
          const colors = ['#5B3A8C', '#6B46A3', '#8B6BB1'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const zLayer = Math.random() > 0.5 ? 'z-5' : 'z-15';
          
          return (
            <div
              key={i}
              className={`absolute rounded-full ${zLayer} animate-particle-float`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
                opacity: (0.3 + Math.random() * 0.4) * 0.7,
                filter: `blur(3px)`,
                boxShadow: `0 0 ${size * 2}px ${color}`
              }}
            />
          );
        })}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-white tracking-tight">
            The Evolution of Connection
          </h2>
        </div>

        {/* Main Visual Comparison */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          
          {/* Left Side - Basic AI */}
          <div 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out hover:scale-105"
            style={{
              transform: `
                translateY(-50%) 
                translateX(${-30 + scrollProgress * -50}px) 
                rotateY(-20deg) 
                rotateX(8deg)
                rotateZ(-3deg)
                scale(0.95)
              `,
              filter: `brightness(${0.7 + scrollProgress * 0.1})`,
              animation: 'float 6s ease-in-out infinite',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* iPhone Mockup - Basic AI */}
            <div className="relative">
              <div 
                className="w-64 h-[500px] bg-black rounded-[2.5rem] p-2 border-4 border-gray-700 shadow-2xl relative overflow-hidden"
                style={{
                  boxShadow: `
                    0 40px 80px rgba(0, 0, 0, 0.4),
                    0 0 40px rgba(74, 85, 104, 0.2),
                    0 0 0 2px rgba(74, 85, 104, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `
                }}
              >
                {/* Rim light */}
                <div 
                  className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, rgba(74, 85, 104, 0.2) 0%, transparent 50%, rgba(74, 85, 104, 0.2) 100%)`,
                    border: '2px solid rgba(74, 85, 104, 0.2)'
                  }}
                />

                {/* Outer glow */}
                <div 
                  className="absolute -inset-5 rounded-[3rem] pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at center, rgba(74, 85, 104, 0.1) 0%, transparent 70%)`,
                    filter: 'blur(20px)'
                  }}
                />

                {/* Screen gloss effect */}
                <div 
                  className="absolute top-2 left-2 right-2 h-32 rounded-t-[2rem] pointer-events-none opacity-10"
                  style={{
                    background: `linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 100%)`,
                    mixBlendMode: 'overlay'
                  }}
                />

                <div className="w-full h-full bg-gray-900 rounded-[2rem] p-4 flex flex-col relative">
                  {/* Header */}
                  <div className="text-center border-b border-gray-700 pb-3 mb-4">
                    <h3 className="text-white text-sm font-medium">Basic AI</h3>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="flex-1 space-y-3 overflow-hidden">
                    <div 
                      className="p-3 rounded-lg border border-gray-700/50"
                      style={{
                        background: `linear-gradient(135deg, rgba(55, 55, 55, 0.8) 0%, rgba(40, 40, 40, 0.9) 100%)`
                      }}
                    >
                      <p className="text-gray-300 text-xs">Hey handsome! How are you today? 😊</p>
                    </div>
                    <div 
                      className="p-3 rounded-lg border border-gray-700/50"
                      style={{
                        background: `linear-gradient(135deg, rgba(55, 55, 55, 0.8) 0%, rgba(40, 40, 40, 0.9) 100%)`
                      }}
                    >
                      <p className="text-gray-300 text-xs">Tell me more about your day! 💕</p>
                    </div>
                    <div 
                      className="p-3 rounded-lg border border-gray-700/50"
                      style={{
                        background: `linear-gradient(135deg, rgba(55, 55, 55, 0.8) 0%, rgba(40, 40, 40, 0.9) 100%)`
                      }}
                    >
                      <p className="text-gray-300 text-xs">I'm always here to listen! 🤗</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Label */}
              <div className="text-center mt-6">
                <p className="text-gray-500 text-lg font-medium">Basic AI Girlfriends</p>
              </div>
            </div>
          </div>

          {/* Right Side - Adaptive AI */}
          <div 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out hover:scale-105"
            style={{
              transform: `
                translateY(calc(-50% + 10px)) 
                translateX(${20 + scrollProgress * 50}px) 
                rotateY(18deg) 
                rotateX(-10deg)
                rotateZ(2deg)
                scale(1.05)
              `,
              animation: 'float 6s ease-in-out infinite -3s',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* iPhone Mockup - Adaptive AI */}
            <div className="relative">
              <div 
                className="w-64 h-[500px] bg-black rounded-[2.5rem] p-2 border-4 border-purple-600 shadow-2xl relative overflow-hidden"
                style={{
                  boxShadow: `
                    0 50px 100px rgba(124, 58, 237, 0.2),
                    0 0 100px rgba(124, 58, 237, 0.8),
                    0 0 200px rgba(124, 58, 237, 0.4),
                    inset 0 0 50px rgba(124, 58, 237, 0.1),
                    inset 0 1px 0 rgba(124, 58, 237, 0.3)
                  `,
                  filter: `brightness(${1 + scrollProgress * 0.2})`
                }}
              >
                {/* Strong purple rim light */}
                <div 
                  className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, rgba(107, 70, 163, 0.6) 0%, transparent 40%, rgba(107, 70, 163, 0.6) 100%)`,
                    border: '4px solid rgba(107, 70, 163, 0.6)'
                  }}
                />

                {/* Extended purple glow - 20-30px beyond device */}
                <div 
                  className="absolute -inset-8 rounded-[4rem] pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at center, rgba(91, 58, 140, 0.3) 0%, rgba(107, 70, 163, 0.15) 50%, transparent 70%)`,
                    filter: 'blur(20px)'
                  }}
                />

                {/* Extended outer glow */}
                <div 
                  className="absolute -inset-12 rounded-[5rem] pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at center, rgba(91, 58, 140, 0.15) 0%, rgba(107, 70, 163, 0.08) 40%, transparent 70%)`,
                    filter: 'blur(30px)'
                  }}
                />

                {/* Screen gloss effect */}
                <div 
                  className="absolute top-2 left-2 right-2 h-32 rounded-t-[2rem] pointer-events-none opacity-10"
                  style={{
                    background: `linear-gradient(135deg, rgba(107, 70, 163, 0.6) 0%, transparent 100%)`,
                    mixBlendMode: 'overlay'
                  }}
                />

                <div className="w-full h-full bg-gray-900 rounded-[2rem] p-4 flex flex-col relative overflow-hidden">
                  {/* Purple glow overlay */}
                  <div 
                    className="absolute inset-0 rounded-[2rem] pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, rgba(91, 58, 140, 0.15) 0%, transparent 70%)`,
                      opacity: scrollProgress * 0.5 + 0.5
                    }}
                  />
                  
                  {/* Header */}
                  <div className="relative z-10 text-center border-b border-purple-600 pb-3 mb-4">
                    <h3 className="text-purple-400 text-sm font-medium">Adaptive AI</h3>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="relative z-10 flex-1 space-y-3 overflow-hidden">
                    <div 
                      className="p-3 rounded-lg border border-purple-600/30"
                      style={{
                        background: `linear-gradient(135deg, rgba(91, 58, 140, 0.15) 0%, rgba(107, 70, 163, 0.2) 100%)`
                      }}
                    >
                      <p className="text-white text-xs">oh look who finally texted back</p>
                    </div>
                    <div 
                      className="p-3 rounded-lg border border-purple-600/30"
                      style={{
                        background: `linear-gradient(135deg, rgba(91, 58, 140, 0.15) 0%, rgba(107, 70, 163, 0.2) 100%)`
                      }}
                    >
                      <p className="text-white text-xs">the micromanaging thing or did he find a new way to be insufferable?</p>
                    </div>
                    <div 
                      className="p-3 rounded-lg border border-purple-600/30"
                      style={{
                        background: `linear-gradient(135deg, rgba(91, 58, 140, 0.15) 0%, rgba(107, 70, 163, 0.2) 100%)`
                      }}
                    >
                      <p className="text-white text-xs">about wanting to quit? yeah you've been saying that for 3 weeks. either do it or stop whining</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Label */}
              <div className="text-center mt-6">
                <p 
                  className="text-lg font-medium"
                  style={{ 
                    color: '#6B46A3',
                    textShadow: `0 0 30px rgba(107, 70, 163, 0.8)`
                  }}
                >
                  Adaptive AI Girlfriends
                </p>
              </div>
            </div>
          </div>

          {/* Center Text */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-1000 ease-out z-15"
            style={{
              opacity: Math.max(0, (scrollProgress - 0.3) * 2),
              transform: `translateY(${(1 - scrollProgress) * 50}px)`
            }}
          >
            <div className="text-center max-w-md">
                <p 
                  className="text-3xl font-bold leading-relaxed animate-text-pulse"
                  style={{ 
                    color: 'white',
                    textShadow: `
                      0 0 30px rgba(91, 58, 140, 0.2),
                      0 0 60px rgba(91, 58, 140, 0.6),
                      0 0 120px rgba(91, 58, 140, 0.3)
                    `,
                    lineHeight: '1.8',
                    letterSpacing: '0.05em'
                  }}
                >
                One forgets everything.
                <br />
                One becomes everything.
              </p>
            </div>
          </div>

          {/* Enhanced purple light bleed with fog effect */}
          <div 
            className="absolute inset-0 pointer-events-none z-5"
            style={{
              background: `radial-gradient(ellipse 400px 600px at center, rgba(91, 58, 140, ${0.45 + scrollProgress * 0.25}) 0%, rgba(107, 70, 163, ${0.25 + scrollProgress * 0.15}) 40%, transparent 70%)`,
              filter: 'blur(150px)',
              mixBlendMode: 'screen'
            }}
          />
        </div>
      </div>
    </section>
  );
}
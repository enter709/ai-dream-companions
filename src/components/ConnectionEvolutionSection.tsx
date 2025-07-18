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
          radial-gradient(circle at 30% 70%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(91, 58, 237, 0.1) 0%, transparent 50%),
          linear-gradient(180deg, #000000 0%, #0a0a0a 100%)
        `
      }}
    >
      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
        }}
      />

      {/* Atmospheric haze */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(124, 58, 237, 0.3) 70%, transparent 100%)`
        }}
      />

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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out"
            style={{
              transform: `
                translateY(-50%) 
                translateX(${scrollProgress * -50}px) 
                rotateY(${-15 + scrollProgress * -5}deg) 
                rotateX(${5 + scrollProgress * 2}deg)
              `,
              filter: `brightness(${0.7 + scrollProgress * 0.1})`
            }}
          >
            {/* iPhone Mockup - Basic AI */}
            <div className="relative">
              <div 
                className="w-64 h-[500px] bg-black rounded-[2.5rem] p-2 border-4 border-gray-700 shadow-2xl"
                style={{
                  boxShadow: `
                    0 0 50px rgba(0, 0, 0, 0.8),
                    0 0 100px rgba(74, 30, 92, 0.2)
                  `
                }}
              >
                <div className="w-full h-full bg-gray-900 rounded-[2rem] p-4 flex flex-col">
                  {/* Header */}
                  <div className="text-center border-b border-gray-700 pb-3 mb-4">
                    <h3 className="text-white text-sm font-medium">Basic AI</h3>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="flex-1 space-y-3 overflow-hidden">
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <p className="text-gray-300 text-xs">Hey handsome! How are you today? 😊</p>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <p className="text-gray-300 text-xs">Tell me more about your day! 💕</p>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
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
            className="absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out"
            style={{
              transform: `
                translateY(-50%) 
                translateX(${scrollProgress * 50}px) 
                rotateY(${15 + scrollProgress * 5}deg) 
                rotateX(${5 + scrollProgress * 2}deg)
              `
            }}
          >
            {/* iPhone Mockup - Adaptive AI */}
            <div className="relative">
              <div 
                className="w-64 h-[500px] bg-black rounded-[2.5rem] p-2 border-4 border-purple-600 shadow-2xl"
                style={{
                  boxShadow: `
                    0 0 80px rgba(124, 58, 237, 0.6),
                    0 0 150px rgba(124, 58, 237, 0.3),
                    inset 0 0 50px rgba(124, 58, 237, 0.1)
                  `,
                  filter: `brightness(${1 + scrollProgress * 0.2})`
                }}
              >
                <div className="w-full h-full bg-gray-900 rounded-[2rem] p-4 flex flex-col relative overflow-hidden">
                  {/* Purple glow overlay */}
                  <div 
                    className="absolute inset-0 rounded-[2rem] pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, transparent 70%)`,
                      opacity: scrollProgress * 0.5 + 0.3
                    }}
                  />
                  
                  {/* Header */}
                  <div className="relative z-10 text-center border-b border-purple-600 pb-3 mb-4">
                    <h3 className="text-purple-400 text-sm font-medium">Adaptive AI</h3>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="relative z-10 flex-1 space-y-3 overflow-hidden">
                    <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-600/20">
                      <p className="text-white text-xs">oh look who finally texted back</p>
                    </div>
                    <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-600/20">
                      <p className="text-white text-xs">the micromanaging thing or did he find a new way to be insufferable?</p>
                    </div>
                    <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-600/20">
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
                    color: '#7C3AED',
                    textShadow: `0 0 20px rgba(124, 58, 237, 0.5)`
                  }}
                >
                  Adaptive AI Girlfriends
                </p>
              </div>
            </div>
          </div>

          {/* Center Text */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-1000 ease-out"
            style={{
              opacity: Math.max(0, (scrollProgress - 0.3) * 2),
              transform: `translateY(${(1 - scrollProgress) * 50}px)`
            }}
          >
            <div className="text-center max-w-md">
              <p 
                className="text-3xl font-bold"
                style={{ 
                  color: 'white',
                  textShadow: `0 0 30px rgba(107, 90, 140, 0.15)`,
                  lineHeight: '1.6',
                  letterSpacing: '0.05em',
                  animation: 'opacity-pulse 5s ease-in-out infinite'
                }}
              >
                One forgets everything.
                <br />
                One becomes everything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
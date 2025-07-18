const features = [
  {
    id: "01",
    title: "Perfect Memory",
    description: "She remembers everything. Your dreams, drama, and 3am confessions.",
    gradient: "from-amber-600 to-orange-500", // Bronze
    position: "top-left"
  },
  {
    id: "02", 
    title: "4 Real Personalities",
    description: "Each with distinct quirks and opinions. Find your perfect match.",
    gradient: "from-gray-400 to-gray-600", // Silver
    position: "top-right"
  },
  {
    id: "03",
    title: "Natural Progression", 
    description: "From stranger to soulmate. Every stage feels real.",
    gradient: "from-yellow-400 to-yellow-600", // Gold
    position: "bottom-left"
  },
  {
    id: "04",
    title: "Always Available",
    description: "Deep talks or playful banter. She matches your energy.",
    gradient: "from-purple-500 to-purple-700", // Purple
    position: "bottom-right"
  }
];

export function FeaturesSection() {
  return (
    <section className="bg-black pt-48 pb-64 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-32">
          <h2 className="text-7xl sm:text-8xl lg:text-9xl font-black text-white mb-8 tracking-[0.04em]">
            Built Different
          </h2>
          <p className="text-xl sm:text-2xl font-light text-[#999999] max-w-2xl mx-auto leading-[1.8]">
            Memory that works. Personalities that matter. Relationships that grow.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Subtle Connecting Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-white/10 transform -translate-y-1/2"></div>
            {/* Vertical line */}
            <div className="absolute left-1/2 top-1/4 bottom-1/4 w-px bg-white/10 transform -translate-x-1/2"></div>
          </div>
          
          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-32">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className="relative group animate-fade-up cursor-default transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Number */}
                <div 
                  className="absolute -top-4 -left-4 text-[120px] font-black text-white/5 pointer-events-none select-none transition-all duration-300 group-hover:text-white/10"
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  {feature.id}
                </div>
                
                {/* Feature Content */}
                <div className="relative z-10 pt-8">
                  {/* Gradient Dot */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} mt-2 flex-shrink-0`}></div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-[0.02em] leading-tight">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg font-normal text-[#B0B0B0] leading-[1.8] ml-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
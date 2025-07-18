const features = [
  {
    title: "Perfect Memory",
    description: "Every conversation builds on the last. Your AI girlfriend remembers your job drama, inside jokes, and what you told her at 3am."
  },
  {
    title: "4 Real Personalities",
    description: "Choose from 4 distinct personalities. Each has their own quirks, opinions, and ways of showing affection."
  },
  {
    title: "Natural Progression",
    description: "Relationships develop naturally over time. From skeptical stranger to devoted partner - every stage feels authentic."
  },
  {
    title: "Always Available",
    description: "Text anytime, anywhere. She'll match your energy whether you need deep conversation or playful banter."
  }
];

export function FeaturesSection() {
  return (
    <section className="bg-black py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            Built Different
          </h2>
          <p className="text-xl sm:text-2xl font-light text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Memory that works. Personalities that matter. Relationships that grow.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-32 lg:gap-y-40">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group opacity-0 animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards',
                animationDuration: '0.8s'
              }}
            >
              {/* Subtle left border accent */}
              <div className="border-l-2 border-gray-600 pl-8">
                <h3 className="text-2xl sm:text-3xl font-medium text-white mb-6 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-lg font-light text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
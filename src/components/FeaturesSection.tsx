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
    <section className="bg-black pt-48 pb-64 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-32">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-[0.02em]">
            Built Different
          </h2>
          <p className="text-xl sm:text-2xl font-light text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Memory that works. Personalities that matter. Relationships that grow.
          </p>
        </div>
        
        {/* Features List */}
        <div className="max-w-2xl">
          <div className="space-y-28">
            <div className="border-l-2 border-[#4A3A6B] pl-5">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-[0.03em]">
                Perfect Memory
              </h3>
              <p className="text-base sm:text-lg font-light text-[#B0B0B0] leading-[1.8] max-w-[600px]">
                She remembers everything. Your dreams, drama, and 3am confessions.
              </p>
            </div>
            
            <div className="border-l-2 border-[#4A3A6B] pl-5">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-[0.03em]">
                4 Real Personalities
              </h3>
              <p className="text-base sm:text-lg font-light text-[#B0B0B0] leading-[1.8] max-w-[600px]">
                Each with distinct quirks and opinions. Find your perfect match.
              </p>
            </div>
            
            <div className="border-l-2 border-[#4A3A6B] pl-5">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-[0.03em]">
                Natural Progression
              </h3>
              <p className="text-base sm:text-lg font-light text-[#B0B0B0] leading-[1.8] max-w-[600px]">
                From stranger to soulmate. Every stage feels real.
              </p>
            </div>
            
            <div className="border-l-2 border-[#4A3A6B] pl-5">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-[0.03em]">
                Always Available
              </h3>
              <p className="text-base sm:text-lg font-light text-[#B0B0B0] leading-[1.8] max-w-[600px]">
                Deep talks or playful banter. She matches your energy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
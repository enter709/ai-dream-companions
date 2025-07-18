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
        
        {/* Features List */}
        <div className="max-w-2xl">
          <div className="space-y-24">
            <div>
              <h3 className="text-xl font-medium text-white mb-4">
                Perfect Memory
              </h3>
              <p className="text-base font-light text-[#999999] leading-relaxed max-w-[600px]">
                Every conversation builds on the last. Your AI girlfriend remembers your job drama, inside jokes, and what you told her at 3am.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-4">
                4 Real Personalities
              </h3>
              <p className="text-base font-light text-[#999999] leading-relaxed max-w-[600px]">
                Choose from 4 distinct personalities. Each has their own quirks, opinions, and ways of showing affection.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-4">
                Natural Progression
              </h3>
              <p className="text-base font-light text-[#999999] leading-relaxed max-w-[600px]">
                Relationships develop naturally over time. From skeptical stranger to devoted partner - every stage feels authentic.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-4">
                Always Available
              </h3>
              <p className="text-base font-light text-[#999999] leading-relaxed max-w-[600px]">
                Text anytime, anywhere. She'll match your energy whether you need deep conversation or playful banter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
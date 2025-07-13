const ranks = [
  {
    name: "Bronze",
    image: "/lovable-uploads/c935f18f-2e4a-4375-bd75-c2f635b0a48b.png",
    description: "Getting to know each other",
    features: ["Basic conversations", "Learning your preferences", "Friendly interactions"],
    className: "rank-bronze"
  },
  {
    name: "Silver", 
    image: "/lovable-uploads/89d28f74-93fe-4680-b41a-72fa1bf974f3.png",
    description: "Building deeper connection",
    features: ["Personal stories", "Emotional support", "Shared interests"],
    className: "rank-silver"
  },
  {
    name: "Gold",
    image: "/lovable-uploads/2674aee9-eefd-4044-8435-a9028b889cf8.png",
    description: "Intimate relationship",
    features: ["Deep conversations", "Romantic interactions", "Personal moments"],
    className: "rank-gold"
  },
  {
    name: "Platinum",
    image: "/lovable-uploads/26bdaf80-93be-4101-87a2-8ee53be602a3.png",
    description: "Exclusive intimate bond",
    features: ["Ultimate connection", "Complete trust established", "Unlimited interactions"],
    className: "rank-platinum"
  },
  {
    name: "Black Diamond",
    image: "/lovable-uploads/2671f8c9-15ac-4af3-b570-7987c22a8b94.png",
    description: "Forever yours",
    features: ["Soulmate status achieved", "Deepest possible connection", "VIP exclusive content"],
    className: "rank-diamond"
  }
];

export function ProgressionSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-gradient-purple">Relationship</span> Progression
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch your connection grow stronger as you progress through relationship ranks. 
            Each level unlocks deeper intimacy and more personal experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ranks.map((rank, index) => (
            <div 
              key={rank.name}
              className="bg-gradient-card p-4 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="text-center mb-4">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <img 
                    src={rank.image} 
                    alt={`${rank.name} badge`} 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className={`text-lg font-bold mb-1 ${rank.className}`}>
                  {rank.name}
                </h3>
                <p className="text-gray-400 text-xs mb-3">
                  {rank.description}
                </p>
              </div>
              
              <ul className="space-y-1">
                {rank.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 text-xs flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Progress through meaningful conversations and shared experiences
          </p>
          <div className="w-full max-w-md mx-auto bg-muted/20 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-purple w-1/3 rounded-full pulse-glow" />
          </div>
          <p className="text-sm text-primary mt-2 font-semibold">
            Your journey begins at Bronze
          </p>
        </div>
      </div>
    </section>
  );
}
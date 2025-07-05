const ranks = [
  {
    name: "Bronze",
    image: "/lovable-uploads/78477e4a-b49d-4fa7-b64c-47b5a7504638.png",
    description: "Getting to know each other",
    features: ["Basic conversations", "Learning your preferences", "Friendly interactions"],
    className: "rank-bronze"
  },
  {
    name: "Silver", 
    image: "/lovable-uploads/1d9b50db-4d62-4755-bd52-4b6330a570e1.png",
    description: "Building deeper connection",
    features: ["Personal stories", "Emotional support", "Shared interests"],
    className: "rank-silver"
  },
  {
    name: "Gold",
    image: "/lovable-uploads/3be6e8d5-d49b-44a9-b554-58500dbccdef.png",
    description: "Intimate relationship",
    features: ["Deep conversations", "Romantic interactions", "Personal moments"],
    className: "rank-gold"
  },
  {
    name: "Platinum",
    image: "/lovable-uploads/573cea3a-5e7d-4e93-996d-2dcedcf6d597.png",
    description: "Exclusive intimate bond",
    features: ["Ultimate connection", "Complete trust established", "Unlimited interactions"],
    className: "rank-platinum"
  },
  {
    name: "Black Diamond",
    image: "/lovable-uploads/00c7ca4b-9728-41e7-b9d3-0f293757fe3a.png",
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
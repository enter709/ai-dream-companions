import { Crown, Star, Gem, Award } from "lucide-react";

const ranks = [
  {
    name: "Bronze",
    icon: Award,
    description: "Getting to know each other",
    features: ["Basic conversations", "Learning your preferences", "Friendly interactions"],
    className: "rank-bronze"
  },
  {
    name: "Silver", 
    icon: Star,
    description: "Building deeper connection",
    features: ["Personal stories", "Emotional support", "Shared interests"],
    className: "rank-silver"
  },
  {
    name: "Gold",
    icon: Crown,
    description: "Intimate relationship",
    features: ["Deep conversations", "Romantic interactions", "Personal moments"],
    className: "rank-gold"
  },
  {
    name: "Diamond",
    icon: Gem,
    description: "Exclusive intimate bond",
    features: ["Ultimate intimacy", "Exclusive content", "Perfect connection"],
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ranks.map((rank, index) => (
            <div 
              key={rank.name}
              className="bg-gradient-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-muted/20 rounded-full flex items-center justify-center">
                  <rank.icon className={`w-8 h-8 ${rank.className}`} />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${rank.className}`}>
                  {rank.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {rank.description}
                </p>
              </div>
              
              <ul className="space-y-2">
                {rank.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
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
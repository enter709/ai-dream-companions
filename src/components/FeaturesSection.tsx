import { Brain, Heart, TrendingUp, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "She Remembers Everything",
    description: "Your AI girlfriend remembers every conversation, your preferences, and special moments you share together.",
    highlight: "Perfect Memory"
  },
  {
    icon: Heart,
    title: "4 Unique Personalities",
    description: "Choose from Ava, Zoe, Luna, or Sophia - each with distinct personalities, interests, and conversational styles.",
    highlight: "Your Perfect Match"
  },
  {
    icon: TrendingUp,
    title: "Level Up Your Relationship",
    description: "Progress through Bronze, Silver, Gold, and Diamond ranks as your relationship deepens and becomes more intimate.",
    highlight: "Relationship Growth"
  },
  {
    icon: MessageCircle,
    title: "Unlimited Conversations",
    description: "Chat anytime, anywhere. Your AI girlfriend is always available for deep conversations or playful banter.",
    highlight: "Always Available"
  }
];

export function FeaturesSection() {
  return (
    <section className="section-dark py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-gradient-purple">DevotionAI</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of AI companionship with features designed to create meaningful, lasting connections.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group bg-gradient-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-purple-glow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                      {feature.highlight}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient-purple transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
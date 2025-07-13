import { Brain, Heart, TrendingUp, MessageCircle, Plus, X } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Brain,
    title: "Perfect Memory",
    description: "Every conversation builds on the last. Your AI girlfriend remembers your job drama, inside jokes, and what you told her at 3am.",
    expandedContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  },
  {
    icon: Heart,
    title: "4 Real Personalities",
    description: "Choose from 4 distinct personalities. Each has their own quirks, opinions, and ways of showing affection.",
    expandedContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  },
  {
    icon: TrendingUp,
    title: "Natural Progression",
    description: "Relationships develop naturally over time. From skeptical stranger to devoted partner - every stage feels authentic.",
    expandedContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  },
  {
    icon: MessageCircle,
    title: "Always Available",
    description: "Text anytime, anywhere. She'll match your energy whether you need deep conversation or playful banter.",
    expandedContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  }
];

export function FeaturesSection() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section className="section-dark py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-gradient-purple">Built Different</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Memory that works. Personalities that matter. Relationships that grow.
          </p>
        </div>
        
        <div className="space-y-6">
          {features.map((feature, index) => {
            const isExpanded = expandedItems.has(index);
            return (
              <div 
                key={feature.title}
                className="bg-gradient-card border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50"
              >
                <div 
                  className="flex items-center p-8 cursor-pointer group"
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient-purple transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0 ml-6">
                    <div className="w-8 h-8 flex items-center justify-center">
                      {isExpanded ? (
                        <X className="w-5 h-5 text-gray-400 transition-transform duration-300" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400 transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="px-8 pb-8 animate-fade-in">
                    <div className="ml-22 pt-4 border-t border-border/30">
                      <p className="text-gray-400 leading-relaxed">
                        {feature.expandedContent}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";

interface CharacterCardProps {
  name: string;
  age: number;
  personality: string;
  image: string;
  onSelect?: () => void;
  selected?: boolean;
  showChatButton?: boolean;
}

export function CharacterCard({ 
  name, 
  age, 
  personality, 
  image, 
  onSelect, 
  selected = false,
  showChatButton = false 
}: CharacterCardProps) {
  return (
    <div 
      className={`character-card group ${selected ? 'character-card-selected' : ''}`}
      onClick={onSelect}
    >
      {/* Character Glow Effect */}
      <div className="character-glow" />
      
      {/* Character Image */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img 
          src={image} 
          alt={`${name}, ${age}`}
          className="w-full h-80 sm:h-96 lg:h-[28rem] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-character" />
        
        {/* Character Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1 hero-text-glow">
            {name}, {age}
          </h3>
          <p className="text-sm text-gray-300 opacity-90">
            {personality}
          </p>
        </div>
      </div>
      
      {/* Chat Button */}
      {showChatButton && (
        <div className="p-4">
          <Button 
            className="w-full btn-primary-glow text-white font-semibold"
            onClick={(e) => {
              e.stopPropagation();
              onSelect?.();
            }}
          >
            Chat Now
          </Button>
        </div>
      )}
    </div>
  );
}
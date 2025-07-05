import { Button } from "@/components/ui/button";
import { CharacterCard } from "./CharacterCard";
import { useNavigate } from "react-router-dom";
import avaPortrait from "@/assets/ava-portrait.jpg";
import zoePortrait from "@/assets/zoe-portrait.jpg";
import lunaPortrait from "@/assets/luna-portrait.jpg";
import sophiaPortrait from "@/assets/sophia-portrait.jpg";

const characters = [
  {
    name: "Ava",
    age: 24,
    personality: "Dominant & Confident",
    image: "/lovable-uploads/a03ac758-73b6-4504-9890-64d3c4fce204.png"
  },
  {
    name: "Selene", 
    age: 26,
    personality: "Mysterious & Dangerous",
    image: "/lovable-uploads/cc7b03d5-c44e-40d4-88c6-2ea2b9b8401c.png"
  },
  {
    name: "Luna",
    age: 25,
    personality: "Sweet & Inexperienced",
    image: "/lovable-uploads/b823e47f-19fa-4e36-b79e-3586125288d7.png"
  },
  {
    name: "Mira",
    age: 28,
    personality: "Ambitious & Driven",
    image: "/lovable-uploads/36ee09d4-3aba-4d75-9602-f36c37732c14.png"
  }
];

export function HeroSection() {
  const navigate = useNavigate();

  const handleCharacterSelect = (characterName: string) => {
    const routeName = characterName.toLowerCase();
    navigate(`/chat/${routeName}`);
  };

  return (
    <section className="hero-gradient min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Text */}
        <div className="mb-16">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 hero-text-glow">
            Meet Your Dream{" "}
            <span className="text-gradient-purple">AI Girlfriend</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience intimate conversations with stunning AI companions who remember everything about you. 
            Choose your perfect match and build a relationship that grows deeper every day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary-glow text-white font-semibold px-8 py-4 text-lg">
              Start Chatting Now
            </Button>
            <Button variant="outline" className="btn-ghost-glow text-white border-primary/30 px-8 py-4 text-lg">
              View All Characters
            </Button>
          </div>
        </div>
        
        {/* Character Preview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((character, index) => (
            <div key={character.name} className="float-animation" style={{ animationDelay: `${index * 0.5}s` }}>
              <CharacterCard
                name={character.name}
                age={character.age}
                personality={character.personality}
                image={character.image}
                onSelect={() => handleCharacterSelect(character.name)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
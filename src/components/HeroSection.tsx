import { Button } from "@/components/ui/button";
import { CharacterCard } from "./CharacterCard";
import { PhotoCarousel } from "./PhotoCarousel";
import { useNavigate } from "react-router-dom";
import avaPortrait from "@/assets/ava-portrait.jpg";
import zoePortrait from "@/assets/zoe-portrait.jpg";
import lunaPortrait from "@/assets/luna-portrait.jpg";
import sophiaPortrait from "@/assets/sophia-portrait.jpg";

const characters = [
  {
    name: "Mika",
    age: 24,
    personality: "Sarcastic & Addictive",
    image: "/lovable-uploads/06f41d03-f4ad-4009-af4f-e4d58ef7f912.png",
    gallery: [
      "/lovable-uploads/dd8b56d2-7756-4f4a-82a2-c47357ada6dd.png",
      "/lovable-uploads/2570417a-7b83-4116-a530-06aa99a41c75.png", 
      "/lovable-uploads/4563a845-d23f-452c-914f-c5d89bcd82db.png",
      "/lovable-uploads/0c45ec9f-dd54-4dba-9789-bab0e9196b42.png",
      "/lovable-uploads/3108a495-dd8d-4044-bc7e-de8304a5ab95.png"
    ]
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
              {character.name === "Mika" && character.gallery ? (
                <div className="card-glow backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer" onClick={() => handleCharacterSelect(character.name)}>
                  <PhotoCarousel 
                    images={character.gallery} 
                    name={character.name}
                    className="mb-6"
                  />
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{character.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">Age {character.age}</p>
                    <p className="text-primary font-medium mb-4">{character.personality}</p>
                    
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs text-gray-400">Online</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-primary">★ 4.9</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full btn-primary-glow text-white font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCharacterSelect(character.name);
                      }}
                    >
                      Start Chatting
                    </Button>
                  </div>
                </div>
              ) : (
                <CharacterCard
                  name={character.name}
                  age={character.age}
                  personality={character.personality}
                  image={character.image}
                  onSelect={() => handleCharacterSelect(character.name)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useParams } from "react-router-dom";
import { ConversationsSidebar } from "@/components/chat/ConversationsSidebar";
import { ChatArea } from "@/components/chat/ChatArea";
import { CharacterShowcase } from "@/components/chat/CharacterShowcase";

const charactersData = {
  mika: {
    name: "Mika",
    age: 24,
    personality: "Sarcastic & Addictive",
    image: "/lovable-uploads/06f41d03-f4ad-4009-af4f-e4d58ef7f912.png"
  },
  selene: {
    name: "Selene", 
    age: 26,
    personality: "Trouble Worth Having",
    image: "/lovable-uploads/cc7b03d5-c44e-40d4-88c6-2ea2b9b8401c.png"
  },
  luna: {
    name: "Luna",
    age: 25,
    personality: "Dangerously Sweet",
    image: "/lovable-uploads/b823e47f-19fa-4e36-b79e-3586125288d7.png"
  },
  mira: {
    name: "Mira",
    age: 28,
    personality: "Power Move Energy",
    image: "/lovable-uploads/36ee09d4-3aba-4d75-9602-f36c37732c14.png"
  }
};

export default function ChatPage() {
  const { characterName } = useParams<{ characterName: string }>();
  
  const character = charactersData[characterName as keyof typeof charactersData];
  
  if (!character) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Character not found</h1>
          <p className="text-muted-foreground">Please select a valid character to chat with.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      <ConversationsSidebar currentCharacter={characterName || ""} />
      <ChatArea 
        characterName={character.name} 
        characterImage={character.image}
      />
      <CharacterShowcase 
        characterName={character.name}
        characterImage={character.image}
        age={character.age}
        personality={character.personality}
      />
    </div>
  );
}
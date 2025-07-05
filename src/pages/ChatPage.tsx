import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const characters = {
  ava: "Ava",
  selene: "Selene", 
  luna: "Luna",
  mira: "Mira"
};

export default function ChatPage() {
  const { characterName } = useParams<{ characterName: string }>();
  const navigate = useNavigate();
  
  const displayName = characters[characterName as keyof typeof characters] || "Unknown";

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8 hero-text-glow">
          Chat with <span className="text-gradient-purple">{displayName}</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-12">
          Your conversation with {displayName} will begin here.
        </p>
        
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="btn-ghost-glow text-white border-primary/30 px-8 py-4 text-lg"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Character Selection
        </Button>
      </div>
    </div>
  );
}
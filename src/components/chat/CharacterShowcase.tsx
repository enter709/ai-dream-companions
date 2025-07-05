import { useState } from "react";
import { ChevronDown, ChevronUp, Heart, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CharacterShowcaseProps {
  characterName: string;
  characterImage: string;
  age: number;
  personality: string;
}

export function CharacterShowcase({ characterName, characterImage, age, personality }: CharacterShowcaseProps) {
  const [showCharacterInfo, setShowCharacterInfo] = useState(false);

  const rankBadges = {
    bronze: "/lovable-uploads/1d9b50db-4d62-4755-bd52-4b6330a570e1.png",
    silver: "/lovable-uploads/3be6e8d5-d49b-44a9-b554-58500dbccdef.png", 
    gold: "/lovable-uploads/573cea3a-5e7d-4e93-996d-2dcedcf6d597.png",
    platinum: "/lovable-uploads/00c7ca4b-9728-41e7-b9d3-0f293757fe3a.png",
    diamond: "/lovable-uploads/78477e4a-b49d-4fa7-b64c-47b5a7504638.png"
  };

  // Mock data for demonstration
  const stats = {
    messagesExchanged: 1247,
    daysTogether: 18,
    mood: "Playful",
    currentRank: "gold"
  };

  return (
    <div className="w-[350px] bg-card/50 backdrop-blur-sm border-l border-border/50 flex flex-col">
      {/* Character Image */}
      <div className="p-6">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={characterImage}
            alt={characterName}
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Character Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-2xl font-bold text-white mb-1">
              {characterName}, {age}
            </h2>
            <p className="text-white/90 text-sm">{personality}</p>
          </div>
        </div>
      </div>

      {/* Rank Badge */}
      <div className="px-6 mb-6">
        <Card className="p-4 bg-gradient-to-r from-card to-card/50 border-primary/20">
          <div className="flex items-center space-x-3">
            <img 
              src={rankBadges[stats.currentRank as keyof typeof rankBadges]} 
              alt="Rank badge"
              className="w-12 h-12"
            />
            <div>
              <h3 className="font-semibold text-primary text-sm uppercase tracking-wide">
                {stats.currentRank} Tier
              </h3>
              <p className="text-xs text-muted-foreground">
                Intimate relationship
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Stats Section */}
      <div className="px-6 mb-6">
        <h3 className="font-semibold text-foreground mb-4">Relationship Stats</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/30">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">Messages</span>
            </div>
            <span className="font-semibold text-primary">{stats.messagesExchanged.toLocaleString()}</span>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/30">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">Days together</span>
            </div>
            <span className="font-semibold text-primary">{stats.daysTogether}</span>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/30">
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">Current mood</span>
            </div>
            <span className="font-semibold text-primary">{stats.mood}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 space-y-3">
        <Button className="w-full btn-primary-glow">
          View Gallery
        </Button>
        
        <Button
          variant="outline"
          className="w-full btn-ghost-glow"
          onClick={() => setShowCharacterInfo(!showCharacterInfo)}
        >
          <span>Character Info</span>
          {showCharacterInfo ? (
            <ChevronUp className="ml-2 h-4 w-4" />
          ) : (
            <ChevronDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Expandable Character Info */}
      {showCharacterInfo && (
        <div className="px-6 py-4 border-t border-border/50 bg-accent/20">
          <div className="space-y-3 text-sm">
            <div>
              <h4 className="font-medium text-foreground mb-1">Personality</h4>
              <p className="text-muted-foreground">{personality}</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Interests</h4>
              <p className="text-muted-foreground">
                Deep conversations, romantic moments, building meaningful connections
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Communication Style</h4>
              <p className="text-muted-foreground">
                Warm, engaging, and emotionally intelligent
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Heart, MessageCircle, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FullscreenGallery } from "./FullscreenGallery";

interface CharacterShowcaseProps {
  characterName: string;
  characterImage: string;
  age: number;
  personality: string;
}

export function CharacterShowcase({ characterName, characterImage, age, personality }: CharacterShowcaseProps) {
  const [showCharacterInfo, setShowCharacterInfo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);

  // Gallery images for the character
  const galleryImages = [
    "/lovable-uploads/7ea74a32-347e-4948-961b-ec5ce72d35c1.png", // Primary image (was image 4)
    "/lovable-uploads/beab7e25-02fa-4d7f-a00f-45779fea7dd8.png", 
    "/lovable-uploads/26ba0944-b59c-4a72-87d4-a23bdb81c91b.png",
    "/lovable-uploads/7c59cfd8-279d-458b-806f-b916d62a6750.png" // Was primary image
  ];

  // Auto-rotate images every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const openGallery = (startIndex: number = 0) => {
    setGalleryImageIndex(startIndex);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

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
      {/* Character Photo Gallery */}
      <div className="p-6">
        <div className="relative rounded-2xl overflow-hidden group">
          <img
            src={galleryImages[currentImageIndex]}
            alt={`${characterName} - Photo ${currentImageIndex + 1}`}
            className="w-full h-80 object-cover transition-all duration-500 ease-in-out cursor-pointer hover:scale-105"
            onClick={() => openGallery(currentImageIndex)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
          
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
        <Button 
          className="w-full btn-primary-glow"
          onClick={() => openGallery(0)}
        >
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

      {/* Fullscreen Gallery */}
      <FullscreenGallery
        images={galleryImages}
        isOpen={isGalleryOpen}
        currentIndex={galleryImageIndex}
        onClose={closeGallery}
        onNavigate={setGalleryImageIndex}
      />
    </div>
  );
}
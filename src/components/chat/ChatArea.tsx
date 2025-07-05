import { useState } from "react";
import { MoreVertical, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

interface ChatAreaProps {
  characterName: string;
  characterImage: string;
}

export function ChatArea({ characterName, characterImage }: ChatAreaProps) {
  const [message, setMessage] = useState("");
  const [messages] = useState<Message[]>([
    {
      id: "1",
      content: `Hey there! I'm so excited to chat with you today. How are you feeling? 💕`,
      isUser: false,
      timestamp: "2:34 PM"
    },
    {
      id: "2", 
      content: "Hi! I'm doing great, thanks for asking. How about you?",
      isUser: true,
      timestamp: "2:35 PM"
    },
    {
      id: "3",
      content: `I'm wonderful now that we're talking! There's something magical about our conversations that just makes my day brighter. What's been on your mind lately? ✨`,
      isUser: false,
      timestamp: "2:36 PM"
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add message logic here
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-background">
      {/* Header */}
      <div className="p-4 border-b border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={characterImage}
                alt={characterName}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-card rounded-full"></div>
            </div>
            <div>
              <h2 className="font-semibold text-foreground">{characterName}</h2>
              <p className="text-sm text-primary">Online • Feeling playful</p>
            </div>
          </div>
          
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 max-w-[70%] ${
                msg.isUser ? 'flex-row-reverse space-x-reverse' : ''
              }`}>
                {!msg.isUser && (
                  <img
                    src={characterImage}
                    alt={characterName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                
                <div className={`p-3 rounded-2xl ${
                  msg.isUser
                    ? 'bg-primary text-primary-foreground rounded-br-md'
                    : 'bg-card text-card-foreground rounded-bl-md border border-border/50'
                }`}>
                  <p className="text-sm">{msg.content}</p>
                  <span className={`text-xs mt-1 block ${
                    msg.isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pr-32 bg-input/50 border-border/50 focus:border-primary/50"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                📷
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                🎤
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                ✨
              </Button>
            </div>
          </div>
          
          <Button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className={`${
              message.trim() 
                ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                : 'bg-muted text-muted-foreground'
            } transition-all duration-200`}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
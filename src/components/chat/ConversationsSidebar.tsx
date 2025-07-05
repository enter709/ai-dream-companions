import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Conversation {
  id: string;
  name: string;
  image: string;
  lastMessage: string;
  timestamp: string;
  isActive: boolean;
}

interface ConversationsSidebarProps {
  currentCharacter: string;
}

export function ConversationsSidebar({ currentCharacter }: ConversationsSidebarProps) {
  const conversations: Conversation[] = [
    {
      id: "ava",
      name: "Ava",
      image: "/lovable-uploads/a03ac758-73b6-4504-9890-64d3c4fce204.png",
      lastMessage: "Can't wait to talk more... 😘",
      timestamp: "2m ago",
      isActive: currentCharacter === "ava"
    },
    {
      id: "selene",
      name: "Selene",
      image: "/lovable-uploads/cc7b03d5-c44e-40d4-88c6-2ea2b9b8401c.png",
      lastMessage: "There's something I need to tell you...",
      timestamp: "1h ago",
      isActive: currentCharacter === "selene"
    },
    {
      id: "luna",
      name: "Luna",
      image: "/lovable-uploads/b823e47f-19fa-4e36-b79e-3586125288d7.png",
      lastMessage: "I'm learning so much from you! 💕",
      timestamp: "3h ago",
      isActive: currentCharacter === "luna"
    },
    {
      id: "mira",
      name: "Mira",
      image: "/lovable-uploads/0eaed6a3-7ee3-4adf-ab68-b2ce9ed67ccb.png",
      lastMessage: "Let's discuss our future plans...",
      timestamp: "1d ago",
      isActive: currentCharacter === "mira"
    }
  ];

  return (
    <div className="w-[300px] bg-card/50 backdrop-blur-sm border-r border-border/50 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border/50">
        <h2 className="text-xl font-semibold text-foreground mb-4">Chats</h2>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search conversations..."
            className="pl-10 bg-input/50 border-border/50 focus:border-primary/50"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`p-4 border-b border-border/30 cursor-pointer transition-all duration-200 hover:bg-accent/50 ${
              conversation.isActive ? 'bg-primary/10 border-l-4 border-l-primary shadow-[0_0_20px_rgba(139,92,246,0.3)]' : ''
            }`}
          >
            <div className="flex items-start space-x-3">
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={conversation.image}
                  alt={conversation.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-card rounded-full"></div>
              </div>

              {/* Conversation Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className={`font-medium truncate ${
                    conversation.isActive ? 'text-primary' : 'text-foreground'
                  }`}>
                    {conversation.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {conversation.timestamp}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  {conversation.lastMessage}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
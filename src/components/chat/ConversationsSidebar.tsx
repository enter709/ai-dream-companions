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
      id: "mika",
      name: "Mika",
      image: "/lovable-uploads/06f41d03-f4ad-4009-af4f-e4d58ef7f912.png",
      lastMessage: "Can't wait to talk more... 😘",
      timestamp: "2m ago",
      isActive: currentCharacter === "mika"
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
      image: "/lovable-uploads/36ee09d4-3aba-4d75-9602-f36c37732c14.png",
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
            className={`py-5 px-6 border-b border-border/20 cursor-pointer transition-all duration-200 hover:bg-accent/30 ${
              conversation.isActive ? 'bg-primary/10 border-l-4 border-l-primary shadow-[0_0_20px_rgba(139,92,246,0.3)]' : ''
            }`}
          >
            <div className="flex items-start space-x-4">
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={conversation.image}
                  alt={conversation.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-card rounded-full"></div>
              </div>

              {/* Conversation Info */}
              <div className="flex-1 min-w-0 py-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`font-medium text-[15px] truncate ${
                    conversation.isActive ? 'text-primary' : 'text-foreground'
                  }`}>
                    {conversation.name}
                  </h3>
                  <span className="text-xs text-muted-foreground font-medium">
                    {conversation.timestamp}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground/80 truncate leading-relaxed">
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
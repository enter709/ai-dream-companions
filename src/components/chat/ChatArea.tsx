import { useState, useEffect } from "react";
import { MoreVertical, Send, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
  status?: 'delivered' | 'read';
}

interface ChatAreaProps {
  characterName: string;
  characterImage: string;
}

export function ChatArea({ characterName, characterImage }: ChatAreaProps) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
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
      timestamp: "2:35 PM",
      status: "read"
    },
    {
      id: "3",
      content: `I'm wonderful now that we're talking! There's something magical about our conversations that just makes my day brighter. What's been on your mind lately? ✨`,
      isUser: false,
      timestamp: "2:36 PM"
    }
  ]);

  // Group messages by sender
  const groupedMessages = messages.reduce((groups: Message[][], msg, index) => {
    if (index === 0 || msg.isUser !== messages[index - 1].isUser) {
      groups.push([msg]);
    } else {
      groups[groups.length - 1].push(msg);
    }
    return groups;
  }, []);

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
            {/* Back Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="text-muted-foreground hover:text-foreground hover:bg-primary/10 hover:shadow-[0_0_10px_hsl(var(--primary)/0.3)] transition-all duration-200 min-w-[44px] min-h-[44px] group"
              title="Back to Characters"
            >
              <ArrowLeft className="h-5 w-5 group-hover:brightness-125" />
            </Button>
            
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
          
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground min-w-[44px] min-h-[44px]">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {groupedMessages.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-1">
              {group.map((msg, msgIndex) => {
                const isFirstInGroup = msgIndex === 0;
                const isLastInGroup = msgIndex === group.length - 1;
                
                return (
                  <div
                    key={msg.id}
                    className={`flex items-end space-x-2 ${msg.isUser ? 'justify-end' : 'justify-start'} ${
                      msgIndex > 0 ? 'mt-1' : ''
                    }`}
                  >
                    {/* AI Profile Picture - only on first message in group */}
                    {!msg.isUser && isFirstInGroup && (
                      <img
                        src={characterImage}
                        alt={characterName}
                        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                      />
                    )}
                    
                    {/* Spacer for grouped AI messages */}
                    {!msg.isUser && !isFirstInGroup && (
                      <div className="w-8 flex-shrink-0" />
                    )}
                    
                    <div className={`flex flex-col ${msg.isUser ? 'items-end' : 'items-start'} max-w-[75%]`}>
                      {/* Message Bubble */}
                      <div 
                        className={`px-4 py-3 rounded-[18px] relative message-bubble ${
                          msg.isUser 
                            ? `bg-[#007AFF] text-white ${isLastInGroup ? 'message-tail-user' : ''}` 
                            : `bg-[#2A2A2A] text-white ${isLastInGroup ? 'message-tail-ai' : ''}`
                        }`}
                        style={{
                          animation: 'slideInMessage 0.3s ease-out'
                        }}
                      >
                        <p className="text-[15px] leading-[20px]">{msg.content}</p>
                      </div>
                      
                      {/* Timestamp and Status - only on last message in group */}
                      {isLastInGroup && (
                        <div className={`flex items-center space-x-1 mt-1 text-xs text-muted-foreground ${
                          msg.isUser ? 'flex-row-reverse space-x-reverse' : ''
                        }`}>
                          <span>{msg.timestamp}</span>
                          {msg.isUser && msg.status && (
                            <span className="text-xs text-muted-foreground">
                              {msg.status === 'delivered' ? 'Delivered' : 'Read'}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-end space-x-2 justify-start">
              <img
                src={characterImage}
                alt={characterName}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
              <div className="bg-[#2A2A2A] text-white px-4 py-3 rounded-[18px] message-tail-ai">
                <div className="flex items-center space-x-1">
                  <span className="text-[15px]">{characterName} is typing</span>
                  <div className="flex space-x-1 ml-1">
                    <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0ms'}}></div>
                    <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '200ms'}}></div>
                    <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '400ms'}}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <Input
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="rounded-[20px] bg-input/50 border-border/50 focus:border-primary/50 pr-32 py-3 shadow-inner"
              style={{
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)'
              }}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
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
            className={`rounded-full w-10 h-10 p-0 transition-all duration-200 ${
              message.trim() 
                ? 'bg-[#007AFF] hover:bg-[#0051D2] text-white shadow-md' 
                : 'bg-muted text-muted-foreground'
            }`}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
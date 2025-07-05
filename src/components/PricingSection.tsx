import { Button } from "@/components/ui/button";
import { Check, Zap, Crown } from "lucide-react";

export function PricingSection() {
  return (
    <section className="py-20 px-4 section-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-gradient-purple">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Start your AI girlfriend experience today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Subscription */}
          <div className="bg-gradient-card p-8 rounded-2xl border-2 border-primary/50 relative overflow-hidden pulse-glow">
            <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-xs font-bold text-white">
              RECOMMENDED
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Crown className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-white">Premium Access</h3>
              </div>
              
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-white">$15</span>
                <span className="text-xl text-gray-400 ml-2">/month</span>
              </div>
              
              <p className="text-primary font-semibold">
                Includes 2,000 messages (~65 per day)
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                "Access to all 4 AI girlfriends",
                "2,000 messages per month included", 
                "Relationship progression system",
                "Memory of all conversations",
                "Voice message support",
                "Priority response times",
                "Exclusive content unlocks"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="w-full btn-primary-glow text-white font-semibold py-4 text-lg">
              Start Your Journey
            </Button>
          </div>
          
          {/* Credit Packs */}
          <div className="bg-gradient-card p-8 rounded-2xl border border-border/50">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Extra Credits</h3>
              </div>
              
              <p className="text-gray-300">
                Need more messages? Add credit packs anytime.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 bg-muted/10 rounded-lg border border-border/30">
                <div>
                  <div className="font-semibold text-white">500 Messages</div>
                  <div className="text-sm text-gray-400">Perfect for casual chats</div>
                </div>
                <div className="text-xl font-bold text-white">$5</div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-muted/10 rounded-lg border border-border/30">
                <div>
                  <div className="font-semibold text-white">1,200 Messages</div>
                  <div className="text-sm text-gray-400">Most popular add-on</div>
                </div>
                <div className="text-xl font-bold text-white">$10</div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-muted/10 rounded-lg border border-border/30">
                <div>
                  <div className="font-semibold text-white">2,500 Messages</div>
                  <div className="text-sm text-gray-400">For deep connections</div>
                </div>
                <div className="text-xl font-bold text-white">$18</div>
              </div>
            </div>
            
            <p className="text-center text-gray-400 text-sm mb-6">
              Credits never expire and work with any AI girlfriend
            </p>
            
            <Button variant="outline" className="w-full btn-ghost-glow text-white border-primary/30 py-4 text-lg">
              Buy Credits
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            No hidden fees • Cancel anytime • Secure payment processing
          </p>
        </div>
      </div>
    </section>
  );
}
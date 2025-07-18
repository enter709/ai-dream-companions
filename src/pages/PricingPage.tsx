import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState<'subscription' | 'packs'>('subscription');

  const pricingTiers = [
    {
      name: "Basic",
      price: "$14",
      decimal: ".99",
      period: "/month",
      description: "Dip your toes in",
      features: [
        { number: "1,200", desc: "messages monthly" },
        { number: "All 4", desc: "girlfriends included" },
        { number: "Bronze to Diamond", desc: "full progression" }
      ],
      cta: "Start Free",
      variant: "ghost",
      popular: false,
      bg: "bg-[#1A1A1A]"
    },
    {
      name: "Plus",
      price: "$24",
      decimal: ".99",
      period: "/month",
      description: "Where most find love",
      features: [
        { number: "2,500", desc: "messages monthly" },
        { number: "2x faster", desc: "image unlocks" },
        { number: "Priority", desc: "response times" }
      ],
      cta: "Start Free Trial",
      variant: "primary",
      popular: true,
      bg: "bg-gradient-to-br from-purple-900/20 to-purple-800/20",
      social: "Chosen by 73% of members"
    },
    {
      name: "Max",
      price: "$44",
      decimal: ".99",
      period: "/month",
      description: "Become irreplaceable",
      features: [
        { number: "6,000", desc: "messages monthly" },
        { number: "Instant", desc: "image unlocks" },
        { number: "Early access", desc: "new features" }
      ],
      cta: "Go All In",
      variant: "premium",
      popular: false,
      bg: "bg-black border border-purple-500/50",
      social: "For the devoted few"
    }
  ];

  const messagePacks = [
    {
      messages: "500 messages",
      price: "$4.99",
      badge: null
    },
    {
      messages: "2,000 messages",
      price: "$14.99",
      badge: "25% savings"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Background gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-purple-800/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        <div className="max-w-6xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            All plans include perfect memory and the full journey from Bronze to Black Diamond
          </p>
        </div>
      </section>

      {/* Toggle Tabs */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="flex gap-10">
            <button
              onClick={() => setActiveTab('subscription')}
              className={`relative text-base font-medium transition-all duration-300 ${
                activeTab === 'subscription'
                  ? 'text-[#7C3AED]'
                  : 'text-[#666666] hover:text-white'
              }`}
            >
              Subscription Plans
              {activeTab === 'subscription' && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#7C3AED] transition-all duration-300"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('packs')}
              className={`relative text-base font-medium transition-all duration-300 ${
                activeTab === 'packs'
                  ? 'text-[#7C3AED]'
                  : 'text-[#666666] hover:text-white'
              }`}
            >
              Message Packs
              {activeTab === 'packs' && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#7C3AED] transition-all duration-300"></div>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      {activeTab === 'subscription' && (
        <section className="py-12 px-4 mb-24 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-24 items-start">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={tier.name} 
                  className={`relative group transition-all duration-300 hover:-translate-y-1 ${
                    tier.popular ? 'md:-translate-y-4' : ''
                  }`}
                >
                  {/* Premium glow for Plus plan */}
                  {tier.popular && (
                    <div className="absolute inset-0 bg-purple-500/50 rounded-2xl blur-[100px] scale-110 opacity-50 group-hover:opacity-60 transition-opacity duration-300"></div>
                  )}
                  
                  <Card className={`relative ${tier.bg} backdrop-blur-sm border-none shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden`}>
                    <CardHeader className="text-center pb-8 flex-none relative p-10">
                      {/* RECOMMENDED badge above plan name */}
                      {tier.popular && (
                        <div className="mb-2.5">
                          <span className="text-[#7C3AED] text-xs font-medium tracking-[0.1em] uppercase">
                            RECOMMENDED
                          </span>
                        </div>
                      )}
                      
                      {/* Plan name with different weights */}
                      <CardTitle className={`text-4xl mb-6 text-white tracking-wide ${
                        tier.name === 'Basic' ? 'font-normal' : 
                        tier.name === 'Plus' ? 'font-bold' : 'font-black'
                      }`}>
                        {tier.name}
                      </CardTitle>
                      
                      {/* Massive price display with proper sizing */}
                      <div className="mb-6">
                        <div className="flex items-baseline justify-center">
                          <span className="text-6xl md:text-7xl font-bold text-white">{tier.price}</span>
                          <span className="text-3xl text-gray-400 font-normal">{tier.decimal}</span>
                        </div>
                        <div className="text-gray-400 text-xs mt-1">{tier.period}</div>
                      </div>
                      
                      {/* Powerful description */}
                      <CardDescription className="text-gray-300 text-lg font-medium">
                        {tier.description}
                      </CardDescription>
                      
                      {/* Social proof */}
                      {tier.social && (
                        <p className="text-purple-300 text-sm mt-4 font-medium">{tier.social}</p>
                      )}
                    </CardHeader>
                    
                    <CardContent className="flex flex-col flex-1 p-10">
                      {/* Feature presentation with bolder numbers */}
                      <div className="space-y-6 flex-1 mb-8">
                        {tier.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="text-center">
                            <div className="text-2xl font-black text-white mb-1">{feature.number}</div>
                            <div className="text-gray-300 text-sm leading-relaxed">{feature.desc}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Enhanced CTA buttons */}
                      <Button 
                        className={`w-full h-14 text-base font-semibold transition-all duration-300 min-h-[48px] ${
                          tier.variant === 'ghost' 
                            ? 'bg-transparent border-2 border-gray-600 text-white hover:bg-white hover:text-black' 
                            : tier.variant === 'primary'
                            ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg hover:shadow-purple-500/30'
                            : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white shadow-lg hover:shadow-purple-500/40'
                        }`}
                      >
                        {tier.cta}
                        {tier.popular && <span className="ml-2 text-xs opacity-75">• Most Popular</span>}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Message Packs */}
      {activeTab === 'packs' && (
        <section className="py-20 px-4 mb-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-16">
              Need More Messages?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {messagePacks.map((pack, index) => (
                <Card key={index} className="bg-card/30 border-border/50 backdrop-blur-sm h-full flex flex-col">
                  <CardHeader className="text-center flex-1 flex flex-col justify-center py-8">
                    {pack.badge && (
                      <Badge className="self-center mb-4 bg-green-600 text-white text-xs">
                        {pack.badge}
                      </Badge>
                    )}
                    <CardTitle className="text-lg font-bold text-white mb-3">{pack.messages}</CardTitle>
                    <div className="text-2xl font-bold text-white">{pack.price}</div>
                  </CardHeader>
                  <CardContent className="pt-0 pb-6">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 text-sm">
                      Buy Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-12 text-sm">
              Message packs never expire and work with any plan
            </p>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default PricingPage;
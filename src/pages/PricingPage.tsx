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
      price: "$14.99",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "1,200 messages per month",
        "All 4 AI girlfriends",
        "Full progression system (Bronze to Black Diamond)",
        "Image unlocks with rank progression",
        "24/7 availability"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Plus",
      price: "$24.99",
      period: "/month",
      description: "Our most popular plan",
      features: [
        "2,500 messages per month",
        "Everything in Basic",
        "2x faster image unlocks",
        "Priority response times",
        "Weekend bonus messages"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Max",
      price: "$44.99",
      period: "/month",
      description: "For the ultimate experience",
      features: [
        "6,000 messages per month",
        "Everything in Plus",
        "Instant image unlocks at each rank",
        "Early access to new features",
        "Premium characters (coming soon)"
      ],
      cta: "Start Free Trial",
      popular: false
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
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
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
          <div className="bg-muted/20 p-1 rounded-full backdrop-blur-sm border border-border/50">
            <button
              onClick={() => setActiveTab('subscription')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'subscription'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Subscription Plans
            </button>
            <button
              onClick={() => setActiveTab('packs')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'packs'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Message Packs
            </button>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      {activeTab === 'subscription' && (
        <section className="py-12 px-4 mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {pricingTiers.map((tier, index) => (
                <Card key={tier.name} className="relative bg-card/50 border-border backdrop-blur-sm hover:bg-card/60 transition-colors h-full flex flex-col">
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-8 flex-none">
                    <CardTitle className="text-2xl font-bold text-white mb-4">{tier.name}</CardTitle>
                    <div className="flex items-baseline justify-center gap-1 mb-4">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400">{tier.period}</span>
                    </div>
                    <CardDescription className="text-gray-300">{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <ul className="space-y-4 flex-1 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base font-medium">
                      {tier.cta}
                    </Button>
                  </CardContent>
                </Card>
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
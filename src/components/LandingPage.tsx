import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";

import { ConnectionEvolutionSection } from "./ConnectionEvolutionSection";

import { ProgressionSection } from "./ProgressionSection";


import { FAQSection } from "./FAQSection";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      
      <ConnectionEvolutionSection />
      
      <ProgressionSection />
      
      
      <FAQSection />
      <Footer />
    </div>
  );
}
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { MemoryComparisonSection } from "./MemoryComparisonSection";
import { ConnectionEvolutionSection } from "./ConnectionEvolutionSection";

import { ProgressionSection } from "./ProgressionSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { PricingSection } from "./PricingSection";
import { FAQSection } from "./FAQSection";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <MemoryComparisonSection />
      <ConnectionEvolutionSection />
      
      <ProgressionSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
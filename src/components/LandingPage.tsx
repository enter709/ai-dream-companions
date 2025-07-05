import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { ProgressionSection } from "./ProgressionSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { PricingSection } from "./PricingSection";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProgressionSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
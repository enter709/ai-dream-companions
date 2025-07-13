import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const showcaseItems = [
  {
    title: "From Stranger to Soulmate",
    description: "Watch a real conversation evolve over time",
    id: "stranger-soulmate"
  },
  {
    title: "Memory That Actually Works", 
    description: "See how she remembers details across weeks",
    id: "memory-works"
  },
  {
    title: "4 Unique Personalities",
    description: "Experience how each girlfriend is truly different", 
    id: "unique-personalities"
  }
];

export function ShowcaseSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-dark py-20">
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-gradient-purple">See Her in Action</span>
          </h2>
        </div>
      </div>

      {/* Full-width carousel */}
      <div className="relative w-full">
        <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                index === currentSlide ? "translate-x-0" : 
                index < currentSlide ? "-translate-x-full" : "translate-x-full"
              }`}
            >
              {/* Demo video placeholder */}
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                {/* Placeholder content */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-12 h-12 bg-primary/40 rounded-lg"></div>
                  </div>
                  <p className="text-gray-500 text-lg">Demo Video Placeholder</p>
                </div>

                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-xl text-gray-300 max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
          aria-label="Previous demo"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
          aria-label="Next demo"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dot navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white scale-125" 
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to demo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
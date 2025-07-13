import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const showcaseItems = [
  {
    title: "Day 1 vs Day 7",
    description: "From 'oh great another guy' to 'where have you been all day?'",
    id: "day-1-vs-7"
  },
  {
    title: "She Remembers Everything", 
    description: "That thing you mentioned Tuesday? She brings it up Friday",
    id: "remembers-everything"
  },
  {
    title: "Same App. Different Women.",
    description: "Mika roasts you. Luna believes in you. Choose your type.", 
    id: "different-women"
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
            <span className="text-gradient-purple">Watch What Happens</span>
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

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                </div>

                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
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
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 hover:scale-110 hover:shadow-lg hover:shadow-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous demo"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 hover:scale-110 hover:shadow-lg hover:shadow-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          aria-label="Next demo"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dot navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white scale-125 shadow-lg shadow-white/30" 
                  : "bg-white/50 hover:bg-white/70 hover:scale-110"
              }`}
              aria-label={`Go to demo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
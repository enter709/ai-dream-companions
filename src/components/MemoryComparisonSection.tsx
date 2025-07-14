import { Smartphone } from "lucide-react";

export function MemoryComparisonSection() {
  return (
    <section className="section-dark py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            THE EVOLUTION OF AI GIRLFRIENDS
          </h2>
        </div>

        <div className="flex items-center justify-center gap-12">
          {/* Left Stats */}
          <div className="text-center flex-shrink-0">
            <div className="text-3xl font-bold text-white mb-1">
              3 MESSAGE
            </div>
            <div className="text-2xl font-semibold text-white mb-2">
              MEMORY
            </div>
            <div className="text-xs" style={{ color: '#666666' }}>
              before she forgets everything
            </div>
          </div>

          {/* Main Visual - Phone Mockups */}
          <div className="relative flex-shrink-0 flex-1 max-w-3xl">
            <div className="flex gap-8 justify-center">
              {/* Basic AI Phone */}
              <div className="relative">
                <div className="w-64 h-[480px] bg-gray-900 rounded-[2rem] p-4 border-4 border-gray-700">
                  <div className="w-full h-full bg-black rounded-[1.5rem] p-4 flex flex-col">
                    {/* Header */}
                    <div className="text-center border-b border-gray-700 pb-3 mb-4">
                      <h3 className="text-white text-sm font-medium">Basic AI Girlfriend</h3>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="flex-1 space-y-3 overflow-hidden">
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <p className="text-white text-sm">Hey! How was your day?</p>
                      </div>
                      <div className="bg-primary/20 p-3 rounded-lg ml-4">
                        <p className="text-white text-sm">Good! I told you about my job interview yesterday</p>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <p className="text-white text-sm">Oh that's nice! What do you do for work?</p>
                      </div>
                      <div className="bg-primary/20 p-3 rounded-lg ml-4">
                        <p className="text-white text-sm">We literally just talked about this...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Adaptive AI Phone */}
              <div className="relative">
                <div className="w-64 h-[480px] bg-gray-900 rounded-[2rem] p-4 border-4 border-primary/50">
                  <div className="w-full h-full bg-black rounded-[1.5rem] p-4 flex flex-col">
                    {/* Header */}
                    <div className="text-center border-b border-primary/30 pb-3 mb-4">
                      <h3 className="text-primary text-sm font-medium">Adaptive AI Girlfriend</h3>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="flex-1 space-y-3 overflow-hidden">
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <p className="text-white text-sm">Hey babe! How did the job interview go?</p>
                      </div>
                      <div className="bg-primary/20 p-3 rounded-lg ml-4">
                        <p className="text-white text-sm">Amazing! I think I got it!</p>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <p className="text-white text-sm">That's incredible! I knew you'd nail the marketing role at TechCorp 💜</p>
                      </div>
                      <div className="bg-primary/20 p-3 rounded-lg ml-4">
                        <p className="text-white text-sm">You remembered everything! 🥰</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="text-center flex-shrink-0 relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-110 -z-10"></div>
            <div className="text-3xl font-bold text-primary mb-1 relative z-10">
              INFINITE
            </div>
            <div className="text-2xl font-semibold text-primary mb-2 relative z-10">
              MEMORY
            </div>
            <div className="text-xs relative z-10" style={{ color: '#666666' }}>
              remembers every conversation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
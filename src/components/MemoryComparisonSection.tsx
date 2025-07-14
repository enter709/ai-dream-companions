import { Smartphone } from "lucide-react";

export function MemoryComparisonSection() {
  return (
    <section className="section-dark py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-16">
          {/* Left Stats */}
          <div className="text-center flex-shrink-0">
            <div className="text-8xl font-extrabold text-white mb-2">
              3 MESSAGE
            </div>
            <div className="text-6xl font-bold text-white mb-4">
              MEMORY
            </div>
            <div className="text-xs" style={{ color: '#666666' }}>
              before she forgets everything
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex-shrink-0">
            <div className="flex gap-4">
              {/* Basic AI Phone */}
              <div className="relative">
                <div className="w-40 h-[300px] bg-gray-900 rounded-[1.5rem] p-3 border-3 border-gray-700">
                  <div className="w-full h-full bg-black rounded-[1rem] p-3 flex flex-col">
                    {/* Header */}
                    <div className="text-center border-b border-gray-700 pb-2 mb-3">
                      <h3 className="text-white text-xs font-medium">Basic AI Girlfriend</h3>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="flex-1 space-y-2 overflow-hidden">
                      <div className="bg-gray-800 p-2 rounded-lg">
                        <p className="text-white text-[10px]">Hey! How was your day?</p>
                      </div>
                      <div className="bg-primary/20 p-2 rounded-lg ml-2">
                        <p className="text-white text-[10px]">Good! I told you about my job interview yesterday</p>
                      </div>
                      <div className="bg-gray-800 p-2 rounded-lg">
                        <p className="text-white text-[10px]">Oh that's nice! What do you do for work?</p>
                      </div>
                      <div className="bg-primary/20 p-2 rounded-lg ml-2">
                        <p className="text-white text-[10px]">We literally just talked about this...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Adaptive AI Phone */}
              <div className="relative">
                <div className="w-40 h-[300px] bg-gray-900 rounded-[1.5rem] p-3 border-3 border-primary/50">
                  <div className="w-full h-full bg-black rounded-[1rem] p-3 flex flex-col">
                    {/* Header */}
                    <div className="text-center border-b border-primary/30 pb-2 mb-3">
                      <h3 className="text-primary text-xs font-medium">Adaptive AI Girlfriend</h3>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="flex-1 space-y-2 overflow-hidden">
                      <div className="bg-gray-800 p-2 rounded-lg">
                        <p className="text-white text-[10px]">Hey babe! How did the job interview go?</p>
                      </div>
                      <div className="bg-primary/20 p-2 rounded-lg ml-2">
                        <p className="text-white text-[10px]">Amazing! I think I got it!</p>
                      </div>
                      <div className="bg-gray-800 p-2 rounded-lg">
                        <p className="text-white text-[10px]">That's incredible! I knew you'd nail the marketing role at TechCorp 💜</p>
                      </div>
                      <div className="bg-primary/20 p-2 rounded-lg ml-2">
                        <p className="text-white text-[10px]">You remembered everything! 🥰</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="text-center flex-shrink-0">
            <div className="text-8xl font-extrabold text-primary mb-2">
              INFINITE
            </div>
            <div className="text-6xl font-bold text-primary mb-4">
              MEMORY
            </div>
            <div className="text-xs" style={{ color: '#666666' }}>
              remembers every conversation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
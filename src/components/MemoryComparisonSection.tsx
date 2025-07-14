import { Smartphone } from "lucide-react";

export function MemoryComparisonSection() {
  return (
    <section className="section-dark py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-16">
          {/* Left Stats */}
          <div className="text-center flex-shrink-0">
            <div className="text-4xl font-bold text-white mb-2">
              3 MESSAGE
            </div>
            <div className="text-4xl font-bold text-white mb-4">
              MEMORY
            </div>
            <div className="text-sm text-gray-400">
              before she forgets everything
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex-shrink-0">
            <div className="flex gap-4">
              {/* Basic AI Phone */}
              <div className="relative">
                <div className="w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-4 border-4 border-gray-700">
                  <div className="w-full h-full bg-black rounded-[1.5rem] p-4 flex flex-col">
                    {/* Header */}
                    <div className="text-center border-b border-gray-700 pb-3 mb-4">
                      <h3 className="text-white text-sm font-medium">Basic AI Girlfriend</h3>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="flex-1 space-y-3 overflow-hidden">
                      <div className="bg-gray-800 p-3 rounded-xl">
                        <p className="text-white text-xs">Hey! How was your day?</p>
                      </div>
                      <div className="bg-primary/20 p-3 rounded-xl ml-4">
                        <p className="text-white text-xs">Good! I told you about my job interview yesterday</p>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-xl">
                        <p className="text-white text-xs">Oh that's nice! What do you do for work?</p>
                      </div>
                      <div className="bg-primary/20 p-3 rounded-xl ml-4">
                        <p className="text-white text-xs">We literally just talked about this...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Adaptive AI Phone */}
              <div className="relative">
                <div className="w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-4 border-4 border-primary/50">
                  <div className="w-full h-full bg-black rounded-[1.5rem] p-4 flex flex-col">
                    {/* Header */}
                    <div className="text-center border-b border-primary/30 pb-3 mb-4">
                      <h3 className="text-primary text-sm font-medium">Adaptive AI Girlfriend</h3>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="flex-1 space-y-3 overflow-hidden">
                      <div className="bg-gray-800 p-3 rounded-xl">
                        <p className="text-white text-xs">Hey babe! How did the job interview go?</p>
                      </div>
                      <div className="bg-primary/20 p-3 rounded-xl ml-4">
                        <p className="text-white text-xs">Amazing! I think I got it!</p>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-xl">
                        <p className="text-white text-xs">That's incredible! I knew you'd nail the marketing role at TechCorp 💜</p>
                      </div>
                      <div className="bg-primary/20 p-3 rounded-xl ml-4">
                        <p className="text-white text-xs">You remembered everything! 🥰</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="text-center flex-shrink-0">
            <div className="text-4xl font-bold text-primary mb-2">
              INFINITE
            </div>
            <div className="text-4xl font-bold text-primary mb-4">
              MEMORY
            </div>
            <div className="text-sm text-gray-400">
              remembers every conversation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
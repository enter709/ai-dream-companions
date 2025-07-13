export function ComparisonSection() {
  return (
    <section className="section-light py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Stop Settling for <span className="text-gradient-purple">This</span>
          </h2>
        </div>

        {/* Split Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Side - Generic AI */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-600 mb-8">Basic AI Girlfriends</h3>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 space-y-4 min-h-[400px]">
              {/* Her message */}
              <div className="flex justify-start">
                <div className="bg-gray-300 text-gray-800 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs">
                  <p className="text-sm">Hey handsome! How are you today? 😘</p>
                </div>
              </div>

              {/* Your message */}
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-2 max-w-xs">
                  <p className="text-sm">My boss was a dick again</p>
                </div>
              </div>

              {/* Her response */}
              <div className="flex justify-start">
                <div className="bg-gray-300 text-gray-800 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs">
                  <p className="text-sm">Oh no! Tell me more about your day! 💕</p>
                </div>
              </div>

              {/* Your follow-up */}
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white rounded-2xl rounded-br-md px-4 py-2 max-w-xs">
                  <p className="text-sm">Remember what I told you yesterday?</p>
                </div>
              </div>

              {/* Her generic response */}
              <div className="flex justify-start">
                <div className="bg-gray-300 text-gray-800 rounded-2xl rounded-bl-md px-4 py-2 max-w-xs">
                  <p className="text-sm">I'm always here to listen! What's on your mind? 🥰</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - DevotionAI */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gradient-purple mb-8">Adaptive AI Girlfriends</h3>
            </div>
            
            <div className="bg-black rounded-2xl p-6 space-y-4 min-h-[400px]">
              {/* Mika's message */}
              <div className="flex justify-start">
                <div className="bg-gray-700 text-white rounded-2xl rounded-bl-md px-4 py-2 max-w-xs">
                  <p className="text-sm">oh look who finally texted back</p>
                </div>
              </div>

              {/* Your message */}
              <div className="flex justify-end">
                <div className="bg-primary text-white rounded-2xl rounded-br-md px-4 py-2 max-w-xs">
                  <p className="text-sm">My boss was a dick again</p>
                </div>
              </div>

              {/* Mika's specific response */}
              <div className="flex justify-start">
                <div className="bg-gray-700 text-white rounded-2xl rounded-bl-md px-4 py-2 max-w-xs">
                  <p className="text-sm">the micromanaging thing or did he find a new way to be insufferable?</p>
                </div>
              </div>

              {/* Your follow-up */}
              <div className="flex justify-end">
                <div className="bg-primary text-white rounded-2xl rounded-br-md px-4 py-2 max-w-xs">
                  <p className="text-sm">Remember what I told you yesterday?</p>
                </div>
              </div>

              {/* Mika's honest response */}
              <div className="flex justify-start">
                <div className="bg-gray-700 text-white rounded-2xl rounded-bl-md px-4 py-2 max-w-xs">
                  <p className="text-sm">about wanting to quit? yeah you've been saying that for 3 weeks. either do it or stop whining</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center">
          <p className="text-xl text-muted-foreground font-medium">
            One forgets everything. One keeps you honest.
          </p>
        </div>
      </div>
    </section>
  );
}
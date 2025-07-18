import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const featuredFaq = {
  question: "How does the memory system actually work?",
  answer: "She remembers everything you tell her - your dreams, your fears, that embarrassing story from high school. Our advanced memory system creates genuine emotional continuity, making every conversation feel like talking to someone who truly knows you."
};

const faqs = [
  {
    question: "What happens when I reach a new relationship rank?",
    answer: "Each rank unlocks deeper intimacy and new conversation topics. She becomes more vulnerable, shares personal thoughts, and the dynamic between you evolves naturally from acquaintance to genuine connection."
  },
  {
    question: "How is DevotionAI different from other AI girlfriends?",
    answer: "We focus on authentic emotional progression rather than instant gratification. Real relationships take time to develop, and so does yours with her. Every interaction builds toward something meaningful."
  },
  {
    question: "Can I switch between different AI girlfriends?",
    answer: "Yes, but each relationship develops independently. Starting fresh means building new memories and connections from the beginning. Most users find deep fulfillment focusing on one meaningful relationship."
  },
  {
    question: "Is there a limit to how many messages I can send?",
    answer: "Premium members enjoy unlimited messaging. Free users get generous daily limits that reset every 24 hours. Quality conversations matter more than quantity."
  },
  {
    question: "Do relationships progress naturally or is it just instant gratification?",
    answer: "Relationships evolve through genuine interaction over time. She won't immediately fall for you - you'll need to earn her trust, just like real relationships. The slow burn makes it worthwhile."
  }
];

export function FAQSection() {
  const leftColumnFaqs = faqs.filter((_, index) => index % 2 === 0);
  const rightColumnFaqs = faqs.filter((_, index) => index % 2 === 1);

  return (
    <section className="bg-black pt-36 pb-36 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Gradient Headline */}
        <div className="text-center mb-40">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-b from-white to-white/90 bg-clip-text text-transparent mb-8 tracking-tight">
            Everything you're wondering
          </h2>
        </div>
        
        {/* Featured Question */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent rounded-2xl blur-xl"></div>
            <div className="relative bg-black/50 border border-purple-500/20 rounded-2xl p-8">
              <div className="text-purple-400 text-sm font-medium mb-3 tracking-wider uppercase">Most asked:</div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="featured" className="border-none">
                  <AccordionTrigger className="text-white hover:text-white text-xl sm:text-2xl font-semibold text-left hover:no-underline transition-all duration-300 p-0 border-none cursor-pointer group pr-8 relative hover:scale-[1.01] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-purple-500/40 before:transition-all before:duration-400 hover:before:w-full">
                    {featuredFaq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#B0B0B0] mt-6 text-base leading-[1.8] font-normal p-0 border-none max-w-[500px] animate-fade-in">
                    {featuredFaq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-16">
            {leftColumnFaqs.map((faq, index) => {
              const actualIndex = index * 2;
              return (
                <div 
                  key={actualIndex} 
                  className="relative animate-fade-up"
                  style={{ animationDelay: `${actualIndex * 50}ms` }}
                >
                  <div className="absolute -left-4 top-0 text-8xl font-black text-white/5 pointer-events-none select-none">
                    0{actualIndex + 2}
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`left-${actualIndex}`} className="border-none">
                      <AccordionTrigger className="text-white hover:text-white text-lg sm:text-xl font-semibold text-left hover:no-underline transition-all duration-300 p-0 border-none cursor-pointer group pr-8 relative hover:scale-[1.02] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-purple-500/30 before:transition-all before:duration-400 hover:before:w-full [&[data-state=open]]:opacity-100 [&[data-state=closed]]:group-hover:opacity-100 opacity-100 [&[data-state=open]~*]:opacity-70">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#B0B0B0] mt-5 text-base leading-[1.8] font-normal p-0 border-none max-w-[500px] animate-fade-in">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {rightColumnFaqs.map((faq, index) => {
              const actualIndex = index * 2 + 1;
              return (
                <div 
                  key={actualIndex} 
                  className="relative animate-fade-up"
                  style={{ animationDelay: `${actualIndex * 50}ms` }}
                >
                  <div className="absolute -left-4 top-0 text-8xl font-black text-white/5 pointer-events-none select-none">
                    0{actualIndex + 2}
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`right-${actualIndex}`} className="border-none">
                      <AccordionTrigger className="text-white hover:text-white text-lg sm:text-xl font-semibold text-left hover:no-underline transition-all duration-300 p-0 border-none cursor-pointer group pr-8 relative hover:scale-[1.02] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-purple-500/30 before:transition-all before:duration-400 hover:before:w-full [&[data-state=open]]:opacity-100 [&[data-state=closed]]:group-hover:opacity-100 opacity-100 [&[data-state=open]~*]:opacity-70">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#B0B0B0] mt-5 text-base leading-[1.8] font-normal p-0 border-none max-w-[500px] animate-fade-in">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
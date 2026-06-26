import React, { useState, useRef } from 'react';
import { ChevronDownIcon } from './Icons';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const faqs: FAQItem[] = [
    {
      question: 'How does this platform compare to traditional pipeline systems?',
      answer: 'Unlike static connectors that crash when database schemas shift, our platform uses autonomous mapping. It self-adjusts ingestion tables, hashes sensitive columns automatically, and handles continuous high-volume streams with sub-millisecond latencies.'
    },
    {
      question: 'Are my database credentials and operational logs secure?',
      answer: 'Yes. We utilize fully isolated virtual environments. Credentials are stored with AES-256-GCM encryption in localized hardware security modules (HSM). We offer TLS 1.3 tunnels and SOC2-compliant field tokenization to ensure raw PII never leaks.'
    },
    {
      question: 'Can we scale throughput dynamically without performance hits?',
      answer: 'Absolutely. Built on top of a highly optimized streaming layer, our engine auto-scales worker nodes horizontally under sudden load increases. We throttle read/write queries dynamically to guarantee downstream databases never experience bottleneck spikes.'
    },
    {
      question: 'How does the AI-powered schema auto-healing operate?',
      answer: 'When a upstream schema modifies (e.g., column renamed or datatype changed), the AI identifies the deviation, evaluates downstream dependencies, maps the properties correctly, and alerts the engineering channel, avoiding pipeline downtime.'
    },
    {
      question: 'Is there support for custom webhooks and Slack alerts?',
      answer: 'Yes. Every alert triggers an automated event dispatch. You can integrate our webhooks with Slack, Teams, PagerDuty, or custom servers instantly, using custom conditional rules to prioritize high-severity events.'
    }
  ];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % faqs.length;
      triggerRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + faqs.length) % faqs.length;
      triggerRefs.current[prevIndex]?.focus();
    }
  };

  return (
    <section id="faq" className="relative bg-[#172B36] py-24 md:py-32 overflow-hidden border-b border-[#114C5A]/15">
      {/* Background decoration */}
      <div className="absolute top-[40%] right-[-10%] w-[35rem] h-[35rem] bg-[#114C5A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#114C5A]/50 bg-[#114C5A]/20 mb-4">
            <span className="font-mono text-[10px] tracking-wider text-[#FF9932] uppercase font-bold">
              Product Intelligence
            </span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F1F6F4] tracking-tight leading-tight mb-6">
            Frequently Asked <br />
            <span className="text-[#FF9932]">Questions</span>
          </h2>
        </div>

        {/* FAQ list with full ARIA compliance */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#172B36] border-[#FFC801]/40 shadow-xl'
                    : 'bg-[#172B36]/40 border-[#114C5A]/20 hover:border-[#114C5A]/40'
                }`}
              >
                {/* Trigger Question Header */}
                <button
                  ref={(el) => { triggerRefs.current[index] = el; }}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#FFC801] cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                  id={`faq-trigger-${index}`}
                >
                  <span className="font-mono text-base md:text-lg font-bold text-[#F1F6F4] tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#114C5A]/30 flex items-center justify-center text-[#F1F6F4]/80 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#FFC801] border-[#FFC801]/30' : ''
                    }`}
                  >
                    <ChevronDownIcon size={16} />
                  </div>
                </button>

                {/* Answer Content Panel with CSS grid height expand */}
                <div
                  id={`faq-content-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 border-t border-[#114C5A]/10 font-sans text-sm md:text-base text-[#F1F6F4]/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

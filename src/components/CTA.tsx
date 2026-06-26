import React from 'react';
import { SparklesIcon, ArrowRightIcon } from './Icons';

export const CTA: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#172B36] py-24 md:py-32 overflow-hidden border-b border-[#114C5A]/15">
      {/* Dynamic backdrop glow bubbles */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-[#FF9932]/10 rounded-full blur-[160px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[30%] left-[30%] w-[30rem] h-[30rem] bg-[#114C5A]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Sparkle emblem */}
        <div className="w-14 h-14 rounded-2xl bg-[#FFC801]/10 border border-[#FFC801]/30 flex items-center justify-center text-[#FFC801] mb-8 animate-bounce" style={{ animationDuration: '6s' }}>
          <SparklesIcon size={28} />
        </div>

        {/* Headline */}
        <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F1F6F4] tracking-tight leading-tight mb-6 max-w-3xl">
          Supercharge your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC801] via-[#FF9932] to-[#F1F6F4]">
            data operations
          </span>
        </h2>

        {/* Description */}
        <p className="font-sans text-[#F1F6F4]/70 text-base md:text-lg max-w-xl leading-relaxed mb-10">
          Join high-growth engineering teams deploying secure, self-healing data pipelines with zero maintenance overhead.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full sm:w-auto">
          <button
            onClick={() => scrollToSection('pricing')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFC801] text-[#172B36] font-sans font-bold hover:bg-[#FF9932] hover:text-white transition-all duration-300 shadow-xl shadow-[#FFC801]/10 hover:shadow-[#FF9932]/25 flex items-center justify-center gap-2 group cursor-pointer"
          >
            Start Free Trial
            <ArrowRightIcon className="group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#114C5A]/30 border border-[#114C5A] text-[#F1F6F4]/90 font-sans font-semibold hover:bg-[#114C5A]/70 transition-all duration-300 cursor-pointer"
          >
            Schedule Technical Demo
          </button>
        </div>

        {/* Guarantee text */}
        <span className="font-mono text-[10px] text-[#F1F6F4]/40 uppercase tracking-widest font-bold">
          Free 14-day trial • No Credit Card Required • Sub-second setup
        </span>

      </div>
    </section>
  );
};

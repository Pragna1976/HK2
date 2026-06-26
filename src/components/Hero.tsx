import React, { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon, SparklesIcon } from './Icons';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [statsCounter, setStatsCounter] = useState(1);

  // Stats counter micro-interaction on render
  useEffect(() => {
    let start = 1;
    const end = 428;
    const duration = 1200;
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    
    const timer = setInterval(() => {
      current += increment;
      setStatsCounter(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate mouse offset from center of container
    const x = (clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    
    containerRef.current.style.setProperty('--mx', `${x}`);
    containerRef.current.style.setProperty('--my', `${y}`);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    // Smooth return to center
    containerRef.current.style.setProperty('--mx', '0');
    containerRef.current.style.setProperty('--my', '0');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-[#172B36] flex flex-col justify-center items-center overflow-hidden pt-32 pb-24 px-6 md:px-8"
      style={{
        '--mx': '0',
        '--my': '0',
      } as React.CSSProperties}
    >
      {/* Background grid texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(#F1F6F4 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Abstract Animated Glow Blobs */}
      <div className="absolute top-[15%] left-[10%] w-[35rem] h-[35rem] bg-[#114C5A]/30 rounded-full blur-[130px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[40rem] h-[40rem] bg-[#FF9932]/10 rounded-full blur-[160px] animate-pulse-slower pointer-events-none" />
      <div className="absolute top-[40%] left-[45%] w-[30rem] h-[30rem] bg-[#FFC801]/10 rounded-full blur-[140px] animate-pulse-slow pointer-events-none" />

      {/* Floating Sparkles in the background */}
      <div className="absolute top-[25%] right-[20%] text-[#FFC801]/30 animate-bounce pointer-events-none" style={{ animationDuration: '8s' }}>
        <SparklesIcon size={32} />
      </div>
      <div className="absolute bottom-[30%] left-[15%] text-[#FF9932]/20 animate-bounce pointer-events-none" style={{ animationDuration: '11s' }}>
        <SparklesIcon size={24} />
      </div>

      {/* Content wrapper with fade + scale entrance */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center animate-fade-scale-in">
        
        {/* Top pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#114C5A] bg-[#172B36]/60 backdrop-blur-md mb-8 hover:border-[#FFC801]/50 transition-colors duration-300">
          <span className="flex h-2 w-2 rounded-full bg-[#FF9932] animate-ping" />
          <span className="font-mono text-xs font-semibold tracking-wider text-[#F1F6F4]/90 uppercase">
            Platform Release 3.0 • Automated AI Pipelines
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-mono font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F1F6F4] tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Automate Data. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC801] via-[#FF9932] to-[#F1F6F4]">
            Accelerate Decisions.
          </span>
        </h1>

        {/* Supporting Paragraph */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#F1F6F4]/70 max-w-2xl mb-10 leading-relaxed">
          The ultimate engine to ingestion, transformation, and predictive intelligence. Build high-performance pipelines in seconds with zero operational overhead.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 z-20">
          <button
            onClick={() => scrollToSection('pricing')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFC801] text-[#172B36] font-sans font-bold hover:bg-[#FF9932] hover:text-white transition-all duration-300 shadow-lg shadow-[#FFC801]/10 hover:shadow-[#FF9932]/20 flex items-center justify-center gap-2 group hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Start Free 
            <ArrowRightIcon className="group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#114C5A]/40 border border-[#114C5A] text-[#F1F6F4] font-sans font-semibold hover:bg-[#114C5A]/80 transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            Book Demo
          </button>
        </div>

        {/* Dashboard Preview Section with Mouse Parallax & Floating Elements */}
        <div className="relative w-full max-w-4xl mx-auto rounded-2xl border border-[#114C5A]/40 bg-[#172B36]/60 backdrop-blur-md p-2 md:p-4 shadow-2xl shadow-[#114C5A]/20">
          {/* Inner Glow Border */}
          <div className="absolute inset-0 rounded-2xl border border-gradient-to-r from-[#FFC801]/10 to-[#114C5A]/20 pointer-events-none" />
          
          {/* Mock Window Controls */}
          <div className="flex items-center justify-between border-b border-[#114C5A]/20 pb-3 mb-4 px-2 md:px-4">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF9932]/80" />
              <span className="w-3 h-3 rounded-full bg-[#FFC801]/80" />
              <span className="w-3 h-3 rounded-full bg-[#114C5A]/80" />
            </div>
            <div className="font-mono text-[10px] text-[#F1F6F4]/40 tracking-wider">
              pipeline-monitoring-engine // v3.4.0
            </div>
            <div className="w-12 h-2" />
          </div>

          {/* Interactive Parallax Dashboard Body */}
          <div className="relative aspect-[16/9] bg-[#172B36]/90 rounded-xl overflow-hidden grid grid-cols-12 gap-3 md:gap-4 p-4 text-left">
            
            {/* Sidebar element */}
            <div className="col-span-3 border-r border-[#114C5A]/20 pr-4 hidden md:flex flex-col gap-3">
              <div className="h-6 w-full bg-[#114C5A]/20 rounded-md animate-pulse" />
              <div className="h-4 w-3/4 bg-[#114C5A]/10 rounded-md" />
              <div className="h-4 w-5/6 bg-[#114C5A]/10 rounded-md" />
              <div className="h-4 w-2/3 bg-[#114C5A]/10 rounded-md" />
              <div className="mt-auto h-8 w-full bg-[#114C5A]/30 rounded-lg flex items-center justify-center">
                <span className="font-mono text-[9px] text-[#FFC801] font-semibold">● Engine Online</span>
              </div>
            </div>

            {/* Main view container */}
            <div className="col-span-12 md:col-span-9 flex flex-col gap-4">
              {/* Header metrics */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#114C5A]/10 border border-[#114C5A]/30">
                  <div className="font-mono text-[9px] text-[#F1F6F4]/50">Ingestion rate</div>
                  <div className="font-mono text-sm md:text-base font-bold text-[#FFC801]">4,821 rps</div>
                </div>
                <div className="p-3 rounded-xl bg-[#114C5A]/10 border border-[#114C5A]/30">
                  <div className="font-mono text-[9px] text-[#F1F6F4]/50">Transformation delay</div>
                  <div className="font-mono text-sm md:text-base font-bold text-[#FF9932]">0.42 ms</div>
                </div>
                <div className="p-3 rounded-xl bg-[#114C5A]/10 border border-[#114C5A]/30">
                  <div className="font-mono text-[9px] text-[#F1F6F4]/50">Precision score</div>
                  <div className="font-mono text-sm md:text-base font-bold text-emerald-400">99.998%</div>
                </div>
              </div>

              {/* Central Graph Visual (Interactive / Animated SVG nodes) */}
              <div className="relative flex-1 bg-[#114C5A]/5 rounded-xl border border-[#114C5A]/20 overflow-hidden p-4 flex flex-col justify-end">
                {/* SVG connection lines running across */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid background lines */}
                  <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#114C5A" strokeWidth="0.5" strokeDasharray="5 5" opacity="0.3" />
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#114C5A" strokeWidth="0.5" strokeDasharray="5 5" opacity="0.3" />
                  <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#114C5A" strokeWidth="0.5" strokeDasharray="5 5" opacity="0.3" />
                  
                  {/* Data pipeline line */}
                  <path
                    d="M -20 120 Q 120 40, 260 90 T 540 50 T 800 130"
                    fill="none"
                    stroke="url(#pipelineGradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="path-flow-animation"
                  />
                  
                  {/* Dynamic glow point */}
                  <circle cx="260" cy="90" r="4" fill="#FFC801" className="animate-ping" />
                  <circle cx="540" cy="50" r="4" fill="#FF9932" className="animate-ping" />

                  <defs>
                    <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#114C5A" />
                      <stop offset="50%" stopColor="#FFC801" />
                      <stop offset="100%" stopColor="#FF9932" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Legend */}
                <div className="relative flex items-center justify-between z-10">
                  <div className="flex gap-4">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[9px] text-[#F1F6F4]/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFC801]" /> Raw logs
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[9px] text-[#F1F6F4]/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF9932]" /> AI Optimized model
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-[#F1F6F4]/40">Real-time throughput active</span>
                </div>
              </div>
            </div>

            {/* Parallax Floating Stats Card 1 (Top Left) */}
            <div
              className="absolute -top-12 -left-12 p-3 bg-[#172B36]/90 border border-[#FFC801]/30 rounded-xl shadow-xl backdrop-blur-md max-w-[150px] pointer-events-none hidden md:block"
              style={{
                transform: 'translate(calc(var(--mx, 0) * -25px), calc(var(--my, 0) * -25px))',
                transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              <div className="font-mono text-[9px] text-[#FFC801] font-bold uppercase tracking-wider mb-1">AUTOMATED PIPES</div>
              <div className="font-mono text-lg font-bold text-[#F1F6F4]">142 active</div>
              <div className="w-full bg-[#114C5A]/30 h-1 rounded-full mt-2 overflow-hidden">
                <div className="bg-gradient-to-r from-[#FFC801] to-[#FF9932] w-[80%] h-full rounded-full" />
              </div>
            </div>

            {/* Parallax Floating Stats Card 2 (Bottom Right) */}
            <div
              className="absolute -bottom-8 -right-12 p-4 bg-[#172B36]/95 border border-[#114C5A]/50 rounded-xl shadow-2xl backdrop-blur-md min-w-[200px] pointer-events-none hidden md:block"
              style={{
                transform: 'translate(calc(var(--mx, 0) * 30px), calc(var(--my, 0) * 30px))',
                transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-[9px] text-[#F1F6F4]/50">DATA VOLUME</span>
                <span className="text-[10px] text-[#FF9932] font-semibold">Live stream</span>
              </div>
              <div className="font-mono text-2xl font-black text-[#F1F6F4] tracking-tight">
                {(statsCounter / 10).toFixed(1)} TB
              </div>
              <div className="text-[10px] text-[#F1F6F4]/60 mt-1">Processed successfully today</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';

export const TrustedCompanies: React.FC = () => {
  const logos = [
    {
      name: 'KINETIC',
      svg: (
        <svg viewBox="0 0 120 30" className="h-6 w-auto text-[#F1F6F4]/50 hover:text-[#FFC801] transition-colors duration-200">
          <path d="M15 5 L5 25 H10 L20 5 Z M25 5 L35 25 H40 L30 5 Z" fill="currentColor" />
          <text x="48" y="21" fontFamily="JetBrains Mono" fontWeight="bold" fontSize="14" fill="currentColor">KINETIC</text>
        </svg>
      )
    },
    {
      name: 'NUCLEUS',
      svg: (
        <svg viewBox="0 0 120 30" className="h-6 w-auto text-[#F1F6F4]/50 hover:text-[#FF9932] transition-colors duration-200">
          <circle cx="15" cy="15" r="7" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <circle cx="15" cy="15" r="2" fill="currentColor" />
          <text x="32" y="21" fontFamily="JetBrains Mono" fontWeight="bold" fontSize="14" fill="currentColor">NUCLEUS</text>
        </svg>
      )
    },
    {
      name: 'VERTEX',
      svg: (
        <svg viewBox="0 0 120 30" className="h-6 w-auto text-[#F1F6F4]/50 hover:text-[#114C5A] transition-colors duration-200">
          <path d="M5 5 L15 25 L25 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="36" y="21" fontFamily="JetBrains Mono" fontWeight="bold" fontSize="14" fill="currentColor">VERTEX</text>
        </svg>
      )
    },
    {
      name: 'APEX',
      svg: (
        <svg viewBox="0 0 120 30" className="h-6 w-auto text-[#F1F6F4]/50 hover:text-[#FFC801] transition-colors duration-200">
          <path d="M15 5 L5 25 H25 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <text x="36" y="21" fontFamily="JetBrains Mono" fontWeight="bold" fontSize="14" fill="currentColor">APEX</text>
        </svg>
      )
    },
    {
      name: 'VORTEX',
      svg: (
        <svg viewBox="0 0 120 30" className="h-6 w-auto text-[#F1F6F4]/50 hover:text-[#FF9932] transition-colors duration-200">
          <path d="M5 15 C 5 5, 25 5, 25 15 C 25 25, 5 25, 5 15" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
          <text x="36" y="21" fontFamily="JetBrains Mono" fontWeight="bold" fontSize="14" fill="currentColor">VORTEX</text>
        </svg>
      )
    },
    {
      name: 'SYNAPSE',
      svg: (
        <svg viewBox="0 0 120 30" className="h-6 w-auto text-[#F1F6F4]/50 hover:text-[#FFC801] transition-colors duration-200">
          <path d="M5 15 H25 M15 5 V25" stroke="currentColor" strokeWidth="2" />
          <circle cx="15" cy="15" r="4" fill="currentColor" />
          <text x="36" y="21" fontFamily="JetBrains Mono" fontWeight="bold" fontSize="14" fill="currentColor">SYNAPSE</text>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#172B36] py-10 border-y border-[#114C5A]/20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-mono text-[11px] font-bold tracking-widest text-[#F1F6F4]/40 uppercase mb-8">
          Trusted by high-throughput teams worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

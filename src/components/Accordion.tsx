import React from 'react';
import { ChevronDownIcon } from './Icons';

interface AccordionItem {
  id: number;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  details: string[];
}

interface AccordionProps {
  items: AccordionItem[];
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
}

export const Accordion: React.FC<AccordionProps> = ({ items, activeIndex, setActiveIndex }) => {
  return (
    <div className="flex flex-col gap-4 w-full" aria-label="Feature Capabilities Accordion">
      {items.map((item, idx) => {
        const isOpen = activeIndex === idx;

        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-[#172B36] border-[#FFC801]/60 shadow-lg shadow-[#FFC801]/5'
                : 'bg-[#172B36]/50 border-[#114C5A]/20 hover:border-[#114C5A]/50'
            }`}
          >
            {/* Header / Trigger */}
            <button
              onClick={() => setActiveIndex(idx)}
              className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${idx}`}
              id={`accordion-trigger-${idx}`}
            >
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="font-mono text-xs font-semibold text-[#FFC801] tracking-wider uppercase">
                    {item.badge}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#114C5A]" />
                  <span className="font-mono text-xs text-[#F1F6F4]/50">0{idx + 1}</span>
                </div>
                <h3 className="font-mono text-lg font-bold text-[#F1F6F4] tracking-tight">
                  {item.title}
                </h3>
              </div>
              <div
                className={`w-8 h-8 rounded-full border border-[#114C5A]/30 flex items-center justify-center text-[#F1F6F4]/80 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-[#FFC801] border-[#FFC801]/30' : ''
                }`}
              >
                <ChevronDownIcon size={16} />
              </div>
            </button>

            {/* Content panel with CSS Grid transition for pure-CSS smooth height collapse */}
            <div
              id={`accordion-panel-${idx}`}
              role="region"
              aria-labelledby={`accordion-trigger-${idx}`}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-6 pt-0 border-t border-[#114C5A]/10">
                  <p className="font-sans text-sm text-[#F1F6F4]/70 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Dynamic bullet items inside accordion */}
                  <div className="flex flex-col gap-2.5 bg-[#114C5A]/10 p-4 rounded-xl border border-[#114C5A]/20">
                    <span className="font-mono text-[10px] text-[#FF9932] font-semibold tracking-wider uppercase mb-1">
                      Key Highlights
                    </span>
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#FFC801] mt-2 shrink-0" />
                        <span className="font-sans text-xs text-[#F1F6F4]/80 leading-snug">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

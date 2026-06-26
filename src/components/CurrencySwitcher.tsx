import React, { useState, useRef, useEffect } from 'react';
import { usePricingCurrency, pricingStore } from '../hooks/usePricing';
import { REGIONAL_MULTIPLIERS, CurrencyCode } from '../constants/pricingMatrix';
import { ChevronDownIcon } from './Icons';

export const CurrencySwitcher: React.FC = React.memo(() => {
  const { currency, changeCurrency } = usePricingCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: CurrencyCode) => {
    changeCurrency(code);
    setIsOpen(false);
  };

  const selectedData = REGIONAL_MULTIPLIERS[currency];

  return (
    <div ref={dropdownRef} className="relative inline-block text-left z-30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#172B36] border border-[#114C5A]/40 text-[#F1F6F4]/90 text-sm font-sans font-semibold hover:border-[#FFC801]/60 focus:outline-none focus:ring-2 focus:ring-[#FFC801] cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="font-mono text-[#FFC801]">{selectedData.symbol}</span>
        <span>{selectedData.label}</span>
        <ChevronDownIcon size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-xl bg-[#172B36] border border-[#114C5A]/40 shadow-2xl overflow-hidden animate-fade-in">
          <div className="py-1">
            {(Object.keys(REGIONAL_MULTIPLIERS) as CurrencyCode[]).map((code) => {
              const item = REGIONAL_MULTIPLIERS[code];
              const isSelected = currency === code;

              return (
                <button
                  key={code}
                  onClick={() => handleSelect(code)}
                  className={`w-full text-left px-4 py-2.5 text-xs font-mono flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#114C5A]/30 text-[#FFC801] font-bold'
                      : 'text-[#F1F6F4]/70 hover:bg-[#114C5A]/10 hover:text-[#F1F6F4]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[#FF9932]">{item.symbol}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
});

import React from 'react';
import { usePricingBilling } from '../hooks/usePricing';

export const BillingToggle: React.FC = React.memo(() => {
  const { billing, changeBilling } = usePricingBilling();

  return (
    <div className="relative inline-flex bg-[#172B36] border border-[#114C5A]/40 p-1 rounded-full overflow-hidden">
      {/* Sliding Highlight Background (Pure CSS transition) */}
      <div
        className={`absolute top-1 bottom-1 left-1 rounded-full bg-[#114C5A]/50 border border-[#114C5A]/80 transition-all duration-300 ease-out z-0`}
        style={{
          width: 'calc(50% - 4px)',
          transform: billing === 'annual' ? 'translateX(100%)' : 'translateX(0%)',
        }}
      />

      <button
        onClick={() => changeBilling('monthly')}
        className={`relative z-10 px-5 py-2 rounded-full text-xs font-mono font-semibold transition-colors duration-200 cursor-pointer ${
          billing === 'monthly' ? 'text-[#FFC801]' : 'text-[#F1F6F4]/50 hover:text-[#F1F6F4]'
        }`}
      >
        Monthly
      </button>

      <button
        onClick={() => changeBilling('annual')}
        className={`relative z-10 px-5 py-2 rounded-full text-xs font-mono font-semibold transition-colors duration-200 cursor-pointer flex items-center gap-1.5 ${
          billing === 'annual' ? 'text-[#FFC801]' : 'text-[#F1F6F4]/50 hover:text-[#F1F6F4]'
        }`}
      >
        <span>Annual</span>
        <span className="px-1.5 py-0.5 rounded bg-[#FF9932] text-black font-mono text-[8px] font-black uppercase tracking-wider scale-95 origin-left">
          -20%
        </span>
      </button>
    </div>
  );
});

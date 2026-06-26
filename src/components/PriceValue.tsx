import React from 'react';
import { usePricingCurrency, usePricingBilling } from '../hooks/usePricing';
import { calculatePrice } from '../utils/pricingEngine';

interface PriceValueProps {
  baseMonthlyPriceUSD: number;
}

export const PriceValue: React.FC<PriceValueProps> = React.memo(({ baseMonthlyPriceUSD }) => {
  const { currency } = usePricingCurrency();
  const { billing } = usePricingBilling();

  const { monthlyRate, totalBill } = calculatePrice(baseMonthlyPriceUSD, currency, billing);

  return (
    <div className="flex flex-col select-none">
      <div className="flex items-baseline gap-1.5">
        <span className="font-mono text-4xl md:text-5xl font-black text-[#F1F6F4] tracking-tight tabular-nums transition-all duration-200">
          {monthlyRate}
        </span>
        <span className="font-sans text-sm text-[#F1F6F4]/40 font-medium">/mo</span>
      </div>
      <div className="mt-2 h-5">
        <span className="font-mono text-[10px] text-[#FF9932] font-semibold uppercase tracking-wider block transition-all duration-200">
          {totalBill}
        </span>
      </div>
    </div>
  );
});

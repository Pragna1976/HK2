import { REGIONAL_MULTIPLIERS, CurrencyCode, BillingCycle } from '../constants/pricingMatrix';

export function calculatePrice(
  baseMonthlyPriceUSD: number,
  currency: CurrencyCode,
  billingCycle: BillingCycle
): {
  monthlyRate: string;
  totalBill: string;
  symbol: string;
} {
  const { symbol, multiplier } = REGIONAL_MULTIPLIERS[currency];
  
  const convertedMonthly = baseMonthlyPriceUSD * multiplier;
  
  if (billingCycle === 'annual') {
    const monthlyRate = convertedMonthly * 0.8;
    const totalBillVal = convertedMonthly * 12 * 0.8;
    
    const monthlyRateStr = currency === 'INR'
      ? `${symbol}${Math.round(monthlyRate).toLocaleString('en-IN')}`
      : `${symbol}${monthlyRate.toFixed(2)}`;
      
    const totalBillStr = currency === 'INR'
      ? `${symbol}${Math.round(totalBillVal).toLocaleString('en-IN')}`
      : `${symbol}${totalBillVal.toFixed(2)}`;
      
    return {
      monthlyRate: monthlyRateStr,
      totalBill: `Billed annually (${totalBillStr}/yr)`,
      symbol
    };
  } else {
    const monthlyRateStr = currency === 'INR'
      ? `${symbol}${Math.round(convertedMonthly).toLocaleString('en-IN')}`
      : `${symbol}${convertedMonthly.toFixed(2)}`;
      
    return {
      monthlyRate: monthlyRateStr,
      totalBill: 'Billed monthly',
      symbol
    };
  }
}

import { useState, useEffect } from 'react';
import { CurrencyCode, BillingCycle } from '../constants/pricingMatrix';

// Global singletons for pricing state to allow separate components (e.g. CurrencySwitcher and PriceDisplays)
// to communicate with ZERO parent rerenders!
let currentCurrency: CurrencyCode = 'USD';
let currentBillingCycle: BillingCycle = 'monthly';

const currencyListeners = new Set<(c: CurrencyCode) => void>();
const billingListeners = new Set<(b: BillingCycle) => void>();

export const pricingStore = {
  getCurrency: () => currentCurrency,
  setCurrency: (c: CurrencyCode) => {
    if (currentCurrency !== c) {
      currentCurrency = c;
      currencyListeners.forEach(listener => listener(c));
    }
  },
  subscribeCurrency: (listener: (c: CurrencyCode) => void) => {
    currencyListeners.add(listener);
    return () => {
      currencyListeners.delete(listener);
    };
  },

  getBilling: () => currentBillingCycle,
  setBilling: (b: BillingCycle) => {
    if (currentBillingCycle !== b) {
      currentBillingCycle = b;
      billingListeners.forEach(listener => listener(b));
    }
  },
  subscribeBilling: (listener: (b: BillingCycle) => void) => {
    billingListeners.add(listener);
    return () => {
      billingListeners.delete(listener);
    };
  }
};

export function usePricingCurrency() {
  const [currency, setCurrencyState] = useState<CurrencyCode>(pricingStore.getCurrency());

  useEffect(() => {
    return pricingStore.subscribeCurrency(newCurrency => {
      setCurrencyState(newCurrency);
    });
  }, []);

  const changeCurrency = (c: CurrencyCode) => {
    pricingStore.setCurrency(c);
  };

  return { currency, changeCurrency };
}

export function usePricingBilling() {
  const [billing, setBillingState] = useState<BillingCycle>(pricingStore.getBilling());

  useEffect(() => {
    return pricingStore.subscribeBilling(newBilling => {
      setBillingState(newBilling);
    });
  }, []);

  const changeBilling = (b: BillingCycle) => {
    pricingStore.setBilling(b);
  };

  return { billing, changeBilling };
}

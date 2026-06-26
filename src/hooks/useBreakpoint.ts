import { useState, useEffect } from 'react';

export function useBreakpoint(breakpointWidth = 1024) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Set initial state
    setIsMobile(window.innerWidth < breakpointWidth);

    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpointWidth);
    };

    // Use ResizeObserver on document body to be ultra precise and responsive to iframe/container size
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        setIsMobile(width < breakpointWidth);
      }
    });

    observer.observe(document.body);

    window.addEventListener('resize', handleResize);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpointWidth]);

  return isMobile;
}

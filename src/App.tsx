import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedCompanies } from './components/TrustedCompanies';
import { AIAutomationFeatures } from './components/AIAutomationFeatures';
import { FeatureGrid } from './components/FeatureGrid';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  // Scroll Progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Premium Cursor Glow backdrop effect
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    const handleMouseEnter = () => setCursorVisible(true);
    const handleMouseLeave = () => setCursorVisible(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Set initial visibility true if mouse is already in window
    setCursorVisible(true);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Structured Data JSON-LD
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'DataFlow Platform',
    'operatingSystem': 'All',
    'applicationCategory': 'BusinessApplication',
    'description': 'Deploy secure, self-healing data pipelines with autonomous AI. Automate ingestion, schema mapping, and predictive analytics instantly.',
    'offers': {
      '@type': 'Offer',
      'price': '29.00',
      'priceCurrency': 'USD'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.95',
      'ratingCount': '142'
    }
  };

  return (
    <div className="relative min-h-screen bg-[#172B36] text-[#F1F6F4] font-sans antialiased overflow-x-hidden selection:bg-[#FFC801] selection:text-[#172B36]">
      
      {/* 0. Global subtle Noise overlay for premium Vercel-like texture */}
      <div className="absolute inset-0 pointer-events-none bg-noise opacity-[0.35] z-50" />

      {/* 1. Scroll Progress indicator line */}
      <div
        className="fixed top-0 left-0 h-[3.5px] bg-gradient-to-r from-[#FFC801] via-[#FF9932] to-[#114C5A] z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      {/* 2. Cursor Glow backdrop light */}
      {cursorVisible && (
        <div
          className="fixed pointer-events-none z-40 w-[24rem] h-[24rem] rounded-full bg-[#FF9932]/4 blur-[100px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        />
      )}

      {/* 3. Embedded JSON-LD structured data for SEO crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Header Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Trusted Companies */}
        <TrustedCompanies />

        {/* Section 3: AI Automation Features */}
        <AIAutomationFeatures />

        {/* Section 4: Bento Feature Grid & Responsive Accordion */}
        <FeatureGrid />

        {/* Section 5: Pricing Matrix with Switchers */}
        <Pricing />

        {/* Section 6: Testimonials Continuous loop */}
        <Testimonials />

        {/* Section 7: FAQ Accordion with keyboard arrow focus */}
        <FAQ />

        {/* Section 8: Conversion Focus CTA */}
        <CTA />
      </main>

      {/* Footer Newsletter & brand links */}
      <Footer />
    </div>
  );
}

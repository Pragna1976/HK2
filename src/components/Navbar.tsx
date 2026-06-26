import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon, SparklesIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#172B36]/80 backdrop-blur-md border-b border-[#114C5A]/40 py-4 shadow-lg'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#FFC801] rounded-lg p-1"
          aria-label="DataAutomate Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF9932] via-[#FFC801] to-[#114C5A] p-[2px] shadow-md shadow-[#FFC801]/10 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#172B36] rounded-[10px] flex items-center justify-center">
              <SparklesIcon className="text-[#FFC801] w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <span className="font-mono font-bold text-lg tracking-tight text-[#F1F6F4] group-hover:text-[#FFC801] transition-colors duration-200">
            DATA<span className="text-[#FF9932]">FLOW</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          <button
            onClick={() => scrollToSection('features')}
            className="text-sm font-sans font-medium text-[#F1F6F4]/80 hover:text-[#FFC801] transition-colors duration-200 cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('bento-features')}
            className="text-sm font-sans font-medium text-[#F1F6F4]/80 hover:text-[#FFC801] transition-colors duration-200 cursor-pointer"
          >
            Capabilities
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-sm font-sans font-medium text-[#F1F6F4]/80 hover:text-[#FFC801] transition-colors duration-200 cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-sm font-sans font-medium text-[#F1F6F4]/80 hover:text-[#FFC801] transition-colors duration-200 cursor-pointer"
          >
            Success Stories
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-sm font-sans font-medium text-[#F1F6F4]/80 hover:text-[#FFC801] transition-colors duration-200 cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-sm font-sans font-medium text-[#F1F6F4]/90 hover:text-[#F1F6F4] transition-colors duration-200 cursor-pointer"
          >
            Book Demo
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="relative px-5 py-2.5 rounded-full text-sm font-sans font-semibold text-[#172B36] bg-[#FFC801] hover:bg-[#FF9932] hover:text-[#F1F6F4] transition-all duration-300 shadow-md shadow-[#FFC801]/10 hover:shadow-[#FF9932]/20 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Start Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#F1F6F4]/90 hover:text-[#FFC801] focus:outline-none focus:ring-2 focus:ring-[#FFC801] rounded-lg"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[73px] bottom-0 bg-[#172B36] border-t border-[#114C5A]/40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 gap-6 h-full justify-between pb-12">
          <nav className="flex flex-col gap-5">
            <button
              onClick={() => scrollToSection('features')}
              className="text-left py-2.5 text-lg font-sans font-medium text-[#F1F6F4] border-b border-[#114C5A]/20"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('bento-features')}
              className="text-left py-2.5 text-lg font-sans font-medium text-[#F1F6F4] border-b border-[#114C5A]/20"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-left py-2.5 text-lg font-sans font-medium text-[#F1F6F4] border-b border-[#114C5A]/20"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-left py-2.5 text-lg font-sans font-medium text-[#F1F6F4] border-b border-[#114C5A]/20"
            >
              Success Stories
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left py-2.5 text-lg font-sans font-medium text-[#F1F6F4] border-b border-[#114C5A]/20"
            >
              FAQ
            </button>
          </nav>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('pricing')}
              className="w-full py-3.5 rounded-xl text-center font-sans font-semibold text-[#F1F6F4] border border-[#114C5A] hover:bg-[#114C5A]/20 transition-all duration-200"
            >
              Book Demo
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="w-full py-3.5 rounded-xl text-center font-sans font-semibold text-[#172B36] bg-[#FFC801] shadow-lg shadow-[#FFC801]/10 hover:bg-[#FF9932] hover:text-white transition-all duration-200"
            >
              Start Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

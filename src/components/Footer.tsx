import React, { useState } from 'react';
import { GitHubIcon, SparklesIcon } from './Icons';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#172B36] border-t border-[#114C5A]/30 pt-20 pb-12 overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Subtle bottom glowing blob */}
      <div className="absolute bottom-0 left-[10%] w-[30rem] h-[30rem] bg-[#114C5A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Segment: Brand and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#114C5A]/20">
          
          {/* Logo & Pitch */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a
              href="#"
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="DataAutomate Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF9932] via-[#FFC801] to-[#114C5A] p-[2px] shadow-md shadow-[#FFC801]/10">
                <div className="w-full h-full bg-[#172B36] rounded-[10px] flex items-center justify-center">
                  <SparklesIcon className="text-[#FFC801] w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <span className="font-mono font-bold text-lg tracking-tight text-[#F1F6F4]">
                DATA<span className="text-[#FF9932]">FLOW</span>
              </span>
            </a>
            
            <p className="font-sans text-[#F1F6F4]/60 text-sm max-w-sm leading-relaxed">
              Award-winning premium AI data ingestion and self-healing pipeline manager designed for engineering fast-lanes.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 text-[#F1F6F4]/50">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FFC801] transition-colors duration-200"
                aria-label="GitHub Repository"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href="#"
                className="hover:text-[#FF9932] transition-colors duration-200"
                aria-label="Twitter X profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-[#FFC801] transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter section */}
          <div className="lg:col-span-7 flex flex-col gap-5 lg:pl-12">
            <h3 className="font-mono text-sm font-bold tracking-wider text-[#F1F6F4] uppercase">
              Subscribe to our high-throughput technical digest
            </h3>
            <p className="font-sans text-xs text-[#F1F6F4]/50">
              Get modular pipeline templates, performance benchmarks, and SOC2 audit checklists directly in your inbox. No spam.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter engineering email address..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-[#172B36] border border-[#114C5A]/40 text-xs font-mono text-[#F1F6F4] placeholder-[#F1F6F4]/30 focus:border-[#FFC801] focus:outline-none focus:ring-1 focus:ring-[#FFC801] transition-colors duration-200"
                aria-label="Email Address for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#114C5A] border border-[#114C5A] text-xs font-sans font-bold text-[#F1F6F4] hover:bg-[#FFC801] hover:text-[#172B36] transition-all duration-300 cursor-pointer"
              >
                Subscribe
              </button>
            </form>

            {subscribed && (
              <span className="font-mono text-xs text-emerald-400 font-semibold animate-fade-in">
                ✓ Successfully subscribed! Welcome to the digest.
              </span>
            )}
          </div>

        </div>

        {/* Middle Segment: Structured Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 text-xs font-mono text-[#F1F6F4]/60">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#F1F6F4] font-bold uppercase tracking-wider">Capabilities</h4>
            <button onClick={() => scrollToSection('features')} className="text-left hover:text-[#FFC801] transition-colors duration-150 cursor-pointer">
              Pipelines
            </button>
            <button onClick={() => scrollToSection('features')} className="text-left hover:text-[#FFC801] transition-colors duration-150 cursor-pointer">
              Predictive Models
            </button>
            <button onClick={() => scrollToSection('features')} className="text-left hover:text-[#FFC801] transition-colors duration-150 cursor-pointer">
              Anomalies Guardian
            </button>
            <button onClick={() => scrollToSection('features')} className="text-left hover:text-[#FFC801] transition-colors duration-150 cursor-pointer">
              Security hashing
            </button>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#F1F6F4] font-bold uppercase tracking-wider">Company</h4>
            <a href="#" className="hover:text-[#FF9932] transition-colors duration-150">About</a>
            <a href="#" className="hover:text-[#FF9932] transition-colors duration-150">Security Trust</a>
            <a href="#" className="hover:text-[#FF9932] transition-colors duration-150">Our Mission</a>
            <a href="#" className="hover:text-[#FF9932] transition-colors duration-150">Customer stories</a>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#F1F6F4] font-bold uppercase tracking-wider">Resources</h4>
            <a href="#" className="hover:text-[#FFC801] transition-colors duration-150">API Docs</a>
            <a href="#" className="hover:text-[#FFC801] transition-colors duration-150">System Logs</a>
            <a href="#" className="hover:text-[#FFC801] transition-colors duration-150">YAML Schemas</a>
            <a href="#" className="hover:text-[#FFC801] transition-colors duration-150">Community</a>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#F1F6F4] font-bold uppercase tracking-wider">Legal</h4>
            <a href="#" className="hover:text-[#FF9932] transition-colors duration-150">Privacy Center</a>
            <a href="#" className="hover:text-[#FF9932] transition-colors duration-150">Terms of Use</a>
            <a href="#" className="hover:text-[#FF9932] transition-colors duration-150">SLA Agreement</a>
            <a href="#" className="hover:text-[#FF9932] transition-colors duration-150">SOC2 Audit</a>
          </div>

        </div>

        {/* Bottom Segment: Copyright */}
        <div className="border-t border-[#114C5A]/10 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[10px] font-mono text-[#F1F6F4]/40">
          <span>
            © 2026 DataFlow Inc. All rights reserved. Built with pride for the ultimate developer experience.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#FFC801] transition-colors duration-150">Status: Fully Operational</a>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
        </div>

      </div>
    </footer>
  );
};

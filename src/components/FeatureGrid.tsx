import React, { useState } from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { Accordion } from './Accordion';
import { SparklesIcon, WorkflowIcon, AnalyticsIcon, PipelineIcon, MonitoringIcon } from './Icons';

interface BentoItem {
  id: number;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  details: string[];
}

export const FeatureGrid: React.FC = () => {
  const isMobile = useBreakpoint(1024); // md/lg threshold
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const bentoItems: BentoItem[] = [
    {
      id: 1,
      title: 'Visual Flow Architect',
      tagline: 'Design and deploy dynamic pipelines in real-time.',
      description: 'Ditch raw scripts. Build enterprise pipelines with intuitive visual block connectors, instant schemas, and automated node orchestration.',
      badge: 'Visual Engine',
      details: [
        'Interactive block-based layout with visual connection lines',
        'Direct data path tracing and mapping tree generation',
        'Automatic error-recovery and alternate routing paths'
      ]
    },
    {
      id: 2,
      title: 'Anomalous Activity Guardian',
      tagline: 'Proactive detection for stream stability.',
      description: 'Track anomalies inside high-throughput logs. Detect outlier sequences, performance drop-offs, and data corruption instantly.',
      badge: 'Real-time AI',
      details: [
        'Continuous deep scanning of multi-tenant event streams',
        'Smart alert dispatching via secure webhook gateways',
        'Self-healing validation patterns to repair corruption'
      ]
    },
    {
      id: 3,
      title: 'Direct DB Connectors',
      tagline: 'Zero-configuration database integration.',
      description: 'Stream directly to PostgreSQL, Snowflake, BigQuery, or Databricks. Load credentials securely via isolated SSL tunnels in seconds.',
      badge: 'Warehouse Connect',
      details: [
        'Secure token exchange and fully encrypted credentials',
        'Automatic indexing and sub-second schema synchronization',
        'Read/write throttling control to prevent spikes'
      ]
    },
    {
      id: 4,
      title: 'Auto AI Data Modeling',
      tagline: 'Turn raw columns into predictive indicators.',
      description: 'Leverage native regression models and classification fits. Predict business metrics directly from your raw operational streams.',
      badge: 'Predictive Intelligence',
      // Corrected from details
      details: [
        'Autonomous training on active historical streams',
        'One-click forecasting and future outcome trendlines',
        'Self-improving feedback loops for maximum precision'
      ]
    }
  ];

  return (
    <section id="bento-features" className="relative bg-[#172B36] py-24 md:py-32 overflow-hidden border-b border-[#114C5A]/15">
      {/* Background Decorative Mesh Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#F1F6F4 1px, transparent 1px), linear-gradient(90deg, #F1F6F4 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#114C5A]/50 bg-[#114C5A]/20 mb-4">
            <span className="font-mono text-[10px] tracking-wider text-[#FF9932] uppercase font-bold">
              Product Capabilities
            </span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F1F6F4] tracking-tight leading-tight mb-6">
            Engineered for elite <br />
            <span className="text-[#FF9932]">engineering squads</span>
          </h2>
          <p className="font-sans text-[#F1F6F4]/70 text-base md:text-lg max-w-2xl leading-relaxed">
            From direct data warehouses to visual block orchestration, experience a unified pipeline platform that matches the velocity of your business.
          </p>
        </div>

        {/* Responsive Content Router */}
        {isMobile ? (
          /* Mobile: Custom Accordion (Built from scratch, maintains the state!) */
          <div className="mt-8">
            <Accordion
              items={bentoItems}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
        ) : (
          /* Desktop: Modern Bento Grid with Hover Focus/Dimming and details animation */
          <div className="grid grid-cols-12 gap-8 mt-12">
            
            {/* Card 1: Visual Flow Architect (Col span 8) */}
            <div
              onMouseEnter={() => setActiveIndex(0)}
              className={`col-span-8 p-8 rounded-3xl border bg-[#172B36] flex flex-col justify-between overflow-hidden relative cursor-pointer min-h-[420px] transition-all duration-300 ${
                activeIndex === 0
                  ? 'border-[#FFC801]/60 shadow-2xl shadow-[#FFC801]/5 scale-[1.015]'
                  : 'border-[#114C5A]/20 hover:border-[#114C5A]/50'
              } ${activeIndex !== 0 ? 'opacity-40 scale-[0.985] filter blur-[0.5px]' : ''}`}
            >
              {/* Card Meta */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] font-bold text-[#FFC801] uppercase tracking-widest bg-[#114C5A]/30 px-2.5 py-1 rounded-md">
                    {bentoItems[0].badge}
                  </span>
                  <span className="font-mono text-xs text-[#F1F6F4]/40">01</span>
                </div>
                <h3 className="font-mono text-xl font-bold text-[#F1F6F4] mb-3">
                  {bentoItems[0].title}
                </h3>
                <p className="font-sans text-sm text-[#F1F6F4]/60 max-w-lg mb-6">
                  {bentoItems[0].description}
                </p>
              </div>

              {/* Inside Visual details (SVG Node Graphic) */}
              <div className="relative flex-1 bg-[#114C5A]/5 border border-[#114C5A]/20 rounded-2xl p-6 min-h-[160px] flex items-center justify-center">
                <svg className="w-full h-full min-h-[120px]" viewBox="0 0 400 120">
                  {/* Nodes */}
                  <g className="transition-transform duration-500" style={{ transform: activeIndex === 0 ? 'scale(1.03)' : 'scale(1)' }}>
                    {/* Database Node */}
                    <rect x="20" y="35" width="80" height="50" rx="8" fill="#172B36" stroke="#114C5A" strokeWidth="2" />
                    <text x="60" y="65" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#F1F6F4" fontWeight="bold">PostgreSQL</text>
                    <circle cx="100" cy="60" r="4" fill="#FFC801" />

                    {/* Spark/Flow Connection */}
                    <path d="M 100 60 Q 200 10, 300 60" fill="none" stroke="#FFC801" strokeWidth="2.5" strokeDasharray="6 4" className="path-flow-fast" />

                    {/* AI Transformer Node */}
                    <rect x="300" y="35" width="80" height="50" rx="8" fill="#172B36" stroke="#FF9932" strokeWidth="2" />
                    <text x="340" y="65" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#F1F6F4" fontWeight="bold">AI Engine</text>
                    <circle cx="300" cy="60" r="4" fill="#FF9932" />
                  </g>
                </svg>
              </div>

              {/* Expanded details list */}
              <div className={`mt-6 space-y-2.5 transition-all duration-300 ${activeIndex === 0 ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                {bentoItems[0].details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#FFC801]" />
                    <span className="font-sans text-xs text-[#F1F6F4]/70">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Anomalous Activity Guardian (Col span 4) */}
            <div
              onMouseEnter={() => setActiveIndex(1)}
              className={`col-span-4 p-8 rounded-3xl border bg-[#172B36] flex flex-col justify-between overflow-hidden relative cursor-pointer min-h-[420px] transition-all duration-300 ${
                activeIndex === 1
                  ? 'border-[#FF9932]/60 shadow-2xl shadow-[#FF9932]/5 scale-[1.015]'
                  : 'border-[#114C5A]/20 hover:border-[#114C5A]/50'
              } ${activeIndex !== 1 ? 'opacity-40 scale-[0.985] filter blur-[0.5px]' : ''}`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] font-bold text-[#FF9932] uppercase tracking-widest bg-[#114C5A]/30 px-2.5 py-1 rounded-md">
                    {bentoItems[1].badge}
                  </span>
                  <span className="font-mono text-xs text-[#F1F6F4]/40">02</span>
                </div>
                <h3 className="font-mono text-xl font-bold text-[#F1F6F4] mb-3">
                  {bentoItems[1].title}
                </h3>
                <p className="font-sans text-sm text-[#F1F6F4]/60 mb-6">
                  {bentoItems[1].description}
                </p>
              </div>

              {/* Inside details (Log simulation) */}
              <div className="relative flex-1 bg-black/40 border border-[#114C5A]/20 rounded-2xl p-4 font-mono text-[10px] flex flex-col gap-2 overflow-hidden max-h-[140px]">
                <div className="text-[#F1F6F4]/40">[03:42:15] INGESTION STREAM 1A OK</div>
                <div className="text-[#F1F6F4]/40">[03:42:16] MAPPING SCHEMA SYNCHRONIZED</div>
                <div className="text-[#FF9932] font-semibold animate-pulse">[03:42:17] ALERT: UNUSUAL STRUCTURAL DRIFT DEVIATION (2.41%)</div>
                <div className="text-emerald-400 font-semibold">[03:42:18] SCHEMAS AUTO-HEALED SECURELY</div>
              </div>

              <div className={`mt-6 space-y-2.5 transition-all duration-300 ${activeIndex === 1 ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                {bentoItems[1].details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#FF9932]" />
                    <span className="font-sans text-xs text-[#F1F6F4]/70">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Direct DB Connectors (Col span 4) */}
            <div
              onMouseEnter={() => setActiveIndex(2)}
              className={`col-span-4 p-8 rounded-3xl border bg-[#172B36] flex flex-col justify-between overflow-hidden relative cursor-pointer min-h-[420px] transition-all duration-300 ${
                activeIndex === 2
                  ? 'border-[#FFC801]/60 shadow-2xl shadow-[#FFC801]/5 scale-[1.015]'
                  : 'border-[#114C5A]/20 hover:border-[#114C5A]/50'
              } ${activeIndex !== 2 ? 'opacity-40 scale-[0.985] filter blur-[0.5px]' : ''}`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] font-bold text-[#FFC801] uppercase tracking-widest bg-[#114C5A]/30 px-2.5 py-1 rounded-md">
                    {bentoItems[2].badge}
                  </span>
                  <span className="font-mono text-xs text-[#F1F6F4]/40">03</span>
                </div>
                <h3 className="font-mono text-xl font-bold text-[#F1F6F4] mb-3">
                  {bentoItems[2].title}
                </h3>
                <p className="font-sans text-sm text-[#F1F6F4]/60 mb-6">
                  {bentoItems[2].description}
                </p>
              </div>

              {/* Inside details (Integration badges) */}
              <div className="grid grid-cols-2 gap-2 p-3 bg-[#114C5A]/10 border border-[#114C5A]/20 rounded-2xl">
                <div className="bg-[#172B36] p-2 rounded-xl text-center font-mono text-[9px] text-[#F1F6F4]/80 border border-[#114C5A]/30">
                  PostgreSQL
                </div>
                <div className="bg-[#172B36] p-2 rounded-xl text-center font-mono text-[9px] text-[#F1F6F4]/80 border border-[#114C5A]/30">
                  Snowflake
                </div>
                <div className="bg-[#172B36] p-2 rounded-xl text-center font-mono text-[9px] text-[#F1F6F4]/80 border border-[#114C5A]/30">
                  BigQuery
                </div>
                <div className="bg-[#172B36] p-2 rounded-xl text-center font-mono text-[9px] text-[#F1F6F4]/80 border border-[#114C5A]/30">
                  Kafka Stream
                </div>
              </div>

              <div className={`mt-6 space-y-2.5 transition-all duration-300 ${activeIndex === 2 ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                {bentoItems[2].details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#FFC801]" />
                    <span className="font-sans text-xs text-[#F1F6F4]/70">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 4: Auto AI Data Modeling (Col span 8) */}
            <div
              onMouseEnter={() => setActiveIndex(3)}
              className={`col-span-8 p-8 rounded-3xl border bg-[#172B36] flex flex-col justify-between overflow-hidden relative cursor-pointer min-h-[420px] transition-all duration-300 ${
                activeIndex === 3
                  ? 'border-[#FF9932]/60 shadow-2xl shadow-[#FF9932]/5 scale-[1.015]'
                  : 'border-[#114C5A]/20 hover:border-[#114C5A]/50'
              } ${activeIndex !== 3 ? 'opacity-40 scale-[0.985] filter blur-[0.5px]' : ''}`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] font-bold text-[#FF9932] uppercase tracking-widest bg-[#114C5A]/30 px-2.5 py-1 rounded-md">
                    {bentoItems[3].badge}
                  </span>
                  <span className="font-mono text-xs text-[#F1F6F4]/40">04</span>
                </div>
                <h3 className="font-mono text-xl font-bold text-[#F1F6F4] mb-3">
                  {bentoItems[3].title}
                </h3>
                <p className="font-sans text-sm text-[#F1F6F4]/60 max-w-lg mb-6">
                  {bentoItems[3].description}
                </p>
              </div>

              {/* Inside details (Mathematical Curve graph preview) */}
              <div className="relative flex-1 bg-[#114C5A]/5 border border-[#114C5A]/20 rounded-2xl p-4 flex items-center justify-center min-h-[140px]">
                <svg className="w-full h-full min-h-[110px]" viewBox="0 0 380 100">
                  {/* Grid lines */}
                  <line x1="0" y1="80" x2="380" y2="80" stroke="#114C5A" strokeWidth="0.5" opacity="0.4" />
                  <line x1="40" y1="0" x2="40" y2="100" stroke="#114C5A" strokeWidth="0.5" opacity="0.4" />
                  
                  {/* Regression Dots */}
                  <circle cx="60" cy="70" r="3.5" fill="#FFC801" />
                  <circle cx="100" cy="65" r="3.5" fill="#FF9932" />
                  <circle cx="150" cy="45" r="3.5" fill="#FFC801" />
                  <circle cx="210" cy="30" r="3.5" fill="#FF9932" />
                  <circle cx="270" cy="20" r="3.5" fill="#FFC801" />
                  <circle cx="330" cy="15" r="3.5" fill="#FF9932" />

                  {/* Best fit line curve */}
                  <path d="M 40 85 Q 120 60, 240 25 T 380 10" fill="none" stroke="#FF9932" strokeWidth="2.5" />
                  
                  <text x="50" y="20" fontFamily="JetBrains Mono" fontSize="8" fill="#F1F6F4" opacity="0.6">MODEL FIT: R² = 0.9982</text>
                </svg>
              </div>

              <div className={`mt-6 space-y-2.5 transition-all duration-300 ${activeIndex === 3 ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                {bentoItems[3].details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#FF9932]" />
                    <span className="font-sans text-xs text-[#F1F6F4]/70">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

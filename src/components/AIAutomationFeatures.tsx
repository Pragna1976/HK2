import React from 'react';
import {
  WorkflowIcon,
  AnalyticsIcon,
  PipelineIcon,
  MonitoringIcon,
  QueryIcon,
  SecurityIcon,
  ArrowRightIcon
} from './Icons';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color }) => {
  return (
    <div className="group relative p-8 bg-[#172B36] border border-[#114C5A]/30 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#114C5A]/15 overflow-hidden">
      {/* Background Hover Gradient Ring */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
        style={{
          background: `radial-gradient(circle at 100% 0%, ${color}15, transparent 70%)`
        }}
      />
      
      {/* Subtle Glowing Corner Dot */}
      <div 
        className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-xl transition-all duration-500 pointer-events-none" 
        style={{
          backgroundColor: color,
          opacity: 0.1
        }}
      />

      {/* Icon frame with micro-glow */}
      <div className="relative w-14 h-14 rounded-2xl bg-[#114C5A]/10 border border-[#114C5A]/20 flex items-center justify-center mb-6 text-[#F1F6F4] group-hover:text-[#FFC801] group-hover:border-[#FFC801]/30 transition-all duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-[#FF9932]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Feature Metadata */}
      <h3 className="font-mono text-lg font-bold text-[#F1F6F4] mb-3 group-hover:text-[#FFC801] transition-colors duration-200">
        {title}
      </h3>
      <p className="font-sans text-sm text-[#F1F6F4]/60 leading-relaxed mb-4">
        {description}
      </p>

      {/* Reveal more detail smoothly on hover */}
      <div className="flex items-center gap-1.5 text-xs font-mono text-[#FFC801] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
        <span>Initialize Module</span>
        <ArrowRightIcon size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
      </div>

      {/* Subtle light-up bottom accent */}
      <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#FF9932]/0 to-transparent group-hover:via-[#FF9932]/40 transition-all duration-500" />
    </div>
  );
};

export const AIAutomationFeatures: React.FC = () => {
  const features = [
    {
      title: 'Workflow Automation',
      description: 'Orchestrate complex data flows with an AI agent that self-adjusts as source schemas alter in flight.',
      icon: <WorkflowIcon size={28} className="text-[#FFC801]" />,
      color: '#FFC801'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast data trends, detect structural drift, and receive automated alert triggers on raw log streams.',
      icon: <AnalyticsIcon size={28} className="text-[#FF9932]" />,
      color: '#FF9932'
    },
    {
      title: 'Data Pipelines',
      description: 'Deploy multi-tenant data structures with high throughput and instant, self-healing mapping trees.',
      icon: <PipelineIcon size={28} className="text-[#114C5A]" />,
      color: '#114C5A'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Supervise pipeline load, stream volume, and data latency instantly through clean websocket dashboards.',
      icon: <MonitoringIcon size={28} className="text-[#FFC801]" />,
      color: '#FFC801'
    },
    {
      title: 'Natural Language Queries',
      description: 'Ask deep analytical questions directly in plain English and view pristine generated SQL and charts.',
      icon: <QueryIcon size={28} className="text-[#FF9932]" />,
      color: '#FF9932'
    },
    {
      title: 'Enterprise Security',
      description: 'Ensure compliance with isolated environments, automatic column hashing, and SOC2 audit trails.',
      icon: <SecurityIcon size={28} className="text-[#114C5A]" />,
      color: '#114C5A'
    }
  ];

  return (
    <section id="features" className="relative bg-[#172B36] py-24 md:py-32 overflow-hidden border-b border-[#114C5A]/10">
      {/* Background glow overlay */}
      <div className="absolute top-[20%] left-[-10%] w-[30rem] h-[30rem] bg-[#114C5A]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[30rem] h-[30rem] bg-[#FF9932]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#114C5A]/50 bg-[#114C5A]/20 mb-4">
            <span className="font-mono text-[10px] tracking-wider text-[#FFC801] uppercase font-bold">
              Autonomous Intelligence
            </span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F1F6F4] tracking-tight leading-tight mb-6">
            Designed for high-throughput <br />
            <span className="text-[#FFC801]">production ecosystems</span>
          </h2>
          <p className="font-sans text-[#F1F6F4]/70 text-base md:text-lg leading-relaxed">
            Eliminate operational drag. Connect any warehouse or message queue, and let our autonomous models shape, transform, and pipe clean data to your dashboards.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

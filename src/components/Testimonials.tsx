import React from 'react';
import { StarIcon } from './Icons';

interface Testimonial {
  id: number;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  logoText: string;
}

export const Testimonials: React.FC = () => {
  const list: Testimonial[] = [
    {
      id: 1,
      author: 'Sarah Jenkins',
      role: 'Director of Platform Engineering',
      company: 'Kinetic Labs',
      content: 'We migrated 50+ manual Python pipelines to this platform over a weekend. Our warehouse costs dropped by 42% and raw schemas update without single failures now.',
      rating: 5,
      logoText: 'KINETIC'
    },
    {
      id: 2,
      author: 'Aravind Sharma',
      role: 'Lead Data Architect',
      company: 'Nucleus Health',
      content: 'Connecting BigQuery and getting live pipeline status inside our corporate slack took under 5 minutes. The predictive models are scary accurate.',
      rating: 5,
      logoText: 'NUCLEUS'
    },
    {
      id: 3,
      author: 'Marcus Vance',
      role: 'VP of Data Science',
      company: 'Vertex AI',
      content: 'The natural language database query feature has unlocked massive velocity for our commercial teams. They write pure English, we get validated pipelines.',
      rating: 5,
      logoText: 'VERTEX'
    },
    {
      id: 4,
      author: 'Evelyn Wood',
      role: 'Security & Infrastructure Lead',
      company: 'Apex Core',
      content: 'Automated field hashing and direct TLS tunnels gave our compliance auditors absolute peace of mind. Truly enterprise grade in performance and safety.',
      rating: 5,
      logoText: 'APEX'
    },
    {
      id: 5,
      author: 'Dmitri Rostov',
      role: 'Head of Engineering',
      company: 'Vortex Cloud',
      content: 'We push over 50,000 events per second. Other visual platforms crumbled under the high load. This engine has been humming along with 100% uptime.',
      rating: 5,
      logoText: 'VORTEX'
    }
  ];

  // Duplicate items for seamless continuous marquee loop
  const marqueeItems = [...list, ...list];

  return (
    <section id="testimonials" className="relative bg-[#172B36] py-24 md:py-32 overflow-hidden border-b border-[#114C5A]/15">
      {/* Background blobs */}
      <div className="absolute top-[20%] left-[45%] w-[30rem] h-[30rem] bg-[#114C5A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#114C5A]/50 bg-[#114C5A]/20 mb-4">
            <span className="font-mono text-[10px] tracking-wider text-[#FFC801] uppercase font-bold">
              User Endorsements
            </span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F1F6F4] tracking-tight leading-tight mb-6">
            Loved by elite <br />
            <span className="text-[#FFC801]">data engineers</span>
          </h2>
          <p className="font-sans text-[#F1F6F4]/70 text-base md:text-lg leading-relaxed">
            Do not take our word for it. Explore direct reviews from the fast-growing teams building their analytics infrastructure on our platform.
          </p>
        </div>

        {/* Testimonials continuous horizontal marquee */}
        <div className="relative w-full overflow-hidden py-4 select-none mask-gradient-x">
          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
            {marqueeItems.map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="w-[320px] md:w-[400px] shrink-0 p-8 rounded-3xl bg-[#172B36] border border-[#114C5A]/30 backdrop-blur-md hover:border-[#FFC801]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Rating stars */}
                  <div className="flex gap-1 mb-5 text-[#FFC801]" aria-label="5 out of 5 stars rating">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <StarIcon key={i} size={14} />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="font-sans text-sm md:text-base text-[#F1F6F4]/80 italic leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="border-t border-[#114C5A]/20 pt-4 flex items-center justify-between">
                  <div>
                    <div className="font-mono text-xs font-bold text-[#F1F6F4]">{testimonial.author}</div>
                    <div className="font-sans text-[11px] text-[#F1F6F4]/50 mt-0.5">{testimonial.role}</div>
                  </div>
                  <div className="font-mono text-[10px] font-black tracking-wider text-[#FF9932] opacity-80 uppercase">
                    {testimonial.logoText}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

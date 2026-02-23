import React from 'react';

const services = [
  { title: "Gut Health", desc: "Comprehensive microbiome analysis and dietary strategies." },
  { title: "Plant Based Therapy", desc: "Evidence-based natural alternatives and holistic interventions." },
  { title: "Weightloss", desc: "Sustainable, root-cause approaches to metabolic health." },
  { title: "Women's Health", desc: "Specialised sexual and reproductive care." },
  { title: "General Care", desc: "Brief telehealth consults, scripts, and medical certificates." }
];

/**
 * Service Grid - Inspired by Polln & LifeMed (The Gold Standard for Medical Authority)
 * 
 * Impeccable Principles Applied:
 * - Visual Hierarchy: Clean, architectural grid. High contrast between the category name and description.
 * - Discoverability & Affordance: Cards have subtle hover states (a slight lift and border color change) 
 *   indicating they are interactive, without relying on heavy generic drop-shadows.
 * - Information Architecture: Breaks down the core offerings clearly without overwhelming the user.
 */
export default function ServiceGrid() {
  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2B2824] mb-4">
              Areas we can support you
            </h2>
            <p className="text-lg text-[#5C5346]">
              We offer personalised, accessible care across a range of complex and general health needs.
            </p>
          </div>
          <a href="#all-services" className="text-[#2B2824] font-medium border-b border-[#2B2824] pb-1 hover:text-[#8A7961] hover:border-[#8A7961] transition-colors">
            View All Services &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer border border-[#E8E2D5] rounded-2xl p-8 hover:border-[#8A7961] transition-all duration-300 hover:-translate-y-1 bg-[#FAF7F2]/30"
            >
              <div className="h-12 w-12 rounded-full bg-[#E8E2D5] text-[#2B2824] flex items-center justify-center mb-6">
                {/* Placeholder for specific icon */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-[#2B2824] mb-3 group-hover:text-[#8A7961] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#5C5346] leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const services = [
  {
    title: "Gut Health",
    desc: "Comprehensive microbiome analysis and dietary strategies for IBS, SIBO, and digestive concerns.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-1.5 0-2.5 1-3 2-.5 1-1 3-1 5s.5 4 1 5.5c.5 1.5 1.5 3 1.5 4.5s-.5 2-1.5 2m3-19c1.5 0 2.5 1 3 2 .5 1 1 3 1 5s-.5 4-1 5.5c-.5 1.5-1.5 3-1.5 4.5s.5 2 1.5 2" />
      </svg>
    ),
  },
  {
    title: "Plant-Based Therapy",
    desc: "Evidence-based natural alternatives and holistic interventions grounded in clinical research.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21c0-6 4-10 9-10-5 0-9-4-9-10 0 6-4 10-9 10 5 0 9 4 9 10z" />
      </svg>
    ),
  },
  {
    title: "Weight Loss",
    desc: "Sustainable, root-cause approaches to metabolic health and body composition.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h4l3-9 4 18 3-9h4" />
      </svg>
    ),
  },
  {
    title: "Women's Health",
    desc: "Specialised sexual and reproductive care, from fertility to menopause.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="8" r="5" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 13v8m-3-3h6" />
      </svg>
    ),
  },
  {
    title: "General Care",
    desc: "Brief telehealth consults, scripts, referrals, and medical certificates.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ServiceGrid() {
  return (
    <section id="services" className="w-full bg-white px-6 py-24">
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
        </div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, idx) => (
            <div
              key={idx}
              className="group cursor-pointer border border-[#E8E2D5] rounded-2xl p-8 hover:border-[#8A7961] transition-all duration-300 hover:-translate-y-1 bg-[#FAF7F2]/30"
            >
              <div className="h-12 w-12 rounded-full bg-[#E8E2D5] text-[#2B2824] flex items-center justify-center mb-6 group-hover:bg-[#8A7961] group-hover:text-[#FAF7F2] transition-colors duration-300">
                {service.icon}
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

        {/* Bottom row: 2 cards, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto lg:px-[calc(100%/12)]">
          {services.slice(3).map((service, idx) => (
            <div
              key={idx + 3}
              className="group cursor-pointer border border-[#E8E2D5] rounded-2xl p-8 hover:border-[#8A7961] transition-all duration-300 hover:-translate-y-1 bg-[#FAF7F2]/30"
            >
              <div className="h-12 w-12 rounded-full bg-[#E8E2D5] text-[#2B2824] flex items-center justify-center mb-6 group-hover:bg-[#8A7961] group-hover:text-[#FAF7F2] transition-colors duration-300">
                {service.icon}
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

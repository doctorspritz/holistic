import React from 'react';

const badges = [
  {
    title: "AHPRA Registered",
    desc: "Fully qualified Australian practitioners",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Secure Telehealth",
    desc: "Encrypted, confidential consultations",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Evidence-Based",
    desc: "Conventional & natural medicine",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  return (
    <section className="w-full bg-[#FAF7F2] px-6 pt-24 md:pt-32 pb-16 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <span className="inline-block px-4 py-1.5 rounded-full border border-[#D1CAB8] text-[#5C5346] text-sm font-medium tracking-wide uppercase">
          The Holistic Care Clinic
        </span>

        <h1 className="text-5xl md:text-7xl font-serif text-[#2B2824] leading-[1.1] tracking-tight">
          Personalised, integrated healthcare <span className="italic text-[#8A7961]">tailored to you.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#5C5346] font-light leading-relaxed">
          We offer accessible telehealth consultations as well as in-clinic care,
          supporting your entire health journey from the comfort of your home.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#enquiries" className="w-full sm:w-auto px-8 py-4 bg-[#2B2824] hover:bg-[#1A1815] text-[#FAF7F2] rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-sm text-center">
            Book an Appointment
          </a>
          <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#2B2824] text-[#2B2824] hover:bg-[#E8E2D5] rounded-full text-lg font-medium transition-colors duration-300 text-center">
            Learn More
          </a>
        </div>
      </div>

      {/* Trust badges integrated into hero */}
      <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-[#E8E2D5] w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-start space-x-3 justify-center md:justify-start">
              <div className="flex-shrink-0 mt-0.5 text-[#8A7961]">
                {badge.icon}
              </div>
              <div>
                <span className="text-sm font-bold tracking-wide uppercase text-[#2B2824]">
                  {badge.title}
                </span>
                <p className="text-sm text-[#5C5346] mt-0.5">
                  {badge.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

/**
 * Hero Section - Inspired by Kin Fertility (The Gold Standard for Empathy)
 * 
 * Impeccable Principles Applied:
 * - Anti-Slop: Avoids the generic "left aligned text, right aligned 3D illustration" layout.
 *   Uses a bold, centered, editorial magazine composition with a warm, tinted neutral background.
 * - Typography as Communication: Uses a highly contrasting, elegant serif for the display heading 
 *   and a highly legible sans-serif for the body.
 * - Emotional Resonance: The warm beige/peach background immediately signals safety and care, 
 *   counteracting cold "clinical" aesthetics.
 */
export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#FAF7F2] px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Subtle, organic background texture/shape - NOT a glowing gradient orb */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-[#E8E2D5] fill-current">
          <path d="M0,100 C30,80 70,120 100,80 L100,0 L0,0 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
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
          <button className="w-full sm:w-auto px-8 py-4 bg-[#2B2824] hover:bg-[#1A1815] text-[#FAF7F2] rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-sm">
            Book an Appointment
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#2B2824] text-[#2B2824] hover:bg-[#E8E2D5] rounded-full text-lg font-medium transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

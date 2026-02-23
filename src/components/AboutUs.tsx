import React from "react";

/**
 * About Us Component
 * Implements command `/bolder` and `/clarify`: 
 * Replaces generic abstract gradients with structured placeholders for high-quality, authentic photography (Kin standard)
 * and introduces a dedicated practitioner profile to establish personal trust (LifeMed standard).
 */
export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-white px-6 py-24 md:py-32 border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Typography & Philosophy */}
        <div className="lg:col-span-7 space-y-12 pr-0 lg:pr-12">
          <div className="space-y-4">
            <span className="block text-sm font-bold tracking-widest uppercase text-[#8A7961]">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2B2824] leading-[1.1]">
              A new standard for <br />
              <span className="italic text-[#8A7961]">holistic well-being.</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-[#5C5346] text-lg font-light leading-relaxed">
            <p className="text-2xl font-serif text-[#2B2824] leading-snug">
              We believe that true health extends far beyond the absence of illness. 
              Our clinic was founded to provide a sanctuary where conventional 
              medicine meets evidence-based natural therapies.
            </p>
            <p>
              Whether you are managing a complex chronic condition like IBS or SIBO, 
              navigating metabolic health, or seeking specialized reproductive care, 
              our integrated approach ensures you are heard, supported, and guided 
              with genuine care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#E8E2D5]">
            <div className="space-y-2">
              <h4 className="font-bold uppercase tracking-wide text-xs text-[#8A7961]">Telehealth First</h4>
              <p className="text-[#5C5346] text-sm">Accessible care from anywhere in Australia, designed for your comfort and privacy.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold uppercase tracking-wide text-xs text-[#8A7961]">Root-Cause Focus</h4>
              <p className="text-[#5C5346] text-sm">We look past surface symptoms to identify and treat the underlying imbalances.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Authentic Photography & Practitioner Profile (The LifeMed / Kin Standard) */}
        <div className="lg:col-span-5 relative">
          
          {/* Main Authentic Photography Placeholder */}
          <div className="relative w-full aspect-[4/5] rounded-t-full overflow-hidden bg-[#E8E2D5] border-8 border-white shadow-xl flex items-center justify-center group cursor-default">
            {/* INSTRUCTION FOR DEVELOPER: Replace this div with an <img /> tag containing high-quality, authentic photography of the clinic or practitioner. */}
            <div className="absolute inset-0 bg-[#FAF7F2] flex flex-col items-center justify-center text-center p-8 transition-opacity duration-500 group-hover:opacity-90">
               <svg className="w-12 h-12 text-[#8A7961] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
               <p className="text-sm font-bold uppercase tracking-widest text-[#2B2824]">Authentic Photography</p>
               <p className="text-xs text-[#5C5346] mt-2 max-w-[200px]">Avoid stock photos. Insert an image of the clinic environment or a warm, candid portrait here.</p>
            </div>
          </div>

          {/* Practitioner Profile Badge (Overlapping) */}
          <div className="absolute bottom-[-2rem] left-[-2rem] right-8 bg-[#FAF7F2] p-6 rounded-2xl shadow-lg border border-[#E8E2D5] z-10 hidden md:block">
             <div className="flex items-start space-x-4">
               {/* Headshot Placeholder */}
               <div className="w-16 h-16 rounded-full bg-[#D1CAB8] flex-shrink-0 flex items-center justify-center overflow-hidden">
                 <svg className="w-8 h-8 text-[#FAF7F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
               </div>
               <div>
                 <h3 className="font-serif text-xl text-[#2B2824] leading-none mb-1">Dr. Jane Doe</h3>
                 <p className="text-xs font-bold uppercase tracking-widest text-[#8A7961] mb-2">Lead Practitioner</p>
                 <p className="text-sm text-[#5C5346] leading-snug">"Healing is a collaborative journey. My goal is to empower you with the tools to reclaim your vitality."</p>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
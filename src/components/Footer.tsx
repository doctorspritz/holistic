import React from 'react';

/**
 * Trust & Inclusion Footer - Inspired by Kin & The Provided Copy
 * 
 * Impeccable Principles Applied:
 * - Color with Purpose: Deep, grounding, and serious background color (dark olive/charcoal) 
 *   to anchor the page and signify the weight and discretion of the clinic's inclusion statement.
 * - Typography: High legibility for important legal and inclusion text.
 */
export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1815] text-[#D1CAB8] px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        
        {/* Brand & Inclusion Statement */}
        <div className="md:col-span-8 space-y-8">
          <h2 className="text-3xl font-serif text-[#FAF7F2]">The Holistic Care Clinic</h2>
          <div className="max-w-2xl">
            <p className="text-lg font-light leading-relaxed border-l-2 border-[#8A7961] pl-6">
              This service is discreet, confidential, and inclusive. Care is provided in a culturally safe and respectful manner, designed to reduce barriers for Aboriginal and Torres Strait Islander peoples, LGBTQIA+ individuals, and people living in rural or remote communities.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-4 flex flex-col md:items-end space-y-4">
          <h3 className="text-sm font-bold tracking-widest uppercase text-[#FAF7F2] mb-2">Quick Links</h3>
          <a href="#about" className="hover:text-white transition-colors duration-200">About us</a>
          <a href="#services" className="hover:text-white transition-colors duration-200">Our services</a>
          <a href="#enquiries" className="hover:text-white transition-colors duration-200">Book an appointment</a>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#3A352F] text-sm text-[#8A7961] flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} The Holistic Care Clinic. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}

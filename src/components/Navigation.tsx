"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#enquiries", label: "Enquiries" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-serif text-[#2B2824] tracking-tight hover:opacity-80 transition-opacity"
        >
          THCC.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide uppercase text-[#5C5346] hover:text-[#2B2824] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#enquiries"
            className="px-6 py-2.5 bg-[#2B2824] hover:bg-[#1A1815] text-[#FAF7F2] rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-[1.02]"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#2B2824] p-2 focus:outline-none relative z-50"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#2B2824]/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobile}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#FAF7F2] shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-24 px-8 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="text-lg font-medium text-[#2B2824] py-3 border-b border-[#E8E2D5] hover:text-[#8A7961] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#enquiries"
            onClick={closeMobile}
            className="mt-6 px-6 py-3.5 bg-[#2B2824] hover:bg-[#1A1815] text-[#FAF7F2] rounded-full text-center font-medium transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

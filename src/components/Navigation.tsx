"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <Link
            href="#about"
            className="text-sm font-medium tracking-wide uppercase text-[#5C5346] hover:text-[#2B2824] transition-colors"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium tracking-wide uppercase text-[#5C5346] hover:text-[#2B2824] transition-colors"
          >
            Services
          </Link>
          <Link
            href="#enquiries"
            className="text-sm font-medium tracking-wide uppercase text-[#5C5346] hover:text-[#2B2824] transition-colors"
          >
            Enquiries
          </Link>
          <Link
            href="#book"
            className="px-6 py-2.5 bg-[#2B2824] hover:bg-[#1A1815] text-[#FAF7F2] rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-[1.02]"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle Placeholder (Could be expanded with a full mobile menu) */}
        <button className="md:hidden text-[#2B2824] p-2 focus:outline-none">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

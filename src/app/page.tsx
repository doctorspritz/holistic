import React from "react";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import AboutUs from "@/components/AboutUs";
import ServiceGrid from "@/components/ServiceGrid";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 
        The staggered fade-up animations can be implemented globally via CSS 
        or specifically in each component. The sections are stacked to create a cohesive narrative flow. 
      */}
      <HeroSection />
      <TrustBadges />
      <AboutUs />
      <ServiceGrid />
      <ContactForm />
    </div>
  );
}
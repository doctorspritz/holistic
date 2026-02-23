import React from "react";

/**
 * Trust Badges Component
 * Inspired by Healthylife & Holistica Health
 * Implements the "Medical Authority via Clarity" design principle.
 */
export default function TrustBadges() {
  const badges = [
    {
      title: "AHPRA Registered",
      desc: "Care from fully qualified Australian practitioners",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Secure Telehealth",
      desc: "Encrypted, confidential online consultations",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Evidence-Based",
      desc: "Integrating conventional & natural medicine",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#E8E2D5]/30 border-y border-[#E8E2D5] py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#D1CAB8]">
          {badges.map((badge, idx) => (
            <div key={idx} className={`flex items-start space-x-4 ${idx !== 0 ? 'md:pl-8 pt-6 md:pt-0' : ''}`}>
              <div className="flex-shrink-0 mt-1 text-[#8A7961]">
                {badge.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-wide uppercase text-[#2B2824] mb-1">
                  {badge.title}
                </h4>
                <p className="text-sm text-[#5C5346]">
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

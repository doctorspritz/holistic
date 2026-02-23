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

        {/* Right Side: Practitioner Profile */}
        <div className="lg:col-span-5">
          <div className="bg-[#FAF7F2] rounded-2xl p-8 md:p-10 border border-[#E8E2D5]">
            {/* Practitioner Avatar */}
            <div className="w-20 h-20 rounded-full bg-[#E8E2D5] flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-[#8A7961]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <h3 className="font-serif text-2xl text-[#2B2824] mb-1">Dr. Jane Doe</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-[#8A7961] mb-6">Lead Practitioner</p>

            <blockquote className="text-lg font-serif text-[#2B2824] leading-relaxed mb-6 border-l-2 border-[#8A7961] pl-5">
              &ldquo;Healing is a collaborative journey. My goal is to empower you with the tools to reclaim your vitality.&rdquo;
            </blockquote>

            <div className="space-y-3 pt-6 border-t border-[#E8E2D5]">
              <div className="flex items-center space-x-3 text-sm text-[#5C5346]">
                <svg className="w-4 h-4 text-[#8A7961] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>AHPRA Registered Practitioner</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#5C5346]">
                <svg className="w-4 h-4 text-[#8A7961] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>10+ years in integrative medicine</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#5C5346]">
                <svg className="w-4 h-4 text-[#8A7961] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Specialising in gut health & women&#39;s health</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

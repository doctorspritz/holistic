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
            {/* Practitioner Headshot */}
            <img
              src="/aimee.webp"
              alt="Aimee Vajtauer, Nurse Practitioner"
              className="w-20 h-20 rounded-full object-cover object-top mb-6"
            />

            <h3 className="font-serif text-2xl text-[#2B2824] mb-1">Aimee Vajtauer</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-[#8A7961] mb-6">Nurse Practitioner</p>

            <blockquote className="text-lg font-serif text-[#2B2824] leading-relaxed mb-6 border-l-2 border-[#8A7961] pl-5">
              &ldquo;I believe in treating the whole person, not just the symptoms. My goal is to empower you with the tools and knowledge to take control of your health.&rdquo;
            </blockquote>

            <div className="space-y-3 pt-6 border-t border-[#E8E2D5]">
              <div className="flex items-center space-x-3 text-sm text-[#5C5346]">
                <svg className="w-4 h-4 text-[#8A7961] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>AHPRA Registered Nurse Practitioner</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#5C5346]">
                <svg className="w-4 h-4 text-[#8A7961] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>BNurs (Deakin) &middot; Master of Nurse Practitioner</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#5C5346]">
                <svg className="w-4 h-4 text-[#8A7961] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Specialising in gastroenterology &amp; metabolic health</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#5C5346]">
                <svg className="w-4 h-4 text-[#8A7961] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Former NP at Princess Alexandra Hospital</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

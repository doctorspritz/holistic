export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-white border-b border-[#E8E2D5]">
      {/* Philosophy text */}
      <div className="px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-8">
            <span className="block text-sm font-bold tracking-widest uppercase text-[#8A7961]">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2B2824] leading-[1.1]">
              A new standard for{" "}
              <span className="italic text-[#8A7961]">holistic well-being.</span>
            </h2>
            <p className="text-2xl font-serif text-[#2B2824] leading-snug">
              We believe that true health extends far beyond the absence of illness.
              Our clinic was founded to provide a sanctuary where conventional
              medicine meets evidence-based natural therapies.
            </p>
            <p className="text-lg text-[#5C5346] font-light leading-relaxed">
              Whether you are managing a complex chronic condition like IBS or SIBO,
              navigating metabolic health, or seeking specialized reproductive care,
              our integrated approach ensures you are heard, supported, and guided
              with genuine care.
            </p>
          </div>
        </div>
      </div>

      {/* Meet your practitioner — full-width feature */}
      <div className="bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Large portrait */}
          <div className="relative aspect-[3/4] lg:aspect-auto">
            <img
              src="/aimee.webp"
              alt="Aimee Vajtauer, Nurse Practitioner"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Bio & credentials */}
          <div className="flex flex-col justify-center px-8 py-16 md:px-16 lg:px-20 lg:py-24">
            <span className="block text-sm font-bold tracking-widest uppercase text-[#8A7961] mb-4">
              Meet Your Practitioner
            </span>
            <h3 className="font-serif text-4xl md:text-5xl text-[#2B2824] mb-2">
              Aimee Vajtauer
            </h3>
            <p className="text-sm font-bold uppercase tracking-widest text-[#8A7961] mb-8">
              Nurse Practitioner
            </p>

            <blockquote className="text-xl md:text-2xl font-serif text-[#2B2824] leading-relaxed mb-10 border-l-2 border-[#8A7961] pl-6">
              &ldquo;I believe in treating the whole person, not just the symptoms. My goal is to empower you with the tools and knowledge to take control of your health.&rdquo;
            </blockquote>

            <div className="space-y-4 mb-10">
              {[
                "AHPRA Registered Nurse Practitioner",
                "BNurs (Deakin) · Master of Nurse Practitioner",
                "Specialising in gastroenterology & metabolic health",
                "Former NP at Princess Alexandra Hospital",
              ].map((credential) => (
                <div key={credential} className="flex items-center space-x-3 text-[#5C5346]">
                  <svg className="w-5 h-5 text-[#8A7961] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{credential}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-[#E8E2D5]">
              <div className="space-y-1">
                <span className="block text-xs font-bold uppercase tracking-widest text-[#8A7961]">Telehealth First</span>
                <p className="text-sm text-[#5C5346]">Accessible care from anywhere in Australia, designed for your comfort and privacy.</p>
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-bold uppercase tracking-widest text-[#8A7961]">Root-Cause Focus</span>
                <p className="text-sm text-[#5C5346]">We look past surface symptoms to identify and treat the underlying imbalances.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

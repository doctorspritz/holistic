"use client";

import React, { useState } from "react";

/**
 * ContactForm (Multi-Step Onboarding)
 * Implements command `/polish`: 
 * Evolves the stark, generic contact form into a friction-less, multi-step 
 * conversational questionnaire (The Polln benchmark for onboarding UX).
 */
export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    enquiryType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  
  const handleTypeSelect = (type: string) => {
    setFormData({ ...formData, enquiryType: type });
    handleNext();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const enquiryOptions = [
    { id: "appointment", label: "Book a new appointment", desc: "Start your holistic journey." },
    { id: "fees", label: "Fees or Medicare rebates", desc: "Questions about costs and coverage." },
    { id: "support", label: "Booking support", desc: "Help with the patient portal." },
    { id: "general", label: "General enquiry", desc: "Anything else." }
  ];

  return (
    <section id="enquiries" className="w-full bg-[#FAF7F2] px-6 py-24 border-t border-[#E8E2D5]">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        
        {/* Left Side: Copy & Contact Info */}
        <div className="md:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2B2824] leading-tight">
              Get in touch
            </h2>
            <p className="text-lg text-[#5C5346] leading-relaxed">
              Whether you're ready to book or just have a question about our approach, we're here to help.
            </p>
          </div>
          
          <div className="space-y-6 pt-6 border-t border-[#D1CAB8]">
            <div>
              <span className="block text-sm font-bold tracking-widest uppercase text-[#8A7961] mb-1">Email</span>
              <a href="mailto:hello@holisticcare.clinic" className="text-lg font-serif text-[#2B2824] hover:text-[#5C5346] transition-colors">
                hello@holisticcare.clinic
              </a>
            </div>
            <div>
              <span className="block text-sm font-bold tracking-widest uppercase text-[#8A7961] mb-1">Phone</span>
              <a href="tel:+61234567890" className="text-lg font-serif text-[#2B2824] hover:text-[#5C5346] transition-colors">
                1300 HOLISTIC
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Multi-Step Interactive Form */}
        <div className="md:col-span-7">
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-[#E8E2D5] min-h-[450px] flex flex-col relative overflow-hidden">
            
            {/* Progress Bar */}
            {!isSuccess && (
              <div className="absolute top-0 left-0 w-full h-1 bg-[#FAF7F2]">
                <div 
                  className="h-full bg-[#8A7961] transition-all duration-500 ease-out-quint"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            )}

            {isSuccess ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 py-12 animate-fade-in">
                <div className="w-20 h-20 bg-[#8A7961]/10 text-[#8A7961] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif text-[#2B2824]">Thank you</h3>
                <p className="text-lg text-[#5C5346] max-w-sm">
                  Your enquiry has been received. Our care team will be in touch shortly.
                </p>
              </div>
            ) : (
              <div className="flex-1 flex flex-col">
                
                {/* Step 1: Enquiry Type (Interactive Buttons) */}
                {step === 1 && (
                  <div className="flex-1 flex flex-col animate-fade-in">
                    <h3 className="text-2xl font-serif text-[#2B2824] mb-6">How can we help you today?</h3>
                    <div className="space-y-3 flex-1">
                      {enquiryOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleTypeSelect(option.label)}
                          className="w-full text-left p-4 rounded-xl border border-[#E8E2D5] hover:border-[#8A7961] hover:bg-[#FAF7F2] transition-all duration-300 group flex justify-between items-center"
                        >
                          <div>
                            <span className="block font-medium text-[#2B2824] mb-1">{option.label}</span>
                            <span className="block text-sm text-[#5C5346]">{option.desc}</span>
                          </div>
                          <svg className="w-5 h-5 text-[#D1CAB8] group-hover:text-[#8A7961] transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Personal Details */}
                {step === 2 && (
                  <div className="flex-1 flex flex-col animate-fade-in">
                    <div className="flex items-center space-x-4 mb-6">
                      <button onClick={handleBack} className="text-[#8A7961] hover:text-[#2B2824] transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <h3 className="text-2xl font-serif text-[#2B2824]">Your details</h3>
                    </div>
                    <div className="space-y-6 flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-[#2B2824]">First Name <span className="text-red-400">*</span></label>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            className="w-full bg-[#FAF7F2] border-none px-4 py-4 rounded-xl focus:ring-2 focus:ring-[#8A7961] transition-shadow outline-none"
                            placeholder="Jane"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-[#2B2824]">Last Name <span className="text-red-400">*</span></label>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            className="w-full bg-[#FAF7F2] border-none px-4 py-4 rounded-xl focus:ring-2 focus:ring-[#8A7961] transition-shadow outline-none"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#2B2824]">Email <span className="text-red-400">*</span></label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-[#FAF7F2] border-none px-4 py-4 rounded-xl focus:ring-2 focus:ring-[#8A7961] transition-shadow outline-none"
                          placeholder="jane@example.com"
                        />
                      </div>
                      <div className="pt-4">
                        <button
                          onClick={handleNext}
                          disabled={!formData.firstName || !formData.lastName || !formData.email}
                          className="w-full bg-[#2B2824] hover:bg-[#1A1815] text-[#FAF7F2] py-4 rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Message & Submit */}
                {step === 3 && (
                  <div className="flex-1 flex flex-col animate-fade-in">
                    <div className="flex items-center space-x-4 mb-6">
                      <button onClick={handleBack} className="text-[#8A7961] hover:text-[#2B2824] transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <h3 className="text-2xl font-serif text-[#2B2824]">Your message</h3>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                      <div className="space-y-2 flex-1 flex flex-col">
                        <p className="text-sm text-[#5C5346] mb-2">
                          Regarding: <span className="font-medium text-[#2B2824]">{formData.enquiryType}</span>
                        </p>
                        <textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full flex-1 min-h-[150px] bg-[#FAF7F2] border-none px-4 py-4 rounded-xl focus:ring-2 focus:ring-[#8A7961] transition-shadow outline-none resize-none"
                          placeholder="Please provide any relevant details so we can best assist you..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting || !formData.message}
                        className="w-full bg-[#2B2824] hover:bg-[#1A1815] text-[#FAF7F2] py-4 rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.01]"
                      >
                        {isSubmitting ? "Sending securely..." : "Send Message"}
                      </button>
                    </form>
                  </div>
                )}

              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
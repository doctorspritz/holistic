import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import ServiceGrid from "@/components/ServiceGrid";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutUs />
      <ServiceGrid />
      <ContactForm />
    </div>
  );
}
// src/app/page.js
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SpecialitiesSection from "@/components/SpecialitiesSection";
import HospitalsSection from "@/components/HospitalsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <SpecialitiesSection />
      <HospitalsSection />
      {/* You can add more sections here as you build them */}
    </>
  );
}

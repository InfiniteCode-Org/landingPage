import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import WorldMap from "@/components/WorldMap";
import MainInfo from "@/components/MainInfo";
import ServicesCarousel from "@/components/ServicesCarousel";
import ContactSection from "@/components/ContactSection";
import CaseStudies from "@/components/CaseStudies";

export default function Home() {
  return (
    <div>
      <Hero />
      <Metrics /> 
      <MainInfo />
      <ServicesCarousel />
      <CaseStudies />
      <ContactSection />
    </div>
  );
}

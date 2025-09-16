import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import WorldMap from "@/components/WorldMap";
import MainInfo from "@/components/MainInfo";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";

export default function Home() {
  return (
    <div>
      <Hero />
      <Metrics /> 
      <MainInfo />
      <CaseStudies />
      <Testimonials />
      <ContactSection />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import UtilitiesSection from "@/components/UtilitiesSection";
import EntrepreneursSection from "@/components/EntrepreneursSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <UtilitiesSection />
      <EntrepreneursSection />
      <ContactSection />
    </div>
  );
};

export default Index;

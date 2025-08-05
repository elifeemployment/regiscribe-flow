import Navbar from "@/components/Navbar";
import UtilitiesSection from "@/components/UtilitiesSection";

const Utilities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="py-16">
        <UtilitiesSection />
      </div>
    </div>
  );
};

export default Utilities;
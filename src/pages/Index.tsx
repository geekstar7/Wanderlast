import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationGrid from "@/components/DestinationGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <DestinationGrid />
      </main>
    </div>
  );
};

export default Index;

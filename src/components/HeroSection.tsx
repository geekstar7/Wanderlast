import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchDialog from "./SearchDialog";
import DestinationModal from "./DestinationModal";
import { Destination } from "@/data/destinations";
import heroImage from "@/assets/hero-mountain.jpg";

const HeroSection = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleDestinationSelect = (destination: Destination) => {
    setSelectedDestination(destination);
  };
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Explore curated lists of top attractions, hidden gems, and local favorites from around the globe.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Where do you want to explore?"
              className="pl-12 h-14 text-lg bg-white/95 backdrop-blur border-0 shadow-hero cursor-pointer"
              onClick={handleSearchClick}
              readOnly
            />
          </div>
          <Button variant="hero" size="lg" className="h-14 px-8 text-lg" onClick={handleSearchClick}>
            Discover Now
          </Button>
        </div>
      </div>

      {/* Search Dialog */}
      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onDestinationSelect={handleDestinationSelect}
      />

      {/* Destination Modal */}
      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          isOpen={!!selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </section>
  );
};

export default HeroSection;
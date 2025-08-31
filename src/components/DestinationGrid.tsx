import { useState, useMemo } from "react";
import DestinationCard from "./DestinationCard";
import FilterTabs, { FilterCategory } from "./FilterTabs";
import SortDropdown, { SortOption } from "./SortDropdown";
import DestinationModal from "./DestinationModal";
import { destinations, Destination } from "@/data/destinations";

const DestinationGrid = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [currentSort, setCurrentSort] = useState<SortOption>("rating");
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const filteredAndSortedDestinations = useMemo(() => {
    let filtered = destinations.filter((destination) => {
      if (activeFilter === "All") return true;
      return destination.type === activeFilter;
    });

    // Sort the filtered destinations
    filtered.sort((a, b) => {
      switch (currentSort) {
        case "name":
          return a.name.localeCompare(b.name);
        case "rating":
          return b.rating - a.rating;
        case "reviews":
          return b.reviewCount - a.reviewCount;
        case "country":
          return a.country.localeCompare(b.country);
        default:
          return 0;
      }
    });

    return filtered;
  }, [activeFilter, currentSort]);

  const handleDestinationClick = (destination: Destination) => {
    setSelectedDestination(destination);
  };

  const handleCloseModal = () => {
    setSelectedDestination(null);
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Discover Your Next Adventure
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore curated lists of top attractions, hidden gems, and local favorites from around the globe.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <SortDropdown currentSort={currentSort} onSortChange={setCurrentSort} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredAndSortedDestinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            onClick={handleDestinationClick}
          />
        ))}
      </div>

      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          isOpen={!!selectedDestination}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default DestinationGrid;
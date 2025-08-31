import { useState, useMemo } from "react";
import { destinations, Destination } from "@/data/destinations";

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDestinations = useMemo(() => {
    if (!searchQuery.trim()) return destinations;
    
    const query = searchQuery.toLowerCase();
    return destinations.filter(destination =>
      destination.name.toLowerCase().includes(query) ||
      destination.location.toLowerCase().includes(query) ||
      destination.country.toLowerCase().includes(query) ||
      destination.type.toLowerCase().includes(query) ||
      destination.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredDestinations
  };
};
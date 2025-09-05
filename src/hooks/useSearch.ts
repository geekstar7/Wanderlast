import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Destination } from "@/data/destinations";
import { LocationAPI } from "@/services/api";

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: filteredDestinations = [] } = useQuery<Destination[], Error>({
    queryKey: ["destinations", "search", searchQuery],
    queryFn: () => searchQuery.trim() 
      ? LocationAPI.searchDestinations(searchQuery) 
      : LocationAPI.getDestinations(),
    enabled: true,
    staleTime: 1 * 60 * 1000, // 1 minute for search results
  });

  return {
    searchQuery,
    setSearchQuery,
    filteredDestinations
  };
};
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Destination } from "@/data/destinations";
import { LocationAPI } from "@/services/api";

export const useDestinations = () => {
  return useQuery<Destination[], Error>({
    queryKey: ["destinations"],
    queryFn: LocationAPI.getDestinations,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useDestinationSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return useQuery<Destination[], Error>({
    queryKey: ["destinations", "search", searchQuery],
    queryFn: () => searchQuery ? LocationAPI.searchDestinations(searchQuery) : LocationAPI.getDestinations(),
    enabled: true,
    staleTime: 2 * 60 * 1000, // 2 minutes for search results
  });
};

export const useDestinationsByType = (type: string) => {
  return useQuery<Destination[], Error>({
    queryKey: ["destinations", "type", type],
    queryFn: () => LocationAPI.getDestinationsByType(type),
    staleTime: 5 * 60 * 1000,
  });
};
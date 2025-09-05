import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  useEffect(() => {
    const stored = localStorage.getItem("wanderlust-favorites");
    if (stored) {
      setFavorites(new Set(JSON.parse(stored)));
    }
  }, []);

  const toggleFavorite = (destinationId: string, destinationName: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(destinationId)) {
        newFavorites.delete(destinationId);
        toast({
          title: "Removed from favorites",
          description: `${destinationName} has been removed from your favorites.`,
        });
      } else {
        newFavorites.add(destinationId);
        toast({
          title: "Added to favorites",
          description: `${destinationName} has been added to your favorites.`,
        });
      }
      localStorage.setItem("wanderlust-favorites", JSON.stringify([...newFavorites]));
      return newFavorites;
    });
  };

  const isFavorite = (destinationId: string) => favorites.has(destinationId);

  return {
    favorites,
    toggleFavorite,
    isFavorite
  };
};
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type FilterCategory = "All" | "Landmark" | "Museum" | "Park" | "Hidden Gem";

interface FilterTabsProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
}

const FilterTabs = ({ activeFilter, onFilterChange }: FilterTabsProps) => {
  const filters: FilterCategory[] = ["All", "Landmark", "Museum", "Park", "Hidden Gem"];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? "default" : "ghost"}
          onClick={() => onFilterChange(filter)}
          className={cn(
            "transition-all duration-200",
            activeFilter === filter 
              ? "bg-travel-teal text-white shadow-card" 
              : "text-muted-foreground hover:text-travel-teal"
          )}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default FilterTabs;
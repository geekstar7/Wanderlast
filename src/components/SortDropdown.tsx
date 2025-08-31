import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type SortOption = "name" | "rating" | "reviews" | "country";

interface SortDropdownProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const SortDropdown = ({ currentSort, onSortChange }: SortDropdownProps) => {
  const sortOptions = [
    { value: "name" as SortOption, label: "Name (A-Z)" },
    { value: "rating" as SortOption, label: "Highest Rated" },
    { value: "reviews" as SortOption, label: "Most Reviewed" },
    { value: "country" as SortOption, label: "Country" },
  ];

  const currentLabel = sortOptions.find(option => option.value === currentSort)?.label;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <ArrowUpDown className="h-4 w-4" />
          Sort: {currentLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {sortOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onSortChange(option.value)}
            className={currentSort === option.value ? "bg-muted" : ""}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortDropdown;
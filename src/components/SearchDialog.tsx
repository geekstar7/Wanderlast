import { useState } from "react";
import { Search, MapPin, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useSearch } from "@/hooks/useSearch";
import { Destination } from "@/data/destinations";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onDestinationSelect: (destination: Destination) => void;
}

const SearchDialog = ({ isOpen, onClose, onDestinationSelect }: SearchDialogProps) => {
  const { searchQuery, setSearchQuery, filteredDestinations } = useSearch();

  const handleDestinationClick = (destination: Destination) => {
    onDestinationSelect(destination);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Search Destinations</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search destinations, locations, or types..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
          
          <div className="max-h-96 overflow-y-auto space-y-2">
            {filteredDestinations.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                {searchQuery ? "No destinations found." : "Type to search destinations..."}
              </div>
            ) : (
              filteredDestinations.map((destination) => (
                <div
                  key={destination.id}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                  onClick={() => handleDestinationClick(destination)}
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium truncate">{destination.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {destination.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {destination.location}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-travel-orange text-travel-orange" />
                        {destination.rating}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
import { Star, MapPin, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Destination } from "@/data/destinations";
import { useFavorites } from "@/hooks/useFavorites";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  destination: Destination;
  onClick: (destination: Destination) => void;
}

const DestinationCard = ({ destination, onClick }: DestinationCardProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(destination.id, destination.name);
  };

  return (
    <Card 
      className="group cursor-pointer overflow-hidden shadow-card hover:shadow-hover transform hover:scale-105 transition-all duration-300"
      onClick={() => onClick(destination)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 bg-white/90 backdrop-blur hover:bg-white"
            onClick={handleFavoriteClick}
          >
            <Heart 
              className={cn(
                "h-4 w-4",
                isFavorite(destination.id) 
                  ? "fill-red-500 text-red-500" 
                  : "text-travel-teal"
              )}
            />
          </Button>
          <Badge 
            variant="secondary" 
            className="bg-white/90 text-travel-teal font-medium backdrop-blur"
          >
            {destination.type}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg leading-tight group-hover:text-travel-teal transition-colors">
            {destination.name}
          </h3>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1 text-travel-teal" />
            {destination.location}
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-travel-orange text-travel-orange mr-1" />
              <span className="font-medium text-sm">{destination.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({destination.reviewCount.toLocaleString()} reviews)
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
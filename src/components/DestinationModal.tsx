import { useState } from "react";
import { X, Star, MapPin, Clock, Phone, Globe, Heart, Share2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Destination } from "@/data/destinations";
import { useFavorites } from "@/hooks/useFavorites";
import { toast } from "@/components/ui/use-toast";
import BookingDialog from "./BookingDialog";
import TripPlannerDialog from "./TripPlannerDialog";
import { cn } from "@/lib/utils";

interface DestinationModalProps {
  destination: Destination;
  isOpen: boolean;
  onClose: () => void;
}

const DestinationModal = ({ destination, isOpen, onClose }: DestinationModalProps) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTripPlannerOpen, setIsTripPlannerOpen] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleFavoriteClick = () => {
    toggleFavorite(destination.id, destination.name);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: destination.name,
        text: destination.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied",
        description: "Destination link has been copied to your clipboard.",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {/* Hero Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
          
          {/* Header Content */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur">
                {destination.type}
              </Badge>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{destination.name}</h1>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-travel-orange text-travel-orange mr-1" />
                <span className="font-medium">{destination.rating}</span>
                <span className="ml-1">({destination.reviewCount.toLocaleString()} reviews)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {destination.location}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button 
              variant="secondary" 
              size="icon" 
              className="bg-white/20 backdrop-blur hover:bg-white/30"
              onClick={handleFavoriteClick}
            >
              <Heart 
                className={cn(
                  "h-4 w-4",
                  isFavorite(destination.id) 
                    ? "fill-red-500 text-red-500" 
                    : "text-white"
                )}
              />
            </Button>
            <Button 
              variant="secondary" 
              size="icon" 
              className="bg-white/20 backdrop-blur hover:bg-white/30"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">About</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {destination.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {destination.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <div className="w-2 h-2 bg-travel-teal rounded-full"></div>
                      <span className="text-sm font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-semibold mb-4">Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-travel-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">Hours</span>
                      <span className="text-muted-foreground">{destination.hours}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-travel-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">Address</span>
                      <span className="text-muted-foreground">{destination.address}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-travel-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">Contact</span>
                      <span className="text-muted-foreground">{destination.contact}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Globe className="h-4 w-4 text-travel-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium block">Website</span>
                      <a 
                        href={`https://${destination.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-travel-teal hover:underline"
                      >
                        {destination.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => setIsBookingOpen(true)}
                >
                  Plan Your Visit
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  size="lg"
                  onClick={() => setIsTripPlannerOpen(true)}
                >
                  Add to Trip
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Dialog */}
        <BookingDialog
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          destination={destination}
        />

        {/* Trip Planner Dialog */}
        <TripPlannerDialog
          isOpen={isTripPlannerOpen}
          onClose={() => setIsTripPlannerOpen(false)}
          selectedDestination={destination}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DestinationModal;
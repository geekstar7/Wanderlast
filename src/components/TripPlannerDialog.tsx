import { useState } from "react";
import { Plus, MapPin, Calendar, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useTrips } from "@/hooks/useTrips";
import { destinations, Destination } from "@/data/destinations";

interface TripPlannerDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDestination?: Destination;
}

const TripPlannerDialog = ({ isOpen, onClose, selectedDestination }: TripPlannerDialogProps) => {
  const [newTripName, setNewTripName] = useState("");
  const [showNewTripForm, setShowNewTripForm] = useState(false);
  const { trips, createTrip, addToTrip, removeFromTrip } = useTrips();

  const handleCreateTrip = () => {
    if (newTripName.trim()) {
      const tripId = createTrip(newTripName.trim());
      if (selectedDestination) {
        addToTrip(tripId, selectedDestination.id, selectedDestination.name);
      }
      setNewTripName("");
      setShowNewTripForm(false);
    }
  };

  const getTripDestinations = (tripDestinationIds: string[]) => {
    return destinations.filter(dest => tripDestinationIds.includes(dest.id));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Trip Planner</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Create New Trip */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Your Trips</h3>
              <Button
                onClick={() => setShowNewTripForm(!showNewTripForm)}
                variant="outline"
                size="sm"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Trip
              </Button>
            </div>
            
            {showNewTripForm && (
              <Card className="mb-4">
                <CardContent className="p-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter trip name..."
                      value={newTripName}
                      onChange={(e) => setNewTripName(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleCreateTrip()}
                    />
                    <Button onClick={handleCreateTrip}>Create</Button>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setShowNewTripForm(false);
                        setNewTripName("");
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Trip List */}
          <div className="space-y-4">
            {trips.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No trips created yet. Start planning your adventure!</p>
              </div>
            ) : (
              trips.map((trip) => {
                const tripDestinations = getTripDestinations(trip.destinationIds);
                
                return (
                  <Card key={trip.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold">{trip.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            Created {trip.createdAt.toLocaleDateString()} • {trip.destinationIds.length} destinations
                          </p>
                        </div>
                        {selectedDestination && (
                          <Button
                            onClick={() => addToTrip(trip.id, selectedDestination.id, selectedDestination.name)}
                            variant="outline"
                            size="sm"
                            disabled={trip.destinationIds.includes(selectedDestination.id)}
                          >
                            {trip.destinationIds.includes(selectedDestination.id) ? "Added" : "Add Here"}
                          </Button>
                        )}
                      </div>
                      
                      {tripDestinations.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {tripDestinations.map((destination) => (
                            <div key={destination.id} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                              <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div className="flex-1 min-w-0">
                                <h5 className="font-medium text-sm truncate">{destination.name}</h5>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {destination.location}
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => removeFromTrip(trip.id, destination.id, destination.name)}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TripPlannerDialog;
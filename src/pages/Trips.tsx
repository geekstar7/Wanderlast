import { useState } from "react";
import { Plus, Calendar, MapPin, Trash2, Edit2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTrips } from "@/hooks/useTrips";
import { useDestinations } from "@/hooks/useDestinations";
import TripPlannerDialog from "@/components/TripPlannerDialog";

const Trips = () => {
  const [isTripPlannerOpen, setIsTripPlannerOpen] = useState(false);
  const { trips, removeFromTrip } = useTrips();
  const { data: destinations = [] } = useDestinations();

  const getTripDestinations = (tripDestinationIds: string[]) => {
    return destinations.filter(dest => tripDestinationIds.includes(dest.id));
  };

  const getTripDuration = (destinationIds: string[]) => {
    // Simple estimation: 2 days per destination
    return destinationIds.length * 2;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">My Trips</h1>
            <p className="text-muted-foreground">
              Plan and organize your travel adventures
            </p>
          </div>
          <Button 
            onClick={() => setIsTripPlannerOpen(true)}
            size="lg"
            className="mt-4 md:mt-0"
          >
            <Plus className="h-5 w-5 mr-2" />
            Create New Trip
          </Button>
        </div>

        {trips.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">No trips yet</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Start planning your next adventure by creating your first trip. Add destinations, set dates, and organize your journey.
            </p>
            <Button 
              onClick={() => setIsTripPlannerOpen(true)}
              size="lg"
            >
              <Plus className="h-5 w-5 mr-2" />
              Plan Your First Trip
            </Button>
          </div>
        ) : (
          /* Trips Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => {
              const tripDestinations = getTripDestinations(trip.destinationIds);
              const duration = getTripDuration(trip.destinationIds);
              
              return (
                <Card key={trip.id} className="group hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{trip.name}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {trip.createdAt.toLocaleDateString()}
                          </div>
                          <Badge variant="secondary">
                            {duration} days
                          </Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Destinations</span>
                        <span className="text-sm text-muted-foreground">
                          {trip.destinationIds.length} locations
                        </span>
                      </div>
                      
                      {tripDestinations.length > 0 ? (
                        <div className="space-y-2">
                          {tripDestinations.slice(0, 3).map((destination) => (
                            <div key={destination.id} className="flex items-center gap-3 p-2 bg-muted rounded-lg">
                              <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-10 h-10 object-cover rounded"
                              />
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm truncate">{destination.name}</h4>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {destination.location}
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => removeFromTrip(trip.id, destination.id, destination.name)}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          ))}
                          {tripDestinations.length > 3 && (
                            <div className="text-center py-2 text-sm text-muted-foreground">
                              +{tripDestinations.length - 3} more destinations
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-muted-foreground">
                          <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
                          <p className="text-sm">No destinations added yet</p>
                        </div>
                      )}
                      
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          View Details
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => setIsTripPlannerOpen(true)}
                        >
                          Add Destinations
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Trip Planner Dialog */}
        <TripPlannerDialog
          isOpen={isTripPlannerOpen}
          onClose={() => setIsTripPlannerOpen(false)}
        />
      </main>
    </div>
  );
};

export default Trips;
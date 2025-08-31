import { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

export interface Trip {
  id: string;
  name: string;
  destinationIds: string[];
  createdAt: Date;
}

export const useTrips = () => {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("wanderlust-trips");
    if (stored) {
      const parsedTrips = JSON.parse(stored).map((trip: any) => ({
        ...trip,
        createdAt: new Date(trip.createdAt)
      }));
      setTrips(parsedTrips);
    }
  }, []);

  const createTrip = (name: string) => {
    const newTrip: Trip = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      destinationIds: [],
      createdAt: new Date()
    };
    
    setTrips(prev => {
      const updated = [...prev, newTrip];
      localStorage.setItem("wanderlust-trips", JSON.stringify(updated));
      return updated;
    });

    toast({
      title: "Trip created",
      description: `${name} has been created successfully.`,
    });

    return newTrip.id;
  };

  const addToTrip = (tripId: string, destinationId: string, destinationName: string) => {
    setTrips(prev => {
      const updated = prev.map(trip => 
        trip.id === tripId && !trip.destinationIds.includes(destinationId)
          ? { ...trip, destinationIds: [...trip.destinationIds, destinationId] }
          : trip
      );
      localStorage.setItem("wanderlust-trips", JSON.stringify(updated));
      
      const trip = updated.find(t => t.id === tripId);
      if (trip) {
        toast({
          title: "Added to trip",
          description: `${destinationName} has been added to ${trip.name}.`,
        });
      }
      
      return updated;
    });
  };

  const removeFromTrip = (tripId: string, destinationId: string, destinationName: string) => {
    setTrips(prev => {
      const updated = prev.map(trip => 
        trip.id === tripId
          ? { ...trip, destinationIds: trip.destinationIds.filter(id => id !== destinationId) }
          : trip
      );
      localStorage.setItem("wanderlust-trips", JSON.stringify(updated));
      
      const trip = updated.find(t => t.id === tripId);
      if (trip) {
        toast({
          title: "Removed from trip",
          description: `${destinationName} has been removed from ${trip.name}.`,
        });
      }
      
      return updated;
    });
  };

  return {
    trips,
    createTrip,
    addToTrip,
    removeFromTrip
  };
};
import { useState } from "react";
import { Calendar, Users, Clock, CreditCard } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Destination } from "@/data/destinations";

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  destination: Destination;
}

const BookingDialog = ({ isOpen, onClose, destination }: BookingDialogProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [partySize, setPartySize] = useState("");
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", phone: "" });

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !partySize || !contactInfo.name || !contactInfo.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking process
    toast({
      title: "Booking Confirmed!",
      description: `Your visit to ${destination.name} has been scheduled for ${selectedDate} at ${selectedTime}.`,
    });

    onClose();
    
    // Reset form
    setSelectedDate("");
    setSelectedTime("");
    setPartySize("");
    setContactInfo({ name: "", email: "", phone: "" });
  };

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Book Your Visit - {destination.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Destination Info */}
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">{destination.name}</h3>
                  <p className="text-sm text-muted-foreground">{destination.location}</p>
                  <p className="text-sm text-muted-foreground">{destination.hours}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date *</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="date"
                  type="date"
                  className="pl-10"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Time *</Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <SelectValue placeholder="Select time" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>{time}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="party-size">Party Size *</Label>
              <Select value={partySize} onValueChange={setPartySize}>
                <SelectTrigger>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <SelectValue placeholder="Number of people" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "person" : "people"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button onClick={handleBooking} className="flex-1">
              <CreditCard className="h-4 w-4 mr-2" />
              Confirm Booking
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
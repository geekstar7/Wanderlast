import { useState } from "react";
import { Search, Filter, MapPin, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import DestinationGrid from "@/components/DestinationGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { name: "All", count: 248, active: true },
    { name: "Landmarks", count: 89, active: false },
    { name: "Museums", count: 67, active: false },
    { name: "Nature", count: 45, active: false },
    { name: "Culture", count: 47, active: false },
  ];

  const featuredRegions = [
    { name: "Europe", destinations: 89, image: "/placeholder.svg" },
    { name: "Asia", destinations: 67, image: "/placeholder.svg" },
    { name: "Americas", destinations: 45, image: "/placeholder.svg" },
    { name: "Africa", destinations: 23, image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore the <span className="text-travel-teal">World</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover amazing destinations, hidden gems, and cultural treasures from around the globe.
          </p>
          
          {/* Enhanced Search */}
          <div className="flex flex-col md:flex-row gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search destinations, cities, or attractions..."
                className="pl-11 h-12 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button size="lg" className="px-8">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Badge
                key={category.name}
                variant={category.active ? "default" : "secondary"}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/90"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Regions */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Regions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRegions.map((region) => (
              <Card key={region.name} className="group cursor-pointer hover:shadow-hover transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gradient-subtle rounded-t-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 mx-auto mb-2 text-travel-teal" />
                      <h3 className="text-xl font-semibold">{region.name}</h3>
                      <p className="text-muted-foreground">{region.destinations} destinations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">All Destinations</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4" />
              Showing top rated destinations
            </div>
          </div>
          <DestinationGrid />
        </div>
      </main>
    </div>
  );
};

export default Explore;
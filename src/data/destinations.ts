import goldenGateImage from "@/assets/golden-gate.jpg";
import eiffelTowerImage from "@/assets/eiffel-tower.jpg";
import machuPicchuImage from "@/assets/machu-picchu.jpg";
import colosseumImage from "@/assets/colosseum.jpg";
import louvreImage from "@/assets/louvre.jpg";
import centralParkImage from "@/assets/central-park.jpg";
import santoriniImage from "@/assets/santorini.jpg";
import grandCanyonImage from "@/assets/grand-canyon.jpg";

export interface Destination {
  id: string;
  name: string;
  type: "Landmark" | "Museum" | "Park" | "Hidden Gem";
  location: string;
  country: string;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  hours: string;
  address: string;
  contact: string;
  website: string;
  amenities: string[];
}

export const destinations: Destination[] = [
  {
    id: "golden-gate-bridge",
    name: "Golden Gate Bridge",
    type: "Landmark",
    location: "San Francisco, USA",
    country: "USA",
    rating: 4.8,
    reviewCount: 2456,
    image: goldenGateImage,
    description: "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean. It is one of the most internationally recognized symbols of San Francisco and California.",
    hours: "Open 24 hours",
    address: "Golden Gate Bridge, San Francisco, CA 94129",
    contact: "(415) 921-5858",
    website: "goldengate.org",
    amenities: ["Parking", "Wheelchair Accessible", "Restrooms"]
  },
  {
    id: "eiffel-tower",
    name: "Eiffel Tower",
    type: "Landmark",
    location: "Paris, France",
    country: "France",
    rating: 4.6,
    reviewCount: 3821,
    image: eiffelTowerImage,
    description: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.",
    hours: "9:30 AM - 11:45 PM",
    address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
    contact: "+33 8 92 70 12 39",
    website: "toureiffel.paris",
    amenities: ["Restaurant", "Gift Shop", "Elevator Access"]
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    type: "Landmark",
    location: "Cusco Region, Peru",
    country: "Peru",
    rating: 4.9,
    reviewCount: 1567,
    image: machuPicchuImage,
    description: "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter mountain ridge. Most archaeologists believe that Machu Picchu was constructed as an estate for the Inca emperor Pachacuti.",
    hours: "6:00 AM - 5:30 PM",
    address: "08680, Peru",
    contact: "+51 84 582030",
    website: "machupicchu.gob.pe",
    amenities: ["Guided Tours", "Hiking Trails", "Photography Allowed"]
  },
  {
    id: "colosseum",
    name: "Colosseum",
    type: "Landmark",
    location: "Rome, Italy",
    country: "Italy",
    rating: 4.5,
    reviewCount: 4231,
    image: colosseumImage,
    description: "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum and is the largest amphitheatre ever built.",
    hours: "8:30 AM - 7:15 PM",
    address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
    contact: "+39 06 3996 7700",
    website: "colosseo.it",
    amenities: ["Audio Guide", "Wheelchair Accessible", "Gift Shop"]
  },
  {
    id: "louvre-museum",
    name: "Louvre Museum",
    type: "Museum",
    location: "Paris, France",
    country: "France",
    rating: 4.7,
    reviewCount: 2890,
    image: louvreImage,
    description: "The Louvre Museum is the world's most-visited museum, and a historic landmark in Paris, France. It is the home of some of the best-known works of art, including the Mona Lisa and the Venus de Milo.",
    hours: "9:00 AM - 6:00 PM",
    address: "Rue de Rivoli, 75001 Paris, France",
    contact: "+33 1 40 20 50 50",
    website: "louvre.fr",
    amenities: ["Audio Guide", "Restaurant", "Gift Shop", "Wheelchair Accessible"]
  },
  {
    id: "central-park",
    name: "Central Park",
    type: "Park",
    location: "New York, USA",
    country: "USA",
    rating: 4.8,
    reviewCount: 3456,
    image: centralParkImage,
    description: "Central Park is an urban park in New York City, located between the Upper West and Upper East Sides of Manhattan. It is the fifth-largest park in the city by area, covering 843 acres.",
    hours: "6:00 AM - 1:00 AM",
    address: "New York, NY, USA",
    contact: "(212) 310-6600",
    website: "centralparknyc.org",
    amenities: ["Bike Rentals", "Playgrounds", "Lakes", "Walking Trails"]
  },
  {
    id: "santorini",
    name: "Santorini",
    type: "Hidden Gem",
    location: "Cyclades, Greece",
    country: "Greece",
    rating: 4.9,
    reviewCount: 1823,
    image: santoriniImage,
    description: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape.",
    hours: "Always open",
    address: "Santorini, Greece",
    contact: "+30 2286 022444",
    website: "visitsantorini.gr",
    amenities: ["Hotels", "Restaurants", "Swimming", "Sunset Views"]
  },
  {
    id: "grand-canyon",
    name: "Grand Canyon",
    type: "Park",
    location: "Arizona, USA",
    country: "USA",
    rating: 4.8,
    reviewCount: 2178,
    image: grandCanyonImage,
    description: "The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon is 277 river miles long, up to 18 miles wide and attains a depth of over a mile.",
    hours: "Always open",
    address: "Arizona, USA",
    contact: "(928) 638-7888",
    website: "nps.gov/grca",
    amenities: ["Hiking Trails", "Visitor Center", "Camping", "Photography"]
  }
];
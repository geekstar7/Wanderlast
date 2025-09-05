import { Users, Target, Heart, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Global Discovery",
      description: "We believe every corner of the world holds something magical waiting to be discovered."
    },
    {
      icon: Heart,
      title: "Passionate Community",
      description: "Travel is better when shared. We connect like-minded explorers from around the globe."
    },
    {
      icon: Users,
      title: "Authentic Experiences",
      description: "We promote genuine, local experiences that create lasting memories and cultural understanding."
    },
    {
      icon: Target,
      title: "Sustainable Tourism",
      description: "We're committed to responsible travel that preserves destinations for future generations."
    }
  ];

  const team = [
  
    {
      name: "Stallone Njogu Mathenge",
      role: "Web  Developer",
      description: "Community builder passionate about connecting travelers worldwide.",
      image: "/Stallone-pic.jpg"
    },
    
  ];

  const stats = [
    { number: "150+", label: "Countries Covered" },
    { number: "50k+", label: "Happy Travelers" },
    { number: "10k+", label: "Destinations" },
    { number: "5 Years", label: "Experience" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-travel-teal">Wanderlast</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              i'm on a mission to make travel discovery effortless, inspiring, and accessible to everyone. 
              From hidden local gems to world-famous landmarks, we help you find your next adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Join my Community
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-travel-teal mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wanderlast was born from a simple frustration: planning travel shouldn't be overwhelming. 
                Founded in 2019 by a team of passionate travelers, we set out to create a platform that 
                makes discovering and planning your next adventure as exciting as the journey itself.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Why we Started</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Wanderlast is a modern web application designed to make exploring and discovering travel experiences easier and more engaging. Built with React, Vite, TailwindCSS, and Supabase, it provides a seamless and responsive user experience for travelers who want to connect, share, and plan their journeys.
With Wanderlast, users can:
Discover unique destinations and community trips.
Book experiences online with real-time updates.
Save favorite adventures and manage travel preferences.
Enjoy a smooth, fast, and mobile-friendly interface.
Our mission is to bring people closer to meaningful travel experiences by combining technology with the love of adventure. Whether you're exploring locally or planning a global trip, Wanderlust helps you find, connect, and explore with ease.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, I'm proud to be trusted by over 50,000 travelers worldwide, helping them discover 
                  everything from bustling city centers to remote natural wonders.
                </p>
              </div>
              <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center">
                <Globe className="h-24 w-24 text-travel-teal opacity-20" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">My Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything I do, from the destinations I feature 
                to the community I'm building.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-travel-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-travel-teal" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Meet Me</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I’m a passionate travel enthusiast who loves discovering new destinations, experiencing different cultures, and capturing unforgettable moments along the way. For me, traveling isn’t just about reaching places — it’s about the stories, connections, and adventures that make every journey unique.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-travel-teal font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-hero text-white">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of travelers who trust Wanderlast to discover their next adventure. 
              Your perfect destination is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8">
                Explore Destinations
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-primary">
                Join Community
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
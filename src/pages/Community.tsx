import { useState } from "react";
import { MessageCircle, ThumbsUp, Share2, Camera, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Community = () => {
  const [activeTab, setActiveTab] = useState("feed");

  const communityPosts = [
    {
      id: 1,
      author: "Sarah Chen",
      avatar: "/placeholder.svg",
      location: "Tokyo, Japan",
      timestamp: "2 hours ago",
      content: "Just visited the most incredible hidden temple in Kyoto! The autumn colors were absolutely breathtaking. Highly recommend visiting during fall season.",
      image: "/placeholder.svg",
      likes: 24,
      comments: 8,
      destination: "Kyoto"
    },
    {
      id: 2,
      author: "Marco Rodriguez",
      avatar: "/placeholder.svg",
      location: "Barcelona, Spain",
      timestamp: "5 hours ago",
      content: "Pro tip: Visit Park Güell early morning to avoid crowds and catch the golden hour light. The city views are unmatched!",
      image: "/placeholder.svg",
      likes: 18,
      comments: 12,
      destination: "Barcelona"
    },
    {
      id: 3,
      author: "Emma Thompson",
      avatar: "/placeholder.svg",
      location: "Santorini, Greece",
      timestamp: "1 day ago",
      content: "Sunset in Oia never gets old. Every evening feels like a painting come to life. Already planning my next visit!",
      image: "/placeholder.svg",
      likes: 45,
      comments: 15,
      destination: "Santorini"
    }
  ];

  const trendingDestinations = [
    { name: "Iceland", posts: 234, trend: "+12%" },
    { name: "Morocco", posts: 189, trend: "+8%" },
    { name: "Vietnam", posts: 156, trend: "+15%" },
    { name: "Portugal", posts: 142, trend: "+6%" },
  ];

  const topContributors = [
    { name: "Alex Johnson", posts: 89, followers: "2.1k" },
    { name: "Maria Silva", posts: 76, followers: "1.8k" },
    { name: "David Kim", posts: 65, followers: "1.5k" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Travel <span className="text-travel-teal">Community</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow travelers, share experiences, and discover hidden gems through our vibrant community.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-travel-teal" />
              <div className="text-2xl font-bold">12.5k</div>
              <div className="text-sm text-muted-foreground">Active Travelers</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Camera className="h-8 w-8 mx-auto mb-2 text-travel-orange" />
              <div className="text-2xl font-bold">45.2k</div>
              <div className="text-sm text-muted-foreground">Photos Shared</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-8 w-8 mx-auto mb-2 text-travel-blue" />
              <div className="text-2xl font-bold">8.9k</div>
              <div className="text-sm text-muted-foreground">Travel Stories</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="feed" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="feed">Recent Posts</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="following">Following</TabsTrigger>
              </TabsList>
              
              <TabsContent value="feed" className="space-y-6 mt-6">
                {communityPosts.map((post) => (
                  <Card key={post.id}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={post.avatar} />
                          <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{post.author}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {post.destination}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{post.location} • {post.timestamp}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p>{post.content}</p>
                      
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <Camera className="h-16 w-16 text-muted-foreground" />
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <ThumbsUp className="h-4 w-4" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <MessageCircle className="h-4 w-4" />
                            {post.comments}
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="popular" className="mt-6">
                <div className="text-center py-16">
                  <TrendingUp className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Popular posts coming soon</h3>
                  <p className="text-muted-foreground">Discover the most loved content from our community.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="following" className="mt-6">
                <div className="text-center py-16">
                  <Users className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Follow travelers</h3>
                  <p className="text-muted-foreground">Follow other travelers to see their latest adventures.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Destinations */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Trending Destinations
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingDestinations.map((destination, index) => (
                  <div key={destination.name} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{destination.name}</div>
                      <div className="text-xs text-muted-foreground">{destination.posts} posts</div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {destination.trend}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Top Contributors
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={contributor.name} className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{contributor.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {contributor.posts} posts • {contributor.followers} followers
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;
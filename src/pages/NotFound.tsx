import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-travel-blue/10 via-background to-travel-teal/10 p-4">
      {/* Home Button */}
      <Button
        asChild
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-10 hover:bg-white/20"
      >
        <Link to="/">
          <Home className="h-5 w-5" />
        </Link>
      </Button>
      
      <div className="text-center">
        <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-white font-bold text-4xl">404</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

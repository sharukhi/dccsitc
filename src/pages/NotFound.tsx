import { Home, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="h-12 w-12 text-muted-foreground" />
          </div>
          
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. The page might have been moved or doesn't exist.
          </p>
          
          <Link to="/">
            <Button className="px-6 py-3">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
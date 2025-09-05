import { useState, useEffect } from 'react';
import { Users, Lightbulb, Award, Calendar, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';
import TallyScript from '@/components/TallyScript';

const Join = () => {
  const [isFormLoading, setIsFormLoading] = useState(true);

  // Handle form load
  const handleFormLoad = () => {
    setIsFormLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TallyScript />
      
      {/* Full Height Form Container with Beautiful Spacing */}
      <div className="flex-1 pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="h-full max-w-6xl mx-auto">
          <div className="relative h-full min-h-[calc(100vh-8rem)] w-full bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
            {isFormLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/95 backdrop-blur-sm z-10 rounded-2xl">
                <div className="flex flex-col items-center gap-4 p-8">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                  <p className="text-lg text-muted-foreground text-center">Loading application form...</p>
                  <p className="text-sm text-muted-foreground/70 text-center">Please wait while we prepare your membership application</p>
                </div>
              </div>
            )}
            
            <iframe
              data-tally-src="https://tally.so/embed/meV7yQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Dhaka Commerce College Science & IT Club Application"
              className="w-full h-full min-h-[calc(100vh-8rem)] border-0 rounded-2xl"
              onLoad={handleFormLoad}
            />
          </div>
          
          {/* Subtle info section at bottom */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground/80">
              Questions about membership? Contact us at <span className="text-primary font-medium"><a href="mailto:dccsitc@gmail.com">dccsitc@gmail.com</a></span> or reach out via WhatsApp at <span className="text-primary font-medium"><a href="https://wa.me/8801729248797">+8801729248797</a></span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default Join;
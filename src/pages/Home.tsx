import { ArrowRight, Users, Calendar, Trophy, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/Footer';
import siteData from '@/data/siteData.json';

const Home = () => {
  const { home } = siteData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            {home.hero.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            {home.hero.subtitle}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
            {home.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a href="/join">
              <Button className="px-6 sm:px-8 py-3 text-lg bg-[#000000] rounded-lg hover:bg-[#000000]/80">
                Join Our Club
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>  
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 pb-4 sm:mb-6">
            {home.about.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {home.about.description}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[16/9] rounded-2xl shadow-2xl overflow-hidden bg-muted">
                <img 
                  src={home.about.image}
                  alt="Club activities"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Achievements Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Recent Achievements
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto">
            Recent Achievements by our members.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {home.achievements.map((achievement, index) => (
              <Card key={index} className="border-border bg-card ">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-black from-primary to-primary/80 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-white bg-black" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm sm:text-base">
                    {achievement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Clubs Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Our Esteemed Partners
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto">
            DCCSIT Club has partnered with leading institutions and organizations in various fests and initiatives, promoting innovation, creativity, and excellence
          </p>
          
          <div className="relative overflow-hidden h-24 sm:h-32 w-full">
            <div className="flex animate-scroll-horizontal space-x-8 sm:space-x-12 absolute whitespace-nowrap">
              {[...home.partners, ...home.partners, ...home.partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0 w-24 sm:w-32 h-16 sm:h-20 flex items-center justify-center">
                  <img 
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
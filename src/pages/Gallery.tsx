import { useState } from 'react';
import { Search, Eye } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Footer from '@/components/Footer';
import siteData from '@/data/siteData.json';

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { images } = siteData.gallery;

  const filteredImages = images.filter(image =>
    image.caption.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto pb-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Photo Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore moments from our events, workshops, and achievements
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search gallery..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg rounded-xl border-2 border-border focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-center text-muted-foreground mt-4">
                  {image.caption}
                </p>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              No results found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms to find what you're looking for.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
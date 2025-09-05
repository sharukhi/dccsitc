import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import siteData from '@/data/siteData.json';

const Footer = () => {
  const { footer } = siteData;

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook':
        return <Facebook className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'instagram':
        return <Instagram className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {siteData.site.name}
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {footer.description}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-md font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-black mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{footer.contact.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-black mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{footer.contact.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-black mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{footer.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-md font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {footer.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="p-2 rounded-lg bg-muted hover:bg-white hover:text-black-foreground transition-colors"
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {siteData.site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
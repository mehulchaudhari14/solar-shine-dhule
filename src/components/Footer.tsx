import { Sun, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-solar flex items-center justify-center">
                <Sun className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold leading-tight">
                  Lakshmi Enterprises
                </span>
                <span className="text-xs text-primary-foreground/70">Solar & Hardware</span>
              </div>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Your trusted partner for premium solar solutions in Dhule. Authorized distributor 
              of Adani, Waaree, Loom, and Saatvik solar products.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="tel:8956592844"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-solar-amber transition-colors"
              >
                <Phone className="w-4 h-4" />
                8956592844
              </a>
              <a
                href="tel:8888815616"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-solar-amber transition-colors"
              >
                <Phone className="w-4 h-4" />
                8888815616
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Our Brands", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-primary-foreground/70 hover:text-solar-amber transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-solar-amber flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  Lane no. 6, House no. 2404, Near Azad Nagar Police Station, Dhule
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-solar-amber flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  SRP Colony, Dhule, Maharashtra
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-solar-amber flex-shrink-0" />
                <a
                  href="mailto:lakshmienterprises.7744@gmail.com"
                  className="text-sm text-primary-foreground/70 hover:text-solar-amber transition-colors break-all"
                >
                  lakshmienterprises.7744@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} Lakshmi Enterprises. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Made with &#10084; By @Mehul Chaudhari
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

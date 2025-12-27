import { Phone, Mail, MapPin, Clock, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contacts = [
    {
      name: "Hrishikesh P. Chaudhari",
      qualification: "B.E. (Elec.), M.Tech (Elec.)",
      phone: "8956592844",
    },
    {
      name: "Bhushan Chaudhari",
      qualification: "Director",
      phone: "8888815616",
    },
  ];

  const addresses = [
    {
      title: "Main Office",
      address: "Lane no. 6, House no. 2404, Near Azad Nagar Police Station, Dhule",
    },
    {
      title: "Branch Office",
      address: "SRP Colony, Dhule, Maharashtra",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Contact Us</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Get in Touch for{" "}
            <span className="text-gradient-solar">Free Consultation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to switch to solar? Contact us today for a free site assessment 
            and customized solar solution quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Team Contacts */}
            <div className="p-6 md:p-8 bg-card rounded-2xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Our Team
              </h3>
              <div className="space-y-6">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-solar flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary-foreground">
                        {contact.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{contact.name}</p>
                      <p className="text-sm text-muted-foreground mb-2">{contact.qualification}</p>
                      <a
                        href={`tel:${contact.phone}`}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                      >
                        <Phone className="w-4 h-4" />
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Addresses */}
            <div className="p-6 md:p-8 bg-card rounded-2xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Our Locations
              </h3>
              <div className="space-y-6">
                {addresses.map((addr, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{addr.title}</p>
                      <p className="text-muted-foreground">{addr.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email & Hours */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-card rounded-2xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-foreground mb-1">Email</p>
                <a
                  href="mailto:lakshmienterprises.7744@gmail.com"
                  className="text-sm text-primary hover:underline break-all"
                >
                  lakshmienterprises.7744@gmail.com
                </a>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-foreground mb-1">Business Hours</p>
                <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA Card */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/5 rounded-2xl border border-accent/30 shadow-lg flex flex-col items-center justify-center text-center h-full min-h-[400px]">
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-6 shadow-lg">
              <MessageCircle className="w-10 h-10 text-accent-foreground" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Chat With Us on WhatsApp
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-sm">
              Get instant response! Message Bhushan Chaudhari directly for quick quotes, 
              inquiries, and solar consultations.
            </p>
            
            <a
              href="https://wa.me/918888815616?text=Hi%2C%20I%27m%20interested%20in%20solar%20solutions%20from%20Lakshmi%20Enterprises.%20Please%20share%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs"
            >
              <Button variant="solar" size="lg" className="w-full gap-3 text-lg py-6 bg-accent hover:bg-accent/90">
                <MessageCircle className="w-6 h-6" />
                Message on WhatsApp
              </Button>
            </a>
            
            <p className="text-sm text-muted-foreground mt-6">
              Or call directly:{" "}
              <a href="tel:8888815616" className="text-primary font-medium hover:underline">
                8888815616
              </a>
            </p>
            
            <div className="mt-8 pt-6 border-t border-border/50 w-full">
              <p className="text-xs text-muted-foreground">
                Available Mon - Sat, 9:00 AM - 7:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

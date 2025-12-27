import { Sun, Wrench, Building2, Home, Factory, Battery } from "lucide-react";
import solarService from "@/assets/solar-service.jpg";

const Services = () => {
  const services = [
    {
      icon: Sun,
      title: "Solar Panels",
      description: "Premium quality solar panels from top brands like Adani, Waaree, Loom, and Saatvik with 25-year warranty.",
    },
    {
      icon: Battery,
      title: "Inverters & Batteries",
      description: "High-efficiency solar inverters and battery storage solutions for uninterrupted power supply.",
    },
    {
      icon: Wrench,
      title: "Installation Services",
      description: "Professional installation by certified technicians ensuring optimal performance and safety.",
    },
    {
      icon: Home,
      title: "Residential Solar",
      description: "Complete rooftop solar solutions for homes to reduce electricity bills and carbon footprint.",
    },
    {
      icon: Building2,
      title: "Commercial Solar",
      description: "Large-scale solar installations for businesses, offices, and commercial establishments.",
    },
    {
      icon: Factory,
      title: "Industrial Solutions",
      description: "High-capacity solar power plants for industries with customized solutions and maintenance.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Complete Solar Solutions{" "}
            <span className="text-gradient-solar">Under One Roof</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From consultation to installation and maintenance, we provide end-to-end 
            solar solutions for all your energy needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-solar flex items-center justify-center group-hover:animate-pulse-glow transition-all">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={solarService}
            alt="Solar service team"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40 flex items-center">
            <div className="p-8 md:p-12 max-w-xl">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Need Expert Consultation?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Our technical team will analyze your requirements and provide the best 
                solar solution tailored for you.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-solar text-primary-foreground font-semibold rounded-lg hover:shadow-glow transition-all hover:-translate-y-1"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import { CheckCircle2 } from "lucide-react";
import solarInstallation from "@/assets/solar-installation.jpg";

const About = () => {
  const features = [
    "Authorized distributor for top solar brands",
    "Complete solar solutions from consultation to installation",
    "Serving residential, commercial & industrial sectors",
    "Quality products with reliable after-sales support",
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={solarInstallation}
                alt="Solar panel installation"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl bg-gradient-solar opacity-20" />
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Your Trusted Partner for{" "}
              <span className="text-gradient-solar">Solar Solutions</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Lakshmi Enterprises is a leading solar distributor in Dhule, Maharashtra. 
              Led by Hrishikesh P. Chaudhari and Bhushan Chaudhari, we bring quality products 
              and reliable service to every solar project.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

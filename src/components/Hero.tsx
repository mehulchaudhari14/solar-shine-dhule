import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar panels during sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6 animate-slide-up">
            <Leaf className="w-4 h-4 text-solar-gold" />
            <span className="text-sm font-medium text-primary-foreground">
              Trusted Solar Distributor in Dhule
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up animation-delay-200">
            Power Your Future with{" "}
            <span className="text-gradient-solar">Clean Solar Energy</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-slide-up animation-delay-400">
            Your authorized distributor for premium solar panels and hardware solutions. 
            Partner with Adani, Waaree, Loom & Saatvik for reliable, eco-friendly energy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up animation-delay-600">
            <a href="#contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="glass" size="xl" className="w-full sm:w-auto">
                Our Services
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 animate-slide-up animation-delay-600">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <Zap className="w-6 h-6 text-solar-gold" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">500+</p>
                <p className="text-sm text-primary-foreground/70">Installations</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <Shield className="w-6 h-6 text-solar-gold" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">4+</p>
                <p className="text-sm text-primary-foreground/70">Top Brands</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <Leaf className="w-6 h-6 text-solar-gold" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">25yr</p>
                <p className="text-sm text-primary-foreground/70">Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

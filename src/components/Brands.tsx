import { Shield, Award, Star } from "lucide-react";

const Brands = () => {
  const brands = [
    {
      name: "Adani",
      tagline: "One with the Sun",
      description: "India's largest solar manufacturer with cutting-edge technology",
    },
    {
      name: "WAAREE",
      tagline: "Solar Excellence",
      description: "Pioneer in solar PV modules with global presence",
    },
    {
      name: "Loom Solar",
      tagline: "Power Innovation",
      description: "Startup of India, specialized in mono-crystalline panels",
    },
    {
      name: "Saatvik",
      tagline: "Green Energy",
      description: "Make in India initiative with high-efficiency modules",
    },
  ];

  const benefits = [
    { icon: Shield, text: "25 Year Product Warranty" },
    { icon: Award, text: "Certified Quality" },
    { icon: Star, text: "Premium Performance" },
  ];

  return (
    <section id="brands" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Our Partners</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Authorized Distributor of{" "}
            <span className="text-gradient-solar">Top Solar Brands</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We partner with India's leading solar manufacturers to bring you the 
            best quality products at competitive prices.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-solar flex items-center justify-center shadow-solar group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-primary-foreground">
                  {brand.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{brand.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{brand.tagline}</p>
              <p className="text-sm text-muted-foreground">{brand.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium text-foreground">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

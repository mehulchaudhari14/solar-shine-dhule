import { Award, Users, Target, CheckCircle2 } from "lucide-react";
import solarInstallation from "@/assets/solar-installation.jpg";

const About = () => {
  const features = [
    "Authorized distributor for top solar brands",
    "Expert technical team with B.E. & M.Tech qualifications",
    "Complete solar solutions from consultation to installation",
    "Serving residential, commercial & industrial sectors",
  ];

  const stats = [
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Users, value: "1000+", label: "Happy Customers" },
    { icon: Target, value: "100%", label: "Quality Assured" },
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
              {/* Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:w-64 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-solar flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Certified Experts</p>
                    <p className="text-sm text-muted-foreground">B.E. & M.Tech Qualified</p>
                  </div>
                </div>
              </div>
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
              Led by qualified professionals Hrishikesh P. Chaudhari (B.E., M.Tech in Electrical) 
              and Bhushan Chaudhari, we bring technical expertise and quality products to 
              every solar project.
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

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

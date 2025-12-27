import { Camera } from "lucide-react";

const Gallery = () => {
  // Placeholder images - replace src with your actual project photos
  const projects = [
    {
      id: 1,
      title: "Residential Installation",
      location: "Dhule",
      placeholder: true,
    },
    {
      id: 2,
      title: "Commercial Project",
      location: "Dhule",
      placeholder: true,
    },
    {
      id: 3,
      title: "Industrial Setup",
      location: "Dhule",
      placeholder: true,
    },
    {
      id: 4,
      title: "Rooftop Solar",
      location: "Dhule",
      placeholder: true,
    },
    {
      id: 5,
      title: "Ground Mount System",
      location: "Dhule",
      placeholder: true,
    },
    {
      id: 6,
      title: "Solar Power Plant",
      location: "Dhule",
      placeholder: true,
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Work</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Our Completed{" "}
            <span className="text-gradient-solar">Solar Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Take a look at some of our successful solar installations across Dhule and surrounding areas.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Placeholder - Replace this div with an actual img tag */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-primary/60" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Add project image here
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-1">
                    Replace with: &lt;img src="your-image.jpg" /&gt;
                  </p>
                </div>
              </div>
              
              {/* Hover Overlay with project info */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="font-semibold text-background text-lg">
                    {project.title}
                  </h3>
                  <p className="text-background/70 text-sm">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Want to see your property powered by solar?{" "}
            <a
              href="#contact"
              className="text-primary font-semibold hover:underline"
            >
              Contact us today!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

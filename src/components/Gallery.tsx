import { Camera } from "lucide-react";

const Gallery = () => {
  const projects = [
    {
      id: 1,
      type: "video",
      location: "Dhule",
      src: "/Assets/WhatsApp Video 2025-12-27 at 15.14.31.mp4",
    },
    {
      id: 2,
      type: "image",
      location: "Dhule",
      src: "/Assets/WhatsApp Image 2025-12-27 at 15.12.51.jpeg",
    },
    {
      id: 3,
      type: "image",
      location: "Dhule",
      src: "/Assets/WhatsApp Image 2025-12-27 at 15.12.52.jpeg",
    },
    {
      id: 4,
      type: "image",
      location: "Dhule",
      src: "/Assets/WhatsApp Image 2025-12-27 at 15.13.04.jpeg",
    },
    {
      id: 5,
      type: "image",
      location: "Dhule",
      src: "/Assets/WhatsApp Image 2025-12-27 at 15.34.00.jpeg",
    },
    {
      id: 6,
      type: "image",
      location: "Dhule",
      src: "/Assets/WhatsApp Image 2025-12-27 at 15.33.58 (2).jpeg",
    },
    {
      id: 7,
      type: "image",
      location: "Dhule",
      src: "/Assets/WhatsApp Image 2025-12-27 at 15.33.59 (2).jpeg",
    },
    {
      id: 8,
      type: "image",
      location: "Dhule",
      src: "/Assets/WhatsApp Image 2025-12-27 at 15.33.58.jpeg",
    },
    {
      id: 9,
      type: "image",
      location: "Dhule",
      src: "/Assets/WhatsApp Image 2025-12-27 at 15.33.57 (1).jpeg",
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Our Work
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Completed{" "}
            <span className="text-gradient-solar">Solar Projects</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            A glimpse of our successful solar installations across Dhule and nearby areas.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE */}
              {item.type === "image" && (
                <img
                  src={item.src}
                  alt="Solar Project"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              )}

              {/* VIDEO */}
              {item.type === "video" && (
                <video
                  src={item.src}
                  controls
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
                <div className="p-6 w-full">
                  <p className="text-background/70 text-sm">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Want to switch to solar energy?{" "}
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

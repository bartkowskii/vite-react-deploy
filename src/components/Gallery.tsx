import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  const ref = useScrollAnimation();

  const images = [
    { src: gallery1, alt: "Regeneracja reflektorów" },
    { src: gallery2, alt: "Jednoetapowa Korekta lakieru" },
    { src: gallery3, alt: "Czyszczenie kół" },
    { src: gallery4, alt: "Czyszczenie wnętrza" },
  ];

  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Moje <span className="bg-gradient-primary bg-clip-text text-transparent">Realizacje</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Zobacz efekty mojej pracy i przekonaj się o jakości usług
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary transition-all duration-500 hover:shadow-glow-primary"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-foreground font-semibold text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

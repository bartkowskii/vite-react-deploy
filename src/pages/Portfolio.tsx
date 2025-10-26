import { useState } from "react";
import { X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";
import portfolio10 from "@/assets/portfolio-10.jpg";

type Category = "all" | "exterior" | "interior" | "correction" | "protection";

interface PortfolioItem {
  id: number;
  src: string;
  category: Category;
  title: string;
  description: string;
}

const Portfolio = () => {
  const headerRef = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      src: portfolio1,
      category: "exterior",
      title: "Seat Leon FR",
      description: "Kompleksowy detailing zewnętrzny z polerowaniem",
    },
    {
      id: 2,
      src: portfolio2,
      category: "exterior",
      title: "Honda Civic TypeR FN2",
      description: "Kompleksowy detailing zewnętrzny z polerowaniem",
    },
    {
      id: 3,
      src: portfolio3,
      category: "interior",
      title: "Honda Civic X",
      description: "Czyszczenie wewnątrz + pranie dywaników",
    },
    {
      id: 4,
      src: portfolio4,
      category: "interior",
      title: "Fiat Punto Evo",
      description: "Czyszczenie środka + pranie tapicerki",
    },
    {
      id: 5,
      src: portfolio5,
      category: "interior",
      title: "Fiat Punto Evo",
      description: "Czyszczenie środka + pranie tapicerki",
    },
    {
      id: 6,
      src: portfolio6,
      category: "interior",
      title: "VW Golf 7",
      description: "Czysczenie środka + pranie tapicerki + pranie dywaników",
    },
    {
      id: 7,
      src: portfolio7,
      category: "interior",
      title: "VW Golf 7",
      description: "Czysczenie środka + pranie tapicerki + pranie dywaników",
    },
    {
      id: 8,
      src: portfolio8,
      category: "interior",
      title: "Fiat Punto Evo",
      description: "Czyszczenie środka + pranie tapicerki",
    },
        {
      id: 9,
      src: portfolio9,
      category: "correction",
      title: "BMW X3",
      description: "Jednoetapowa korekta lakieru",
    },
  ];

  const categories = [
    { id: "all", label: "Wszystkie" },
    { id: "exterior", label: "Zewnętrzne" },
    { id: "interior", label: "Wnętrze" },
    { id: "correction", label: "Korekta" },
    { id: "protection", label: "Ochrona" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div ref={headerRef} className="text-center animate-on-scroll">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Moje <span className="bg-gradient-primary bg-clip-text text-transparent">Realizacje</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Zobacz przykłady naszych prac. Każdy projekt wykonany z pasją i dbałością o
              najdrobniejszy detal.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background/50 backdrop-blur-lg sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as Category)}
                variant={selectedCategory === category.id ? "hero" : "heroOutline"}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary transition-all duration-500 hover:shadow-glow-primary cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.description}
                  </p>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Brak realizacji w wybranej kategorii
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:rotate-90 group"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 group-hover:text-primary-foreground" />
          </button>

          <div
            className="max-w-6xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl shadow-elevated border border-border"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-8 rounded-b-2xl">
                <h2 className="text-3xl font-bold mb-2">{selectedImage.title}</h2>
                <p className="text-xl text-muted-foreground">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Twoje auto może wyglądać tak samo!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Przekonaj się sam. Umów wizytę i zobacz różnicę na własne oczy.
          </p>
          <Button variant="hero" size="lg" asChild className="animate-glow-pulse">
            <a href="/kontakt">Umów wizytę teraz</a>
          </Button>
        </div>
      </section>

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;

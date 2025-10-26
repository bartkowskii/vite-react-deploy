import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Shield, Sparkles, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-detailing.jpg";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";

const Home = () => {
  const servicesRef = useScrollAnimation();
  
  const services = [
    {
      icon: Car,
      title: "Detailing Zewnętrzny",
      description: "Kompleksowe mycie, polerowanie i ochrona lakieru Twojego auta",
    },
    {
      icon: Sparkles,
      title: "Detailing Wnętrza",
      description: "Profesjonalne czyszczenie tapicerki, deski rozdzielczej i wszystkich elementów",
    },
    {
      icon: Shield,
      title: "Ochrona Lakieru",
      description: "Powłoki ceramiczne i folie ochronne dla długotrwałej ochrony",
    },
    {
      icon: Star,
      title: "Korekta Lakieru",
      description: "Usuwanie zarysowań i przywracanie blasku fabrycznie nowego lakieru",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium car detailing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Profesjonalny
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Auto Detailing
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Przywróć swojemu autu blask jak z salonu. Precyzja, perfekcja i pasja w każdym
            detalu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button variant="hero" size="lg" asChild>
              <Link to="/realizacje">Zobacz realizacje</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/cennik">Zobacz cennik</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats */}


      {/* Services Preview */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div ref={servicesRef} className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Moje Usługi</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kompleksowa opieka nad Twoim pojazdem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="animate-glow-pulse" asChild>
              <Link to="/uslugi">Zobacz wszystkie usługi</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />

      {/* Testimonials */}
      

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary rounded-2xl p-12 text-center shadow-elevated">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
              Gotowy na metamorfozę?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami i umów wizytę. Twoje auto zasługuje na najlepszą opiekę.
            </p>
            <Button
              variant="heroOutline"
              size="lg"
              className="bg-background hover:bg-background/90"
              asChild
            >
              <Link to="/kontakt">Umów wizytę</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

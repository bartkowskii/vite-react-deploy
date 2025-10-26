import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Car,
  Sparkles,
  Shield,
  Star,
  Droplets,
  Wind,
  Brush,
  CircleDot,
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Detailing Zewnętrzny",
      icon: Car,
      color: "primary",
      services: [
        {
          name: "Mycie Detailingowe",
          description: "Dokładne mycie z użyciem profesjonalnych kosmetyków kół, wnęk, szyb wraz z powłoką ochronną (błyszczącą lub matową) na opony dodatkowo z możliwością nałożenia niewidzialnej wycieraczki oraz miesięcznej powłoki hydrofobowej",
          icon: Droplets,
        },
        {
          name: "Korekta Lakieru",
          description: "Usuwanie zarysowań i hologramów, przywracanie głębi koloru",
          icon: Star,
        },
        {
          name: "Polerowanie Reflektorów",
          description: "Wieloetapowe polerowanie dla osiągnięcia efektu nowych reflektorów z możliwością nałożenia ochrony w postaci powłoki ceramicznej lub mega trwałej folii PPF!",
          icon: CircleDot,
        },
      ],
    },
    {
      title: "Detailing Wnętrza",
      icon: Sparkles,
      color: "accent",
      services: [
        {
          name: "Czyszczenie Tapicerki",
          description: "Pranie tapicerki materiałowej i czyszczenie skórzanej lub dodatkowo podłogi wraz z demontazem foteli",
          icon: Brush,
        },
        {
          name: "Czyszczenie plastików",
          description: "Dogłębne Czyszczenie deski rozdzielczej i elementów plastikowych i impregnacja!",
          icon: Wind,
        },
        {
          name: "Dywaniki / Wycieraczki gumowe",
          description: "Pranie materiałowych dywaników lub czyszczenie i impregnacja gumowych.",
          icon: Wind,
        },
      ],
    },
    {
      title: "Ochrona",
      icon: Shield,
      color: "primary",
      services: [
        {
          name: "Powłoki Ceramiczne",
          description: "Długotrwała ochrona lakieru przed czynnikami zewnętrznymi i hydrofobowość, wymagane oczysczenie lakieru!",
          icon: Shield,
        },
        {
          name: "Folie Ochronne PPF na reflektory",
          description: "Niewidoczna ochrona przed odpryskami, zarysowaniami i zamgleniem reflektorów",
          icon: Shield,
        },
        {
          name: "Wosk Premium",
          description: "Naturalna ochrona i niepowtarzalny głęboki połysk w niższej cenie!",
          icon: Star,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Moje <span className="bg-gradient-primary bg-clip-text text-transparent">Usługi</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Oferuje kompleksowe usługi detailingowe, dopasowane do potrzeb każdego pojazdu.
            Każda usługa wykonywana jest z najwyższą starannością i przy użyciu
            profesjonalnych produktów.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-glow-primary group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cały Proces</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Każdy pojazd przechodzi przez starannie zaplanowany proces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Konsultacja", desc: "Omówienie potrzeb i oczekiwań" },
              { step: "02", title: "Wycena", desc: "Przejrzysta wycena usług" },
              { step: "03", title: "Realizacja", desc: "Profesjonalne wykonanie usług" },
              { step: "04", title: "Odbiór", desc: "Prezentacja efektów i przekazanie auta" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-glow-primary">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gotowy na profesjonalny detailing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Zobacz cennik lub skontaktuj się z nami, aby umówić wizytę
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/cennik">Zobacz cennik</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/kontakt">Kontakt</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Car } from "lucide-react";

const Pricing = () => {
  const pricingCategories = [
    {
      category: "Małe auta kompaktowe",
      subtitle: "Fiat 500, Citroën C3, Audi A1, Mercedes A, VW Polo",
      icon: Car,
      packages: [
        {
          name: "STANDARD",
          price: "od 200 zł",
          features: [
            "Mycie zewnętrzne bezpieczne dla lakieru",
            "Czyszczenie i konserwacja felg i opon",
            "Czyszczenie i mycie szyb",
            "Kompleksowe czyszczenie środka",
            "Aplikacja miesięcznej powłoki hydrofobowej",
          ],
        },
        {
          name: "PREMIUM",
          price: "od 500 zł",
          features: [
            "Pakiet STANDARD",
            "Dokładne czyszczenie środka",
            "Dekontaminacja lakieru",
            "Oczyszczenie powierzchowne lakieru polerowaniem",
            "Aplikacja wosku premium / powłoki ceramicznej",
          ],
          featured: true,
        },
        {
          name: "PREMIUM+",
          price: "od 700 zł",
          features: [
            "Wszystko z pakietu PREMIUM",
            "Pranie tapicerki",
            "Czyszczenie i konserwacja skóry",
          ],
        },
      ],
    },
    {
      category: "Sedan, Kombi",
      subtitle: "Audi A6, Mercedes C, BMW 5, VW Passat",
      icon: Car,
      packages: [
        {
          name: "STANDARD",
          price: "od 250 zł",
          features: [
            "Mycie zewnętrzne bezpieczne dla lakieru",
            "Czyszczenie i konserwacja felg i opon",
            "Czyszczenie i mycie szyb",
            "Kompleksowe czyszczenie środka",
            "Aplikacja miesięcznej powłoki hydrofobowej",
          ],
        },
        {
          name: "PREMIUM",
          price: "od 600 zł",
          features: [
            "Pakiet STANDARD",
            "Dokładne czyszczenie środka",
            "Dekontaminacja lakieru",
            "Oczyszczenie powierzchowne lakieru polerowaniem",
            "Aplikacja wosku premium / powłoki ceramicznej",
          ],
          featured: true,
        },
        {
          name: "PREMIUM+",
          price: "od 800 zł",
          features: [
            "Wszystko z pakietu PREMIUM",
            "Pranie tapicerki",
            "Czyszczenie i konserwacja skóry",
          ],
        },
      ],
    },
    {
      category: "Limuzyny, SUV",
      subtitle: "Audi A8, Mercedes S, BMW 7, Nissan Navara, Toyota Land Cruiser",
      icon: Car,
      packages: [
        {
          name: "STANDARD",
          price: "od 300 zł",
          features: [
            "Mycie zewnętrzne bezpieczne dla lakieru",
            "Czyszczenie i konserwacja felg i opon",
            "Czyszczenie i mycie szyb",
            "Kompleksowe czyszczenie środka",
            "Aplikacja miesięcznej powłoki hydrofobowej",
          ],
        },
        {
          name: "PREMIUM",
          price: "od 700 zł",
          features: [
            "Pakiet STANDARD",
            "Dokładne czyszczenie środka",
            "Dekontaminacja lakieru",
            "Oczyszczenie powierzchowne lakieru polerowaniem",
            "Aplikacja wosku premium / powłoki ceramicznej",
          ],
          featured: true,
        },
        {
          name: "PREMIUM+",
          price: "od 900 zł",
          features: [
            "Wszystko z pakietu PREMIUM",
            "Pranie tapicerki",
            "Czyszczenie i konserwacja skóry",
          ],
        },
      ],
    },
  ];

  const additionalServices = [
    { name: "Sprzątanie środka", price: "od 50 zł" },
    { name: "Mycie samochodu + kół + wnęk", price: "od 50 zł" },
    { name: "Jednoetapowa korekta lakieru", price: "od 700 zł" },
    { name: "Pranie tapicerki materiałowej/skórzanej", price: "od 200zł" },
    { name: "Polerowanie reflektorów", price: "od 200 zł" },
    { name: "Czyszczenie podsufitki", price: "od 50 zł" },
    { name: "Wosk Premium / Powłoka ceramiczna (Wymagana pełna dekontaminacja lakieru)", price: "od 100 zł" },
    { name: "Bardzo dokładne mycie szyb (zmywa kamień z szyb) + niewidzialna roczna niewidzialna wycieraczka GLACO", price: "od 50 zł" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Cennik</span> Pakietów Usług
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Przejrzyste ceny za najwyższą jakość usług detailingowych
          </p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {pricingCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <category.icon className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">{category.category}</h2>
                </div>
                <p className="text-muted-foreground text-lg">{category.subtitle}</p>
              </div>

              {/* Packages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.packages.map((pkg, pkgIndex) => (
                  <div
                    key={pkgIndex}
                    className={`relative bg-card border rounded-2xl p-8 transition-all duration-300 ${
                      pkg.featured
                        ? "border-primary shadow-glow-primary scale-105 md:scale-110"
                        : "border-border hover:border-primary hover:shadow-glow-primary"
                    }`}
                  >
                    {pkg.featured && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-gradient-primary px-4 py-1 rounded-full text-sm font-semibold text-primary-foreground">
                          Najpopularniejszy
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        {pkg.price}
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={pkg.featured ? "hero" : "heroOutline"}
                      className="w-full"
                      asChild
                    >
                      <Link to="/kontakt">Umów wizytę</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Usługi bez pakietu</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dobierz usługi dla siebie
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-glow-primary"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{service.name}</span>
                  <span className="text-primary font-bold">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              <strong>Uwaga:</strong> Podane ceny są cenami netto. Ostateczna cena uzależniona
              jest od stanu pojazdu i zostanie ustalona po dokładnej konsultacji.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-primary rounded-2xl p-12 shadow-elevated">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
              Masz pytania o cennik?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby otrzymać indywidualną wycenę
            </p>
            <Button
              variant="heroOutline"
              size="lg"
              className="bg-background hover:bg-background/90"
              asChild
            >
              <Link to="/kontakt">Skontaktuj się</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

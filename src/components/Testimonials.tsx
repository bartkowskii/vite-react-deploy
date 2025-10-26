import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const Testimonials = () => {
  const ref = useScrollAnimation();

  const testimonials = [
    {
      name: "Michał K.",
      car: "BMW M3",
      rating: 5,
      text: "Niesamowita robota! Auto wygląda lepiej niż w salonie. Korekta lakieru wykonana perfekcyjnie, każdy detal dopięty na ostatni guzik.",
    },
    {
      name: "Anna W.",
      car: "Mercedes C-Class",
      rating: 5,
      text: "Profesjonalizm na najwyższym poziomie. Wnętrze mojego Mercedesa po praniu tapicerki wyglądało jak nowe. Polecam każdemu!",
    },
    {
      name: "Tomasz P.",
      car: "Audi A6",
      rating: 5,
      text: "Powłoka ceramiczna to najlepsza inwestycja. Auto lśni nawet po kilku miesiącach, a mycie jest bajecznie proste. Świetna obsługa!",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Co mówią <span className="bg-gradient-primary bg-clip-text text-transparent">Klienci</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Zadowolenie naszych klientów jest naszym priorytetem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-500 hover:shadow-glow-primary group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary group-hover:scale-110 transition-transform"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.car}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

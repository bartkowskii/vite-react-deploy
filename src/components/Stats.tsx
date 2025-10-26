import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Car, Users, Award, Clock } from "lucide-react";

const Stats = () => {
  const ref = useScrollAnimation();

  const stats = [
    { icon: Car, value: "500+", label: "Obsłużonych Aut", color: "primary" },
    { icon: Users, value: "300+", label: "Zadowolonych Klientów", color: "accent" },
    { icon: Award, value: "5", label: "Lat Doświadczenia", color: "primary" },
    { icon: Clock, value: "100%", label: "Terminowość", color: "accent" },
  ];

  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

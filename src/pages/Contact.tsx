import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const formRef = useScrollAnimation();
  const infoRef = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Twój numer telefonu (zmień na swój)
  const phoneNumber = "+48514288246";
  const phoneDisplay = "+48 514 288 246";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Wiadomość wysłana! Skontaktujemy się wkrótce.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "akamadafakaaofficial@gmail.com",
      link: "mailto:kontakt@autodetailing.pl",
    },
    {
      icon: MapPin,
      title: "Adres",
      content: "ul. Brzozowa 39 Wola Rasztowska",
      link: "https://maps.app.goo.gl/wCtR8KdiouVYrcNo8",
    },
    {
      icon: Clock,
      title: "Godziny otwarcia",
      content: "Pn-Pt: 17:00-21:00, Sob: 9:00-18:00",
      link: null,
    },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Cześć! Nazywam się... Chciałbym zapytać o usługi detailingowe.");
    window.open(`https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${message}`, "_blank");
  };

  const handleSMS = () => {
    window.open(`sms:${phoneNumber}`, "_blank");
  };

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, "_blank");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Kontakt</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Skontaktuj się ze mną, aby umówić wizytę lub zadać pytanie
          </p>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section className="py-12 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">
                Szybki <span className="bg-gradient-primary bg-clip-text text-transparent">Kontakt</span>
              </h2>
              <p className="text-muted-foreground">Wybierz najwygodniejszy sposób komunikacji</p>
            </div>

            {/* Phone Display */}
            <div className="bg-card border-2 border-primary rounded-2xl p-6 mb-6 text-center shadow-glow-primary">
              <Phone className="w-12 h-12 text-primary mx-auto mb-3 animate-pulse" />
              <p className="text-sm text-muted-foreground mb-2">Zadzwoń teraz</p>
              <a
                href={`tel:${phoneNumber}`}
                className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform inline-block"
              >
                {phoneDisplay}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                onClick={handleCall}
                variant="hero"
                size="lg"
                className="w-full h-20 text-lg group"
              >
                <Phone className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
                Zadzwoń
              </Button>
              
              <Button
                onClick={handleWhatsApp}
                variant="hero"
                size="lg"
                className="w-full h-20 text-lg group bg-[#25D366] hover:bg-[#20BA5A]"
              >
                <MessageSquare className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                WhatsApp
              </Button>
              
              <Button
                onClick={handleSMS}
                variant="heroOutline"
                size="lg"
                className="w-full h-20 text-lg group"
              >
                <Send className="w-6 h-6 mr-2 group-hover:translate-x-1 transition-transform" />
                SMS
              </Button>
            </div>
          </div>
        </div>
      </section>

     

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Często zadawane pytania</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Znajdź odpowiedzi na najczęstsze pytania
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Jak długo trwa detailing?",
                a: "W zależności od wybranego pakietu, od 3 do 8 godzin a nawet dwóch dni! Dokładny czas ustalimy podczas konsultacji.",
              },
              {
                q: "Czy używasz dobrej sprawdzonej chemii?",
                a: "Tak, nie oszczędzam na tym :)",
              },
              {
                q: "Jak często powinienem robić detailing?",
                a: "Zalecam kompleksowy detailing 2-3 razy w roku, a jeżeli jest nałożona jakakolwiek powłoka to regularne mycie co miesiąc z odświeżeniem powłoki.",
              },
              {
                q: "Dlaczego warto nakładać wosk / powłokę ceramiczną?",
                a: "Dla błysku, szybszego, efektywniejszego i prostszego umycia auta.",
              },
                            {
                q: "Jak utrzymać samochód w czystości po nałożeniu powłoki?",
                a: "Wystarczy tak naprawde jakościowy ręcznik do osuszenia po umyciu przy czym tylko dwóch minut więcej spędzonych na myjni.",
              },
                            {
                q: "Czy mogę odebrać tego samego dnia po praniu tapicerki?",
                a: "Jasne, fotele po praniu zostają delikatnie wilgotne, wystarczy wstawić do ciepłego garażu i/lub włączyć ogrzewanie by dosuszyć.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300"
              >
                <h3 className="font-semibold mb-2 text-lg">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

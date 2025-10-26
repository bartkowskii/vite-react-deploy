import { Facebook, Instagram, MessageCircle } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    { icon: Facebook, url: "https://www.facebook.com/bartusbartus11/", label: "Facebook", color: "#1877F2" },
    { icon: Instagram, url: "https://www.instagram.com/bartko_wski/", label: "Instagram", color: "#E4405F" },
    { icon: MessageCircle, url: "https://wa.me/48514288246", label: "WhatsApp", color: "#25D366" },
  ];

  return (
    <div className="flex gap-4 justify-center">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:shadow-glow-primary transition-all duration-300 hover:scale-110 group"
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

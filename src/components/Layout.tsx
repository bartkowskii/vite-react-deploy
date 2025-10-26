import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Auto Detailing</h3>
              <p className="text-muted-foreground">
                Profesjonalny detailing samochodowy najwyższej jakości.
              </p>
            </div>
            <div>
              <SocialLinks />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Kontakt</h3>
              <p className="text-muted-foreground mb-4">
                Instagram, Whatsapp, Facebook lub
                Tel: +48 123 456 789
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Auto Detailing. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

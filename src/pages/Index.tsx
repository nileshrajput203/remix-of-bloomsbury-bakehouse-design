import SidebarCard from "@/components/SidebarCard";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import heroCafe from "@/assets/hero-cafe.jpg";
import cardMenu from "@/assets/card-menu.jpg";
import cardOrder from "@/assets/card-order.jpg";
import cardAbout from "@/assets/card-about.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Hero Section - Left */}
        <div className="relative lg:w-2/3 h-[50vh] lg:h-screen">
          <div className="absolute inset-0">
            <img 
              src={heroCafe} 
              alt="Breeze Rooftop Cafe Palghar" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Modern gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/20" />

          {/* Hero Content */}
          <div className="absolute bottom-8 lg:bottom-20 left-6 md:left-12 lg:left-16 right-6 md:right-12 lg:right-16 z-10">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground text-xs sm:text-sm uppercase tracking-widest mb-4 lg:mb-6 animate-fade-up border border-primary/30">
              Rooftop Cafe • Palghar
            </span>
            <h1 className="font-serif font-light tracking-wide text-dark-foreground mb-4 lg:mb-6 animate-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight" style={{ animationDelay: "0.1s" }}>
              Breeze
            </h1>
            <p className="text-dark-foreground/80 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl lg:max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Incredible atmosphere. Unmatched ambiance. Experience Palghar's premier rooftop dining destination.
            </p>
          </div>

          {/* Decorative elements - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="hidden lg:block absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Sidebar - Right */}
        <div className="lg:w-1/3 h-[50vh] lg:h-screen bg-background flex flex-col">
          <div className="flex-1 min-h-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <SidebarCard
              label="Menu"
              imageSrc={cardMenu}
              to="/menu"
            />
          </div>
          <div className="flex-1 min-h-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <SidebarCard
              label="Place Order"
              imageSrc={cardOrder}
              to="/order"
            />
          </div>
          <div className="flex-1 min-h-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <SidebarCard
              label="About Us"
              imageSrc={cardAbout}
              to="/about"
            />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <Gallery />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
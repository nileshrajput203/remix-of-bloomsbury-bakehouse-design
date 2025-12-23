import Layout from "@/components/Layout";
import SidebarCard from "@/components/SidebarCard";
import DemoPlaceholder from "@/components/DemoPlaceholder";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation is in Layout */}
      <div className="h-screen overflow-hidden flex flex-col lg:flex-row">
        {/* Hero Section - Left */}
        <div className="relative lg:w-2/3 h-[40vh] lg:h-full">
          <div className="absolute inset-0">
            <DemoPlaceholder label="Demo 1" />
          </div>
          
          {/* Modern gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />

          {/* Hero Content */}
          <div className="absolute bottom-12 lg:bottom-20 left-8 md:left-16 right-8 md:right-16 z-10">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm uppercase tracking-widest mb-6 animate-fade-up border border-primary/30">
              Welcome to BBC
            </span>
            <h1 className="hero-title text-dark-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Blue Bay Cafe
            </h1>
            <p className="text-dark-foreground/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Where culinary artistry meets coastal elegance. Experience unforgettable flavors in a modern, inviting atmosphere.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Sidebar - Right */}
        <div className="lg:w-1/3 h-[60vh] lg:h-full bg-background flex flex-col">
          <div className="flex-1 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <SidebarCard
              label="Menu"
              demoLabel="Demo 1"
              to="/menu"
            />
          </div>
          <div className="flex-1 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <SidebarCard
              label="Place Order"
              demoLabel="Demo 2"
              to="/order"
            />
          </div>
          <div className="flex-1 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <SidebarCard
              label="About Us"
              demoLabel="Demo 3"
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
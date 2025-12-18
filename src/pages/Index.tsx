import Layout from "@/components/Layout";
import SidebarCard from "@/components/SidebarCard";
import DemoPlaceholder from "@/components/DemoPlaceholder";

const Index = () => {
  return (
    <Layout>
      <div className="h-screen overflow-hidden flex flex-col lg:flex-row">
        {/* Hero Section - Left */}
        <div className="relative lg:w-2/3 h-[40vh] lg:h-full">
          <div className="absolute inset-0">
            <DemoPlaceholder label="Demo 1" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

          {/* Hero Content */}
          <div className="absolute bottom-12 left-8 md:left-16 right-8 md:right-16 z-10">
            <h1 className="hero-title text-dark-foreground mb-6 animate-fade-up">
              Text 1
            </h1>
            <p className="text-dark-foreground/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Text 2
            </p>
          </div>
        </div>

        {/* Sidebar - Right */}
        <div className="lg:w-1/3 h-[60vh] lg:h-full bg-muted flex flex-col">
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
    </Layout>
  );
};

export default Index;

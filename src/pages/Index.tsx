import Layout from "@/components/Layout";
import SidebarCard from "@/components/SidebarCard";
import DemoPlaceholder from "@/components/DemoPlaceholder";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Hero Section - Left */}
        <div className="relative lg:w-[60%] h-[60vh] lg:h-screen">
          <div className="absolute inset-0 vignette">
            <DemoPlaceholder label="Demo 1" />
          </div>
          
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
        <div className="lg:w-[40%] bg-background p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-6 lg:overflow-y-auto">
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <SidebarCard
              label="Menu"
              demoLabel="Demo 1"
              to="/menu"
            />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <SidebarCard
              label="Place Order"
              demoLabel="Demo 2"
              to="/order"
            />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "0.5s" }}>
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

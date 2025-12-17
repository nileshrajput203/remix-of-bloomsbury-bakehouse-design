import Layout from "@/components/Layout";
import SidebarCard from "@/components/SidebarCard";
import heroChef from "@/assets/hero-chef.jpg";
import cupcakeMenu from "@/assets/cupcake-menu.jpg";
import cookieOrder from "@/assets/cookie-order.jpg";
import chefAbout from "@/assets/chef-about.jpg";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Hero Section - Left */}
        <div className="relative lg:w-[60%] h-[60vh] lg:h-screen">
          <div className="absolute inset-0 vignette">
            <img
              src={heroChef}
              alt="Chef holding decorated cake"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Hero Content */}
          <div className="absolute bottom-12 left-8 md:left-16 right-8 md:right-16 z-10">
            <h1 className="hero-title text-dark-foreground mb-6 animate-fade-up">
              CHEF'S NOTE
            </h1>
            <p className="text-dark-foreground/90 text-lg md:text-xl font-light leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              "I pour my heart and soul into every cake, which I make from scratch, without compromising on the quality or taste of the product"
            </p>
          </div>
        </div>

        {/* Sidebar - Right */}
        <div className="lg:w-[40%] bg-background p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-6 lg:overflow-y-auto">
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <SidebarCard
              label="Menu"
              imageSrc={cupcakeMenu}
              to="/menu"
            />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <SidebarCard
              label="Place Order"
              imageSrc={cookieOrder}
              to="/order"
            />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <SidebarCard
              label="About Us"
              imageSrc={chefAbout}
              to="/about"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

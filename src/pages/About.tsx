import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Hero Section - Left */}
        <div className="relative lg:w-1/2 h-[50vh] lg:h-screen">
          <div className="absolute inset-0 vignette">
            <img
              src={aboutHero}
              alt="Chef decorating cupcake"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute bottom-12 left-8 md:left-16 z-10">
            <h1 className="hero-title text-dark-foreground animate-fade-up">
              ABOUT
            </h1>
          </div>
        </div>

        {/* Content Section - Right */}
        <div className="lg:w-1/2 dark-section p-8 md:p-12 lg:p-16 lg:pt-24 flex flex-col justify-center">
          <div className="max-w-lg">
            <h2 className="section-title text-dark-foreground mb-8 animate-fade-up">
              Chef Devika C Shah
            </h2>

            <div className="space-y-6 text-dark-foreground/80 leading-relaxed">
              <p className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
                With over a decade of experience in the art of baking, Chef Devika brings her passion for creating exquisite desserts to every creation at Bloomsbury Bakehouse.
              </p>
              <p className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Trained in classical European pastry techniques and inspired by traditional Indian flavors, she crafts each cake, cookie, and confection with meticulous attention to detail and an unwavering commitment to quality.
              </p>
              <p className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
                Every ingredient is carefully sourced, every recipe perfected through years of experimentation, and every dessert made with love – because at Bloomsbury Bakehouse, we believe that the best treats come from the heart.
              </p>
            </div>

            <p className="text-dark-foreground font-medium mt-8 mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              We are a 100% Vegetarian Bakehouse!
            </p>

            <Link
              to="/menu"
              className="btn-cta inline-block text-center w-full animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              About Bloomsbury Bakehouse
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

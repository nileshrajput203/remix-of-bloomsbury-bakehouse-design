import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import DemoPlaceholder from "@/components/DemoPlaceholder";
import { ArrowUp } from "lucide-react";

const About = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setShowScrollTop(container.scrollTop > 200);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <div className="h-screen overflow-hidden flex flex-col lg:flex-row">
        {/* Hero Section - Left */}
        <div className="relative lg:w-1/2 h-[30vh] lg:h-full flex-shrink-0">
          <div className="absolute inset-0 vignette">
            <DemoPlaceholder label="Demo 3" />
          </div>
          
          <div className="absolute bottom-4 lg:bottom-12 left-4 md:left-16 z-10">
            <h1 className="hero-title text-dark-foreground animate-fade-up text-3xl lg:text-7xl">
              Text 1
            </h1>
          </div>
        </div>

        {/* Content Section - Right */}
        <div 
          ref={scrollContainerRef}
          className="lg:w-1/2 h-[70vh] lg:h-full dark-section p-4 md:p-6 lg:p-8 lg:pt-12 flex flex-col justify-start overflow-y-auto"
        >
          <div className="max-w-lg">
            <h2 className="section-title text-dark-foreground mb-4 animate-fade-up text-lg lg:text-2xl">
              Text 1
            </h2>

            <div className="space-y-3 text-dark-foreground/80 leading-relaxed text-xs lg:text-sm">
              <p className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Text 2
              </p>
              <p className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Text 2
              </p>
              <p className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
                Text 2
              </p>
            </div>

            <p className="text-dark-foreground font-medium mt-4 mb-6 animate-fade-up text-xs lg:text-sm" style={{ animationDelay: "0.4s" }}>
              Text 2
            </p>

            <a
              href="https://www.instagram.com/bbcrestaurantcafe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-block text-center w-full animate-fade-up text-sm lg:text-base py-3 lg:py-4"
              style={{ animationDelay: "0.5s" }}
            >
              About BBC (Blue Bay Cafe)
            </a>
          </div>

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-24 right-8 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 z-50"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default About;

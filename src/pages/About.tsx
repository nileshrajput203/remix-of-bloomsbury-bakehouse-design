import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import { ArrowUp } from "lucide-react";
import galleryInterior from "@/assets/gallery-interior.jpg";

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
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Hero Section - Left */}
        <div className="relative lg:w-1/2 h-[35vh] sm:h-[40vh] lg:h-screen flex-shrink-0">
          <div className="absolute inset-0">
            <img 
              src={galleryInterior} 
              alt="Blink Beyond Cafe Interior" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-dark/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-4 sm:left-6 md:left-12 lg:left-16 z-10">
            <h1 className="font-serif font-light tracking-wide text-dark-foreground animate-fade-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Our Story
            </h1>
          </div>
        </div>

        {/* Content Section - Right */}
        <div 
          ref={scrollContainerRef}
          className="lg:w-1/2 min-h-[65vh] lg:min-h-screen dark-section p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 pt-8 sm:pt-10 lg:pt-24 flex flex-col justify-start overflow-y-auto"
        >
          <div className="max-w-lg">
            <h2 className="font-serif font-light tracking-wide text-dark-foreground mb-4 sm:mb-6 animate-fade-up text-xl sm:text-2xl lg:text-3xl">
              Welcome to Blink Beyond Cafe
            </h2>

            <div className="space-y-4 sm:space-y-5 text-dark-foreground/80 leading-relaxed text-sm sm:text-base">
              <p className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
                At Blink Beyond Cafe, we believe that every moment deserves to be extraordinary. 
                Our passion for culinary excellence drives us to create dishes that not only 
                satisfy your hunger but elevate your dining experience.
              </p>
              <p className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Founded with a vision to blend modern gastronomy with warm hospitality, 
                we've crafted a space where food lovers can discover new flavors, 
                reconnect with friends, and create lasting memories.
              </p>
              <p className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
                Every ingredient is carefully sourced, every dish is thoughtfully prepared, 
                and every guest is treated like family. That's the Blink Beyond promise.
              </p>
            </div>

            <p className="text-dark-foreground font-medium mt-6 sm:mt-8 mb-6 sm:mb-8 animate-fade-up text-sm sm:text-base" style={{ animationDelay: "0.4s" }}>
              Experience the difference. Experience Blink Beyond.
            </p>

            <a
              href="https://www.instagram.com/blinkbeyondcafe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-block text-center w-full animate-fade-up text-xs sm:text-sm lg:text-base py-3 sm:py-4 px-6 sm:px-8"
              style={{ animationDelay: "0.5s" }}
            >
              Follow Us on Instagram
            </a>
          </div>

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-20 sm:bottom-24 right-4 sm:right-8 bg-primary text-primary-foreground p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 z-50"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default About;
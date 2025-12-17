import Layout from "@/components/Layout";
import DemoPlaceholder from "@/components/DemoPlaceholder";

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Hero Section - Left */}
        <div className="relative lg:w-1/2 h-[50vh] lg:h-screen">
          <div className="absolute inset-0 vignette">
            <DemoPlaceholder label="Demo 3" />
          </div>
          
          <div className="absolute bottom-12 left-8 md:left-16 z-10">
            <h1 className="hero-title text-dark-foreground animate-fade-up">
              Text 1
            </h1>
          </div>
        </div>

        {/* Content Section - Right */}
        <div className="lg:w-1/2 dark-section p-8 md:p-12 lg:p-16 lg:pt-24 flex flex-col justify-center">
          <div className="max-w-lg">
            <h2 className="section-title text-dark-foreground mb-8 animate-fade-up">
              Text 1
            </h2>

            <div className="space-y-6 text-dark-foreground/80 leading-relaxed">
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

            <p className="text-dark-foreground font-medium mt-8 mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Text 2
            </p>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-block text-center w-full animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              About BBC (Blue Bay Cafe)
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

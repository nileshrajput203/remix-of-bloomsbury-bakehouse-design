import { useState } from "react";
import Layout from "@/components/Layout";
import { toast } from "@/hooks/use-toast";
import DemoPlaceholder from "@/components/DemoPlaceholder";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    order: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Request Submitted",
      description: "We'll get back to you within 24 hours!",
    });
    setFormData({ name: "", phone: "", location: "", order: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <div className="h-screen overflow-hidden flex flex-col lg:flex-row">
        {/* Hero Section - Left */}
        <div className="relative lg:w-1/2 h-[30vh] lg:h-full">
          <div className="absolute inset-0 vignette">
            <DemoPlaceholder label="Demo 2" />
          </div>
          
          <div className="absolute bottom-8 lg:bottom-12 left-8 md:left-16 z-10">
            <h1 className="hero-title text-dark-foreground leading-none animate-fade-up text-4xl lg:text-7xl">
              Text 1<br />Text 2
            </h1>
          </div>
        </div>

        {/* Form Section - Right */}
        <div className="lg:w-1/2 h-[70vh] lg:h-full dark-section p-6 md:p-10 lg:p-12 lg:pt-20 flex flex-col justify-center overflow-auto">
          <div className="max-w-md mx-auto w-full">
            <h2 className="section-title text-dark-foreground text-center mb-4 animate-fade-up text-xl lg:text-2xl">
              Text 1
            </h2>
            <p className="text-muted-foreground text-center mb-6 leading-relaxed animate-fade-up text-sm" style={{ animationDelay: "0.1s" }}>
              Text 2
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  <label className="text-muted-foreground text-sm mb-1 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="form-input"
                    required
                  />
                </div>
                <div className="animate-fade-up" style={{ animationDelay: "0.25s" }}>
                  <label className="text-muted-foreground text-sm mb-1 block">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="1234567890"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <label className="text-muted-foreground text-sm mb-1 block">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Your Location"
                  className="form-input"
                  required
                />
              </div>

              <div className="animate-fade-up" style={{ animationDelay: "0.35s" }}>
                <label className="text-muted-foreground text-sm mb-1 block">Describe your Order</label>
                <textarea
                  name="order"
                  value={formData.order}
                  onChange={handleChange}
                  placeholder="I am looking for..."
                  className="form-input bg-dark-muted border border-dark-border rounded-lg p-3 min-h-20 resize-y"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-secondary/90 hover:-translate-y-0.5 animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                Submit
              </button>
            </form>

            <p className="text-center text-muted text-xs uppercase tracking-widest mt-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              <a href="#" className="hover:text-muted-foreground transition-colors">
                Shipping Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;

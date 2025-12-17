import { useState } from "react";
import Layout from "@/components/Layout";
import { toast } from "@/hooks/use-toast";
import cookieOrder from "@/assets/cookie-order.jpg";

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
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Hero Section - Left */}
        <div className="relative lg:w-1/2 h-[40vh] lg:h-screen">
          <div className="absolute inset-0 vignette">
            <img
              src={cookieOrder}
              alt="Chocolate cookies"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute bottom-12 left-8 md:left-16 z-10">
            <h1 className="hero-title text-dark-foreground leading-none animate-fade-up">
              PLACE AN<br />ORDER
            </h1>
          </div>
        </div>

        {/* Form Section - Right */}
        <div className="lg:w-1/2 dark-section p-8 md:p-12 lg:p-16 lg:pt-24 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h2 className="section-title text-dark-foreground text-center mb-6 animate-fade-up">
              Place Your Order Request
            </h2>
            <p className="text-muted-foreground text-center mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Fill out the form below with your order details. We'll get back to you within 24 hours to confirm availability and pricing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  <label className="text-muted-foreground text-sm mb-2 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Devika Shah"
                    className="form-input"
                    required
                  />
                </div>
                <div className="animate-fade-up" style={{ animationDelay: "0.25s" }}>
                  <label className="text-muted-foreground text-sm mb-2 block">Phone Number</label>
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
                <label className="text-muted-foreground text-sm mb-2 block">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Shivaji Park, Dadar"
                  className="form-input"
                  required
                />
              </div>

              <div className="animate-fade-up" style={{ animationDelay: "0.35s" }}>
                <label className="text-muted-foreground text-sm mb-2 block">Describe your Order</label>
                <textarea
                  name="order"
                  value={formData.order}
                  onChange={handleChange}
                  placeholder="I am looking for a cake with..."
                  className="form-input bg-dark-muted border border-dark-border rounded-lg p-4 min-h-32 resize-y"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground py-4 rounded-lg text-base font-medium transition-all duration-300 hover:bg-secondary/90 hover:-translate-y-0.5 animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                Submit
              </button>
            </form>

            <p className="text-center text-muted text-xs uppercase tracking-widest mt-8 animate-fade-up" style={{ animationDelay: "0.45s" }}>
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

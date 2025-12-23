import { useState } from "react";
import Layout from "@/components/Layout";
import { toast } from "@/hooks/use-toast";
import cardOrder from "@/assets/card-order.jpg";

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
        <div className="relative lg:w-1/2 h-[30vh] sm:h-[35vh] lg:h-screen">
          <div className="absolute inset-0">
            <img 
              src={cardOrder} 
              alt="Order from Blink Beyond Cafe" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-dark/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-4 sm:left-6 md:left-12 lg:left-16 z-10">
            <h1 className="font-serif font-light tracking-wide text-dark-foreground leading-tight animate-fade-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Place Your<br />Order
            </h1>
          </div>
        </div>

        {/* Form Section - Right */}
        <div className="lg:w-1/2 min-h-[70vh] lg:min-h-screen dark-section p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 pt-8 sm:pt-10 lg:pt-24 flex flex-col justify-center overflow-auto">
          <div className="max-w-md mx-auto w-full">
            <h2 className="font-serif font-light tracking-wide text-dark-foreground text-center mb-3 sm:mb-4 animate-fade-up text-xl sm:text-2xl lg:text-3xl">
              Order Now
            </h2>
            <p className="text-muted-foreground text-center mb-6 sm:mb-8 leading-relaxed animate-fade-up text-xs sm:text-sm" style={{ animationDelay: "0.1s" }}>
              Fill in your details and we'll prepare your order with care
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  <label className="text-muted-foreground text-xs sm:text-sm mb-1 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="form-input text-sm sm:text-base"
                    required
                  />
                </div>
                <div className="animate-fade-up" style={{ animationDelay: "0.25s" }}>
                  <label className="text-muted-foreground text-xs sm:text-sm mb-1 block">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="1234567890"
                    className="form-input text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <label className="text-muted-foreground text-xs sm:text-sm mb-1 block">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Your Location"
                  className="form-input text-sm sm:text-base"
                  required
                />
              </div>

              <div className="animate-fade-up" style={{ animationDelay: "0.35s" }}>
                <label className="text-muted-foreground text-xs sm:text-sm mb-1 block">Describe your Order</label>
                <textarea
                  name="order"
                  value={formData.order}
                  onChange={handleChange}
                  placeholder="I am looking for..."
                  className="form-input bg-dark-muted border border-dark-border rounded-xl p-3 sm:p-4 min-h-24 sm:min-h-28 resize-y text-sm sm:text-base"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                Submit Order
              </button>
            </form>

            <p className="text-center text-muted text-[10px] sm:text-xs uppercase tracking-widest mt-4 sm:mt-6 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              <a href="#" className="hover:text-muted-foreground transition-colors">
                Shipping Policy
              </a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-muted-foreground transition-colors">
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
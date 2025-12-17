import { useState } from "react";
import Layout from "@/components/Layout";
import menuHero from "@/assets/menu-hero.jpg";

const categories = [
  "Cakes", "Chocolates", "Cookies", "Breads", "Brownies", "Cupcakes", "Desserts", "Tea Cakes"
];

const menuItems = [
  { name: "Vanilla Sponge Cake", price650: "₹750", price1kg: "₹1,200", chefSpecial: false },
  { name: "Chocolate Truffle Cake", price650: "₹850", price1kg: "₹1,400", chefSpecial: true },
  { name: "Red Velvet Cake", price650: "₹900", price1kg: "₹1,500", chefSpecial: false },
  { name: "Black Forest Cake", price650: "₹800", price1kg: "₹1,350", chefSpecial: false },
  { name: "Butterscotch Cake", price650: "₹750", price1kg: "₹1,250", chefSpecial: false },
  { name: "Mango Cream Cake", price650: "₹950", price1kg: "₹1,600", chefSpecial: true },
  { name: "Pineapple Cake", price650: "₹750", price1kg: "₹1,200", chefSpecial: false },
  { name: "Oreo Cheesecake", price650: "₹1,100", price1kg: "₹1,800", chefSpecial: true },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Cakes");

  return (
    <Layout>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Hero Section - Left */}
        <div className="relative lg:w-1/2 h-[50vh] lg:h-screen">
          <div className="absolute inset-0 vignette">
            <img
              src={menuHero}
              alt="Chocolate dessert"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute bottom-12 left-8 md:left-16 z-10">
            <h1 className="hero-title text-dark-foreground mb-4 animate-fade-up">
              MENU
            </h1>
            <p className="text-dark-foreground/80 text-base md:text-lg font-light leading-relaxed max-w-md animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Artisanal baked goods crafted with premium ingredients and love
            </p>
          </div>
        </div>

        {/* Menu Content - Right */}
        <div className="lg:w-1/2 dark-section p-8 md:p-12 lg:p-16 lg:pt-24 lg:overflow-y-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-8 animate-fade-up">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`category-tab ${activeCategory === category ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Order Notice */}
          <p className="text-center text-xs tracking-widest text-dark-foreground mb-12 uppercase animate-fade-up" style={{ animationDelay: "0.1s" }}>
            All orders must be placed 48 hours in advance
          </p>

          {/* Section Title */}
          <div className="text-center mb-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="w-10 h-px bg-dark-border"></span>
              <h2 className="section-title text-dark-foreground uppercase">
                {activeCategory}
              </h2>
              <span className="w-10 h-px bg-dark-border"></span>
            </div>
            <p className="text-muted text-xs tracking-widest">650 GMS / 1 KG</p>
          </div>

          {/* Menu Items */}
          <div className="mt-8">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className="menu-item animate-fade-up"
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                <span className="text-dark-foreground text-sm flex items-center gap-2">
                  {item.name}
                  {item.chefSpecial && <span>👨‍🍳</span>}
                </span>
                <span className="text-dark-foreground text-sm whitespace-nowrap">
                  {item.price650} / {item.price1kg}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-muted text-xs mt-8">
            👨‍🍳 Chef's Special
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;

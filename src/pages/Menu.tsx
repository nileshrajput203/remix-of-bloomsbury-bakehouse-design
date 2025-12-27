import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import { ArrowUp } from "lucide-react";
import menuHero from "@/assets/menu-hero.jpg";

const menuCategories = [
  { id: "seafood", name: "Seafood" },
  { id: "chicken", name: "Chicken" },
  { id: "chinese", name: "Chinese" },
  { id: "indian", name: "Indian Veg" },
  { id: "rice", name: "Rice & Biryani" },
  { id: "starters", name: "Starters" },
  { id: "soups", name: "Soups" },
  { id: "desserts", name: "Desserts" },
];

const menuItems: Record<string, { title: string; subtitle: string; items: { name: string; price: string; special?: boolean }[] }> = {
  seafood: {
    title: "SEAFOOD",
    subtitle: "Fresh Catch Daily",
    items: [
      { name: "Surmai Fry", price: "₹350 / ₹450", special: true },
      { name: "Pomfret Fry", price: "₹400 / ₹550" },
      { name: "Fish Curry", price: "₹300 / ₹400" },
      { name: "Garlic Prawns", price: "₹380 / ₹500", special: true },
      { name: "Butter Prawns", price: "₹400 / ₹520" },
      { name: "Tandoori Prawns", price: "₹450" },
      { name: "Crab Curry", price: "₹500 / ₹650" },
      { name: "Crab Fry", price: "₹480 / ₹620" },
      { name: "Calamari Fry", price: "₹350" },
      { name: "Grilled Calamari", price: "₹380" },
      { name: "Lobster Special", price: "Market Price", special: true },
    ],
  },
  chicken: {
    title: "CHICKEN",
    subtitle: "Signature Preparations",
    items: [
      { name: "Chicken Biryani", price: "₹280 / ₹450", special: true },
      { name: "Hot Garlic Chicken", price: "₹320" },
      { name: "Butter Chicken", price: "₹300" },
      { name: "Tandoori Chicken (Half)", price: "₹280" },
      { name: "Tandoori Chicken (Full)", price: "₹480" },
      { name: "Chicken Tikka", price: "₹260" },
      { name: "Chicken Chettinad", price: "₹320", special: true },
      { name: "Schezwan Chicken", price: "₹300" },
      { name: "Chicken Lollipop", price: "₹280" },
      { name: "Chicken 65", price: "₹260" },
      { name: "Chicken Korma", price: "₹290" },
    ],
  },
  chinese: {
    title: "CHINESE",
    subtitle: "Indo-Chinese Specials",
    items: [
      { name: "Hakka Noodles (Veg)", price: "₹180" },
      { name: "Hakka Noodles (Chicken)", price: "₹220" },
      { name: "Hakka Noodles (Prawn)", price: "₹280" },
      { name: "Schezwan Noodles", price: "₹200 / ₹250" },
      { name: "Singapore Noodles", price: "₹220 / ₹280", special: true },
      { name: "Veg Manchurian", price: "₹180" },
      { name: "Chicken Manchurian", price: "₹250", special: true },
      { name: "Prawn Manchurian", price: "₹320" },
      { name: "Spring Rolls (Veg)", price: "₹150" },
      { name: "Spring Rolls (Chicken)", price: "₹180" },
      { name: "Salt & Pepper Squid", price: "₹300" },
    ],
  },
  indian: {
    title: "INDIAN VEG",
    subtitle: "Traditional Flavors",
    items: [
      { name: "Paneer Butter Masala", price: "₹220", special: true },
      { name: "Shahi Paneer", price: "₹240" },
      { name: "Matar Paneer", price: "₹200" },
      { name: "Dal Makhani", price: "₹180" },
      { name: "Dal Tadka", price: "₹150" },
      { name: "Vegetable Korma", price: "₹180" },
      { name: "Aloo Gobi", price: "₹160" },
      { name: "Chana Masala", price: "₹170" },
      { name: "Paneer Tikka", price: "₹220" },
      { name: "Mushroom Tikka", price: "₹200" },
    ],
  },
  rice: {
    title: "RICE & BIRYANI",
    subtitle: "Fragrant Rice Dishes",
    items: [
      { name: "Vegetable Biryani", price: "₹200" },
      { name: "Paneer Biryani", price: "₹240" },
      { name: "Chicken Biryani", price: "₹280 / ₹450", special: true },
      { name: "Mutton Biryani", price: "₹350 / ₹550" },
      { name: "Seafood Biryani", price: "₹380 / ₹600", special: true },
      { name: "Jeera Rice", price: "₹120" },
      { name: "Ghee Rice", price: "₹140" },
      { name: "Fried Rice (Veg)", price: "₹150" },
      { name: "Fried Rice (Chicken)", price: "₹200" },
      { name: "Schezwan Fried Rice", price: "₹180 / ₹220" },
    ],
  },
  starters: {
    title: "STARTERS",
    subtitle: "Begin Your Feast",
    items: [
      { name: "Paneer Pakora", price: "₹180" },
      { name: "Vegetable Pakora", price: "₹120" },
      { name: "Onion Pakora", price: "₹100" },
      { name: "Samosa (2 Pcs)", price: "₹80" },
      { name: "Chicken Seek Kebab", price: "₹280", special: true },
      { name: "Mutton Seek Kebab", price: "₹320" },
      { name: "Fish Tikka", price: "₹300", special: true },
      { name: "Crispy Corn", price: "₹180" },
      { name: "Chinese Bhel", price: "₹150" },
      { name: "Paneer 65", price: "₹220" },
    ],
  },
  soups: {
    title: "SOUPS",
    subtitle: "Warm Beginnings",
    items: [
      { name: "Tomato Soup", price: "₹100" },
      { name: "Sweet Corn Soup", price: "₹120" },
      { name: "Manchow Soup", price: "₹130" },
      { name: "Hot & Sour Soup", price: "₹130" },
      { name: "Chicken Soup", price: "₹150" },
      { name: "Seafood Soup", price: "₹200", special: true },
      { name: "Lemon Coriander Soup", price: "₹120" },
    ],
  },
  desserts: {
    title: "DESSERTS",
    subtitle: "Sweet Endings",
    items: [
      { name: "Gulab Jamun (2 Pcs)", price: "₹80" },
      { name: "Kheer", price: "₹100" },
      { name: "Ras Malai (2 Pcs)", price: "₹120", special: true },
      { name: "Kesar Pista Kulfi", price: "₹80" },
      { name: "Ice Cream (Scoop)", price: "₹60" },
      { name: "Mango Sorbet", price: "₹100" },
    ],
  },
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("seafood");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const section = sectionRefs.current[categoryId];
    if (section && scrollContainerRef.current) {
      const containerTop = scrollContainerRef.current.getBoundingClientRect().top;
      const sectionTop = section.getBoundingClientRect().top;
      const offset = sectionTop - containerTop + scrollContainerRef.current.scrollTop;
      scrollContainerRef.current.scrollTo({ top: offset - 20, behavior: "smooth" });
    }
  };

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
        <div className="relative lg:w-1/2 h-[30vh] sm:h-[35vh] lg:h-screen flex-shrink-0">
          <div className="absolute inset-0">
            <img 
              src={menuHero} 
              alt="Breeze Cafe Menu" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-dark/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 sm:bottom-6 lg:bottom-12 left-4 sm:left-6 md:left-12 lg:left-16 z-10">
            <h1 className="font-serif font-light tracking-wide text-dark-foreground animate-fade-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Our Menu
            </h1>
            <p className="text-dark-foreground/90 mt-2 lg:mt-4 max-w-lg leading-relaxed text-xs sm:text-sm lg:text-base animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Crafted with passion, served with love
            </p>
          </div>
        </div>

        {/* Menu Section - Right */}
        <div 
          ref={scrollContainerRef}
          className="lg:w-1/2 min-h-[70vh] lg:min-h-screen dark-section p-4 sm:p-5 md:p-6 lg:p-8 pt-6 sm:pt-8 lg:pt-20 flex flex-col overflow-y-auto"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 justify-center">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`category-tab text-[9px] sm:text-[10px] lg:text-xs px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 ${activeCategory === category.id ? "active" : ""}`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Order Notice */}
          <p className="text-center text-dark-foreground/60 text-[9px] sm:text-[10px] lg:text-xs tracking-widest mb-4 sm:mb-6">
            DINE-IN • DELIVERY • TAKEAWAY
          </p>

          {/* Menu Items by Category */}
          <div className="space-y-6 sm:space-y-8">
            {Object.entries(menuItems).map(([categoryId, category]) => (
              <div
                key={categoryId}
                ref={(el) => (sectionRefs.current[categoryId] = el)}
                className="scroll-mt-4"
              >
                {/* Category Header */}
                <div className="text-center mb-3 sm:mb-4">
                  <div className="flex items-center justify-center gap-2 sm:gap-4 mb-1">
                    <span className="w-6 sm:w-8 h-px bg-dark-border" />
                    <h2 className="font-serif font-light tracking-wide text-dark-foreground text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                      {category.title}
                    </h2>
                    <span className="w-6 sm:w-8 h-px bg-dark-border" />
                  </div>
                  <p className="text-dark-foreground/50 text-[9px] sm:text-[10px] lg:text-xs tracking-wide">
                    {category.subtitle}
                  </p>
                </div>

                {/* Items */}
                <div className="space-y-0">
                  {category.items.map((item, index) => (
                    <div key={index} className="menu-item py-2 sm:py-3">
                      <span className="text-dark-foreground text-xs sm:text-sm">
                        {item.name}
                        {item.special && <span className="ml-1 text-accent">★</span>}
                      </span>
                      <span className="text-dark-foreground/80 text-xs sm:text-sm whitespace-nowrap ml-2">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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

export default Menu;
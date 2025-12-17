import { useRef } from "react";
import Layout from "@/components/Layout";
import DemoPlaceholder from "@/components/DemoPlaceholder";

const categories = [
  { id: "cakes", name: "Cakes" },
  { id: "chocolates", name: "Chocolates" },
  { id: "cookies", name: "Cookies" },
  { id: "breads", name: "Breads" },
  { id: "sandwiches", name: "Sandwiches" },
  { id: "brownies", name: "Brownies" },
  { id: "cupcakes", name: "Cupcakes" },
  { id: "desserts", name: "Desserts" },
];

const menuData = {
  cakes: [
    { name: "Vanilla Sponge Cake", price650: "₹750", price1kg: "₹1,200", chefSpecial: false },
    { name: "Chocolate Truffle Cake", price650: "₹850", price1kg: "₹1,400", chefSpecial: true },
    { name: "Red Velvet Cake", price650: "₹900", price1kg: "₹1,500", chefSpecial: false },
    { name: "Black Forest Cake", price650: "₹800", price1kg: "₹1,350", chefSpecial: false },
    { name: "Butterscotch Cake", price650: "₹750", price1kg: "₹1,250", chefSpecial: false },
    { name: "Mango Cream Cake", price650: "₹950", price1kg: "₹1,600", chefSpecial: true },
  ],
  chocolates: [
    { name: "Dark Chocolate Truffles", price650: "₹450", price1kg: "₹800", chefSpecial: true },
    { name: "Milk Chocolate Pralines", price650: "₹400", price1kg: "₹700", chefSpecial: false },
    { name: "White Chocolate Bars", price650: "₹350", price1kg: "₹600", chefSpecial: false },
    { name: "Hazelnut Chocolate", price650: "₹500", price1kg: "₹900", chefSpecial: true },
    { name: "Orange Peel Chocolate", price650: "₹420", price1kg: "₹750", chefSpecial: false },
  ],
  cookies: [
    { name: "Classic Chocolate Chip", price650: "₹300", price1kg: "₹550", chefSpecial: false },
    { name: "Double Chocolate Cookie", price650: "₹350", price1kg: "₹600", chefSpecial: true },
    { name: "Oatmeal Raisin Cookie", price650: "₹280", price1kg: "₹500", chefSpecial: false },
    { name: "Peanut Butter Cookie", price650: "₹320", price1kg: "₹580", chefSpecial: false },
    { name: "Almond Biscotti", price650: "₹380", price1kg: "₹680", chefSpecial: true },
    { name: "Butter Cookies", price650: "₹250", price1kg: "₹450", chefSpecial: false },
  ],
  breads: [
    { name: "Sourdough Loaf", price650: "₹200", price1kg: "₹350", chefSpecial: true },
    { name: "Whole Wheat Bread", price650: "₹150", price1kg: "₹280", chefSpecial: false },
    { name: "Multigrain Bread", price650: "₹180", price1kg: "₹320", chefSpecial: false },
    { name: "Focaccia", price650: "₹220", price1kg: "₹400", chefSpecial: true },
    { name: "Ciabatta", price650: "₹190", price1kg: "₹340", chefSpecial: false },
    { name: "Garlic Bread", price650: "₹160", price1kg: "₹300", chefSpecial: false },
  ],
  sandwiches: [
    { name: "Grilled Paneer Sandwich", price650: "₹180", price1kg: "—", chefSpecial: true },
    { name: "Club Sandwich", price650: "₹220", price1kg: "—", chefSpecial: false },
    { name: "Veg Mayo Sandwich", price650: "₹150", price1kg: "—", chefSpecial: false },
    { name: "Cheese Burst Sandwich", price650: "₹200", price1kg: "—", chefSpecial: true },
    { name: "Mushroom Melt", price650: "₹240", price1kg: "—", chefSpecial: true },
    { name: "Garden Fresh Sandwich", price650: "₹160", price1kg: "—", chefSpecial: false },
    { name: "Corn & Cheese Sandwich", price650: "₹190", price1kg: "—", chefSpecial: false },
  ],
  brownies: [
    { name: "Classic Fudge Brownie", price650: "₹400", price1kg: "₹700", chefSpecial: false },
    { name: "Walnut Brownie", price650: "₹450", price1kg: "₹800", chefSpecial: true },
    { name: "Cream Cheese Brownie", price650: "₹480", price1kg: "₹850", chefSpecial: true },
    { name: "Salted Caramel Brownie", price650: "₹500", price1kg: "₹900", chefSpecial: true },
    { name: "Peanut Butter Brownie", price650: "₹460", price1kg: "₹820", chefSpecial: false },
  ],
  cupcakes: [
    { name: "Vanilla Cupcake", price650: "₹80", price1kg: "—", chefSpecial: false },
    { name: "Chocolate Cupcake", price650: "₹90", price1kg: "—", chefSpecial: false },
    { name: "Red Velvet Cupcake", price650: "₹100", price1kg: "—", chefSpecial: true },
    { name: "Blueberry Cupcake", price650: "₹110", price1kg: "—", chefSpecial: true },
    { name: "Carrot Cupcake", price650: "₹95", price1kg: "—", chefSpecial: false },
  ],
  desserts: [
    { name: "Tiramisu", price650: "₹550", price1kg: "₹1,000", chefSpecial: true },
    { name: "Panna Cotta", price650: "₹400", price1kg: "₹750", chefSpecial: false },
    { name: "Crème Brûlée", price650: "₹480", price1kg: "₹880", chefSpecial: true },
    { name: "Chocolate Mousse", price650: "₹420", price1kg: "₹780", chefSpecial: false },
    { name: "Fruit Tart", price650: "₹500", price1kg: "₹920", chefSpecial: true },
  ],
};

const Menu = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToSection = (categoryId: string) => {
    const section = sectionRefs.current[categoryId];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Hero Section - Left */}
        <div className="relative lg:w-1/2 h-[50vh] lg:h-screen lg:sticky lg:top-0">
          <div className="absolute inset-0 vignette">
            <DemoPlaceholder label="Demo 1" />
          </div>
          
          <div className="absolute bottom-12 left-8 md:left-16 z-10">
            <h1 className="hero-title text-dark-foreground mb-4 animate-fade-up">
              Text 1
            </h1>
            <p className="text-dark-foreground/80 text-base md:text-lg font-light leading-relaxed max-w-md animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Text 2
            </p>
          </div>
        </div>

        {/* Menu Content - Right */}
        <div className="lg:w-1/2 dark-section p-8 md:p-12 lg:p-16 lg:pt-24">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-8 animate-fade-up sticky top-0 bg-dark-bg py-4 z-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className="category-tab"
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Order Notice */}
          <p className="text-center text-xs tracking-widest text-dark-foreground mb-12 uppercase animate-fade-up" style={{ animationDelay: "0.1s" }}>
            All orders must be placed 48 hours in advance
          </p>

          {/* Menu Sections */}
          {categories.map((category, catIndex) => (
            <div
              key={category.id}
              ref={(el) => (sectionRefs.current[category.id] = el)}
              className="mb-16 scroll-mt-32"
            >
              {/* Section Title */}
              <div className="text-center mb-3 animate-fade-up" style={{ animationDelay: `${0.2 + catIndex * 0.05}s` }}>
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="w-10 h-px bg-dark-border"></span>
                  <h2 className="section-title text-dark-foreground uppercase">
                    {category.name}
                  </h2>
                  <span className="w-10 h-px bg-dark-border"></span>
                </div>
                {category.id !== "sandwiches" && category.id !== "cupcakes" && (
                  <p className="text-muted text-xs tracking-widest">650 GMS / 1 KG</p>
                )}
                {category.id === "sandwiches" && (
                  <p className="text-muted text-xs tracking-widest">Per Piece</p>
                )}
                {category.id === "cupcakes" && (
                  <p className="text-muted text-xs tracking-widest">Per Piece</p>
                )}
              </div>

              {/* Menu Items */}
              <div className="mt-8">
                {menuData[category.id as keyof typeof menuData]?.map((item, index) => (
                  <div
                    key={item.name}
                    className="menu-item animate-fade-up"
                    style={{ animationDelay: `${0.3 + index * 0.03}s` }}
                  >
                    <span className="text-dark-foreground text-sm flex items-center gap-2">
                      {item.name}
                      {item.chefSpecial && <span>👨‍🍳</span>}
                    </span>
                    <span className="text-dark-foreground text-sm whitespace-nowrap">
                      {item.price1kg !== "—" ? `${item.price650} / ${item.price1kg}` : item.price650}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p className="text-center text-muted text-xs mt-8">
            👨‍🍳 Chef's Special
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;

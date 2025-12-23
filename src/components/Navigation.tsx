import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
      <div 
        className={`mx-auto max-w-7xl transition-all duration-500 ${
          isScrolled 
            ? "glass-dark rounded-2xl shadow-2xl py-3 px-6" 
            : "bg-transparent py-4 px-2"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Left side - Menu toggle and Logo */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? "hover:bg-dark-muted text-dark-foreground" 
                  : "hover:bg-dark/20 text-dark-foreground md:text-primary-foreground"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className={`font-script text-2xl md:text-3xl tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-dark-foreground md:text-primary-foreground"
              }`}
            >
              BBC
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link transition-colors duration-300 ${
                  isScrolled ? "text-dark-foreground" : "text-primary-foreground"
                } ${
                  isActive(link.path) ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/order"
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-dark/90 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={`absolute top-20 left-4 right-4 glass-dark rounded-2xl p-8 transition-all duration-500 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6">
            {links.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-serif text-dark-foreground hover:text-primary transition-all duration-300 ${
                  isActive(link.path) ? "text-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/order"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-4 rounded-xl bg-primary text-primary-foreground text-center text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:shadow-lg"
            >
              Place Order
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
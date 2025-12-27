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

  const zomatoLink = "https://www.zomato.com/mumbai/breeze-the-rooftop-cafe-palghar";

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-8 pt-3 sm:pt-4">
      <div 
        className={`mx-auto max-w-7xl transition-all duration-500 ${
          isScrolled 
            ? "glass-dark rounded-xl sm:rounded-2xl shadow-2xl py-2.5 sm:py-3 px-4 sm:px-6" 
            : "bg-transparent py-3 sm:py-4 px-2"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Left side - Menu toggle, Logo, and Nav Links */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
            {/* Hamburger - Mobile Only */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? "hover:bg-dark-muted text-dark-foreground" 
                  : "hover:bg-dark/20 text-dark-foreground"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className={`font-script text-xl sm:text-2xl md:text-3xl tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-dark-foreground md:text-primary-foreground"
              }`}
            >
              Breeze
            </Link>

            {/* Desktop Links - Next to Logo */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 ml-4 lg:ml-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link uppercase text-xs tracking-widest font-medium transition-colors duration-300 ${
                    isScrolled ? "text-dark-foreground" : "text-primary-foreground"
                  } ${
                    isActive(link.path) ? "opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={zomatoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-link uppercase text-xs tracking-widest font-medium transition-colors duration-300 ${
                  isScrolled ? "text-dark-foreground" : "text-primary-foreground"
                } opacity-70 hover:opacity-100`}
              >
                Order Now
              </a>
            </div>
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
          className={`absolute top-16 sm:top-20 left-3 right-3 sm:left-4 sm:right-4 glass-dark rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-500 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 sm:gap-6">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`text-xl sm:text-2xl font-serif text-dark-foreground hover:text-primary transition-all duration-300 ${
                location.pathname === "/" ? "text-primary" : ""
              }`}
            >
              Home
            </Link>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl sm:text-2xl font-serif text-dark-foreground hover:text-primary transition-all duration-300 ${
                  isActive(link.path) ? "text-primary" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={zomatoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 sm:mt-4 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground text-center text-xs sm:text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:shadow-lg"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
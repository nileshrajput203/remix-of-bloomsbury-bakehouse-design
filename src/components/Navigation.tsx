import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-4 md:left-8 z-50 mt-0">
      <div className="bg-primary rounded-b-2xl px-4 md:px-6 py-4 flex items-center gap-4 md:gap-8 backdrop-blur-sm bg-opacity-95 shadow-lg">
        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-primary-foreground" />
          )}
        </button>

        {/* Logo */}
        <Link to="/" className="font-script text-2xl md:text-3xl text-primary-foreground tracking-wide">
          BBC (Blue Bay Cafe)
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link text-primary-foreground ${
                isActive(link.path) ? "opacity-100 underline underline-offset-4" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary rounded-b-2xl mt-0 px-6 py-4 shadow-lg">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`nav-link text-primary-foreground ${
                  isActive(link.path) ? "opacity-100 underline underline-offset-4" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/order"
              onClick={() => setIsOpen(false)}
              className="nav-link text-primary-foreground"
            >
              Place Order
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

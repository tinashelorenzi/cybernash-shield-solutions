
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  currentPath: string;
};

const NavLink = ({ to, children, currentPath }: NavLinkProps) => {
  const isActive = currentPath === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "px-4 py-2 text-sm rounded-md transition-colors relative group",
        isActive 
          ? "text-cybernash-turquoise" 
          : "text-foreground hover:text-cybernash-turquoise"
      )}
    >
      <span>{children}</span>
      <span 
        className={cn(
          "absolute bottom-0 left-0 h-0.5 bg-cybernash-turquoise transition-all duration-300",
          isActive ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-cybernash-dark/90 backdrop-blur-md py-3 shadow-md" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gradient">CyberNash</span>
          <span className="text-white text-lg hidden sm:inline">Technologies</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <NavLink to="/" currentPath={location.pathname}>Home</NavLink>
          <NavLink to="/about" currentPath={location.pathname}>About Us</NavLink>
          <NavLink to="/services" currentPath={location.pathname}>Services</NavLink>
          <NavLink to="/projects" currentPath={location.pathname}>Projects</NavLink>
          <NavLink to="/contact" currentPath={location.pathname}>Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-16 bg-cybernash-dark/95 backdrop-blur-md transition-transform duration-300 md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          <Link 
            to="/" 
            className="text-xl font-medium text-white hover:text-cybernash-turquoise"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-xl font-medium text-white hover:text-cybernash-turquoise"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/services" 
            className="text-xl font-medium text-white hover:text-cybernash-turquoise"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/projects" 
            className="text-xl font-medium text-white hover:text-cybernash-turquoise"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className="text-xl font-medium text-white hover:text-cybernash-turquoise"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

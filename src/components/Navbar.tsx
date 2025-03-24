
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300 ease-in-out',
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src={`${baseUrl}lovable-uploads/kumalogo.png`}
            alt="Kuma Logo" 
            className="w-7 h-7 sm:w-8 sm:h-8"
          />
          <span className="text-lg sm:text-xl font-bold text-kuma-primary">Kuma</span>
        </div>
        
        {isMobile ? (
          <div className="flex items-center space-x-3">
            <a 
              href="https://form.jotform.com/250694302591356"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-kuma-primary text-white px-4 py-1.5 text-sm rounded-full hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Sign Up
            </a>
            <button 
              onClick={toggleMobileMenu} 
              className="text-gray-600"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        ) : (
          <>
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#features" 
                className="text-gray-600 hover:text-kuma-primary transition-colors duration-200"
              >
                Features
              </a>
              <a 
                href="#solution" 
                className="text-gray-600 hover:text-kuma-primary transition-colors duration-200"
              >
                Solution
              </a>
              <a 
                href="#early-access" 
                className="text-gray-600 hover:text-kuma-primary transition-colors duration-200"
              >
                Early Access
              </a>
            </div>
            
            <a 
              href="https://form.jotform.com/250694302591356"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-kuma-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Sign Up
            </a>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-sm z-40 animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-kuma-primary transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Features
            </a>
            <a 
              href="#solution" 
              className="text-gray-600 hover:text-kuma-primary transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Solution
            </a>
            <a 
              href="#early-access" 
              className="text-gray-600 hover:text-kuma-primary transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Early Access
            </a>
            <a 
              href="https://form.jotform.com/250694302591356"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-kuma-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold mt-4"
              onClick={toggleMobileMenu}
            >
              Sign Up for Early Access
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

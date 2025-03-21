
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ease-in-out',
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/cbb3ce3e-a582-4c4d-985b-e3ec549de95c.png" 
            alt="Kuma Logo" 
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-kuma-primary">Kuma</span>
        </div>
        
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
        
        <button className="bg-kuma-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

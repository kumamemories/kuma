
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
          <svg 
            className="w-8 h-8 text-kuma-primary" 
            viewBox="0 0 24 24" 
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.48 6.83 17.17 3.52 13 3.06V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V3.06C6.83 3.52 3.52 6.83 3.06 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H3.06C3.52 17.17 6.83 20.48 11 20.94V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20.94C17.17 20.48 20.48 17.17 20.94 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" 
              fill="currentColor"
            />
          </svg>
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

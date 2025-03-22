
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="relative pt-24 md:pt-28 pb-12 md:pb-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-kuma-background z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(195, 177, 255, 0.3) 0%, rgba(246, 244, 254, 0) 60%)`,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div 
          ref={heroRef}
          className="z-10 transition-all duration-700 ease-out opacity-0 translate-y-10 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-kuma-primary mb-4 md:mb-6 leading-tight">
            Keep Your Memories Alive
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
            Capture and organize family stories effortlessly. Join early access to shape Kuma and preserve your loved ones' voices forever.
          </p>
          <a 
            href="https://form.jotform.com/250694302591356"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-block bg-kuma-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-sm sm:text-base"
          >
            Sign Up for Early Access
          </a>
        </div>

        <div className="relative z-10 mt-8 md:mt-0">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl">
            <div className="absolute inset-0 border-2 border-kuma-light rounded-3xl z-20 pointer-events-none" />
            <img 
              src="public/lovable-uploads/53acffdb-62f7-4466-bb9a-0e1100f3c43c.png" 
              alt="Grandmother and granddaughter looking at smartphone" 
              className="w-full h-auto rounded-3xl z-10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

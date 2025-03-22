
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "glass-card p-6 sm:p-8 text-center transition-all duration-700 ease-out opacity-0 translate-y-10",
        "hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
      )}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-kuma-light/30 text-kuma-primary mb-4 sm:mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-kuma-primary">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16 text-kuma-primary transition-all duration-700 ease-out opacity-0 translate-y-10"
        >
          How Kuma Works
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard 
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-32 sm:h-32">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor"/>
                <path d="M13 7H11V6H13V7Z" fill="currentColor"/>
                <path d="M15 18V17H9V18H15Z" fill="currentColor"/>
                <path d="M18 12C18 8.7 15.3 6 12 6V4C16.4 4 20 7.6 20 12H18Z" fill="currentColor"/>
                <path d="M12 18C15.3 18 18 15.3 18 12H20C20 16.4 16.4 20 12 20V18Z" fill="currentColor"/>
                <path d="M12 6C8.7 6 6 8.7 6 12H4C4 7.6 7.6 4 12 4V6Z" fill="currentColor"/>
                <path d="M6 12C6 15.3 8.7 18 12 18V20C7.6 20 4 16.4 4 12H6Z" fill="currentColor"/>
              </svg>
            }
            title="Record"
            description="Capture real conversations on the app effortlessly."
            delay={0}
          />
          
          <FeatureCard 
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-32 sm:h-32">
                <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 5V19H5V5H19Z" fill="currentColor"/>
                <path d="M13.5 13H15V7H9V8.5H13.5V13Z" fill="currentColor"/>
                <path d="M9 13.5V17H15V15.5H10.5V13.5H9Z" fill="currentColor"/>
              </svg>
            }
            title="Save & Store"
            description="AI helps categorize and enhance audio."
            delay={200}
          />
          
          <FeatureCard 
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-32 sm:h-32">
                <path d="M16 11C17.66 11 19 9.66 19 8C19 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11Z" fill="currentColor"/>
                <path d="M8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11Z" fill="currentColor"/>
                <path d="M16 15C13.33 15 8 16.33 8 19V21H24V19C24 16.33 18.67 15 16 15Z" fill="currentColor"/>
                <path d="M8 15C5.33 15 0 16.33 0 19V21H7V19C7 17.67 7.25 16.5 7.89 15.56C7.33 15.53 6.31 15 8 15Z" fill="currentColor"/>
              </svg>
            }
            title="Create & Share"
            description="Convert into a legacy keepsake - podcast, book or video."
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

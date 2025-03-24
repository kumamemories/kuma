
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface SolutionPointProps {
  number: number;
  title: string;
  delay: number;
}

const SolutionPoint: React.FC<SolutionPointProps> = ({ number, title, delay }) => {
  const pointRef = useRef<HTMLDivElement>(null);

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

    if (pointRef.current) {
      observer.observe(pointRef.current);
    }

    return () => {
      if (pointRef.current) {
        observer.unobserve(pointRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={pointRef}
      className={cn(
        "flex items-start space-x-3 sm:space-x-4 mb-6 sm:mb-8 transition-all duration-700 ease-out opacity-0 translate-y-10"
      )}
    >
      <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-kuma-light flex items-center justify-center text-kuma-primary font-semibold text-sm sm:text-base">
        {number}
      </div>
      <div className="pt-0.5 sm:pt-1">
        <p className="text-base sm:text-lg text-gray-700">{title}</p>
      </div>
    </div>
  );
};

const Solution = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (titleRef.current) {
            titleRef.current.classList.add('opacity-100');
            titleRef.current.classList.remove('opacity-0', 'translate-y-10');
          }
          
          if (imageContainerRef.current) {
            setTimeout(() => {
              imageContainerRef.current?.classList.add('opacity-100');
              imageContainerRef.current?.classList.remove('opacity-0', 'translate-x-10');
            }, 200);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="solution" 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 relative"
    >
      <div 
        className="absolute inset-0 bg-kuma-background z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 70% 50%, rgba(195, 177, 255, 0.3) 0%, rgba(246, 244, 254, 0) 60%)`,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div 
            ref={imageContainerRef}
            className="order-2 md:order-1 transition-all duration-700 ease-out opacity-0 translate-x-10"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-kuma-light/20 filter blur-3xl z-0"></div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full sm:w-3/5 shadow-xl rounded-3xl overflow-hidden border-2 border-white/50 transform transition-all duration-300 hover:scale-[1.02] hover:-rotate-1">
                  <img 
                    src={`${baseUrl}lovable-uploads/0019a023-d35d-415a-ad63-c7f24ac23e43.png`}
                    alt="Kuma app question interface" 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                {!isMobile && (
                  <div className="w-full sm:w-2/5 shadow-xl rounded-3xl overflow-hidden border-2 border-white/50 transform transition-all duration-300 hover:scale-[1.02] hover:rotate-1">
                    <img 
                      src={`${baseUrl}lovable-uploads/23901b5a-c6e8-4e2c-8f6c-9aec7bc20610.png`}
                      alt="Kuma app story recording interface" 
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 z-10">
            <h2 
              ref={titleRef}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-kuma-primary transition-all duration-700 ease-out opacity-0 translate-y-10"
            >
              The Solution
            </h2>
            
            <div className="space-y-5 sm:space-y-6">
              <SolutionPoint 
                number={1} 
                title="AI-powered recording & organization – Capture stories effortlessly." 
                delay={400}
              />
              <SolutionPoint 
                number={2} 
                title="Convert memories into podcasts, books, and videos – Keep them structured." 
                delay={600}
              />
              <SolutionPoint 
                number={3} 
                title="Private & family-friendly – No social media, just a secure space for your family." 
                delay={800}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

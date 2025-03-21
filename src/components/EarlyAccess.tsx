
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

interface CheckItemProps {
  text: string;
  delay: number;
}

const CheckItem: React.FC<CheckItemProps> = ({ text, delay }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-5');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={itemRef}
      className={cn(
        "flex items-center space-x-3 mb-5 transition-all duration-500 ease-out opacity-0 translate-y-5"
      )}
    >
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-kuma-light/50 flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill="#9475FF"/>
        </svg>
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

const EarlyAccess = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (titleRef.current) {
            titleRef.current.classList.add('opacity-100');
            titleRef.current.classList.remove('opacity-0', 'translate-y-10');
          }
          
          if (cardRef.current) {
            setTimeout(() => {
              cardRef.current?.classList.add('opacity-100', 'translate-y-0');
              cardRef.current?.classList.remove('opacity-0', 'translate-y-10');
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
      id="early-access" 
      ref={sectionRef}
      className="py-24 bg-kuma-primary/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <div 
              ref={cardRef}
              className="glass-card p-10 border border-kuma-light/30 transition-all duration-700 ease-out opacity-0 translate-y-10"
            >
              <h3 className="text-2xl font-bold mb-8 text-kuma-primary">EARLY ACCESS INCLUDES</h3>
              
              <div className="space-y-2">
                <CheckItem 
                  text="You'll receive early access when we launch the Beta version."
                  delay={400}
                />
                <CheckItem 
                  text="Early access is free."
                  delay={500}
                />
                <CheckItem 
                  text="Once you sign up, you'll receive an email with a link to our feedback form."
                  delay={600}
                />
              </div>
            </div>
          </div>
          
          <div>
            <h2 
              ref={titleRef}
              className="text-3xl md:text-4xl font-bold mb-8 text-kuma-primary transition-all duration-700 ease-out opacity-0 translate-y-10"
            >
              Join Kuma
            </h2>
            
            <p className="text-gray-700 text-lg mb-8 max-w-lg">
              Capture and organize family stories effortlessly. Join early access to shape Kuma and preserve your loved ones' voices forever.
            </p>
            
            <a 
              href="https://form.jotform.com/250694302591356" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-kuma-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg font-semibold"
            >
              Sign Up for Early Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;

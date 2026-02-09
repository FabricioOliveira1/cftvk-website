import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const whatsappLink = "https://wa.me/+5521998818822?text=Olá! Gostaria de agendar uma aula experimental no CFTVK.";

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-on-scroll opacity-0 mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold tracking-wider uppercase">
              Centro de Treinamento CrossFit VK
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-on-scroll opacity-0 delay-100 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Treine mais forte.
            <br />
            <span className="text-gradient">Viva melhor.</span>
            <br />
            Supere seus limites.
          </h1>

          {/* Subheadline */}
          <p className="animate-on-scroll opacity-0 delay-200 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            No Crossfit VK você encontra saúde, performance e uma comunidade que te impulsiona 
            a ir além. Treino funcional e cross training para todos os níveis.
          </p>

          {/* CTA Buttons */}
          <div className="animate-on-scroll opacity-0 delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Agendar Aula Experimental
            </a>
            <a 
              href="#sobre"
              className="btn-outline w-full sm:w-auto"
            >
              Conhecer o CFTVK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

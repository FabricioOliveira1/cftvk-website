import { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const whatsappLink = "https://wa.me/+5521998818822?text=Olá! Gostaria de agendar uma aula experimental no CFTVK.";

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="animate-on-scroll opacity-0 inline-block text-primary font-semibold uppercase tracking-wider mb-4">
            Comece Agora
          </span>
          <h2 className="animate-on-scroll opacity-0 delay-100 font-display text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
            Sua melhor versão está
            <span className="text-gradient"> te esperando.</span>
          </h2>
          <p className="animate-on-scroll opacity-0 delay-200 text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Agende sua aula experimental gratuita e descubra por que muitas 
            pessoas escolheram o CFTVK para transformar suas vidas.
          </p>

          {/* CTA Button */}
          <div className="animate-on-scroll opacity-0 delay-300">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg py-5 px-10 inline-flex items-center gap-3"
            >
                <FontAwesomeIcon size="2xl" icon={faWhatsapp} />
              Fale com a gente no WhatsApp
            </a>
          </div>

          {/* Benefits */}
          <div className="animate-on-scroll opacity-0 delay-400 mt-12 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>3 aulas experimentais gratuitas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Supervisão de profissionais qualificados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Sem compromisso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import training1 from '@/assets/training-1.jpeg';
import training2 from '@/assets/training-2.jpeg';

const ForWho = () => {
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

  const audiences = [
    {
      title: 'Iniciantes',
      description: 'Nunca treinou? Perfeito! Começamos do zero com você.',
    },
    {
      title: 'Sedentários',
      description: 'Quer sair do sofá e ter mais qualidade de vida? Estamos aqui.',
    },
    {
      title: 'Intermediários',
      description: 'Já treina mas quer evoluir? Vamos te levar ao próximo nível.',
    },
    {
      title: 'Quem quer emagrecer',
      description: 'Nossos treinos queimam calorias e aceleram o metabolismo.',
    },
    {
      title: 'Quem quer força',
      description: 'Desenvolva músculos funcionais e se torne mais forte.',
    },
    {
      title: 'Quem quer condicionamento',
      description: 'Melhore sua resistência e tenha mais energia no dia a dia.',
    },
  ];

  return (
    <section id="para-quem" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div>
            <span className="animate-on-scroll opacity-0 inline-block text-primary font-semibold uppercase tracking-wider mb-4">
              Para Quem É
            </span>
            <h2 className="animate-on-scroll opacity-0 delay-100 font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Aqui você treina
              <span className="text-gradient"> no seu ritmo.</span>
            </h2>
            <p className="animate-on-scroll opacity-0 delay-200 text-muted-foreground text-lg mb-10 leading-relaxed">
              Não importa seu nível atual ou objetivo. No CFTVK, adaptamos o treino 
              para você. Nossos coaches acompanham de perto sua evolução e garantem 
              que você sempre esteja desafiado, mas seguro.
            </p>

            {/* Audience List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {audiences.map((audience, index) => (
                <div 
                  key={index}
                  className={`animate-on-scroll opacity-0 delay-${(index + 3) * 100} flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-colors`}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{audience.title}</h3>
                    <p className="text-sm text-muted-foreground">{audience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images Side */}
          <div className="animate-on-scroll opacity-0 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src={training1} 
                  alt="Treino funcional" 
                  className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden mt-12">
                <img 
                  src={training2} 
                  alt="Treino de força" 
                  className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;

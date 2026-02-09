import { useEffect, useRef } from 'react';
import { Heart, TrendingUp, Users, Award } from 'lucide-react';
import coachImage from '@/assets/coach.jpeg';

const About = () => {
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

  const values = [
    {
      icon: Heart,
      title: 'Saúde em Primeiro Lugar',
      description: 'Treinos pensados para melhorar sua qualidade de vida, respeitando seu corpo.',
    },
    {
      icon: TrendingUp,
      title: 'Evolução Constante',
      description: 'Acompanhamento próximo para garantir que você supere seus limites a cada dia.',
    },
    {
      icon: Users,
      title: 'Comunidade Forte',
      description: 'Aqui você faz parte de uma família que se apoia e celebra cada conquista.',
    },
    {
      icon: Award,
      title: 'Para Todos os Níveis',
      description: 'Do iniciante ao avançado, nossos coaches adaptam o treino para você.',
    },
  ];

  return (
    <section id="sobre" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="animate-on-scroll opacity-0 relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={coachImage} 
                alt="Coaches CFTVK" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border max-w-[260px]">
              <p className="text-primary font-display text-2xl font-bold mb-1">
                Acompanhamento Próximo
              </p>
              <p className="text-sm text-muted-foreground">
                Nossos coaches estão sempre ao seu lado, corrigindo e motivando.
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="animate-on-scroll opacity-0 inline-block text-primary font-semibold uppercase tracking-wider mb-4">
              Sobre Nós
            </span>
            <h2 className="animate-on-scroll opacity-0 delay-100 font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Mais que um Box de Treino. 
              <span className="text-gradient"> Uma Família.</span>
            </h2>
            <p className="animate-on-scroll opacity-0 delay-200 text-muted-foreground text-lg mb-8 leading-relaxed">
              O CFTVK nasceu da paixão por transformar vidas através do movimento. 
              Acreditamos que todo mundo pode evoluir, independente do ponto de partida. 
              Com treinos funcionais e crossfit, ajudamos você a conquistar saúde, 
              força e autoconfiança em um ambiente acolhedor e desafiador.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={`animate-on-scroll opacity-0 delay-${(index + 3) * 100} flex items-start gap-4`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

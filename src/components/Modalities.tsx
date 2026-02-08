import { useEffect, useRef } from 'react';
import { Dumbbell, Zap, Activity, Timer, Users } from 'lucide-react';

const Modalities = () => {
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

  const modalities = [
    {
      icon: Dumbbell,
      title: 'Treinamento Funcional',
      description: 'Movimentos naturais do corpo para melhorar força, equilíbrio e mobilidade no dia a dia.',
      benefits: ['Melhora postura', 'Previne lesões', 'Aumenta mobilidade'],
    },
    {
      icon: Zap,
      title: 'Cross Training',
      description: 'Treinos intensos e variados que combinam força, cardio e ginástica para resultados rápidos.',
      benefits: ['Alta queima calórica', 'Ganho de força', 'Condicionamento total'],
    },
    {
      icon: Activity,
      title: 'Condicionamento Físico',
      description: 'Aulas focadas em melhorar sua resistência cardiovascular e capacidade respiratória.',
      benefits: ['Mais energia', 'Coração saudável', 'Resistência física'],
    },
    {
      icon: Timer,
      title: 'Força e Resistência',
      description: 'Treinos com cargas progressivas para desenvolver músculos fortes e funcionais.',
      benefits: ['Ganho muscular', 'Metabolismo acelerado', 'Força real'],
    },
    {
      icon: Users,
      title: 'Aulas em Grupo',
      description: 'Energia contagiante das aulas coletivas com motivação do grupo e dos coaches.',
      benefits: ['Motivação extra', 'Comunidade', 'Diversão'],
    },
  ];

  return (
    <section id="modalidades" ref={sectionRef} className="section-padding bg-card/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll opacity-0 inline-block text-primary font-semibold uppercase tracking-wider mb-4">
            Modalidades
          </span>
          <h2 className="animate-on-scroll opacity-0 delay-100 font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Treinos que
            <span className="text-gradient"> Transformam</span>
          </h2>
          <p className="animate-on-scroll opacity-0 delay-200 text-muted-foreground text-lg">
            Oferecemos diferentes modalidades para você encontrar o treino perfeito 
            para seus objetivos e estilo de vida.
          </p>
        </div>

        {/* Modalities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modalities.map((modality, index) => (
            <div 
              key={index}
              className={`animate-on-scroll opacity-0 delay-${(index + 1) * 100} card-glow p-8 group cursor-pointer transition-transform duration-300 hover:-translate-y-2`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <modality.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                {modality.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {modality.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {modality.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modalities;

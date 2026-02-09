import { useEffect, useRef } from 'react';
import { Dumbbell , Star, Trophy } from 'lucide-react';

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
      title: 'Crossfit',
      description: 'Treinos intensos e variados que combinam força, cardio e ginástica para resultados rápidos.',
      benefits: ['Alta queima calórica', 'Ganho de força', 'Condicionamento total'],
    },
    {
      icon: Star ,
      title: 'Tecido Acrobático e Lira Circense',
      description: 'Desenvolva força, flexibilidade e coordenação através de técnicas aéreas e acrobáticas.',
      benefits: ['Força funcional', 'Flexibilidade', 'Coordenação motora'],
    },
    {
      icon: Trophy,
      title: 'Lutas e Boxe',
      description: 'Aprenda técnicas de defesa pessoal enquanto melhora seu condicionamento físico e disciplina.',
      benefits: ['Autodefesa', 'Resistência cardiovascular', 'Disciplina'],
    }
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
            Atividades que
            <span className="text-gradient"> Transformam</span>
          </h2>
          <p className="animate-on-scroll opacity-0 delay-200 text-muted-foreground text-lg">
            Oferecemos diferentes modalidades para você encontrar a melhor forma de alcançar seus objetivos e transformar seu corpo e mente.
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

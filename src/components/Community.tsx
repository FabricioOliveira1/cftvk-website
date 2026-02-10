import { useEffect, useRef } from 'react';
import communityImg from '@/assets/community.jpeg';
import training1 from '@/assets/training-3.jpeg';
import training2 from '@/assets/training-4.jpeg';
import training3 from '@/assets/training-5.jpeg';
import training4 from '@/assets/training-6.jpeg';

const Community = () => {
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

  const galleryImages = [
    { src: communityImg, alt: 'Comunidade CFTVK' },
    { src: training1, alt: 'Treino de cordas' },
    { src: training2, alt: 'Treino de força' },
    { src: training3, alt: 'Aula em grupo' },
    { src: training4, alt: 'Treino de boxe' },
  ];

  return (
    <section id="comunidade" ref={sectionRef} className="section-padding bg-card/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll opacity-0 inline-block text-primary font-semibold uppercase tracking-wider mb-4">
            Comunidade
          </span>
          <h2 className="animate-on-scroll opacity-0 delay-100 font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Faça parte da
            <span className="text-gradient"> Família CFTVK</span>
          </h2>
          <p className="animate-on-scroll opacity-0 delay-200 text-muted-foreground text-lg">
            Aqui a gente sua junto, celebra junto e evolui junto. Nossa comunidade é feita 
            de pessoas que se apoiam e se inspiram todos os dias.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`animate-on-scroll opacity-0 delay-${(index + 1) * 100} relative group overflow-hidden rounded-xl ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? 'h-[400px] md:h-full' : 'h-[200px] md:h-[250px]'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="animate-on-scroll opacity-0 mt-16 max-w-4xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl text-foreground italic mb-6">
            "O CFTVK mudou minha vida. Não é só um lugar para treinar, é uma família 
            que te motiva a ser melhor todos os dias."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold">NB</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Nathalia Brum</p>
              <p className="text-sm text-muted-foreground">Aluna há 3 anos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;

import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MapPin, Clock, Phone, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const whatsappLink = "https://wa.me/+5521998818822?text=Olá! Gostaria de mais informações sobre o CFTVK.";

  return (
    <footer id="contato" className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
          <a href="#" className="font-display text-2xl md:text-3xl font-bold tracking-wider">
            <img 
              src="/images/cftvk-logo.webp" 
              alt="CFTVK Logo" 
              style={{ height: '80px' }}
              className="h-8 md:h-10 mr-2 inline-block" 
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width={80}
              height={80}
            />
            <span className="text-gradient">Crossfit </span>
            <span className="text-foreground">VK</span>
          </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Centro de Crossfit e Treinamento Funcional. Transformando vidas
              através do movimento, saúde e comunidade.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/cftvk?igsh=ZTJmeGxmOHYyZDFm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon size="lg" icon={faInstagram} className="text-muted-foreground" />

              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="WhatsApp"
              >

                <FontAwesomeIcon size="lg" icon={faWhatsapp} className="text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-foreground">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Av. Meriti, 586<br />
                  Vila Kosmos - Rio de Janeiro/RJ
                </span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <FontAwesomeIcon size="lg" color='#e8b843' icon={faWhatsapp} />
                <span>(21) 99881-8822</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-foreground">Horários</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Segunda a Sexta</p>
                  <p>06:00 - 07:00</p>
                  <p>08:00 - 09:00</p>
                  <p>09:00 - 10:00</p>
                  <p>15:00 - 16:00</p>
                  <p>18:00 - 19:00</p>
                  <p>19:00 - 20:00</p>
                  <p>20:00 - 21:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Sábados</p>
                  <p>09:00 - 10:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} CFTVK. Todos os direitos reservados.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-3 px-6"
          >
            Agendar Aula Experimental
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { MessageCircle } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/+5521998818822?text=Olá! Gostaria de agendar uma aula experimental no CFTVK.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
      style={{ 
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
      }}
      aria-label="Contato via WhatsApp"
    >
      
      <FontAwesomeIcon size="2xl" icon={faWhatsapp} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#modalidades', label: 'Modalidades' },
    { href: '#para-quem', label: 'Para Quem' },
    { href: '#comunidade', label: 'Comunidade' },
    { href: '#contato', label: 'Contato' },
  ];

  const whatsappLink = "https://wa.me/+5521998818822?text=Olá! Gostaria de agendar uma aula experimental no CFTVK.";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex btn-primary text-sm py-3 px-6"
          >
            Agendar Aula
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 backdrop-blur-md transition-all duration-300 overflow-hidden ${
            isScrolled ? 'bg-background/95' : 'bg-background/98'
          } ${
            isMobileMenuOpen ? 'max-h-screen py-6' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-3 px-6"
              >
                Agendar Aula
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

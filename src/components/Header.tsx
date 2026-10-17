import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { MinacLogo } from './MinacLogo';

interface HeaderProps {
  headerCtaText: string;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  headerCtaText,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navLinks = [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'Serviços', href: '#servicos', id: 'servicos' },
    { label: 'Sobre', href: '#sobre', id: 'sobre' },
    { label: 'Equipe', href: '#equipe', id: 'equipe' },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ];

  // Monitor scroll position to update active nav indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d0e11]/95 backdrop-blur-md border-b border-[#202126] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg py-1 flex items-center"
        >
          <MinacLogo size="md" showSubtitle={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-150 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                  isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-600 via-orange-500 to-emerald-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Button: Fale Conosco Pill Button */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenContact}
            className="group relative px-5 py-2 rounded-full border border-[#ea580c] hover:border-[#f97316] bg-transparent hover:bg-[#ea580c]/10 text-white text-sm font-medium transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-[0_0_15px_rgba(234,88,12,0.25)] cursor-pointer"
          >
            <Phone className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
            <span>{headerCtaText}</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#1a1b20]"
            aria-label="Menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[#202126] bg-[#0d0e11] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-left py-2 px-3 text-base font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-orange-400 bg-[#18191f]'
                    : 'text-gray-300 hover:text-orange-400 hover:bg-[#18191f]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#202126]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-full border border-[#ea580c] bg-orange-600/10 text-white text-center font-medium flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>{headerCtaText}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

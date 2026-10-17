import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Edit3, Settings } from 'lucide-react';
import { MinacLogo } from './MinacLogo';

interface HeaderProps {
  brandName: string;
  brandSubtitle: string;
  headerCtaText: string;
  phoneRaw: string;
  isEditMode: boolean;
  onToggleEditMode: () => void;
  onOpenContact: () => void;
  onOpenEditor: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  brandName,
  brandSubtitle,
  headerCtaText,
  phoneRaw,
  isEditMode,
  onToggleEditMode,
  onOpenContact,
  onOpenEditor,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d0e11]/90 backdrop-blur-md border-b border-[#202126] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#inicio"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg py-1 flex items-center"
        >
          <MinacLogo size="md" showSubtitle={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-normal text-gray-300 hover:text-white transition-colors duration-150 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              {link.label}
              {link.label === 'Início' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-80" />
              )}
            </button>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Edit Toggle button so user knows they can edit on the fly */}
          <button
            onClick={onToggleEditMode}
            title={isEditMode ? 'Desativar modo de edição rápida' : 'Ativar modo de edição rápida da página'}
            className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 border transition-all ${
              isEditMode
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm shadow-amber-500/20'
                : 'bg-[#18191d] text-gray-400 border-[#2d2e34] hover:text-white hover:border-gray-500'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5 text-orange-400" />
            <span>{isEditMode ? 'Edição Ativa' : 'Editar Página'}</span>
          </button>

          {/* Fale Conosco Pill Button (matching reference screenshot) */}
          <button
            onClick={onOpenContact}
            className="group relative px-5 py-2 rounded-full border border-[#ea580c] hover:border-[#f97316] bg-transparent hover:bg-[#ea580c]/10 text-white text-sm font-medium transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-[0_0_15px_rgba(234,88,12,0.25)]"
          >
            <Phone className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
            <span>{headerCtaText}</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleEditMode}
            className="p-2 rounded-lg text-orange-400 hover:bg-[#1a1b20]"
            title="Editar conteúdo"
          >
            <Edit3 className="w-5 h-5" />
          </button>
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
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 px-3 text-base font-medium text-gray-300 hover:text-orange-400 hover:bg-[#18191f] rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#202126] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-full border border-[#ea580c] bg-orange-600/10 text-white text-center font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>{headerCtaText}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEditor();
              }}
              className="w-full py-2 rounded-lg bg-[#1a1b20] text-gray-300 text-xs flex items-center justify-center gap-2 border border-[#2d2e35]"
            >
              <Settings className="w-3.5 h-3.5 text-orange-400" />
              <span>Personalizar Textos e Contatos</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

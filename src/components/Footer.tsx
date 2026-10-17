import React from 'react';
import { Phone, Globe, Instagram, Facebook, Youtube } from 'lucide-react';
import { MinacLogo } from './MinacLogo';
import { BackgroundArcs } from './BackgroundArcs';

interface FooterProps {
  brandName: string;
  brandSubtitle: string;
  phone: string;
  phoneRaw: string;
  website: string;
  socialHandle: string;
  companyLegal: string;
  isEditMode: boolean;
  onUpdateField: (field: string, value: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  brandName,
  brandSubtitle,
  phone,
  phoneRaw,
  website,
  socialHandle,
  companyLegal,
  isEditMode,
  onUpdateField,
  onOpenContact,
}) => {
  return (
    <footer id="contato" className="relative w-full bg-[#090a0d] border-t border-[#1e1f24] overflow-hidden pt-12 pb-14 text-sm">
      {/* Decorative concentric arcs in the bottom right corner matching reference image */}
      <BackgroundArcs
        variant="footer"
        className="absolute -bottom-10 -right-10 w-72 h-72 sm:w-84 sm:h-84 pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main contact bar line matching reference image */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[#1b1c21]">
          
          {/* Logo */}
          <div className="shrink-0">
            <MinacLogo size="sm" showSubtitle={true} />
          </div>

          {/* Contact and Social Row */}
          <div className="flex flex-wrap items-center gap-y-4 gap-x-6 sm:gap-x-8 text-gray-300">
            
            {/* Phone */}
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-orange-500 shrink-0" />
              {isEditMode ? (
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => onUpdateField('phone', e.target.value)}
                  className="bg-black/60 border border-orange-500/50 rounded px-2 py-0.5 text-xs text-white"
                  title="Editar telefone"
                />
              ) : (
                <a
                  href={`https://wa.me/${phoneRaw}?text=${encodeURIComponent('Olá, gostaria de saber mais sobre a assistência técnica da MINAC!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 font-medium transition-colors"
                >
                  {phone}
                </a>
              )}
            </div>

            <span className="hidden sm:inline text-gray-600 select-none">|</span>

            {/* Website */}
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-orange-500 shrink-0" />
              {isEditMode ? (
                <input
                  type="text"
                  value={website}
                  onChange={(e) => onUpdateField('website', e.target.value)}
                  className="bg-black/60 border border-orange-500/50 rounded px-2 py-0.5 text-xs text-white"
                  title="Editar website"
                />
              ) : (
                <a
                  href={`https://${website.replace(/^https?:\/\//, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  {website}
                </a>
              )}
            </div>

            <span className="hidden sm:inline text-gray-600 select-none">|</span>

            {/* Social Channels */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={`https://instagram.com/${socialHandle.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-[#18191f] hover:bg-orange-500/20 hover:text-orange-400 text-gray-300 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-[#18191f] hover:bg-orange-500/20 hover:text-orange-400 text-gray-300 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-[#18191f] hover:bg-orange-500/20 hover:text-orange-400 text-gray-300 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>

              {isEditMode ? (
                <input
                  type="text"
                  value={socialHandle}
                  onChange={(e) => onUpdateField('socialHandle', e.target.value)}
                  className="bg-black/60 border border-orange-500/50 rounded px-2 py-0.5 text-xs text-white"
                  title="Editar @rede social"
                />
              ) : (
                <span className="text-gray-400 text-xs sm:text-sm font-normal">
                  {socialHandle}
                </span>
              )}
            </div>

          </div>

        </div>

        {/* Legal notice line matching bottom of reference screenshot */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            {isEditMode ? (
              <input
                type="text"
                value={companyLegal}
                onChange={(e) => onUpdateField('companyLegal', e.target.value)}
                className="bg-black/60 border border-orange-500/50 rounded px-2 py-0.5 text-xs text-white w-full max-w-lg"
                title="Editar razão social"
              />
            ) : (
              <span>{companyLegal}</span>
            )}
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <span>Assistência Técnica Homologada</span>
            <span>·</span>
            <button
              onClick={onOpenContact}
              className="text-orange-400 hover:text-orange-300 underline font-medium"
            >
              Atendimento Online
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

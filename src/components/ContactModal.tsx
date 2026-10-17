import React from 'react';
import { X, Phone, MessageSquare, Mail, Globe, MapPin, Clock, ShieldCheck } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  phone: string;
  phoneRaw: string;
  website: string;
  email: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  phone,
  phoneRaw,
  website,
  email,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#121317] border border-[#2b2c34] rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#202128] flex items-center justify-between bg-[#15161c]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center">
              <Phone className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-brand">Fale Conosco</h3>
              <p className="text-xs text-gray-400">Canais diretos de atendimento técnico MINAC</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Channels */}
        <div className="p-6 space-y-4 text-sm">
          
          {/* WhatsApp Direct card */}
          <a
            href={`https://wa.me/${phoneRaw}?text=${encodeURIComponent('Olá! Vim através do site da MINAC Equipamentos e gostaria de atendimento técnico.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 hover:border-emerald-500 transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-semibold flex items-center gap-2">
                  <span>WhatsApp Técnico</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-normal">
                    Online agora
                  </span>
                </div>
                <div className="text-emerald-400/90 text-xs font-mono">{phone}</div>
              </div>
            </div>
            <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Abrir conversa →</span>
          </a>

          {/* Regular Phone Call */}
          <a
            href={`tel:${phoneRaw}`}
            className="flex items-center justify-between p-4 rounded-xl bg-[#181920] border border-[#2b2c34] hover:border-gray-500 transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-semibold">Central Telefônica</div>
                <div className="text-gray-400 text-xs font-mono">{phone}</div>
              </div>
            </div>
            <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Ligar agora →</span>
          </a>

          {/* Website & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <a
              href={`https://${website.replace(/^https?:\/\//, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#181920] border border-[#272830] hover:border-orange-500/40 transition-colors flex items-center gap-3"
            >
              <Globe className="w-4 h-4 text-orange-400 shrink-0" />
              <div className="min-w-0">
                <div className="text-[11px] text-gray-400">Portal Oficial</div>
                <div className="text-xs text-white truncate font-medium">{website}</div>
              </div>
            </a>

            <a
              href={`mailto:${email}`}
              className="p-3.5 rounded-xl bg-[#181920] border border-[#272830] hover:border-orange-500/40 transition-colors flex items-center gap-3"
            >
              <Mail className="w-4 h-4 text-orange-400 shrink-0" />
              <div className="min-w-0">
                <div className="text-[11px] text-gray-400">E-mail Comercial</div>
                <div className="text-xs text-white truncate font-medium">{email}</div>
              </div>
            </a>
          </div>

          {/* Hours & Coverage Info */}
          <div className="mt-4 p-4 rounded-xl bg-[#15161c] border border-[#22232a] space-y-2 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Horário: Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Atendimento em toda a Grande São Paulo, Litoral e Interior</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Garantia de 90 dias em todas as intervenções e peças fornecidas</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

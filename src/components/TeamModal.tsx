import React from 'react';
import { X, Award, CheckCircle, Wrench, Shield, Users, Clock } from 'lucide-react';
import teamPhoto from '../assets/images/minac_technician_shirt_1792259967138.jpg';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose, onOpenQuote }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#121317] border border-[#2b2c34] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#202128] flex items-center justify-between bg-[#15161c]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center">
              <Users className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-brand">Corpo Técnico Especializado</h3>
              <p className="text-xs text-gray-400">Excelência e segurança para estúdios e academias</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          <div className="relative rounded-xl overflow-hidden h-44 sm:h-52 border border-white/5">
            <img
              src={teamPhoto}
              alt="Técnico MINAC em ação"
              className="w-full h-full object-cover filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4">
              <span className="text-[11px] font-semibold text-orange-400 uppercase tracking-widest">
                Qualificação Técnica
              </span>
              <h4 className="text-base font-bold text-white">Engenharia e Manutenção Preventiva</h4>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            A equipe da <strong className="text-white">MINAC Equipamentos</strong> é formada exclusivamente por profissionais capacitados na mecânica fina de aparelhos de Pilates e Fitness. Realizamos intervenções precisas sem danificar a estrutura dos seus aparelhos, mantendo o alinhamento original de fábrica.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-[#181920] border border-[#26272f] space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold text-xs">
                <Shield className="w-4 h-4 text-orange-400" />
                <span>Normas de Segurança NR-12</span>
              </div>
              <p className="text-xs text-gray-400">
                Aferição de resistência de molas e fixações mecânicas para evitar quebras durante a execução dos exercícios.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#181920] border border-[#26272f] space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold text-xs">
                <Wrench className="w-4 h-4 text-orange-400" />
                <span>Ferramental e Peças Originais</span>
              </div>
              <p className="text-xs text-gray-400">
                Torquímetro para aperto equilibrado de perfis de alumínio, rolamentos blindados e cabos náuticos de alta tolerância.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#181920] border border-[#26272f] space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold text-xs">
                <Clock className="w-4 h-4 text-orange-400" />
                <span>Horários Flexíveis</span>
              </div>
              <p className="text-xs text-gray-400">
                Agendamentos matutinos ou aos sábados para não coincidir com horários de pico de alunos no seu estúdio.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#181920] border border-[#26272f] space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold text-xs">
                <Award className="w-4 h-4 text-orange-400" />
                <span>Laudo e Certificado</span>
              </div>
              <p className="text-xs text-gray-400">
                Relatório fotográfico e checklist entregue ao responsável técnico após a conclusão de cada revisão.
              </p>
            </div>
          </div>

          {/* Action */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-medium text-xs text-center transition-all shadow-md shadow-orange-950/40"
            >
              Agendar Visita Técnica
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1e2027] hover:bg-[#272932] text-gray-300 text-xs font-medium transition-colors"
            >
              Fechar
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

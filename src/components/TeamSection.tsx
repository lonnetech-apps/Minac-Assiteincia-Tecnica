import React from 'react';
import { ArrowRight, Award, Shield, Clock } from 'lucide-react';
import teamImage from '../assets/images/minac_technician_shirt_1792259967138.jpg';

interface TeamSectionProps {
  title: string;
  description: string;
  ctaText: string;
  isEditMode: boolean;
  onUpdateField: (field: string, value: string) => void;
  onOpenTeamModal: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  title,
  description,
  ctaText,
  isEditMode,
  onUpdateField,
  onOpenTeamModal,
}) => {
  return (
    <section id="equipe" className="w-full bg-[#0d0e11] py-14 lg:py-20 border-b border-[#202126] relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Description & Outlined Pill Button */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              {isEditMode ? (
                <input
                  type="text"
                  value={title}
                  onChange={(e) => onUpdateField('teamTitle', e.target.value)}
                  className="bg-black/60 border border-orange-500/50 rounded-lg p-2 text-2xl sm:text-4xl font-bold text-white font-brand w-full"
                  title="Editar título da equipe"
                />
              ) : (
                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight font-brand">
                  {title}
                </h2>
              )}
            </div>

            <div className="max-w-md">
              {isEditMode ? (
                <textarea
                  value={description}
                  onChange={(e) => onUpdateField('teamDescription', e.target.value)}
                  rows={3}
                  className="w-full bg-black/60 border border-orange-500/50 rounded-lg p-2 text-base text-gray-200 leading-relaxed"
                  title="Editar descrição da equipe"
                />
              ) : (
                <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
                  {description}
                </p>
              )}
            </div>

            {/* Outlined pill button matching reference screenshot */}
            <div className="pt-2">
              <button
                onClick={onOpenTeamModal}
                className="group px-7 py-3 rounded-full border border-[#ea580c] hover:border-[#f97316] bg-transparent hover:bg-[#ea580c]/10 text-white text-sm sm:text-base font-medium transition-all duration-200 inline-flex items-center gap-2.5 shadow-sm hover:shadow-[0_0_20px_rgba(234,88,12,0.25)]"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 grid grid-cols-2 gap-3 text-xs text-gray-400 max-w-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Garantia de 90 dias em serviços</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Atendimento de emergência</span>
              </div>
            </div>
          </div>

          {/* Right Column: Photo of technician working on pilates reformer */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#14151a] group">
              <img
                src={teamImage}
                alt="Técnico profissional da MINAC prestando assistência em aparelho de pilates"
                className="w-full h-[280px] sm:h-[360px] lg:h-[400px] object-cover object-center filter brightness-[0.95] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Soft atmospheric gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BackgroundArcs } from './BackgroundArcs';
import heroImage from '../assets/images/pilates_hero_maintenance_1792259120307.jpg';

interface HeroSectionProps {
  kicker: string;
  heroTitle: string;
  heroDescription: string;
  heroCtaText: string;
  onOpenQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  kicker,
  heroTitle,
  heroDescription,
  heroCtaText,
  onOpenQuote,
}) => {
  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-[#0d0e11] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#202126] scroll-mt-20">
      {/* Decorative concentric arcs matching reference image */}
      <BackgroundArcs
        variant="hero"
        className="absolute top-0 left-1/3 w-[650px] h-[520px] -translate-y-8 z-0 opacity-80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 text-left pr-0 lg:pr-4">
            
            {/* Kicker / Subtitle */}
            <div className="inline-block">
              <span
                className="text-xs sm:text-sm font-semibold tracking-[0.24em] text-gray-400 uppercase select-none block"
                style={{ letterSpacing: '0.22em' }}
              >
                {kicker}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-bold text-white tracking-tight leading-[1.12] font-brand whitespace-pre-line">
                {heroTitle}
              </h1>
            </div>

            {/* Description Text */}
            <div className="max-w-xl">
              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
                {heroDescription}
              </p>
            </div>

            {/* Primary Action Button (Solicitar Orçamento) */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="group w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#e65c00] via-[#ea580c] to-[#f97316] hover:from-[#d35400] hover:to-[#ea580c] text-white font-medium text-base shadow-xl shadow-orange-950/40 hover:shadow-orange-700/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer"
              >
                {/* WhatsApp styled icon */}
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.53 1.838.799 2.796.8 3.18 0 5.766-2.586 5.767-5.766.001-3.18-2.585-5.766-5.767-5.787zm3.376 8.188c-.14.394-.712.723-1.026.768-.31.045-.694.06-2.022-.487-1.328-.546-2.182-1.89-2.247-1.979-.066-.088-.535-.712-.535-1.358 0-.646.339-.964.46-.109.122-.128.267-.16.356-.16.089 0 .178.002.256.006.083.004.195-.031.305.234.11.267.377.92.41 1.009.034.089.056.195.001.305-.056.111-.084.18-.168.277-.083.098-.176.219-.251.294-.083.084-.17.176-.073.343.097.167.433.714.93 1.156.64.57 1.18.747 1.348.831.167.083.267.07.367-.044.1-.115.428-.499.542-.67.114-.171.228-.143.385-.084.157.058 1.002.472 1.174.558.172.086.287.128.33.2.044.072.044.417-.096.811z" />
                  </svg>
                </div>
                <span>{heroCtaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <div className="flex items-center gap-2 text-xs text-gray-400 pl-1">
                <span className="w-2 h-2 rounded-full bg-[#1f6836] shrink-0" />
                <span>São Paulo, Grande SP e Região · Atendimento in-loco programado</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Photo with seamless dark vignette blending */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#121317]">
              
              {/* Main Photo: Hands in black gloves adjusting pilates reformer */}
              <img
                src={heroImage}
                alt="Técnico realizando manutenção preventiva e calibração de molas em equipamento de Pilates"
                className="w-full h-[340px] sm:h-[420px] lg:h-[460px] object-cover object-center filter brightness-[0.92] contrast-[1.08] hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Seamless atmospheric edge fades matching dark layout */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e11] via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e11] via-transparent to-black/20 pointer-events-none" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

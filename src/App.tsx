/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureBar } from './components/FeatureBar';
import { AboutSection } from './components/AboutSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ContactModal } from './components/ContactModal';
import { TeamModal } from './components/TeamModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { DEFAULT_LANDING_DATA, FeatureItem } from './types/landing';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const data = DEFAULT_LANDING_DATA;

  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [teamModalOpen, setTeamModalOpen] = useState<boolean>(false);
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f1f1f3] flex flex-col font-sans relative selection:bg-orange-500/30 selection:text-white">
      
      {/* Main Header */}
      <Header
        headerCtaText={data.headerCtaText}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Section 1: Início (Hero) */}
        <HeroSection
          kicker={data.kicker}
          heroTitle={data.heroTitle}
          heroDescription={data.heroDescription}
          heroCtaText={data.heroCtaText}
          onOpenQuote={() => setQuoteModalOpen(true)}
        />

        {/* Section 2: Serviços (Feature Bar) */}
        <FeatureBar
          features={data.features}
          onSelectFeature={(feat) => setSelectedFeature(feat)}
        />

        {/* Section 3: Sobre (About MINAC) */}
        <AboutSection
          onOpenQuote={() => setQuoteModalOpen(true)}
        />

        {/* Section 4: Equipe (Nossa Equipe) */}
        <TeamSection
          title={data.teamSection.title}
          description={data.teamSection.description}
          ctaText={data.teamSection.ctaText}
          onOpenTeamModal={() => setTeamModalOpen(true)}
        />
      </main>

      {/* Section 5: Contato (Footer) */}
      <Footer
        brandName={data.brandName}
        brandSubtitle={data.brandSubtitle}
        phone={data.phone}
        phoneRaw={data.phoneRaw}
        website={data.website}
        socialHandle={data.socialHandle}
        companyLegal={data.companyLegal}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Floating WhatsApp Direct Button */}
      <aside aria-label="WhatsApp Direto" className="fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${data.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de falar sobre a assistência técnica da MINAC Equipamentos.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-medium text-sm shadow-xl shadow-emerald-950/40 flex items-center gap-2.5 transition-all transform hover:scale-105 cursor-pointer"
          title="Fale conosco pelo WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">WhatsApp Direto</span>
        </a>
      </aside>

      {/* Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        phoneRaw={data.phoneRaw}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        phone={data.phone}
        phoneRaw={data.phoneRaw}
        website={data.website}
        email={data.email}
      />

      <TeamModal
        isOpen={teamModalOpen}
        onClose={() => setTeamModalOpen(false)}
        onOpenQuote={() => {
          setTeamModalOpen(false);
          setQuoteModalOpen(true);
        }}
      />

      <ServiceDetailModal
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
        onOpenQuote={() => {
          setSelectedFeature(null);
          setQuoteModalOpen(true);
        }}
      />

    </div>
  );
}

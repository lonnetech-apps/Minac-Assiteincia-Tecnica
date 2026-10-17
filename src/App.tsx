/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureBar } from './components/FeatureBar';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ContactModal } from './components/ContactModal';
import { TeamModal } from './components/TeamModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LiveEditorDrawer } from './components/LiveEditorDrawer';
import { LandingPageData, DEFAULT_LANDING_DATA, FeatureItem } from './types/landing';
import { Edit3, Check, Save, RotateCcw, MessageCircle } from 'lucide-react';

const STORAGE_KEY = 'minac_landing_page_data_v1';

export default function App() {
  const [data, setData] = useState<LandingPageData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load saved landing page data', e);
    }
    return DEFAULT_LANDING_DATA;
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [isEditorDrawerOpen, setIsEditorDrawerOpen] = useState<boolean>(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [teamModalOpen, setTeamModalOpen] = useState<boolean>(false);
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);
  const [showSaveToast, setShowSaveToast] = useState<boolean>(false);

  // Save to localStorage whenever data changes
  const handleSaveData = (newData: LandingPageData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error('Error saving data', e);
    }
  };

  const handleUpdateField = (field: string, value: string) => {
    let updated = { ...data };
    if (field === 'teamTitle') {
      updated.teamSection.title = value;
    } else if (field === 'teamDescription') {
      updated.teamSection.description = value;
    } else {
      (updated as any)[field] = value;
    }
    handleSaveData(updated);
  };

  const handleUpdateFeature = (index: number, title: string, subtitle: string) => {
    const updatedFeatures = [...data.features];
    updatedFeatures[index] = {
      ...updatedFeatures[index],
      title,
      subtitle,
    };
    handleSaveData({
      ...data,
      features: updatedFeatures,
    });
  };

  const handleResetToDefault = () => {
    setData(DEFAULT_LANDING_DATA);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
    setShowSaveToast(true);
    setTimeout(() => setShowSaveToast(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f1f1f3] flex flex-col font-sans relative selection:bg-orange-500/30 selection:text-white">
      
      {/* Notice Banner when Live Edit Mode is active */}
      {isEditMode && (
        <aside
          aria-label="Controles do modo de edição"
          className="sticky top-0 z-50 bg-amber-600/90 text-black px-4 py-2 text-xs font-semibold flex items-center justify-between shadow-md backdrop-blur-md"
        >
          <div className="flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-black animate-pulse" />
            <span>
              <strong>Modo de Edição Ativo:</strong> Você pode clicar e digitar diretamente nos campos da página ou abrir o painel lateral.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditorDrawerOpen(true)}
              className="bg-black/90 hover:bg-black text-white px-3 py-1 rounded-full text-xs font-medium transition-colors"
            >
              Abrir Painel Completo
            </button>
            <button
              onClick={handleResetToDefault}
              className="bg-white/20 hover:bg-white/30 text-black px-2.5 py-1 rounded-full text-xs transition-colors"
              title="Restaurar padrão original da imagem"
            >
              Restaurar Original
            </button>
            <button
              onClick={() => setIsEditMode(false)}
              className="bg-black text-amber-300 hover:text-white px-3 py-1 rounded-full text-xs transition-colors"
            >
              Concluir Edição
            </button>
          </div>
        </aside>
      )}

      {/* Main Header */}
      <Header
        brandName={data.brandName}
        brandSubtitle={data.brandSubtitle}
        headerCtaText={data.headerCtaText}
        phoneRaw={data.phoneRaw}
        isEditMode={isEditMode}
        onToggleEditMode={() => setIsEditMode(!isEditMode)}
        onOpenContact={() => setContactModalOpen(true)}
        onOpenEditor={() => setIsEditorDrawerOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <HeroSection
          kicker={data.kicker}
          heroTitle={data.heroTitle}
          heroDescription={data.heroDescription}
          heroCtaText={data.heroCtaText}
          isEditMode={isEditMode}
          onUpdateField={handleUpdateField}
          onOpenQuote={() => setQuoteModalOpen(true)}
        />

        {/* 4-Item Feature Bar */}
        <FeatureBar
          features={data.features}
          isEditMode={isEditMode}
          onSelectFeature={(feat) => setSelectedFeature(feat)}
          onUpdateFeature={handleUpdateFeature}
        />

        {/* Team Section */}
        <TeamSection
          title={data.teamSection.title}
          description={data.teamSection.description}
          ctaText={data.teamSection.ctaText}
          isEditMode={isEditMode}
          onUpdateField={handleUpdateField}
          onOpenTeamModal={() => setTeamModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        brandName={data.brandName}
        brandSubtitle={data.brandSubtitle}
        phone={data.phone}
        phoneRaw={data.phoneRaw}
        website={data.website}
        socialHandle={data.socialHandle}
        companyLegal={data.companyLegal}
        isEditMode={isEditMode}
        onUpdateField={handleUpdateField}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Floating Action Button (Quick WhatsApp Direct) */}
      <aside aria-label="Ações rápidas flutuantes" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Edit Button shortcut */}
        <button
          onClick={() => setIsEditorDrawerOpen(true)}
          className="pointer-events-auto px-4 py-2 rounded-full bg-[#1e2027]/90 hover:bg-[#282a35] text-gray-300 hover:text-white border border-[#343644] text-xs font-medium shadow-xl backdrop-blur-md flex items-center gap-2 transition-all hover:scale-105"
          title="Editar textos e telefones da página"
        >
          <Edit3 className="w-3.5 h-3.5 text-orange-400" />
          <span>Editar Página</span>
        </button>

        {/* Floating WhatsApp Direct */}
        <a
          href={`https://wa.me/${data.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de falar sobre a assistência técnica da MINAC Equipamentos.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto group p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-medium text-sm shadow-xl shadow-emerald-950/40 flex items-center gap-2.5 transition-all transform hover:scale-105"
          title="Fale conosco pelo WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">WhatsApp Direto</span>
        </a>
      </aside>

      {/* Modals and Drawers */}
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

      <LiveEditorDrawer
        isOpen={isEditorDrawerOpen}
        onClose={() => setIsEditorDrawerOpen(false)}
        data={data}
        onSave={handleSaveData}
        onReset={handleResetToDefault}
        isDirectEditActive={isEditMode}
        onToggleDirectEdit={() => setIsEditMode(!isEditMode)}
      />

      {/* Toast Notification */}
      {showSaveToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#16171f] border border-orange-500/50 text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Configurações restauradas com sucesso!</span>
        </div>
      )}

    </div>
  );
}

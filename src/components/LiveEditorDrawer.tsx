import React, { useState } from 'react';
import { X, Save, RotateCcw, Copy, Check, Sliders, Type, Phone, Eye, Sparkles } from 'lucide-react';
import { LandingPageData, DEFAULT_LANDING_DATA } from '../types/landing';

interface LiveEditorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: LandingPageData;
  onSave: (newData: LandingPageData) => void;
  onReset: () => void;
  isDirectEditActive: boolean;
  onToggleDirectEdit: () => void;
}

export const LiveEditorDrawer: React.FC<LiveEditorDrawerProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
  onReset,
  isDirectEditActive,
  onToggleDirectEdit,
}) => {
  const [formData, setFormData] = useState<LandingPageData>(data);
  const [copied, setCopied] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);
  const [activeTab, setActiveTab] = useState<'textos' | 'contatos' | 'servicos'>('textos');

  if (!isOpen) return null;

  const handleChange = (field: keyof LandingPageData, value: any) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    onSave(updated);
  };

  const handleFeatureChange = (index: number, key: string, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = { ...newFeatures[index], [key]: value };
    handleChange('features', newFeatures);
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveAndNotify = () => {
    onSave(formData);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  const handleResetConfirm = () => {
    if (window.confirm('Deseja restaurar todos os textos e contatos para o padrão original da imagem?')) {
      onReset();
      setFormData(DEFAULT_LANDING_DATA);
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-[#121317] border-l border-[#272832] shadow-2xl flex flex-col animate-slideLeft text-sm">
      
      {/* Header */}
      <div className="p-5 border-b border-[#202128] bg-[#15161c] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center">
            <Sliders className="w-4 h-4 text-orange-400" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base font-brand">Editor da Landing Page</h3>
            <p className="text-[11px] text-gray-400">Edite textos, contatos e itens em tempo real</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Direct on-page edit switch banner */}
      <div className="px-5 py-3 bg-[#181920] border-b border-[#23242c] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-orange-400" />
          <span className="text-xs text-gray-300">Modo de Edição Direta na Tela:</span>
        </div>
        <button
          onClick={onToggleDirectEdit}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            isDirectEditActive
              ? 'bg-amber-500 text-black font-semibold'
              : 'bg-[#252630] text-gray-400 hover:text-white'
          }`}
        >
          {isDirectEditActive ? 'Ligado' : 'Desligado'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#202128] bg-[#101115]">
        <button
          onClick={() => setActiveTab('textos')}
          className={`flex-1 py-3 text-xs font-medium border-b-2 transition-colors ${
            activeTab === 'textos'
              ? 'border-orange-500 text-white bg-[#15161d]'
              : 'border-transparent text-gray-400 hover:text-gray-200'
          }`}
        >
          Textos Principais
        </button>
        <button
          onClick={() => setActiveTab('contatos')}
          className={`flex-1 py-3 text-xs font-medium border-b-2 transition-colors ${
            activeTab === 'contatos'
              ? 'border-orange-500 text-white bg-[#15161d]'
              : 'border-transparent text-gray-400 hover:text-gray-200'
          }`}
        >
          Contatos e Links
        </button>
        <button
          onClick={() => setActiveTab('servicos')}
          className={`flex-1 py-3 text-xs font-medium border-b-2 transition-colors ${
            activeTab === 'servicos'
              ? 'border-orange-500 text-white bg-[#15161d]'
              : 'border-transparent text-gray-400 hover:text-gray-200'
          }`}
        >
          4 Destaques
        </button>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        {activeTab === 'textos' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Nome da Marca
              </label>
              <input
                type="text"
                value={formData.brandName}
                onChange={(e) => handleChange('brandName', e.target.value)}
                className="w-full bg-[#181920] border border-[#2b2c35] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Subtítulo da Marca
              </label>
              <input
                type="text"
                value={formData.brandSubtitle}
                onChange={(e) => handleChange('brandSubtitle', e.target.value)}
                className="w-full bg-[#181920] border border-[#2b2c35] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Subtítulo do Topo (Kicker)
              </label>
              <input
                type="text"
                value={formData.kicker}
                onChange={(e) => handleChange('kicker', e.target.value)}
                className="w-full bg-[#181920] border border-[#2b2c35] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Título Principal do Hero (H1)
              </label>
              <textarea
                rows={3}
                value={formData.heroTitle}
                onChange={(e) => handleChange('heroTitle', e.target.value)}
                className="w-full bg-[#181920] border border-[#2b2c35] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Descrição do Hero
              </label>
              <textarea
                rows={2}
                value={formData.heroDescription}
                onChange={(e) => handleChange('heroDescription', e.target.value)}
                className="w-full bg-[#181920] border border-[#2b2c35] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Texto do Botão de Orçamento
              </label>
              <input
                type="text"
                value={formData.heroCtaText}
                onChange={(e) => handleChange('heroCtaText', e.target.value)}
                className="w-full bg-[#181920] border border-[#2b2c35] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
              />
            </div>

            <div className="pt-2 border-t border-[#22232c]">
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Título Seção Equipe
              </label>
              <input
                type="text"
                value={formData.teamSection.title}
                onChange={(e) =>
                  handleChange('teamSection', { ...formData.teamSection, title: e.target.value })
                }
                className="w-full bg-[#181920] border border-[#2b2c35] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Descrição Seção Equipe
              </label>
              <textarea
                rows={2}
                value={formData.teamSection.description}
                onChange={(e) =>
                  handleChange('teamSection', {
                    ...formData.teamSection,
                    description: e.target.value,
                  })
                }
                className="w-full bg-[#181920] border border-[#2b2c35] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
              />
            </div>
          </div>
        )}

        {activeTab === 'contatos' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Telefone Exibido (Header e Rodapé)
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="Ex: 11 98446-8467"
                className="w-full bg-[#181920] border border-[#2b2c35] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Número WhatsApp (Sem traços, com DDI + DDD)
              </label>
              <input
                type="text"
                value={formData.phoneRaw}
                onChange={(e) => handleChange('phoneRaw', e.target.value)}
                placeholder="Ex: 5511984468467"
                className="w-full bg-[#181920] border border-[#2b2c35] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Endereço Web (Website)
              </label>
              <input
                type="text"
                value={formData.website}
                onChange={(e) => handleChange('website', e.target.value)}
                placeholder="www.minac.com.br"
                className="w-full bg-[#181920] border border-[#2b2c35] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                E-mail para Orçamentos
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="contato@minac.com.br"
                className="w-full bg-[#181920] border border-[#2b2c35] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                @ Redes Sociais (Instagram, etc)
              </label>
              <input
                type="text"
                value={formData.socialHandle}
                onChange={(e) => handleChange('socialHandle', e.target.value)}
                placeholder="@minacequipamentos"
                className="w-full bg-[#181920] border border-[#2b2c35] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Razão Social / Rodapé Legal
              </label>
              <input
                type="text"
                value={formData.companyLegal}
                onChange={(e) => handleChange('companyLegal', e.target.value)}
                placeholder="MINAC Equipamentos | Soluções em Equipamentos e Saúde Ltda."
                className="w-full bg-[#181920] border border-[#2b2c35] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
              />
            </div>
          </div>
        )}

        {activeTab === 'servicos' && (
          <div className="space-y-4">
            <p className="text-xs text-gray-400">
              Edite os 4 itens da barra de destaques horizontal:
            </p>
            {formData.features.map((feat, idx) => (
              <div
                key={feat.id}
                className="p-3 rounded-xl bg-[#181920] border border-[#272832] space-y-2"
              >
                <div className="text-[11px] font-semibold text-orange-400 uppercase">
                  Item #{idx + 1}
                </div>
                <div>
                  <label className="block text-[11px] text-gray-400">Título</label>
                  <input
                    type="text"
                    value={feat.title}
                    onChange={(e) => handleFeatureChange(idx, 'title', e.target.value)}
                    className="w-full bg-[#121317] border border-[#30313c] rounded px-2.5 py-1 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-400">Subtítulo</label>
                  <input
                    type="text"
                    value={feat.subtitle}
                    onChange={(e) => handleFeatureChange(idx, 'subtitle', e.target.value)}
                    className="w-full bg-[#121317] border border-[#30313c] rounded px-2.5 py-1 text-gray-300 text-xs"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t border-[#202128] bg-[#15161c] space-y-2">
        <div className="flex items-center gap-2">
          <button
            onClick={handleSaveAndNotify}
            className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-sm"
          >
            {savedNotice ? <Check className="w-4 h-4 text-emerald-300" /> : <Save className="w-4 h-4" />}
            <span>{savedNotice ? 'Salvo no Navegador!' : 'Salvar Alterações'}</span>
          </button>
          <button
            onClick={handleCopyJSON}
            title="Copiar dados como JSON"
            className="p-2.5 rounded-full bg-[#20212b] hover:bg-[#2c2d3b] text-gray-300 text-xs flex items-center justify-center"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        <button
          onClick={handleResetConfirm}
          className="w-full py-2 text-[11px] text-gray-400 hover:text-orange-400 flex items-center justify-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Restaurar layout e dados originais da imagem</span>
        </button>
      </div>

    </div>
  );
};

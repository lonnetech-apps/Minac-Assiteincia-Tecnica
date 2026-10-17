import React from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Settings, Wrench, UserCheck } from 'lucide-react';
import { FeatureItem } from '../types/landing';

interface ServiceDetailModalProps {
  feature: FeatureItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  feature,
  onClose,
  onOpenQuote,
}) => {
  if (!feature) return null;

  const renderIcon = () => {
    switch (feature.icon) {
      case 'shield':
        return <ShieldCheck className="w-6 h-6 text-orange-400" />;
      case 'cog':
        return <Settings className="w-6 h-6 text-orange-400" />;
      case 'wrench':
        return <Wrench className="w-6 h-6 text-orange-400" />;
      case 'user':
      default:
        return <UserCheck className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#121317] border border-[#2b2c34] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#202128] flex items-center justify-between bg-[#15161c]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center">
              {renderIcon()}
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-brand">{feature.title}</h3>
              <p className="text-xs text-orange-400/90 font-medium">{feature.subtitle}</p>
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
        <div className="p-6 space-y-4 text-sm">
          <p className="text-gray-300 leading-relaxed">
            {feature.description}
          </p>

          {feature.details && feature.details.length > 0 && (
            <div className="p-4 rounded-xl bg-[#171820] border border-[#262730] space-y-2.5">
              <div className="text-xs font-semibold text-gray-200 uppercase tracking-wider">
                O que está incluso:
              </div>
              <ul className="space-y-2">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-md shadow-orange-950/40 transition-all"
            >
              <span>Solicitar Orçamento para este Serviço</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { ShieldCheck, Settings, Wrench, UserCheck, ChevronRight } from 'lucide-react';
import { FeatureItem } from '../types/landing';

interface FeatureBarProps {
  features: FeatureItem[];
  isEditMode: boolean;
  onSelectFeature: (feature: FeatureItem) => void;
  onUpdateFeature: (index: number, title: string, subtitle: string) => void;
}

export const FeatureBar: React.FC<FeatureBarProps> = ({
  features,
  isEditMode,
  onSelectFeature,
  onUpdateFeature,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 text-[#ea580c] shrink-0" strokeWidth={1.8} />;
      case 'cog':
        return <Settings className="w-8 h-8 sm:w-9 sm:h-9 text-[#ea580c] shrink-0" strokeWidth={1.8} />;
      case 'wrench':
        return <Wrench className="w-8 h-8 sm:w-9 sm:h-9 text-[#ea580c] shrink-0" strokeWidth={1.8} />;
      case 'user':
      default:
        return <UserCheck className="w-8 h-8 sm:w-9 sm:h-9 text-[#ea580c] shrink-0" strokeWidth={1.8} />;
    }
  };

  return (
    <section id="servicos" className="w-full bg-[#0d0e11] border-y border-[#26272e] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#222329]">
          
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              onClick={() => !isEditMode && onSelectFeature(feature)}
              className={`p-4 sm:p-5 flex items-center gap-4 transition-all duration-200 group ${
                isEditMode ? 'cursor-default' : 'cursor-pointer hover:bg-white/[0.02]'
              }`}
            >
              {/* Icon in warm vibrant orange */}
              <div className="p-1 rounded-xl bg-orange-500/5 group-hover:bg-orange-500/10 group-hover:scale-105 transition-all">
                {getIcon(feature.icon)}
              </div>

              {/* Text: Title + Subtitle */}
              <div className="flex-1 min-w-0">
                {isEditMode ? (
                  <div className="space-y-1">
                    <input
                      type="text"
                      value={feature.title}
                      onChange={(e) => onUpdateFeature(idx, e.target.value, feature.subtitle)}
                      className="bg-black/60 border border-orange-500/40 rounded px-2 py-0.5 text-xs text-white font-medium w-full"
                      placeholder="Título"
                    />
                    <input
                      type="text"
                      value={feature.subtitle}
                      onChange={(e) => onUpdateFeature(idx, feature.title, e.target.value)}
                      className="bg-black/60 border border-orange-500/40 rounded px-2 py-0.5 text-xs text-gray-300 w-full"
                      placeholder="Subtítulo"
                    />
                  </div>
                ) : (
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white leading-snug group-hover:text-orange-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 font-normal leading-snug mt-0.5">
                      {feature.subtitle}
                    </p>
                  </div>
                )}
              </div>

              {!isEditMode && (
                <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all opacity-0 sm:group-hover:opacity-100" />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

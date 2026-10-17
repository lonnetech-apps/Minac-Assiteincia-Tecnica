import React from 'react';
import { Wrench, Shield, Check, Clock, FileText, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  const technicalProtocols = [
    {
      number: '01',
      title: 'Molas com Teste de Carga e Fadiga',
      description:
        'Aferição de tração e substituição preventiva por molas em aço carbono certificadas. Elimina ruídos, estalos e o risco de rupturas em exercícios de suspensão.',
    },
    {
      number: '02',
      title: 'Trilhos e Roldanas de Baixo Ruído',
      description:
        'Descontaminação de perfis de alumínio anodizado, alinhamento micrométrico dos eixos e lubrificação a seco com PTFE (não atrai pó e não mancha roupas).',
    },
    {
      number: '03',
      title: 'Cabos Náuticos e Mosquetões de Inox',
      description:
        'Troca de cabos de aço flexível com capa protetora de poliuretano, terminais prensados e mosquetões náuticos de alta carga de ruptura.',
    },
    {
      number: '04',
      title: 'Estruturas e Tapeçaria de Alta Densidade',
      description:
        'Reaperto de chassis de madeira maciça e perfis estruturais com torquímetro. Reforma de estofados em courvin náutico antimicrobiano 1,2mm.',
    },
  ];

  const operationalDifferences = [
    {
      title: 'Horários que respeitam a sua grade',
      description: 'Atendimento pontual aos sábados ou entre aulas para que seu estúdio não perca faturamento.',
      icon: Clock,
    },
    {
      title: 'Laudo Técnico de Conformidade',
      description: 'Emissão de relatório e checklist detalhado para respaldar a segurança do seu estúdio.',
      icon: FileText,
    },
    {
      title: 'Estoque de Peças a Pronta Entrega',
      description: 'Molas, olhais, roldanas e correias imediatas para evitar aparelhos parados aguardando fábrica.',
      icon: Wrench,
    },
    {
      title: 'Garantia Formal de 90 Dias',
      description: 'Termo de garantia para todos os componentes substituídos e serviços mecânicos executados.',
      icon: Shield,
    },
  ];



  return (
    <section id="sobre" className="w-full bg-[#0a0b0e] py-16 lg:py-24 border-b border-[#1f2026] scroll-mt-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ff4d00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-[#ff4d00] uppercase font-mono">
            <span>SOBRE A MINAC</span>
            <span className="w-8 h-[1px] bg-[#ff4d00]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-[1.18] font-brand">
            Assistência técnica especializada para estúdios que não podem parar
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed pt-1">
            Com mais de uma década de experiência no setor biomecânico, a <strong>MINAC Equipamentos</strong> realiza diagnósticos rigorosos e manutenções programadas em Pilates clássico, contemporâneo e maquinário fitness. Nosso foco é proteger a integridade dos seus alunos e garantir o movimento silencioso de cada aparelho.
          </p>
        </div>

        {/* 2-Column Technical Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-12 items-start">
          
          {/* Left Column: Technical Checklist (Numbered Protocol) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-semibold tracking-wider text-gray-400 uppercase pb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1f6836]" />
              <span>Protocolo de Revisão Técnica Preventiva</span>
            </div>

            <div className="divide-y divide-[#1d1e24] border-y border-[#1d1e24]">
              {technicalProtocols.map((protocol) => (
                <div key={protocol.number} className="py-4 sm:py-5 flex items-start gap-4 sm:gap-6 group">
                  <span className="text-lg font-mono font-bold text-gray-500 group-hover:text-[#ff4d00] transition-colors shrink-0 pt-0.5">
                    {protocol.number}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-white group-hover:text-[#ff4d00] transition-colors">
                      {protocol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                      {protocol.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Operational Standards & Trust */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold tracking-wider text-gray-400 uppercase pb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff4d00]" />
              <span>Diferenciais de Atendimento</span>
            </div>

            <div className="space-y-3.5">
              {operationalDifferences.map((diff, index) => {
                const Icon = diff.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-[#111217] border border-[#202129] flex items-start gap-3.5 transition-colors hover:border-[#30323e]"
                  >
                    <div className="p-2 rounded-lg bg-[#181920] text-[#ff4d00] shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-semibold text-white">{diff.title}</h4>
                      <p className="text-xs text-gray-300 leading-relaxed font-normal">{diff.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct action quote prompt */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#15161d] to-[#0f1015] border border-[#ff4d00]/30 space-y-3">
              <div className="text-xs font-semibold text-white">
                Precisa de revisão nos aparelhos do seu estúdio?
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Envie a lista de equipamentos para receber a estimativa técnica de revisão sem custo.
              </p>
              <button
                onClick={onOpenQuote}
                className="w-full py-2.5 rounded-full bg-[#ff4d00] hover:bg-[#ea4400] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Solicitar diagnóstico técnico</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>



      </div>
    </section>
  );
};

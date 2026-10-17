export interface FeatureItem {
  id: string;
  icon: 'shield' | 'cog' | 'wrench' | 'user';
  title: string;
  subtitle: string;
  description: string;
  details?: string[];
}

export interface LandingPageData {
  brandName: string;
  brandSubtitle: string;
  kicker: string;
  heroTitle: string;
  heroDescription: string;
  heroCtaText: string;
  headerCtaText: string;
  phone: string;
  phoneRaw: string;
  website: string;
  email: string;
  socialHandle: string;
  companyLegal: string;
  features: FeatureItem[];
  teamSection: {
    title: string;
    description: string;
    ctaText: string;
    stats: { label: string; value: string }[];
  };
}

export const DEFAULT_LANDING_DATA: LandingPageData = {
  brandName: 'MINAC',
  brandSubtitle: 'Equipamentos',
  kicker: 'ASSISTÊNCIA TÉCNICA',
  heroTitle: 'Manutenção de\nEquipamentos de\nPilates e Fitness',
  heroDescription: 'Segurança, desempenho e vida útil prolongada para o seu equipamento.',
  heroCtaText: 'Solicitar orçamento',
  headerCtaText: 'Fale Conosco',
  phone: '11 98446-8467',
  phoneRaw: '5511984468467',
  website: 'www.minac.com.br',
  email: 'contato@minac.com.br',
  socialHandle: '@minacequipamentos',
  companyLegal: 'MINAC Equipamentos | Soluções em Equipamentos e Saúde Ltda.',
  features: [
    {
      id: 'prev_corr',
      icon: 'shield',
      title: 'Manutenção',
      subtitle: 'preventiva e corretiva',
      description: 'Prevenção de acidentes, substituição preventiva de itens de desgaste e reparos corretivos urgentes com diagnóstico preciso.',
      details: [
        'Checklist de 38 itens críticos de segurança',
        'Calibração de tensão e teste de fadiga de molas',
        'Alinhamento e nivelamento de trilhos e carrinhos',
        'Emissão de laudo técnico de conformidade para o seu estúdio'
      ]
    },
    {
      id: 'equipamentos',
      icon: 'cog',
      title: 'Equipamentos',
      subtitle: 'de Pilates e Fitness',
      description: 'Atendimento multimarca especializado em toda a linha de Pilates clássico e contemporâneo, além de aparelhos de musculação e cardio.',
      details: [
        'Pilates: Reformer, Cadillac, Combo Chair, Ladder Barrel, Step Chair',
        'Fitness: Esteiras ergométricas profissionais, bikes de spinning, elípticos',
        'Musculação: Torres de placas, cabos náuticos de aço, polias e bancos articulados',
        'Compatibilidade com marcas nacionais e importadas'
      ]
    },
    {
      id: 'pecas',
      icon: 'wrench',
      title: 'Peças e acessórios',
      subtitle: 'originais e de alta qualidade',
      description: 'Componentes certificados para garantir o máximo em durabilidade, silêncio no movimento e total segurança dos alunos e instrutores.',
      details: [
        'Molas em aço carbono com tratamento anticorrosivo e teste de carga',
        'Cabos náuticos de alta resistência com alma de aço e capa protetora',
        'Roldanas blindadas de alta fluidez e baixo atrito',
        'Courvin náutico antimicrobiano e espumas de alta densidade'
      ]
    },
    {
      id: 'equipe',
      icon: 'user',
      title: 'Equipe técnica',
      subtitle: 'especializada',
      description: 'Profissionais capacitados e certificados, equipados com ferramental específico para atendimento ágil in-loco.',
      details: [
        'Técnicos com mais de 10 anos de experiência de campo',
        'Treinamento direto com fabricantes e normas de biomecânica',
        'Atendimento programado para não interromper os horários das suas aulas',
        'Garantia formal de serviços prestados e peças substituídas'
      ]
    }
  ],
  teamSection: {
    title: 'Nossa Equipe',
    description: 'Profissionais experientes e capacitados para oferecer o melhor atendimento e aumentar a vida útil do seu equipamento.',
    ctaText: 'Conheça nossa equipe',
    stats: [
      { label: 'Estúdios Atendidos', value: '+1.400' },
      { label: 'Tempo Médio Resposta', value: '< 2 horas' },
      { label: 'Anos de Mercado', value: '12 anos' },
      { label: 'Satisfação dos Clientes', value: '99.4%' }
    ]
  }
};

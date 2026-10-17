import React, { useState } from 'react';
import { X, Check, MessageSquare, Send, Calendar, ShieldCheck, Wrench, Sparkles } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneRaw: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, phoneRaw }) => {
  const [equipmentType, setEquipmentType] = useState('Pilates Reformer');
  const [serviceType, setServiceType] = useState('Manutenção Preventiva Periódica');
  const [quantity, setQuantity] = useState('1 a 3 aparelhos');
  const [name, setName] = useState('');
  const [studioName, setStudioName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const equipmentOptions = [
    'Pilates Reformer',
    'Pilates Cadillac',
    'Combo Chair / Cadeira',
    'Ladder Barrel / Step Barrel',
    'Esteiras Ergométricas',
    'Bicicletas Spinning / Elípticos',
    'Aparelhos de Musculação / Cabos',
    'Estúdio Completo (Multiequipamentos)',
  ];

  const serviceOptions = [
    'Manutenção Preventiva Periódica',
    'Manutenção Corretiva (Urgência)',
    'Troca de Molas e Cabos Náuticos',
    'Reforma de Estofamento e Courvin',
    'Alinhamento e Lubrificação de Guias',
    'Avaliação Técnica e Laudo de Segurança',
  ];

  const handleSendWhatsApp = () => {
    const text = `*Solicitação de Orçamento - MINAC Equipamentos*
👤 *Nome:* ${name || 'Não informado'}
🏢 *Estúdio/Academia:* ${studioName || 'Não informado'}
📍 *Cidade:* ${city || 'São Paulo/SP'}
📞 *Telefone:* ${phone || 'Contato WhatsApp'}
⚙️ *Equipamento:* ${equipmentType}
🔧 *Serviço Desejado:* ${serviceType}
🔢 *Quantidade:* ${quantity}
📝 *Observações:* ${notes || 'Solicito orçamento e disponibilidade técnica.'}`;

    const url = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendWhatsApp();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#121317] border border-[#2b2c34] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#202128] flex items-center justify-between bg-[#15161c]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-brand">Solicitar Orçamento Técnico</h3>
              <p className="text-xs text-gray-400">Atendimento ágil para estúdios de Pilates e academias</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Solicitação Encaminhada!</h4>
              <p className="text-gray-300 max-w-md mx-auto text-sm">
                Sua mensagem foi direcionada para a central técnica via WhatsApp. Um de nossos especialistas retornará com a proposta e disponibilidade em instantes.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-medium text-xs transition-colors"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Equipment type */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Tipo de Equipamento
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {equipmentOptions.slice(0, 4).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setEquipmentType(item)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                        equipmentType === item
                          ? 'bg-orange-600/20 border-orange-500 text-white font-medium shadow-sm'
                          : 'bg-[#18191f] border-[#27282f] text-gray-400 hover:text-white hover:border-gray-600'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                  {equipmentOptions.slice(4).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setEquipmentType(item)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                        equipmentType === item
                          ? 'bg-orange-600/20 border-orange-500 text-white font-medium shadow-sm'
                          : 'bg-[#18191f] border-[#27282f] text-gray-400 hover:text-white hover:border-gray-600'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Serviço Necessário
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-[#18191f] border border-[#2c2d36] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-orange-500"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantidade e Contato */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Dra. Mariana Costa"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#18191f] border border-[#2c2d36] rounded-xl px-3.5 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Nome do Estúdio ou Academia
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Studio Vida Pilates"
                    value={studioName}
                    onChange={(e) => setStudioName(e.target.value)}
                    className="w-full bg-[#18191f] border border-[#2c2d36] rounded-xl px-3.5 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    WhatsApp para Contato
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (11) 98765-4321"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#18191f] border border-[#2c2d36] rounded-xl px-3.5 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Cidade / Região
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: São Paulo - SP (Zona Sul)"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#18191f] border border-[#2c2d36] rounded-xl px-3.5 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Detalhes do Problema / Observações (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Mola soltando estalos, carrinho do Reformer travando no curso ou estofamento rasgado..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#18191f] border border-[#2c2d36] rounded-xl px-3.5 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#e65c00] to-[#f97316] hover:from-[#d55200] hover:to-[#ea580c] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-950/40 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitação via WhatsApp</span>
                </button>
                <p className="text-center text-[11px] text-gray-400 mt-2">
                  Atendimento direto e sem burocracia · Retorno médio em até 60 minutos
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, Sparkles, Check, DollarSign, Calendar, 
  Users, BadgePercent, Clock, HelpCircle 
} from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  price: number;
  timeWeeks: number;
}

const SERVICES: ServiceOption[] = [
  { id: 'web', name: 'Web Tasarım & Geliştirme', price: 1500, timeWeeks: 4 },
  { id: 'branding', name: 'Kurumsal Kimlik & Markalama', price: 800, timeWeeks: 2 },
  { id: 'seo', name: 'Arama Motoru Optimizasyonu (SEO)', price: 1000, timeWeeks: 3 },
  { id: 'custom3d', name: 'Özel 3D Entegrasyonları', price: 1200, timeWeeks: 3 }
];

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['web']);
  const [budget, setBudget] = useState<number>(3500);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [msg, setMsg] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  // Live Quote calculations
  const calculateEstimate = () => {
    let totalPrice = 0;
    let totalTime = 0;

    selectedServices.forEach(srvId => {
      const match = SERVICES.find(s => s.id === srvId);
      if (match) {
        totalPrice += match.price;
        totalTime = Math.max(totalTime, match.timeWeeks); // complex processes run parallel
      }
    });

    // Add extra buffer if there are multiple services
    if (selectedServices.length > 1) {
      totalTime += Math.round(selectedServices.length * 0.5);
    }

    return {
      price: totalPrice === 0 ? 0 : totalPrice,
      time: totalTime === 0 ? 0 : totalTime,
      teamSize: selectedServices.length <= 1 ? 2 : selectedServices.length === 2 ? 3 : 4
    };
  };

  const { price, time, teamSize } = calculateEstimate();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMsg('');
    setSelectedServices(['web']);
    setBudget(3500);
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative w-full px-4 md:px-8 border-t border-stone-200 bg-[#F4EFEA]/20">
      
      {/* Background Decorative Element */}
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/60 border border-stone-300 text-stone-700 text-xs font-mono">
            <Send className="w-3.5 h-3.5 text-indigo-600" />
            <span>Fiyat Alın & İletişime Geçin</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-stone-900">
            Hayalinizdeki Projeyi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600">
              Birlikte Başlatalım.
            </span>
          </h2>
          <p className="text-stone-600 text-sm md:text-base font-sans font-light">
            Aşağıdaki akıllı hesaplayıcıyı kullanarak projenizin ihtiyaçlarını seçin, bütçenizi ayarlayın ve anında bir teslimat & fiyat projeksiyonu elde edin.
          </p>
        </div>

        {/* Form & Calculator Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Grid: The Interactive Calculator & Form (7 columns) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-stone-200 p-6 md:p-8 space-y-8 relative overflow-hidden shadow-xl shadow-stone-200/30">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600" />
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-600 mb-2">
                    <Check className="w-8 h-8 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-stone-900">Talep Alındı!</h3>
                  <p className="text-stone-700 text-xs md:text-sm max-w-md">
                    Sevgili <span className="font-bold text-stone-900">{name}</span>, projenizin tahmini özellikleri sistemimize kaydedildi. 
                    Müşteri danışmanlarımız <span className="font-bold text-indigo-600">{email}</span> adresi üzerinden en geç 4 saat içinde detaylı bir teklifle size dönüş yapacaktır.
                  </p>

                  {/* Summary receipt box */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 w-full max-w-sm text-left text-xs font-mono text-stone-650 space-y-2 mt-4">
                    <p className="text-stone-500">// PROJE ÖZETİNİZ</p>
                    <p className="flex justify-between"><span>Hizmet Sayısı:</span> <span className="text-stone-950 font-semibold">{selectedServices.length} Adet</span></p>
                    <p className="flex justify-between"><span>Tahmini Fiyat:</span> <span className="text-emerald-600 font-bold">€{price}</span></p>
                    <p className="flex justify-between"><span>Teslim Süresi:</span> <span className="text-indigo-600 font-semibold">{time} Hafta</span></p>
                    <p className="flex justify-between"><span>Ayrılan Bütçe:</span> <span className="text-amber-650 font-semibold">€{budget}</span></p>
                  </div>

                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl bg-stone-100 border border-stone-200 hover:border-stone-300 text-stone-700 hover:text-stone-900 text-xs font-mono transition-colors cursor-pointer"
                    id="btn-form-reset"
                  >
                    Yeni Bir Teklif Alın
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleFormSubmit}
                  className="space-y-6 text-left"
                >
                  {/* Service selections */}
                  <div className="space-y-3">
                    <p className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest">1. Hizmetleri Seçin</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SERVICES.map(srv => {
                        const isChecked = selectedServices.includes(srv.id);
                        return (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => toggleService(srv.id)}
                            className={`p-4 rounded-xl border text-left flex justify-between items-center transition-all cursor-pointer ${isChecked ? 'bg-indigo-50 border-indigo-600 text-stone-900 shadow-sm' : 'bg-stone-50 border-stone-200 text-stone-650 hover:border-stone-305'}`}
                            id={`contact-service-toggle-${srv.id}`}
                          >
                            <div className="space-y-1">
                              <p className="text-xs font-semibold">{srv.name}</p>
                              <p className="text-[10px] font-mono text-stone-500">Tahmini: €{srv.price} • {srv.timeWeeks} Hafta</p>
                            </div>
                            <div className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${isChecked ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-stone-300 bg-white'}`}>
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Slider */}
                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between items-center">
                      <p className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest">2. Maksimum Bütçe Sürgüsü</p>
                      <span className="text-sm font-mono font-bold text-amber-600">€{budget.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range"
                      min="1000"
                      max="20000"
                      step="500"
                      value={budget}
                      onChange={(e) => setBudget(parseInt(e.target.value))}
                      className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                      id="input-contact-budget-range"
                    />
                    <div className="flex justify-between text-[9px] font-mono text-stone-500">
                      <span>€1.000</span>
                      <span>€10.000 (Standart)</span>
                      <span>€20.000+</span>
                    </div>
                  </div>

                  {/* Customer credentials input block */}
                  <div className="space-y-4 pt-2 border-t border-stone-200">
                    <p className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest">3. İletişim Bilgileri</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono text-stone-600 mb-1">Adınız ve Şirketiniz *</label>
                        <input 
                          type="text"
                          required
                          placeholder="Örn: Yiğit Eymen, BEG-Media"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-white border border-stone-200 rounded px-3 py-2 text-xs text-stone-900 outline-none focus:border-indigo-600"
                          id="input-contact-name"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-stone-600 mb-1">E-Posta Adresiniz *</label>
                        <input 
                          type="email"
                          required
                          placeholder="yigit@beg-media.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white border border-stone-200 rounded px-3 py-2 text-xs text-stone-900 outline-none focus:border-indigo-600"
                          id="input-contact-email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-stone-600 mb-1">Proje Detayları & Ek Notlar (Tercihen)</label>
                      <textarea 
                        rows={3}
                        placeholder="Ekibimize iletmek istediğiniz özel bir tasarım notu veya detay..."
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        className="w-full bg-white border border-stone-200 rounded px-3 py-2 text-xs text-stone-900 outline-none focus:border-indigo-600 resize-none"
                        id="input-contact-msg"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || selectedServices.length === 0}
                    className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-stone-100 disabled:text-stone-400 text-white font-bold text-xs font-mono transition-all duration-300 shadow-lg shadow-indigo-600/10 flex items-center justify-center gap-2 cursor-pointer"
                    id="btn-contact-submit"
                  >
                    <span>{isSubmitting ? 'Talebiniz Alınıyor...' : 'Akıllı Teklif Talebini Gönder'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Grid: Live Projection Panel (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Estimator Dashboard widget */}
            <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200 relative overflow-hidden text-left space-y-6 shadow-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 blur-2xl pointer-events-none" />
              
              <div>
                <p className="text-[10px] font-mono text-indigo-600 uppercase tracking-widest">ANLIK PROJEKSİYON</p>
                <h3 className="text-lg font-display font-bold text-stone-900 mt-1">Canlı Maliyet & Süre Tahmini</h3>
              </div>

              {selectedServices.length === 0 ? (
                <div className="py-6 text-center text-stone-500 text-xs italic">
                  Tahminleri görmek için lütfen sol panelden en az bir hizmet seçin.
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Metric 1: Budget Match warning indicator */}
                  <div className="p-4 rounded-xl bg-white border border-stone-200 flex justify-between items-center shadow-sm">
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono text-stone-500 uppercase">Tahmini Toplam Tutar</p>
                      <p className="text-xl font-display font-bold text-emerald-600">€{price}</p>
                    </div>
                    {budget >= price ? (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-300 text-[9px] font-mono text-emerald-750 uppercase font-bold">
                        Bütçe Uygun
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-300 text-[9px] font-mono text-amber-700 uppercase font-bold" title="Bütçenizi teklif fiyatına göre artırmanızı önerebiliriz.">
                        Esnek Görüşme
                      </span>
                    )}
                  </div>

                  {/* Grid metrics */}
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1 shadow-sm">
                      <Clock className="w-4 h-4 text-indigo-600" />
                      <p className="text-[9px] text-stone-500 uppercase">Teslimat Süresi</p>
                      <p className="text-sm font-semibold text-stone-900">{time} Hafta</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1 shadow-sm">
                      <Users className="w-4 h-4 text-pink-600" />
                      <p className="text-[9px] text-stone-500 uppercase">Uzman Kadro</p>
                      <p className="text-sm font-semibold text-stone-900">{teamSize} Kişilik Ekip</p>
                    </div>
                  </div>

                  {/* Value highlights */}
                  <div className="space-y-2 pt-2 text-[10px] text-stone-650 font-sans">
                    <p className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-indigo-600" /> İlk taslak teslimatı 7 iş günü içinde yapılır.
                    </p>
                    <p className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-indigo-600" /> Sınırsız revizyon ve canlı iletişim kanalı dahildir.
                    </p>
                    <p className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-indigo-600" /> Yayınlama sonrasında 6 ay ücretsiz teknik bakım garantisi.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Support micro info */}
            <div className="p-4 rounded-2xl bg-white border border-stone-200 text-left flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-semibold text-stone-900">Sorunuz mu var?</h4>
                <p className="text-[10px] text-stone-500 font-mono leading-tight">
                  Her zaman buradayız: <span className="text-indigo-600">hello@beg-media.com</span>
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
